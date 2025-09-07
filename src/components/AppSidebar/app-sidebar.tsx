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
import icon from "../../assets/icon.svg";

import { items } from "../../lib/AppSidebarIndex";

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="p-4 gap-4">
          <SidebarHeader className="p-0 gap-4">
            <div className="flex gap-2 items-center">
              <img src={icon} alt="Logo" className="w-8" />
              <h1 className="font-bold">Rick and Morty</h1>
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
                    <SidebarMenuButton
                      className="focus:bg-emerald-500"
                      isActive={isActive}
                      asChild
                    >
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
