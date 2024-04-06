export default function InviteList({ code }: { code: string }) {
  return (
    <div className="flex flex-row bg-black gap-x-3  text-2xl justify-center p-2 rounded-xl">
      <div>Lobby Code: {code}</div>
    </div>
  );
}
