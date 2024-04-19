"use client";
import { FormEvent, useState } from "react";
import React from "react";
import { Slider, SliderValue, Switch } from "@nextui-org/react";
import createLobby from "@/services/lobbies/createLobby";
import { useRouter } from "next/navigation";

export default function CreateLobbyForm() {
  const [name, setName] = useState<string>();
  const [code, setCode] = useState<string>();
  const [isPublic, setPublic] = useState<boolean>(true);
  const [players, setPlayers] = useState<SliderValue>();

  const handlePost = async () => {
    const data = {
      name,
      isPublic,
      code,
      players,
    }
    const response = await createLobby(name, isPublic, code, players);
    console.log(response)
  }

  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        create(e);
      }}
      className="flex flex-col w-1/4 justify-center items-center gap-y-20"
    >
      <div className="flex flex-col gap-y-7 justify-center items-center w-full">
        <div className="flex w-full flex-row justify-between items-center">
          <label className="text-2xl font-semibold">Lobby Name</label>
          <input
            type="text"
            className="bg-ui-input w-full max-w-72 placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4 text-xl"
            placeholder="Enter lobby name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex w-full flex-row justify-between items-center">
          <div className="text-2xl font-semibold">Players</div>
          <Slider
            label="Players"
            step={1}
            size={"sm"}
            maxValue={8}
            minValue={0}
            defaultValue={4}
            className="max-w-72"
            onChange={(value: SliderValue) => {
              setPlayers(value);
              console.log(players);
            }}
          />
        </div>
        <div className="flex w-full flex-row justify-between items-center">
          <div className="text-2xl font-semibold">Private</div>
          <Switch
            defaultSelected
            size="md"
            onValueChange={(isSelected: boolean) => {
              setPublic(isSelected);
            }}
          ></Switch>
          <div className="text-2xl font-semibold">Public</div>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <label className="text-2xl font-semibold">Code</label>
          <input
            type="text"
            className="bg-ui-input w-full max-w-72 placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4 text-xl"
            placeholder="Enter lobby code"
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full gap-x-4">
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="bg-white text-black py-3 w-1/3 rounded-xl"
        >
          Cancle
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handlePost();
            router.push('/lobbies');
          }}
          className="bg-ui-red py-3 w-1/3 rounded-xl"
        >
          Create
        </button>
      </div>
    </form>
  );
}
