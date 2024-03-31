"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <form className="flex flex-col w-full justify-center items-center gap-y-4 ">
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
      <Link href="/login" className="w-full flex justify-center">
        <button className="w-1/2 bg-ui-red py-3 rounded-xl font-bold">
          Play
        </button>
      </Link>
    </form>
  );
}
