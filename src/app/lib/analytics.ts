// Wrapper pour les services d'analytics (Google Analytics, Sentry, etc.)

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

class AnalyticsService {
  private initialized = false;

  init() {
    if (this.initialized) return;

    // TODO: Initialiser Google Analytics, Sentry, etc.
    console.log('Analytics initialized');

    this.initialized = true;
  }

  track(event: AnalyticsEvent) {
    if (!this.initialized) return;

    // TODO: Envoyer l'événement aux différents services
    console.log('Tracking event:', event);
  }

  trackPageView(page: string) {
    this.track({
      name: 'page_view',
      properties: { page },
    });
  }

  trackError(error: Error, context?: Record<string, any>) {
    this.track({
      name: 'error',
      properties: {
        message: error.message,
        stack: error.stack,
        ...context,
      },
    });
  }
}

export const analytics = new AnalyticsService();
