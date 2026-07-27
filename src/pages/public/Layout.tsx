import { AppSidebar } from '@/widgets/AppSidebar';
import { Header } from '@/widgets/Header';
import { SidebarProvider } from '@/shared/ui/sidebar.tsx';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '@/widgets/Footer';
import { Suspense } from 'react';
import { RouteFallback } from '@/shared/ui/RouteFallback/RouteFallback';

function PageShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-enter">
      {children}
    </div>
  );
}

export const PublicLayout = () => {
  return (
    <SidebarProvider>
      <div className="w-full flex min-h-screen overflow-x-clip">
        <AppSidebar />

        <div className="w-full min-w-0 flex-1 flex flex-col overflow-x-clip">
          <Header />

          <main className="flex flex-1 flex-col p-0">
            <Suspense
              fallback={
                <RouteFallback className="flex-1 min-h-[calc(100svh-10rem)]" />
              }
            >
              <PageShell>
                <Outlet />
              </PageShell>
            </Suspense>
          </main>

          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};
