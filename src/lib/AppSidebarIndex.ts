import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"


export const items = [
  {
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

    title: "Personagens",
    url: "characters/",
    icon: Inbox,
    subItems: [
      {
        title: "Todos os Personagens",
        url: "characters/"
      },
      {
        title: "Jonas",
        url: "jonas/"
      },
    ]
  },
  {
    title: "Episódios",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Locais",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]