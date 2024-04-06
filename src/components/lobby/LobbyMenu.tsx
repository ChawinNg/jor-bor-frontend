"use client";
import { useState } from "react";
import InviteList from "./InviteList";

export default function LobbyMenu() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-1/5 justify-center">
      <div className="flex flex-row bg-black gap-x-3 justify-center p-2 rounded-xl">
        <button
          className={`
            w-full py-2 rounded-xl font-bold ${!menu ? "bg-ui-red" : "bg-black"}
            `}
          onClick={() => {
            setMenu(false);
          }}
        >
          Invite
        </button>
        <button
          className={`
          w-full py-2 rounded-xl font-bold ${menu ? "bg-ui-red" : "bg-black"}
          `}
          onClick={() => {
            setMenu(true);
          }}
        >
          Chat
        </button>
      </div>
      <InviteList code={"123456"} />
    </div>
  );
}
