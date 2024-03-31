import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row justify-center items-center h-screen gap-x-2 select-none">
      <div className="flex flex-col items-center gap-y-4 font-bold text-white">
        <Image
          src="/img/home/game-title.svg"
          alt="game-title"
          width={549}
          height={227}
        />
        <button className="w-1/2 bg-ui-red py-3 rounded-xl">Register</button>
        <button className="w-1/2 bg-ui-red py-3 rounded-xl">Login</button>
      </div>
      <div>
        <Image
          src="/img/home/logo.svg"
          alt="game-title"
          width={522}
          height={522}
        />
      </div>
    </main>
  );
}
