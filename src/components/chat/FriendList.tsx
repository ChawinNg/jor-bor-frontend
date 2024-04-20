"use client";
import FriendCard from "./FriendCard";
import { Key, use, useEffect, useState } from "react";
import { getAllFriends } from "@/services/friends/getFriends";
import { useSocket } from "@/contexts/SocketProvider";
import RequestCard from "./RequestCard";
import { set } from "mongoose";
import getRequests from "@/services/friends/getFriendRequests";
import { user } from "@nextui-org/react";
import { on } from "events";

export default function FriendList() {
  const { socket, setSocket } = useSocket();
  const [requests, setRequests] = useState<string[][]>();
  const [users, setUsers] = useState<any>([]);
  const [onlineUsers, setOnlineUsers] = useState<any>([]);
  const [friendList, setFriendList] = useState<string[][]>();

  useEffect(() => {
    socket?.on("users", (users: any) => {
      setUsers(users);
    });
    async function getAllRequests() {
      const data = await getRequests();
      let requests: string[][] = [];
      data.map((item: any, index: any | Key | undefined) => {
        requests.push([item.username, item.id]);
      });
      setRequests(requests);
    }
    async function fetchFriendsList() {
      const data = await getAllFriends();
      console.log("users: ", users);
      let friends: string[][] = [];
      let onlineUsersId: string[] = [];
      users.map((item: any, index: any | Key | undefined) => {
        onlineUsersId.push(item.userId);
      });
      console.log("onlineUsersId: ", onlineUsersId);
      if (data != undefined) {
        data.map((item: any, index: any | Key | undefined) => {
          if (onlineUsersId.includes(item.id)) {
            item.online = "Online";
            friends.push([item.username, item.id, item.online]);
          } else {
            item.online = "Offline";
            friends.push([item.username, item.id, item.online]);
          }
        });
        setFriendList(friends);
        console.log("friends: ", data);
      }
    }
    getAllRequests();
    fetchFriendsList();
  });

  return (
    <div className="flex flex-col w-1/3 h-[48%] overflow-auto gap-y-5 px-4">
      {requests?.map((item: any, index: Key | null | undefined) => (
        <RequestCard id={item[1]} name={item[0]} key={index} />
      ))}
      {friendList?.map((item: any, index: Key | null | undefined) => (
        <FriendCard status={item[2]} name={item[0]} key={index} />
      ))}
    </div>
  );
}
