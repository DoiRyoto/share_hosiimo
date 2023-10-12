import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { UserPlusIcon } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'
import FriendItemForm from './form/FriendItemFrom'
import SearchForm from './form/SearchForm'

const UserPlusButton = ({ userId } : {userId: string}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="h-5 w-5 hover:cursor-pointer">
          <UserPlusIcon />
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-custom_bg">
        <ScrollArea>
          <SheetHeader>
            <SheetTitle>Search User</SheetTitle>
          </SheetHeader>
          <SearchForm userId={userId}/>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default UserPlusButton