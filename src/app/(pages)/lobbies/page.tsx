import LobbyList from "@/components/lobby/LobbyList";

export default function LobbiesPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-8">
      <div className="text-4xl font-semibold">Join Lobby</div>
      <LobbyList />
    </div>
  );
}
