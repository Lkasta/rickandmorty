import { Link, useLocation } from "react-router-dom";
import { items } from "../../lib/AppSidebarIndex";

export default function AppIndex() {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => {
        const isActive = location.pathname.includes(item.url) || (item.subItems && item.subItems.some(subItem => location.pathname.includes(subItem.url)));
        return (
          isActive && (
            <div key={item.id}>
              <h1 className="text-2xl font-medium pb-4">{item.title}</h1>

              {item.subItems && (
                <div className="flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.url}
                      className={`px-1 pb-2 group relative text-sm font-medium text-zinc-500 outline-none 
                      hover:text-violet-700 dark:text-zinc-300
                      ${location.pathname.includes(subItem.url) ? 'text-violet-700 !font-semibold' : ''}
                      dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300`}
                    >
                      <span className="whitespace-nowrap rounded group-focus-visible:ring-2
                      group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
                        {subItem.title}
                      </span>
                      {location.pathname.includes(subItem.url) && (
                        <div
                          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
}
