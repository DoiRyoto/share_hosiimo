import { ItemInterface } from '@/common.types'
import React from 'react'
import { FriendItemCard } from './FriendItemCard'

const FriendItemCardGrid = ({ itemCardList, userId, friendId }:{ itemCardList: (ItemInterface | null | undefined)[], userId: string, friendId: string }) => {
  return (
    <div className='itemcard_grid'>
      {itemCardList.map((itemData) => {
        if(!itemData) return null

        return (
          <FriendItemCard item={itemData} userId={userId} friendId={friendId} />
        )
      })}
    </div>
  )
}

export default FriendItemCardGrid