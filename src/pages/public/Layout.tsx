import { AppSidebar } from '@/widgets/AppSidebar';
import { Header } from '@/widgets/Header';
import { SidebarProvider } from '@/shared/ui/sidebar.tsx';
import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
