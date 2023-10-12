"use client"

import { MoreVertical } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { deleteItem } from '@/lib/actions/item.actions'
import { deleteFriendItem } from '@/lib/actions/friend.action'

const FriendItemOptions = ({ userId, friendId, itemId }: {userId: string, friendId: string, itemId: string}) => {
  const clickHandler = async() => {
    await Promise.all([deleteItem(userId, itemId), deleteFriendItem(itemId, userId, friendId)])
  }

  return (
      <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical className='h-5 w-5 z-30'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-custom_bg">
        <DropdownMenuItem className="hover:cursor-pointer" onClick={clickHandler}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FriendItemOptions