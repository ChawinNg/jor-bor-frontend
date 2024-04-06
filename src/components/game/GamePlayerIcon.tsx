"use client";
import Image from "next/image";
import { useState } from "react";

export default function GamePlayerIcon({
  name,
  img,
  ready,
}: {
  name: string;
  img: string;
  ready: boolean;
}) {
  const [isSelect, setSelect] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <div
        className={`relative flex aspect-square w-24 items-center justify-center overflow-hidden rounded-full bg-ui-red ${
          isSelect ? "border-8 border-white" : ""
        }`}
        onClick={() => {
          setSelect(!isSelect);
        }}
      >
        <Image
          src="/img/home/logo.svg"
          alt={"accountMenu"}
          draggable={false}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>{name}</div>
    </div>
  );
}
