"use client"

import { PlusIcon } from "lucide-react"
 
import { Button } from "@/components/ui/button"

const CreateToBuyButton = () => {
  return (
      <Button variant="link" size="icon" className="fixed bg-selected rounded-full h-12 w-12">
        <PlusIcon className="h-6 w-6" />
      </Button>
  )
}

export default CreateToBuyButton