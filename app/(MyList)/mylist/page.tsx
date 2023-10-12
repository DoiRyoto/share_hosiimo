import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import MyListCardList from "@/components/MyList/MyListCardList";
import { getMyLists } from "@/lib/actions/mylist.action";
 
export default async function Home() {
  const user = await currentUser()
  if(!user) return null

  const userInfo = await getUser(user.id);
  if(!userInfo?.onboarded) redirect("/onboarding")

  const myLists = await getMyLists(userInfo.id)
  if(!myLists) return null

  return (
    <>
      <div className="flex flex-col gap-3 sm:w-72 w-full">
        <MyListCardList myLists={myLists} label="" />
      </div>
    </>
  )
}