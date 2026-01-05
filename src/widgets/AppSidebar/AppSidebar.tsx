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

/**
 * AppSidebar Component - Sidebar principale de l'application
 *
 * Modes:
 * - Expanded: Affiche tous les textes et détails (16rem)
 * - Collapsed: Affiche uniquement les icônes avec tooltips (3rem)
 * - Mobile: Sheet overlay
 *
 * @component
 */
export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
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
