import GameCampFire from "@/components/game/GameCampFire";
import GameMenu from "@/components/game/GameMenu";

export default function GamePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-row h-screen justify-center items-center gap-y-8 gap-x-24 px-20">
      <GameMenu />
      <GameCampFire />
    </div>
  );
}
