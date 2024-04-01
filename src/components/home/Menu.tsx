import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col gap-y-5 justify-start w-full text-4xl font-semibold ">
      <Link href="/lobby-join" className="w-full flex ">
        <button className="hover:text-ui-red">Join Lobby</button>
      </Link>
      <Link href="/lobby-create" className="w-full flex ">
        <button className="text-left hover:text-ui-red">Create Lobby</button>
      </Link>
      <Link href="/leaderboard" className="w-full flex ">
        <button className="text-left hover:text-ui-red">Leaderboard</button>
      </Link>
      <Link href="/friends" className="w-full flex ">
        <button className="text-left hover:text-ui-red">Friend</button>
      </Link>
      <Link href="/chat" className="w-full flex ">
        <button className="text-left hover:text-ui-red">Chat</button>
      </Link>
    </div>
  );
}
