import { UserProfile } from '@/common.types'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserPlus } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'
import BackButton from '../BackButtom'

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
      <UserPlus className='w-5 h-5' />
    </section>
  )
}

export default HomeHeader