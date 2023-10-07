import { UserProfile } from '@/common.types'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'

const UserCard = ({ userData }: { userData: UserProfile }) => {
  return (
    <Link href={`/community/friend/${userData.id}`}>
      <section className="usercard hover:bg-slate-800">
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
      </section>
    </Link>
  )
}

export default UserCard