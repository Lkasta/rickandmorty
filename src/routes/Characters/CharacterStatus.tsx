export default function CharacterStatus({ status }) {
  const statusColor =
    status === "Alive" ? "bg-green-400" :
      status === "Dead" ? "bg-red-400" :
        "bg-gray-400";

  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full inline-block ${statusColor}`} />
      <span className="truncate text-sm text-zinc-400 capitalize">{status}</span>
    </div>

  );
}
