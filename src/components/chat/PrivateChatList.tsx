import Link from "next/link";
import PrivateChatCard from "./PrivateChatCard";

export default function PrivateChatList({ id }: { id: string }) {
  const players = [
    ["ikkey2", "999", true],
    ["ikkey3", "998", false],
    ["Masato", "997", false],
    // ["Masato", "996", false],
    // ["Masato", "995", false],
    // ["Masato", "994", false],
    // ["Masato", "993", false],
    // ["Masato", "993", false],
    // ["Masato", "993", false],
    // ["Masato", "993", false],
  ];

  return (
    <div className="flex flex-col w-full px-8 overflow-auto gap-y-4 ">
      {players.map((item, index) => (
        <Link href={"/chats/" + item[0]} key={index}>
          <PrivateChatCard isChat={item[2]} name={item[0]} />
        </Link>
      ))}
    </div>
  );
}
