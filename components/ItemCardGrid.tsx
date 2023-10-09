import { ItemInterface } from '@/common.types'
import React from 'react'
import { ItemCard } from './ItemCard'

const ItemCardGrid = ({  itemCardList }:{ itemCardList: (ItemInterface | null | undefined)[] }) => {
  return (
    <div className='itemcard_grid'>
      {itemCardList.map((itemData) => {
        if(!itemData) return null

        return (
          <ItemCard item={itemData} />
        )
      })}
    </div>
  )
}

export default ItemCardGrid