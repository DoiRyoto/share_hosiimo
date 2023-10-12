import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getFriendList } from "@/lib/actions/friend.action";
import FriendList from "@/components/UserList";
import MyListCardList from "@/components/MyList/MyListCardList";
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
    <div>
      <HomeHeader userData={userInfo}/>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col gap-3 mt-2 sm:w-72 w-full">
          <MyListCardList myLists={myLists} label="My Lists"/>
          <FriendList userList={friendList} label="Friends" />
        </div>
      </div>
    </div>
  )
}