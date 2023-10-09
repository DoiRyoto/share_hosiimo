import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getFriendList } from "@/lib/actions/friend.action";
import FriendList from "@/components/FriendList";
import MyListCardList from "@/components/MyListCardList";
import { getMyLists } from "@/lib/actions/mylist.action";
import HomeHeader from "@/components/Header/HomeHeader";
 
export default async function Home() {
  const user = await currentUser()
  if(!user) return null

  const userInfo = await getUser(user.id);
  if(!userInfo?.onboarded) redirect("/onboarding")

  const friendList = await getFriendList(userInfo.id)
  if(!friendList) return null

  const myLists = await getMyLists(userInfo.id)
  if(!myLists) return null

  return (
    <>
      <HomeHeader userData={userInfo}/>
      <div className="flex flex-col gap-3 mt-2">
        <FriendList friendList={friendList} isShowLabel={false}/>
      </div>
    </>
  )
}