import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/Rick_and_Morty.png";

import { items } from "../../lib/AppSidebarIndex";

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="p-4 gap-4">
          <SidebarHeader className="p-0 gap-4">
            <div className="flex gap-2 items-center px-2">
              <img src={logo} alt="Logo" className="w-full" />
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  location.pathname == item.url ||
                  (item.subItems &&
                    item.subItems.some((subItem) =>
                      location.pathname.includes(subItem.url)
                    ));
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={isActive} asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
