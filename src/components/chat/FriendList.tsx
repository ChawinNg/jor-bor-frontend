"use client";
import FriendCard from "./FriendCard";
import { Key, use, useEffect, useState } from "react";
import { getAllFriends } from "@/services/friends/getFriends";
import { useSocket } from "@/contexts/SocketProvider";
import RequestCard from "./RequestCard";
import getRequests from "@/services/friends/getFriendRequests";

export default function FriendList() {
  const { socket, setSocket } = useSocket();
  const [requests, setRequests] = useState<string[][]>();
  const [users, setUsers] = useState<any>([]);
  const [friendList, setFriendList] = useState<string[][]>();

  useEffect(() => {
    socket?.on("users", (users: any) => {
      setUsers(users);
      console.log("users", users);
    });
  });

  useEffect(() => {
    async function getAllRequests() {
      const data = await getRequests();
      let requests: string[][] = [];
      data.map((item: any, index: any | Key | undefined) => {
        requests.push([item.username, item.id]);
      });
      setRequests(requests);
    }
    getAllRequests();
  }, []);

  useEffect(() => {
    async function fetchFriendsList() {
      const data = await getAllFriends();
      console.log("online users: ", users);
      let friends: string[][] = [];
      let onlineUsersId: string[] = [];
      users.map((item: any, index: any | Key | undefined) => {
        onlineUsersId.push(item.userId);
      });
      console.log("onlineUsersId: ", onlineUsersId);
      if (data != undefined) {
        data?.map((item: any, index: any | Key | undefined) => {
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
    fetchFriendsList();
  }, [users]);

  console.log("online users: ", users);

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
