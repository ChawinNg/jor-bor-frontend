"use client";
import FriendList from "@/components/chat/FriendList";
import FriendSearchBar from "@/components/chat/FriendSearchBar";
import { useAuth } from "@/contexts/AuthProvider";
import { useState } from "react";

export default function FriendsPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-8">
      <div className="text-4xl font-semibold">Friends</div>
      <FriendSearchBar setSearchValue={setSearchValue} searchAfterMS={400} />
      <FriendList />
    </div>
  );
}
