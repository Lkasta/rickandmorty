import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"
import icon from "../../assets/icon.svg"

import { items } from "../../lib/AppSidebarIndex"
import { Input } from "../ui/input"

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="p-4 gap-4">
          <SidebarHeader className="p-0 gap-4">
            <div className="flex gap-2 items-center">
              <img src={icon} alt="Logo" className="w-8" />
              <h1 className="font-bold">Rick and Morty</h1>
            </div>
            <Input search placeholder="Search" />

          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={(location.pathname).includes(item.url)} asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
