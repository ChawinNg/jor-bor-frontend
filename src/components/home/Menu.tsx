import Link from "next/link";

export default function Menu() {
  const handleFriends = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_HTTP_FRONTEND_HOST}/friends`;
  };
  return (
    <div className="flex flex-col gap-y-5 justify-start w-full text-4xl font-semibold ">
      <Link href="/lobbies" className="w-full flex ">
        <button className="hover:text-ui-red">Join Lobby</button>
      </Link>
      <Link href="/create-lobby" className="w-full flex ">
        <button className="text-left hover:text-ui-red">Create Lobby</button>
      </Link>
      <button onClick={handleFriends} className="text-left hover:text-ui-red">
        Friend
      </button>
    </div>
  );
}
