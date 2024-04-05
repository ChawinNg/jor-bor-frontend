import CreateLobbyForm from "@/components/lobby/CreateLobbyForm";
import { Slider } from "@nextui-org/slider";
export default function CreateLobbyPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-20">
      <div className="text-4xl font-semibold">Create New Lobby</div>
      <CreateLobbyForm />
    </div>
  );
}
