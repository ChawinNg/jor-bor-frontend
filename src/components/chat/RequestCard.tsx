import { acceptFriend, rejectFriend } from "@/services/friends/manageFriends";
import Link from "next/link";

export default function FriendCard({ name, id }: { name: string; id: string }) {
  //   const [targetId, setTargetId] = useState<string>("");
  const acceptHandler = () => {
    acceptFriend(id);
    window.location.reload();
  };

  const rejectHandler = () => {
    rejectFriend(id);
    window.location.reload();
  };

  return (
    <div className="flex flex-row w-full border-2 py-6 justify-between rounded-lg text-2xl font-semibold items-center border-ui-red bg-black">
      <div className="px-12">Request</div>
      <div className="w-full text-left">{name}</div>
      <div className="px-3">
        <Link href={`/friends`} className="w-full flex flex-col gap-2 ">
          <button
            onClick={acceptHandler}
            className="bg-ui-red border-ui-red border-2 py-1 rounded-xl text-base font-normal px-8"
          >
            Accept
          </button>
          <button
            onClick={rejectHandler}
            className="border-white border-2 py-1 rounded-xl text-base font-normal px-8"
          >
            Reject
          </button>
        </Link>
      </div>
    </div>
  );
}
