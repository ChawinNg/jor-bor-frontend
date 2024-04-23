"use client";

import userLogin from "@/services/userLogin";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const router = useRouter();

  async function login(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const data = await userLogin(name, password);

    if (!data) {
      alert("Your email or password is incorrect!");
    }
    router.push("/menu");
  }
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-4 ">
      <input
        type="text"
        className="w-1/2 bg-ui-input placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4"
        placeholder="Enter your username"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="password"
        className="w-1/2 bg-ui-input placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4"
        placeholder="Enter your password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button
        onClick={login}
        className="w-1/2 bg-ui-red py-3 rounded-xl font-bold"
      >
        Play
      </button>
    </div>
  );
}
