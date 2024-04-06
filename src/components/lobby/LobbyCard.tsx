import Image from "next/image";

export default function FriendCard({
  name,
  players,
}: {
  name: string;
  players: string;
}) {
  return (
    <div className="flex flex-row w-full justify-between rounded-lg text-2xl font-semibold items-center bg-black hover:bg-ui-primary-hover">
      <div className="w-full px-8">{players}/8</div>
      <div className="w-full text-left">{name}</div>
      <Image
        src="/img/home/logo.svg"
        alt={"accountMenu"}
        draggable={false}
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
