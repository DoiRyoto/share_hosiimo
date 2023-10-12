import Image from "next/image";

import { cn } from "@/lib/utils";
import { ItemInterface } from "@/common.types";
import ItemOptions from "./MyListItemOptions";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import ItemData from "../ItemData";
import MyListItemOptions from "./MyListItemOptions";

export function MyListItemCard({ item, userId, myListId }: { item: ItemInterface, userId: string, myListId: string }) {
  return (
    <Sheet>
        <div className={cn("p-2 border space-y-3")}>
          <div className="overflow-hidden rounded-md">
          <SheetTrigger asChild>
          <Image
              src={item.thumbnailUrl}
              alt={item.name}
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105 aspect-square bg-slate-800"
              )}
            />
          </SheetTrigger>
          </div>
          <div className="flex flex-row gap-3 justify-between">
          <SheetTrigger asChild>
          <h3 className="font-medium leading-none">{item.name}</h3>
          </SheetTrigger>
            <MyListItemOptions itemId={item.id} userId={userId} myListId={myListId} />
          </div>
        </div>

      <SheetContent side="bottom" className="bg-custom_bg">
        <ScrollArea>
          <SheetHeader>
            <SheetTitle>Item</SheetTitle>
          </SheetHeader>
          <ItemData itemData={item} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
