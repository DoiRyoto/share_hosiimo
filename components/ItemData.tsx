import { ItemInterface } from "@/common.types";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ItemData = ({ itemData }: { itemData: ItemInterface }) => {
  return (
    <div className="min-h-[80vh] max-h-[80vh]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-center gap-4">
          <Image
            src={itemData.thumbnailUrl}
            alt="icon"
            width={200}
            height={200}
            style={{ width: "100%", height: "100%" }}
            className={cn("object-cover transition-all aspect-square")}
          />

          <div>
            <h3>name</h3>
            <text>{itemData.name}</text>
          </div>
          <div>
            <h3>description</h3>
            <text>{itemData.description}</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemData
