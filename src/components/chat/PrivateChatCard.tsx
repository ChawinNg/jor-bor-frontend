import Image from "next/image";
export default function PrivateChatCard({
  isChat,
  name,
}: {
  isChat: string | boolean;
  name: string | boolean;
}) {
  return (
    <div
      className={`flex flex-row w-full justify-between rounded-lg text-base  font-semibold items-center  ${
        !isChat ? "bg-ui-accent" : "bg-ui-red"
      }`}
    >
      <div className="relative flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full">
        <Image
          src="/img/home/logo.svg"
          alt={"accountMenu"}
          draggable={false}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full text-left px-4">{name}</div>
    </div>
  );
}
