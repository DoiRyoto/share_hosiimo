import { ItemListInterface, UserProfile } from '@/common.types'
import React from 'react'
import UserCard from '../UserCard'
import MyListCard from './MyListCard'

const MyListCardList = ({ myLists, label }: { myLists: (ItemListInterface | undefined | null)[], label: string}) => {
  return (
    <div>
      { label.length > 0 && <text className='px-3'> {label} </text> }
      {myLists.map((myList) => {
        return <MyListCard myListData={myList!}/>
      })}
    </div>
  )
}

export default MyListCardList