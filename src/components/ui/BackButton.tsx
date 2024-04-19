import { useTheme } from "@/contexts/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
export default function BackButton() {
  const { theme, setTheme } = useTheme();
  function goMenu() {
    window.location.href = "http://localhost:3000/menu";
  }
  return (
    <div onClick={goMenu} className="fixed p-10">
      <Image
        src={
          theme == "night"
            ? "/img/home/arrow-left.svg"
            : "/img/home/arrow-left-black.svg"
        }
        alt="back"
        width={32}
        height={32}
      />
    </div>
  );
}
