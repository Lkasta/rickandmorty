import { CharacterProps } from "@/types/characters";
import { Link } from "react-router-dom";
import CharacterStatus from "./CharacterStatus";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CharacterCard({
  id,
  image,
  name,
  status,
}: Pick<CharacterProps, "id" | "image" | "name" | "status">) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);

    console.log(`${isLiked ? "Unliked" : "Liked"} character: ${name}`);
  };
  return (
    <Link key={id} to={`/character/${id}`} className="relative group">
      <div className="rounded w-auto h-auto overflow-hidden relative group">
        <img
          src={image}
          alt={name}
          className="group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="pt-2">
        <p className="truncate">{name}</p>
        <CharacterStatus status={status} size="sm" />
      </div>
      <Button
        variant="ghost"
        onClick={handleLike}
        className={`top-2 right-2 absolute w-min h-min bg-white p-1.5 rounded-full z-50 ${
          isLiked
            ? "opacity-100"
            : "group-hover:opacity-100 opacity-0"
        }`}
      >
        <Heart
          size={16}
          fill={isLiked ? "#f43f5e" : "#9ca3af"}
          className={`transition-colors duration-200 ${
            isLiked ? "text-rose-500" : "text-gray-400"
          }`}
        />
      </Button>
    </Link>
  );
}
