import { ItemListInterface, UserProfile } from '@/common.types'
import React from 'react'
import UserCard from './UserCard'
import MyListCard from './MyListCard'

const MyListCardList = ({ myLists, isShowLabel=true }: { myLists: (ItemListInterface | undefined | null)[], isShowLabel: boolean}) => {
  return (
    <div>
      {isShowLabel && <text className='px-3'> My Lists </text>}
      {myLists.map((myList) => {
        return <MyListCard myListData={myList!}/>
      })}
    </div>
  )
}

export default MyListCardList