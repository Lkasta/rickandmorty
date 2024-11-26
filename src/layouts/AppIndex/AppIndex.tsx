import { useLocation } from "react-router-dom";
import { items } from "../../lib/AppSidebarIndex";
import AppIndexTab from "./AppIndexTab";

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
                    <AppIndexTab title={subItem.title} url={subItem.url} />
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
