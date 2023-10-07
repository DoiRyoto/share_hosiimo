"use client"

import { BottombarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftBar = () => {
  const pathname = usePathname()
  return (
    <section className="leftbar">
      <div className='leftbar_container'>
        {
          BottombarLinks.map((link) => {
            const isActive = 
            (pathname.includes(link.route) && link.route.length > 1 ) || pathname === link.route

            return (
              <Link href={link.route} key={link.label} className={`leftbar_items ${isActive && "bg-selected"}`}>
                {link.icon}
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default LeftBar