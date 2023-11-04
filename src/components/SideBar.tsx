'use client'

import { useSession, signOut } from "next-auth/react"
import NewChat from "./NewChat"

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>
            {/* ModelSelection */}
          </div>

          {/* Map Throguh the ChatRows */}
        </div>
      </div>

      {session && (
        <div className="flex flex-col justify-center items-center mb-2 gap-2">
          <div className="flex items-center gap-2">
          <img
            src={session.user?.image!}
            alt="Profile pic"
            className="w-10 h-10 rounded-lg cursor-pointer"
          />
          <p className="text-white font-bold">{session.user?.name!}</p>
          </div>
          <button onClick={() => signOut()} className="rounded-md text-red-500 font-bold">Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default SideBar