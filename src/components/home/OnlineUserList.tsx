"use client";
import { Key, useEffect, useState } from "react";
import FriendCard from "../chat/FriendCard";
import { useSocket } from "@/contexts/SocketProvider";
import { useAuth } from "@/contexts/AuthProvider";

export default function OnlineUserList() {
  const [users, setUsers] = useState<any>([]);
  const { user, setUser } = useAuth();
  const { socket, setSocket } = useSocket();

  useEffect(() => {
    socket?.on("users", (users: any) => {
      setUsers(users);
    });
  });
  return (
    <div className="flex flex-col h-screen w-1/5 justify-center items-center px-12 gap-y-4">
      <div className="text-4xl font-semibold">Online Users</div>
      <div className="flex flex-col w-full h-[48%] overflow-auto gap-y-5 px-4 border-2 border-ui-red py-4 rounded-xl">
        {users?.map((item: any, index: Key | null | undefined) => (
          <div
            className={`flex flex-row w-full py-6 justify-center rounded-lg text-2xl font-semibold items-center  ${"bg-ui-red"}`}
            key={index}
          >
            <div className="w-full text-center flex flex-row justify-center items-center gap-x-4">
              {item.username}
              {item.username == user.data.username && <div>(Me)</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
