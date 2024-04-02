import Image from "next/image";

export default function TextFieldSection() {
  return (
    <div className="flex flex-row gap-x-4 px-4 py-2 ">
      <input
        type="text"
        className="h-12 w-full rounded-xl bg-black px-4 placeholder:text-ci-dark-gray"
        placeholder="Type message here..."
        autoFocus
      />

      <button className="hover:bg-black rounded-xl px-2">
        <Image
          src="/img/chat/send-icon.svg"
          alt="send"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </button>
    </div>
  );
}
