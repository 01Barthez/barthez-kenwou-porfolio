import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/shared/ui/sidebar";
import { SidebarHeaderSection } from "./SidebarCompoments/SidebarHeader";
import { SidebarContentSection } from "./SidebarCompoments/SidebarContent";
import { SidebarFooterSection } from "./SidebarCompoments/SidebarFooter";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* Sidebar Header Content */}
        <SidebarHeaderSection />
      </SidebarHeader>

      <SidebarContent>
        {/* Sidebar Group Content */}
        <SidebarGroup>
          <SidebarContentSection />
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter >
        {/* Sidebar Footer Content */}
        <SidebarFooterSection />
      </SidebarFooter>
    </Sidebar>
  )
}
