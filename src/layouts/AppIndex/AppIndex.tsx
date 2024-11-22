import { Link, useLocation } from "react-router-dom"
import { items } from "../../lib/AppSidebarIndex"
import { useEffect, useState } from "react";

export default function AppIndex() {
  const location = useLocation()
  const title = items.map((item) =>
    location.pathname.includes(item.url) ? item.title : null
  );

  const [active, setActive] = useState(false)

  useEffect(() => {
    items.map((item) => {
      item.subItems ? setActive(true) : setActive(false)
    })
  }, [location]);

  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-2xl font-medium">{title}</h1>

      {active && <div className="flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
        {items.map((item) => {
          if (item.subItems && location.pathname.includes(item.url)) {
            return item.subItems.map((subItem) => {
              return (
                <Link
                  key={subItem.title}
                  to={item.url}
                  className={`:px-1 pb-2 group relative text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 dark:text-zinc-300 ${location.pathname.includes(subItem.url) ? 'text-violet-700 !font-semibold' : null} dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300`}
                >
                  <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
                    {subItem.title}
                  </span>
                  {location.pathname.includes(subItem.url) && (
                    <div
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
                    />
                  )}
                </Link>
              )
            })
          }
          return null
        })}
      </div>}

    </div>
  )
}
