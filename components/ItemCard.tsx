import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { cn } from "@/lib/utils";
import { ItemInterface } from "@/common.types";

export function ItemCardk({ userAvatarUrl, item } : { userAvatarUrl: string, item: ItemInterface }) {
  return (
    <div className={cn("space-y-3")}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={item.thumbnailUrl}
          alt={item.name}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
          )}
        />
      </div>
      <div className="flex flex-row gap-3">
        <Avatar>
          <AvatarImage src={userAvatarUrl} />
          <AvatarFallback>^O^</AvatarFallback>
        </Avatar>
        <h3 className="font-medium leading-none">{item.name}</h3>
      </div>
    </div>
  );
}
