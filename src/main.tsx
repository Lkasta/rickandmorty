import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx';
import Characters from './routes/Characters/Characters.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import Home from './routes/Home.tsx';
import CharacterDetail from './routes/CharacterDetail/CharacterDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/characters/:pageIndex?",
        element: <Characters />
      },
      {
        path: "/character/:characterId",
        element: <CharacterDetail />
      },
      {
        path: "/home",
        element: <Home />
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
