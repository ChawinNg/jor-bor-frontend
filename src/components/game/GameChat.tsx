import { useTheme } from "@/contexts/ThemeProvider";
import GameMessageSection from "./GameMessageSection";
import GameTextFieldSection from "./GameTextFieldSection";

export default function GameChat({ id }: { id: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`w-full flex flex-col h-3/4 p-4 rounded-xl gap-y-4 ${
        theme == "night"
          ? "bg-black"
          : "bg-white text-black border-1 border-ui-red"
      }`}
    >
      <div className="w-full text-2xl font-bold text-center">Masato</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <GameMessageSection id={id} />
      <span className="w-full border-t border-ui-text-light"></span>
      <GameTextFieldSection id={id} />
    </div>
  );
}
