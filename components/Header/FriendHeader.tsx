import { UserProfile } from '@/common.types'
import React from 'react'
import BackButton from '../BackButtom'

const FriendHeader = ({ userData }: { userData: UserProfile }) => {
  return (
    <section className="talk_header">
      <BackButton backTo='/community/friend'/>
      <div className="flex flex-row gap-5">
        <text className="text-sm self-center">
          {userData.displayName}
        </text>
      </div>
    </section>
  )
}

export default FriendHeader