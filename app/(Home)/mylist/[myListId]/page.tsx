import MyListHeader from "@/components/Header/MyListHeader";
import ItemCardGrid from "@/components/ItemCardGrid";
import MyListItemForm from "@/components/form/MyListItemForm";
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
import { getMyList, getMyListItems } from "@/lib/actions/mylist.action";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { myListId: string } }) => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const myListInfo = await getMyList({
    myListId: params.myListId,
    userId: userInfo.id,
  });
  if (!myListInfo) redirect("/");

  const myListItems = await getMyListItems({userId: userInfo.id, myListId: params.myListId})

  return (
    <>
      <MyListHeader myListData={myListInfo} />
      <ScrollArea className='w-full h-full mt-1 -z-10'>
        <ItemCardGrid itemCardList={myListItems!} />
      </ScrollArea>
      <div>
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
              <ScrollArea className="h-80">
                <SheetHeader>
                  <SheetTitle>Add New To Buy Item</SheetTitle>
                </SheetHeader>
                <MyListItemForm
                  userId={userInfo.id}
                  itemData={initItem}
                  myListId={params.myListId}
                />
              </ScrollArea>
            </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default page;
