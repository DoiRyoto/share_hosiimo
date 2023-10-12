import CreateToBuyButtonMyList from "@/components/MyList/CreateToBuyButtonMyList";
import CreateToBuyButton from "@/components/MyList/CreateToBuyButtonMyList";
import MyListHeader from "@/components/Header/MyListHeader";
import ItemCardGrid from "@/components/MyList/MyListItemCardGrid";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getMyList, getMyListItems } from "@/lib/actions/mylist.action";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
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

  const myListItems = await getMyListItems({
    userId: userInfo.id,
    myListId: params.myListId,
  });

  return (
    <>
      <MyListHeader myListData={myListInfo} />
      <ScrollArea className="w-full h-full mt-10 z-0">
        <ItemCardGrid itemCardList={myListItems!} myListId={myListInfo.id} userId={userInfo.id} />
      </ScrollArea>
      <CreateToBuyButtonMyList userId={userInfo.id} myListId={myListInfo.id} />
    </>
  );
};

export default page;
