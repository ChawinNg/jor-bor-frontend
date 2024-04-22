import { useAuth } from "@/contexts/AuthProvider";
import { useSocket } from "@/contexts/SocketProvider";
import { useState } from "react";

export default function InviteCard({
  name,
  code,
  lobby,
}: {
  name: string;
  code: string | null;
  lobby: string;
}) {
  const { socket, setSocket } = useSocket();
  const [checked, setChecked] = useState(false);
  const { user, setUser } = useAuth();

  const handleClick = () => {
    let lobbyCode = code != null ? "(code: " + code + ")" : "";
    console.log(code);

    if (!checked) {
      socket?.emit("invite message", {
        user: user.data.username,
        to: name,
        message: "You have been invited to lobby " + lobby + " " + lobbyCode,
        time: new Date(Date.now()),
      });
    }
    setChecked(true);
  };
  return (
    <div className="flex flex-row w-full rounded-lg text-2xl font-semibold items-center bg-ui-accent p-6 gap-x-4 ">
      <input
        type="checkbox"
        onClick={handleClick}
        disabled={checked}
        className="size-8 appearance-auto border-white border-2 rounded-md checked:bg-ui-accent focus:text-white indeterminate:bg-ui-accent checkmark-white"
      ></input>
      <div className="text-center">{name}</div>
    </div>
  );
}
