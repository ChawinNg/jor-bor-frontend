import { useTheme } from "@/contexts/ThemeProvider";
import GhostMessageSection from "./GhostMessageSection";
import GhostTextFieldSection from "./GhostTextFieldSection";
import { useAuth } from "@/contexts/AuthProvider";

export default function GhostChat({ id }: { id: string }) {
  const { theme, setTheme } = useTheme();
  const { user, setUser } = useAuth();

  return (
    <div
      className={`w-full flex flex-col h-3/4  p-4 rounded-xl gap-y-4 ${
        theme == "night" ? "bg-black" : "bg-white text-black"
      }`}
    >
      <div className="w-full text-2xl font-bold text-center">{user.data.username}</div>
      <span className="w-full border-t border-ui-text-light"></span>
      <GhostMessageSection id={id} />
      <span className="w-full border-t border-ui-text-light"></span>
      <GhostTextFieldSection id={id} />
    </div>
  );
}
