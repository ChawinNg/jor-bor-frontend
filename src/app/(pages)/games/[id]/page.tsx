"use client";
import GameCampFire from "@/components/game/GameCampFire";
import GameMenu from "@/components/game/GameMenu";
import { useTheme } from "@/contexts/ThemeProvider";

export default function GamePage({ params }: { params: { id: string } }) {
  const { theme, setTheme } = useTheme();
  function changeMode(theme: string) {
    if (theme == "night") {
      document.body.style.backgroundColor = "#F3EEF4";
      setTheme("day");
    }
    if (theme == "day") {
      document.body.style.backgroundColor = "#1a1a1d";
      setTheme("night");
    }
  }
  return (
    <div className="flex flex-row h-screen justify-center items-center gap-y-8 gap-x-24 px-20">
      <GameMenu id={params.id}/>
      <GameCampFire />
      <button
        className="text-ui-red absolute right-0 px-4"
        onClick={() => changeMode(theme)}
      >
        test1
      </button>
    </div>
  );
}
