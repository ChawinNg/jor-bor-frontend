import { useTheme } from "@/contexts/ThemeProvider";
import Image from "next/image";

export default function TextFieldSection() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-row gap-x-4 px-4 py-2 ">
      <input
        type="text"
        className={`h-12 w-full rounded-xl border-1 px-4 placeholder:text-ci-dark-gray ${
          theme == "night" ? "bg-black border-white" : "bg-white  border-ui-red"
        }`}
        placeholder="Type message here..."
        autoFocus
      />

      <button className="hover:bg-black rounded-xl px-2">
        <Image
          src={
            theme == "night"
              ? "/img/chat/send-icon.svg"
              : "/img/chat/send-icon-red.svg"
          }
          alt="send"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </button>
    </div>
  );
}
