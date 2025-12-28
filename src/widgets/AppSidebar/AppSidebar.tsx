import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/shared/ui/sidebar.tsx';
import { SidebarHeaderSection } from './SidebarCompoments/SidebarHeader';
import { SidebarContentSection } from './SidebarCompoments/SidebarContent';
import { SidebarFooterSection } from './SidebarCompoments/SidebarFooter';

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
