import { ItemInterface } from '@/common.types'
import React from 'react'
import { MyListItemCard } from './MyListItemCard'

const MyListItemCardGrid = ({ itemCardList, userId, myListId }:{ itemCardList: (ItemInterface | null | undefined)[], userId: string, myListId: string }) => {
  return (
    <div className='itemcard_grid'>
      {itemCardList.map((itemData) => {
        if(!itemData) return null

        return (
          <MyListItemCard item={itemData} userId={userId} myListId={myListId} />
        )
      })}
    </div>
  )
}

export default MyListItemCardGrid