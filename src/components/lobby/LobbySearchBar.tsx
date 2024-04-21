"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SocketService from '@/services/sockets/socket';
import joinLobbyByCode from "@/services/lobbies/joinLobbyByCode";
import { useRouter } from "next/navigation";
import { useSocket } from "@/contexts/SocketProvider";

interface SearchBarProps {
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchAfterMS: number;
}

export default function LobbySearchBar(props: SearchBarProps) {
  const { setSearchValue, searchAfterMS } = props;

  const [value, setValue] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<number>();

  const router = useRouter();

  const { socket, setSocket } = useSocket();

  const search = () => {
    setSearchValue(value);
    
  };

  useEffect(() => {
    if (searchTimeout !== undefined) window.clearTimeout(searchTimeout);

    setSearchTimeout(
      window.setTimeout(() => {
        search();
        setSearchTimeout(undefined);
      }, searchAfterMS)
    );
  }, [value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
      window.clearTimeout(searchTimeout);
    }
  };

  const handlePost = async () => {
    const response = await joinLobbyByCode(value);
    console.log(response);
    router.push(`/lobbies/${response.lobbyId}`);
    socket.emit("joinLobby", response.lobbyId)
  }

  // const connect = () => {
  //   socket.emit("joinLobby", ())
  // }

  return (
    <div className="flex flex-row w-1/3 gap-x-8">
      <input
        type="text"
        className="w-full bg-ui-input placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4 text-center"
        placeholder="Enter lobby code"
        onChange={onChangeHandler}
        value={value}
        onKeyDown={onKeyDownHandler}
      ></input>
      <button 
        className="w-2/6 bg-ui-red py-3 rounded-xl font-normal px-4"
        onClick={() => {
          // connect();
          handlePost();
        }}
      >
        Join
      </button>
    </div>
  );
}
