import Image from "next/image";
import GamePlayerIcon from "./GamePlayerIcon";

export default function GameCampFire() {
  return (
    <div className="w-3/4 flex flex-col justify-center items-center gap-y-12">
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        <GamePlayerIcon name={"ikkey"} img={""} ready={true} />
        <GamePlayerIcon name={"ikkey"} img={""} ready={false} />
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center gap-y-24">
          <GamePlayerIcon name={"ikkey"} img={""} ready={true} />
          <GamePlayerIcon name={"ikkey"} img={""} ready={false} />
        </div>
        <Image
          src="/img/lobby/campfire.svg"
          alt="campfire"
          width={500}
          height={358}
        />
        <div className="flex flex-col items-center gap-y-24">
          <GamePlayerIcon name={"ikkey"} img={""} ready={true} />
          <GamePlayerIcon name={"ikkey"} img={""} ready={true} />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-24 w-full items-center">
        <GamePlayerIcon name={"ikkey"} img={""} ready={true} />
        <GamePlayerIcon name={"ikkey"} img={""} ready={true} />
      </div>
    </div>
  );
}
