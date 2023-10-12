"use client"

import { PlusIcon } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { ScrollArea } from "../ui/scroll-area"
import { initItem } from "@/constants"
import FriendItemForm from "../form/FriendItemFrom"

const CreateToBuyButtonFriend = ({ userId, friendId } : { userId: string, friendId: string }) => {
  return (
      <Sheet>
      <SheetTrigger asChild>
        <div className="create_tobuy_button">
          <Button
            variant="link"
            size="icon"
            className="fixed bg-selected rounded-full h-12 w-12"
          >
            <PlusIcon className="h-6 w-6" />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-custom_bg">
        <ScrollArea>
          <SheetHeader>
            <SheetTitle>Add New To Buy Item</SheetTitle>
          </SheetHeader>
          <FriendItemForm
            userId={userId}
            itemData={initItem}
            friendId={friendId}
          />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default CreateToBuyButtonFriend