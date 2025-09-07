import { CharachterProps } from "@/types/characters";

interface StatusSize {
  size: "sm" | "md" | "lg";
  styleSize: {
    fontSize: string;
    iconSize: string;
  };
}

export default function CharacterStatus({
  status,
  size,
}: CharachterProps & { size: StatusSize["size"] }) {
  const statusColor =
    status === "Alive"
      ? "bg-emerald-400 animation-pulse"
      : status === "Dead"
      ? "bg-red-400"
      : "bg-gray-400";

  const title =
    status === "Alive"
      ? "Vivo"
      : status === "Dead"
      ? "Morto"
      : "Não Especificado";

  const styleSize =
    size === "sm"
      ? { fontSize: "text-sm", iconSize: "w-2 h-2" }
      : size === "md"
      ? { fontSize: "text-lg", iconSize: "w-3 h-3" }
      : { fontSize: "text-xl", iconSize: "w-3 h-3" };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`rounded-full inline-block ${statusColor} ${styleSize.iconSize}`}
      />
      <span
        className={`truncate capitalize text-zinc-400 ${styleSize.fontSize}`}
      >
        {title}
      </span>
    </div>
  );
}
