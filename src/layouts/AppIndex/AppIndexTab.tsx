import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LinkTabProps {
  title: string;
  url: string;
}

export default function AppIndexTab({ title, url }: LinkTabProps) {
  return (
    <Link
      key={title}
      to={url}
      className={`px-1 pb-2 group relative text-sm font-medium text-zinc-500 outline-none
              hover:text-emerald-700 dark:text-zinc-300
              ${
                location.pathname.includes(url) &&
                "!text-emerald-700 !font-semibold"
              }
              dark:hover:text-emerald-300 dark:data-[state=active]:text-emerald-300`}
    >
      <span
        className={`whitespace-nowrap rounded group-focus-visible:ring-2
                    group-focus-visible:ring-emerald-400 group-focus-visible:ring-offset-4`}
      >
        {title}
      </span>
      {location.pathname.includes(url) && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-emerald-700 dark:bg-emerald-300"
        />
      )}
    </Link>
  );
}
