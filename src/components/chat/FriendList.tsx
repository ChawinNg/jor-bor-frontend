import FriendCard from "./FriendCard";
import { useEffect, useState } from "react";
import { getAllFriends } from "@/services/friends/getFriends";
import { useSocket } from "@/contexts/SocketProvider";
import RequestCard from "./RequestCard";
import { set } from "mongoose";
import getRequests from "@/services/friends/getFriendRequests";

export default function FriendList() {
  const { socket, setSocket } = useSocket();
  const [requests, setRequests] = useState<string[][]>();
  const [onlineUsers, setOnlineUsers] = useState<any>([]);
  const [friendList, setFriendList] = useState<string[][]>();

  async function getAllRequests() {
    const data = await getRequests();
    let requests: string[][] = [];
    data.map((item: any, index: any) => {
      requests.push([item.username, item.id]);
    });
    console.log("request: ", requests);
    setRequests(requests);
  }

  async function fetchFriendsList() {
    const data = await getAllFriends();
    console.log("friends: ", data);
    let friends: string[][] = [];
    if (data != undefined) {
      data.map((item: any, index: any) => {
        if (item.id === onlineUsers.id)
          friends.push([item.username, item.id, "Online"]);
        else friends.push([item.username, item.id, "Offline"]);
      });
      setFriendList(friends);
    }
  }

  useEffect(() => {
    socket?.on("users", (users: any) => {
      setOnlineUsers(users);
      console.log(onlineUsers);
    });
    fetchFriendsList();
    getAllRequests();
  }, []);

  return (
    <div className="flex flex-col w-1/3 h-[48%] overflow-auto gap-y-5 px-4">
      {requests?.map((item, index) => (
        <RequestCard id={item[1]} name={item[0]} key={index} />
      ))}
      {friendList?.map((item, index) => (
        <FriendCard status={item[2]} name={item[0]} key={index} />
      ))}
    </div>
  );
}
