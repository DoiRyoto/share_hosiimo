"use client"

import { MoreVertical } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { usePathname, useRouter } from 'next/navigation'
import { deleteItem } from '@/lib/actions/item.actions'
import { deleteMyListItem } from '@/lib/actions/mylist.action'

const MyListItemOptions = ({ userId, myListId, itemId }: {userId: string, myListId: string, itemId: string}) => {
  const clickHandler = async() => {
    await Promise.all([deleteItem(userId, itemId), deleteMyListItem(userId, myListId, itemId)])
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

export default MyListItemOptions