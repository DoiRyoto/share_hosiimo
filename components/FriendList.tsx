"use client"

import { UserProfile } from '@/common.types'
import React from 'react'
import UserCard from './UserCard'

const FriendList = ({ friendList }: { friendList: (UserProfile | undefined | null)[]}) => {
  return (
    <div className='mt-2'>
      <text className='px-3'>
        Friends
      </text>
      {friendList.map((friend) => {
        return <UserCard userData={friend!} />
      })}
    </div>
  )
}

export default FriendList