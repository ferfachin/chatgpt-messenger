'use client'

import { useSession, signOut } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from "./NewChat"
import { collection, deleteDoc, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc')
    )
  );
  
  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>
            {/* ModelSelection */}
          </div>

          {/* Map Throguh the ChatRows */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
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