import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/app-sidebar"
import { SidebarProvider } from "./components/ui/sidebar"

function App() {
  return (
    <div className="flex w-[100vw]">
      <div className="">
        <SidebarProvider >
          <AppSidebar />
        </SidebarProvider>
      </div>
      <div id="detail" className="flex m-5 border w-full h-[96vh] rounded-lg">
        <Outlet />
      </div>

    </div>
  )
}

export default App
