import { useTheme } from "@/contexts/ThemeProvider";
import TextFieldSection from "../../chat/TextFieldSection";
import GhostMessageSection from "./GhostMessageSection";

export default function GhostChat() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`w-full flex flex-col h-3/4  p-4 rounded-xl gap-y-4 ${
        theme == "night" ? "bg-black" : "bg-white text-black"
      }`}
    >
      <div className="w-full text-2xl font-bold text-center">Masato</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <GhostMessageSection />
      <span className="w-full border-t border-ui-text-light"></span>
      <TextFieldSection />
    </div>
  );
}
