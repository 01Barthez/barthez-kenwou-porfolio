import React, { Component } from 'react';
import { analytics } from './analytics';
import InternalErrorPage from '@/pages/public/Errors/InternalErrorPage';
import { reportError } from './errorReporter';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  /** callback when an error is caught */
  onError?: (error: Error, info?: React.ErrorInfo, errorId?: string) => void;
  /** whether to show a 'report' button in the error UI */
  showReport?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
  reported?: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate a short error id for cross-referencing in logs
    const errorId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    return { hasError: true, error, errorId };
  }

  async componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Centralized reporting (analytics + optional Sentry)
    try {
      await reportError(error, { componentStack: errorInfo.componentStack });
    } catch (e) {
      // swallow
    }

    try {
      analytics.trackError(error, {
        componentStack: errorInfo.componentStack,
        errorBoundary: true,
      });
    } catch (e) {
      // ignore analytics failure
    }

    console.error('ErrorBoundary caught an error:', error, errorInfo);

    if (this.props.onError) {
      this.props.onError(error, errorInfo, this.state.errorId);
    }
  }

  handleRetry = () => {
    // Reset internal boundary state to attempt re-rendering children
    this.setState({ hasError: false, error: undefined, reported: false });
  };

  handleReport = async () => {
    if (!this.state.error) return;
    try {
      await reportError(this.state.error, { context: { errorId: this.state.errorId } });
      this.setState({ reported: true });
      // also call analytics event for user report
      analytics.track('error.reported', { errorId: this.state.errorId });
    } catch (e) {
      // ignore
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <InternalErrorPage
          error={this.state.error}
          errorId={this.state.errorId}
          onRetry={this.handleRetry}
          onReport={this.props.showReport ? this.handleReport : undefined}
        />
      );
    }

    return this.props.children;
  }
}
