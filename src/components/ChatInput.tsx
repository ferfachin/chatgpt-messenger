"use client"

import { PaperAirplaneIcon } from "@heroicons/react/20/solid"
import { serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useState } from "react"

type Props = {
  chatId: string
}


function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("")
  const { data: session } = useSession()

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.email!,
        avatar: session?.user?.email! || `https://ui-avatars.com/api/?name=${session?.user?.email!}`,
      }
    }
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form
        onSubmit={sendMessage}
        className="p-5 space-x-5 flex"
      >
        <input
          className="bg-transparent flex-1 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300"
          disabled={!prompt || !session}
          type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>
        {/* ModalSelection */}
      </div>
    </div>
  )
}

export default ChatInput