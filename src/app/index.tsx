import React from 'react';
import { App } from './App';
import { Providers } from './providers';
import { analytics } from './lib/analytics';

// Initialiser les services globaux
analytics.init();

export const AppRoot: React.FC = () => {
  return (
    <Providers>
      <App />
    </Providers>
  );
};
