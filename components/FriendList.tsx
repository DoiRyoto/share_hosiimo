import { UserProfile } from '@/common.types'
import React from 'react'
import UserCard from './UserCard'

const FriendList = ({ friendList, isShowLabel=true}: { friendList: (UserProfile | undefined | null)[], isShowLabel: boolean}) => {
  return (
    <div>
      {isShowLabel && <text className='px-3'> Friends </text>}
      {friendList.map((friend) => {
        return <UserCard userData={friend!} />
      })}
    </div>
  )
}

export default FriendList