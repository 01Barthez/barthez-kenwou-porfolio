import React from 'react';
// TODO: Installer et configurer React Query
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  // TODO: Configurer QueryClient avec les options appropriées
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: 1000 * 60 * 5, // 5 minutes
  //       retry: 3,
  //     },
  //   },
  // });

  return (
    // <QueryClientProvider client={queryClient}>
    <>{children}</>
    // </QueryClientProvider>
  );
};
