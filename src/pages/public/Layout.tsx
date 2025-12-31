import { AppSidebar } from '@/widgets/AppSidebar';
import { Header } from '@/widgets/Header';
import { SidebarProvider } from '@/shared/ui/sidebar.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/Footer';

export const PublicLayout = () => {
  return (
    <SidebarProvider>
      <div className="w-full flex min-h-screen">
        <AppSidebar />

        <div className="w-full flex-1 flex flex-col">
          <Header />

          <main className="flex-1 p-8">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};
