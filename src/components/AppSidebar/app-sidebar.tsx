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
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

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
            <div
              className="flex items-center h-9 w-full rounded-md border bg-transparent px-3 py-1 border-gray-300 focus-within:border-gray-500"
            >
              <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 text-zinc-500" />

              <input
                className="font-medium placeholder:font-normal bg-transparent group text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 truncate"
              />
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => {
                const isActive = location.pathname.includes(item.url) || (item.subItems && item.subItems.some(subItem => location.pathname.includes(subItem.url)));
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
  )
}