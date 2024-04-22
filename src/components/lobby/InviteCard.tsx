import Image from "next/image";

export default function InviteCard({ name,code }: { name: string,code:string }) {
  // const [isInvited, setInvited] = useState<boolean>(false);
  // const [socket,useSocket] = useState<SocketIOClient.Socket>(null);
  const handleClick = () => {
    // sent code to friends private chat
    // useEffect(() => {
    //   socket?.on("private message", (message: any) => {
    //     if (user) {
    //       if (
    //         (message.to === user.data.username ||
    //           message.user === user.data.username) &&
    //         (message.to === id || message.user === id)
    //       ) {
    //        message = "You have been invited to a game with code: "+code+" by "+user.data.username+"!";
    //         setMessages((prevMessages: any) => [...prevMessages, message]);
    //       }
    //     }
    //   });
    // }, [user, socket]);
  };
  return (
    <div className="flex flex-row w-full rounded-lg text-2xl font-semibold items-center bg-ui-accent p-6 gap-x-4 ">
      <input
        type="checkbox"
        onClick={handleClick}
        className="size-8 appearance-auto border-white border-2 rounded-md checked:bg-ui-accent focus:text-white indeterminate:bg-ui-accent checkmark-white"
      ></input>
      <div className="text-center">{name}</div>
    </div>
  );
}
