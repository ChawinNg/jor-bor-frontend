import TextFieldSection from "../chat/TextFieldSection";
import GameMessageSection from "./GameMessageSection";

export default function GameChat() {
  return (
    <div className="w-full flex flex-col h-3/4 bg-black p-4 rounded-xl gap-y-4">
      <div className="w-full text-2xl font-bold text-center">Masato</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <GameMessageSection />
      <span className="w-full border-t border-ui-text-light"></span>
      <TextFieldSection />
    </div>
  );
}
