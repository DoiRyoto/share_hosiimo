import CreateToBuyButton from "@/components/CreateToBuyButton";
import HomeHeader from "@/components/Header/HomeHeader";
import TalkHeader from "@/components/Header/FriendHeader";
import UserCard from "@/components/UserCard";
import { getUser } from "@/lib/actions/user.actions";
import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getFriendList } from "@/lib/actions/friend.action";
import FriendList from "@/components/FriendList";
 
export default async function Home() {
  const user = await currentUser()
  if(!user) return null

  const userInfo = await getUser(user.id);
  if(!userInfo?.onboarded) redirect("/onboarding")

  const friendList = await getFriendList(userInfo.id)
  if(!friendList) return null

  return (
    <div>
      <FriendList friendList={friendList}/>
    </div>
  )
}