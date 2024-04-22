"use client";
import Link from "next/link";
import PrivateChatCard from "./PrivateChatCard";
import { useSocket } from "@/contexts/SocketProvider";
import { Key, useEffect, useState } from "react";
import { getAllFriends } from "@/services/friends/getFriends";

export default function PrivateChatList({ id }: { id: string }) {
  const { socket, setSocket } = useSocket();
  const [friendList, setFriendList] = useState<string[][]>();

  useEffect(() => {
    async function fetchFriendsList() {
      const data = await getAllFriends();
      let friends: string[][] = [];
      if (data != undefined) {
        data.map((item: any, index: any | Key | undefined) => {
          item.online = false;
          if (id == item.username) {
            item.online = true;
          }
          friends.push([item.username, item.id, item.online]);
        });
        setFriendList(friends);
      }
    }
    fetchFriendsList();
  }, []);

  return (
    <div className="flex flex-col w-full px-8 overflow-auto gap-y-4 ">
      {friendList?.map((item, index) => (
        <Link href={"/chats/" + item[0]} key={index}>
          <PrivateChatCard isChat={item[2]} name={item[0]} />
        </Link>
      ))}
    </div>
  );
}
