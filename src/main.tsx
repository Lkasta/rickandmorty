import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";
import CharacterDetail from "./routes/Characters/CharacterDetail.tsx";
import Characters from "./routes/Characters/Characters.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Home from "./routes/Home.tsx";
import CharactersTable from "./routes/Characters/CharactersTable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters/:pageIndex?",
        element: <Characters />,
      },
      {
        path: "/character/:characterId",
        element: <CharacterDetail />,
      },
      {
        path: "/table/",
        element: <CharactersTable />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
