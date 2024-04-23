import { useSocket } from "@/contexts/SocketProvider";
import GlobalMessageSection from "./GlobalMessageSection";
import GlobalTextFieldSection from "./GlobalTextFieldSection";

export default function GlobalChat() {
  const { socket, setSocket } = useSocket();

  return (
    <div className="w-1/6 flex flex-col h-screen gap-y-4 py-8">
      <div className="w-full text-2xl font-bold">Global Chat</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <GlobalMessageSection socket={socket} />
      <span className="w-full border-t border-ui-text-light"></span>
      <GlobalTextFieldSection socket={socket} />
    </div>
  );
}
