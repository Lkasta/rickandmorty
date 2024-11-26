import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

export const items = [
  {
    id: 1,
    title: "Home",
    url: "/home",
    icon: Home,
    subItems: [
      {
        title: "Seila",
        url: "home/"
      },
      {
        title: "Joanas",
        url: "jonas/"
      },
    ]
  },
  {
    id: 2,
    title: "Personagens",
    url: "characters/",
    icon: Inbox,
    subItems: [
      {
        id: 1,
        title: "Todos os personagens (Pags)",
        url: "characters/"
      },
      {
        id: 2,
        title: "Personagens Scroll Infinito",
        url: "scroll/"
      },
    ]
  },
  {
    id: 3,
    title: "Episódios",
    url: "#",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Locais",
    url: "#",
    icon: Search,
  },
  {
    id: 5,
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]