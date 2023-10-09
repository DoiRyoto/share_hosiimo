import Image from "next/image";

import { cn } from "@/lib/utils";
import { ItemInterface } from "@/common.types";

export function ItemCard({ item } : { item: ItemInterface }) {
  return (
    <div className={cn("space-y-3")}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={item.thumbnailUrl}
          alt={item.name}
          width={100}
          height={100}
          layout="responsive"
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105 aspect-square bg-slate-800"
          )}
        />
      </div>
      <div className="flex flex-row gap-3">
        <h3 className="font-medium leading-none">{item.name}</h3>
      </div>
    </div>
  );
}
