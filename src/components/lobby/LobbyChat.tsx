import TextFieldSection from "../chat/TextFieldSection";
import LobbyMessageSection from "./LobbyMessageSection";

export default function LobbyChat() {
  return (
    <div className="w-full flex flex-col h-3/5 gap-y-4">
      <div className="w-full text-2xl font-bold text-center">Masato</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <LobbyMessageSection />
      <span className="w-full border-t border-ui-text-light"></span>
      <TextFieldSection />
    </div>
  );
}
