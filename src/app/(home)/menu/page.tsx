import MenuSection from "@/components/home/MenuSection";

export default function MenuPage() {
  return (
    <MenuSection>
      <div className="flex flex-col gap-y-5 justify-start w-full text-4xl font-semibold ">
        <button className="text-left hover:text-ui-red">Join Lobby</button>
        <button className="text-left hover:text-ui-red">Create Lobby</button>
        <button className="text-left hover:text-ui-red">Leaderboard</button>
        <button className="text-left hover:text-ui-red">Friend</button>
        <button className="text-left hover:text-ui-red">Chat</button>
      </div>
    </MenuSection>
  );
}
