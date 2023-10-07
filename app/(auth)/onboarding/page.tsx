import UserProfileForm from '@/components/form/UserProfileForm';
import { getUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";
import React from 'react'

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await getUser(user.id);
  if(userInfo?.onboarded) redirect("/")

  const userData = {
    id: user.id,
    name: user.username || "",
    displayName: userInfo ? userInfo.displayName : user.username ?? "",
    email: user.emailAddresses[0],
    avatarUrl: user.imageUrl
  }
  return (
    <UserProfileForm userData={userData} />
  )
}

export default page