import { UserProfile } from '@/common.types'
import React from 'react'
import UserCard from './UserCard'

const UserList = ({ userList, label }: { userList: (UserProfile | undefined | null)[], label: string}) => {
  return (
    <div>
      { label.length > 0 && <text className='px-3'> {label} </text> }
      {userList.map((friend) => {
        return <UserCard userData={friend!} />
      })}
    </div>
  )
}

export default UserList