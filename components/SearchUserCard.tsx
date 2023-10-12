"use client"

import { UserProfile } from '@/common.types'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { Button } from './ui/button'
import { addFriend } from '@/lib/actions/friend.action'
import { Check } from 'lucide-react'


const SearchUserCard = ({ userId, friendData }: { userId: string, friendData: UserProfile }) => {
  const [Send, setSend] = useState(false)

  const clickHandler = async() => {
    await addFriend(userId, friendData.id)
    setSend(true)
  }
  return (
      <section className="usercard hover:bg-slate-800 hover:cursor-pointer" onClick={clickHandler}>
          <div className="flex flex-row gap-5">
            <Avatar className='w-8 h-8'>
              <AvatarImage src={friendData.avatarUrl} />
              <AvatarFallback>
                <Skeleton className="w-8 h-8" />
              </AvatarFallback>
            </Avatar>
            <text className="text-sm self-center">
              {friendData.displayName}
            </text>
          </div>
          {Send && <Check />}
      </section>
  )
}

export default SearchUserCard