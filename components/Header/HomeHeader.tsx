import { UserProfile } from '@/common.types'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Skeleton } from '../ui/skeleton'
import UserPlusButton from '../UserPlusButton'

const HomeHeader = ({ userData }: { userData: UserProfile }) => {
  return (
    <section className="home_header">
      <div className="flex flex-row gap-5">
        <Avatar className='w-8 h-8'>
          <AvatarImage src={userData.avatarUrl} />
          <AvatarFallback>
            <Skeleton className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
        <text className="text-sm self-center">
          {userData.displayName}
        </text>
      </div>
      <UserPlusButton userId={userData.id}/>
    </section>
  )
}

export default HomeHeader