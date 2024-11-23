import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/AppSidebar/app-sidebar"
import { SidebarProvider } from "./components/ui/sidebar"
import AppIndex from "./layouts/AppIndex/AppIndex"

function App() {
  return (
    <div className="flex w-[100vw] h-full">
      <SidebarProvider className="w-min">
        <AppSidebar />
      </SidebarProvider>
      <div id="detail" className="flex flex-col w-full h-full p-8">
        <AppIndex />
        <Outlet />
      </div>
    </div>
  )
}

export default App
