import { UserProfile } from '@/common.types'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserPlus } from 'lucide-react'

const FriendHeader = ({ userData }: { userData: UserProfile }) => {
  return (
    <section className="talk_header">
      <div className="flex flex-row gap-5">
        <text className="text-sm self-center">
          {userData.name}
        </text>
      </div>
    </section>
  )
}

export default FriendHeader