"use client";
import PrivateChat from "@/components/chat/PrivateChat";
import PrivateChatList from "@/components/chat/PrivateChatList";

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-row h-screen justify-center items-center gap-y-8 gap-x-24">
      <div className="flex flex-col w-1/6 justify-center bg-black h-1/2 gap-y-6 py-4 items-center rounded-xl">
        <div className="text-4xl font-semibold py-2">Private Chat</div>
        <PrivateChatList id={params.id} />
      </div>
      <PrivateChat id={params.id} />
    </div>
  );
}
