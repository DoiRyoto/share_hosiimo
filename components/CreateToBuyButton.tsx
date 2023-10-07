"use client"

import { PlusIcon } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {  useRouter } from "next/navigation"

const CreateToBuyButton = () => {
  const router = useRouter()

  const clickHandler = () => {
    router.push("create")
  }

  return (
      <Button variant="link" size="icon" className="fixed bg-selected rounded-full h-12 w-12" onClick={clickHandler}>
        <PlusIcon className="h-6 w-6" />
      </Button>
  )
}

export default CreateToBuyButton