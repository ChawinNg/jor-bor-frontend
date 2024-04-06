"use client";

import LobbyList from "@/components/lobby/LobbyList";
import LobbySearchBar from "@/components/lobby/LobbySearchBar";
import { useState } from "react";

export default function LobbiesPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-8">
      <div className="text-4xl font-semibold">Join Lobby</div>
      <LobbySearchBar setSearchValue={setSearchValue} searchAfterMS={400} />
      <LobbyList />
    </div>
  );
}
