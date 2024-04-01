export default function FriendCard({
  status,
  name,
}: {
  status: string;
  name: string;
}) {
  return (
    <div
      className={`flex flex-row w-full  py-6 justify-between rounded-lg text-2xl font-semibold items-center  ${
        status == "Offline" ? "bg-black" : "bg-ui-red"
      }`}
    >
      <div className="px-12">{status}</div>
      <div className="w-full text-left">{name}</div>
      <div className="px-3">
        <button className="border-white border-2 py-2 rounded-xl text-base font-normal px-8">
          Chat
        </button>
      </div>
    </div>
  );
}
