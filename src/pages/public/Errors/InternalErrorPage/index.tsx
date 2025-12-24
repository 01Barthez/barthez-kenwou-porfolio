import React from 'react';
import { Button } from '@/shared/ui/Button/Button.ui';

export const InternalErrorPage: React.FC<{
  error?: Error;
  errorId?: string;
  onRetry?: () => void;
  onReport?: () => void;
}> = ({ error, errorId, onRetry, onReport }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl w-full p-8 rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Erreur interne du serveur</h1>
          <p className="text-gray-700 mb-4">
            Une erreur est survenue. Nous avons été informés et travaillons dessus.
          </p>
          {error && (
            <pre className="text-xs text-left bg-gray-50 p-3 rounded mb-4 overflow-auto max-h-36">
              {error.message}
            </pre>
          )}

          {errorId && (
            <p className="text-xs text-gray-500 mb-4">Code d'erreur: <strong>{errorId}</strong></p>
          )}

          <div className="flex justify-center gap-4">
            <Button onClick={() => (onRetry ? onRetry() : window.location.reload())}>Rafraîchir</Button>
            <Button onClick={() => (window.location.href = '/')} variant="ghost">
              Retour à l'accueil
            </Button>
            {onReport && (
              <Button onClick={onReport} variant="outline">
                Signaler
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalErrorPage;
