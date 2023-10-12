import CreateToBuyButtonFriend from "@/components/Friend/CreateToBuyButtonFriend";
import FriendItemCardGrid from "@/components/Friend/FriendItemCardGrid";
import FriendHeader from "@/components/Header/FriendHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getFriend, getFriendItems } from "@/lib/actions/friend.action";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { friendId: string } }) => {
  const user = await currentUser()
  if (!user) return null;

  const userInfo = await getUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const friendInfo = await getFriend(params.friendId);
  if (!friendInfo) redirect("/");

  const friendItems = await getFriendItems({userId: userInfo.id, friendId: params.friendId})

  return (
    <div>
      <FriendHeader userData={friendInfo} />
      <ScrollArea className='w-full h-full z-0 mt-10'>
        <FriendItemCardGrid itemCardList={friendItems!} userId={userInfo.id} friendId={friendInfo.id}/>
      </ScrollArea>
      <CreateToBuyButtonFriend userId={userInfo.id} friendId={friendInfo.id} />
    </div>
  );
};

export default page;
