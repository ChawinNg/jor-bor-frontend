import MenuSection from "@/components/home/MenuSection";

export default function MenuPage() {
  return (
    <MenuSection>
      <div className="flex flex-col gap-y-5 justify-start">
        <button className="text-4xl font-semibold">Join Lobby</button>
        <button className="text-4xl font-semibold">Create Lobby</button>
        <button className="text-4xl font-semibold">Leaderboard</button>
        <button className="text-4xl font-semibold">Chat</button>
      </div>
    </MenuSection>
  );
}
