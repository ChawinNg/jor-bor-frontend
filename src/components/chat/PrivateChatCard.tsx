export default function PrivateChatCard({
  isChat,
  name,
}: {
  isChat: string | boolean;
  name: string | boolean;
}) {
  return (
    <div
      className={`flex flex-row w-full  py-4 justify-between rounded-lg text-base  font-semibold items-center  ${
        !isChat ? "bg-ui-accent" : "bg-ui-red"
      }`}
    >
      <div className="w-full text-left">{name}</div>
    </div>
  );
}
