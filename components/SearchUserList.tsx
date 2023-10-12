import { UserProfile } from '@/common.types'
import React from 'react'
import UserCard from './UserCard'
import SearchUserCard from './SearchUserCard'

const SearchUserList = ({ userId, userList, label }: { userId: string, userList: (UserProfile | undefined | null)[], label: string}) => {
  return (
    <div>
      <text className='px-3'> {label} </text>
      {userList.map((friend) => {
        return <SearchUserCard userId={userId} friendData={friend!} />
      })}
    </div>
  )
}

export default SearchUserList