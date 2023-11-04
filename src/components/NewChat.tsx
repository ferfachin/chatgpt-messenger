'use client'

import { PlusIcon } from "@heroicons/react/20/solid"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

function NewChat() {
  const router = useRouter()
  const { data: session} = useSession();
  
  const createNewChat = async () => {
    
  }

  return (
    <div
      onClick={createNewChat}
      className="border-gray-700 border chatRows"
    >
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  )
}

export default NewChat