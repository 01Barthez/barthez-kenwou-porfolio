import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/shared/ui/sidebar.tsx';
import { SidebarHeaderSection } from './AppSidebarCompoments/SidebarHeader';
import { SidebarContentSection } from './AppSidebarCompoments/SidebarContent';
import { SidebarFooterSection } from './AppSidebarCompoments/SidebarFooter';

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarHeaderSection />
      </SidebarHeader>

      {/* Sidebar Group */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarContentSection />
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <SidebarFooterSection />
      </SidebarFooter>
    </Sidebar>
  );
}
