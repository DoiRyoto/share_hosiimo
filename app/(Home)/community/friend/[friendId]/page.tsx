import FriendHeader from "@/components/Header/FriendHeader";
import ItemCardGrid from "@/components/ItemCardGrid";
import FriendItemForm from "@/components/form/FriendItemFrom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { initItem } from "@/constants";
import { getFriend, getFriendItems } from "@/lib/actions/friend.action";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { friendId: string } }) => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const friendInfo = await getFriend(params.friendId);
  if (!friendInfo) redirect("/");

  const friendItems = await getFriendItems({userId: userInfo.id, friendId: params.friendId})

  return (
    <div>
      <FriendHeader userData={friendInfo} />
      <ScrollArea className='w-full h-full mt-1 -z-10'>
        <ItemCardGrid itemCardList={friendItems!} />
      </ScrollArea>
      <div className="h-1/2">
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
          <SheetContent side="bottom">
            <ScrollArea className="h-70">
              <SheetHeader>
                <SheetTitle>Add New To Buy Item</SheetTitle>
              </SheetHeader>
              <FriendItemForm
                userId={userInfo.id}
                itemData={initItem}
                friendId={params.friendId}
              />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default page;
