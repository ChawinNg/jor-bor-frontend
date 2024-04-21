"use client";

import userLogin from "@/services/userLogin";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import SocketService from "@/services/sockets/socket";

export default function LoginForm() {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = await userLogin(name, password);
    window.location.href = `${process.env.NEXT_PUBLIC_HTTP_FRONTEND_HOST}/menu`;
  }
  return (
    <form
      onSubmit={(e) => {
        login(e);
      }}
      className="flex flex-col w-full justify-center items-center gap-y-4 "
    >
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
