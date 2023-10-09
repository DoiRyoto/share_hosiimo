"use client"

import { ChevronLeft } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const BackButton = ({backTo}: {backTo: string}) => {
  const route = useRouter()
  const clickHandler = () => {
    route.push(backTo)
  }

  return (
      <Button variant="link" size="icon" className="fixed h-5 w-5 left-2 sm:hidden" onClick={clickHandler}>
        <ChevronLeft className="h-7 w-7" />
      </Button>
  )
}

export default BackButton