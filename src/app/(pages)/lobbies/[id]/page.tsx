import LobbyCampFire from "@/components/lobby/LobbyCampFire";
import LobbyMenu from "@/components/lobby/LobbyMenu";

export default function LobbyPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-row h-screen justify-center items-center gap-y-8 gap-x-24 px-24">
      <LobbyMenu />
      <LobbyCampFire />
    </div>
  );
}
