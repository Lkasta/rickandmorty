import './App.css'
import { ThemeProvider } from "@/components/theme-provider"


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=''>
        <h1>Jonas</h1>
      </div>
    </ThemeProvider>

  )
}

export default App
