"use client";

import userLogin from "@/services/userLogin";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import SocketService from "@/services/sockets/socket";

export default function LoginForm() {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const connectSocket = async () => {
    const socket = await SocketService.connect("ws://localhost:8000").catch((err) => {console.log("Error: ", err)})
  }

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = await userLogin(name, password)
    await connectSocket();
    console.log(data)
    window.location.href = "http://localhost:3000/menu"
  }
  return (
    <form onSubmit={(e) => { login(e) }} className="flex flex-col w-full justify-center items-center gap-y-4 ">
      <input
        type="text"
        className="w-1/2 bg-ui-input placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4"
        placeholder="Enter your username"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        className="w-1/2 bg-ui-input placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4"
        placeholder="Enter your password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button className="w-1/2 bg-ui-red py-3 rounded-xl font-bold">
        Play
      </button>
    </form>
  );
}
