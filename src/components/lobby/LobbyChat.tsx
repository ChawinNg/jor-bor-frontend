import LobbyMessageSection from "./LobbyMessageSection";
import LobbyTextFieldSection from "./LobbyTextFieldSection";

export default function LobbyChat({id}:{id:string}) {
  return (
    <div className="w-full flex flex-col h-3/5 gap-y-4 p-4 bg-black">
      <div className="w-full text-2xl font-bold text-center">Masato</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <LobbyMessageSection id={id}/>
      <span className="w-full border-t border-ui-text-light"></span>
      <LobbyTextFieldSection id={id}/>
    </div>
  );
}
