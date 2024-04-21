"use client";
import userRegister from "@/services/userRegister";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = await userRegister(name, password);
    console.log(data);
    window.location.href = `${process.env.NEXT_PUBLIC_HTTP_FRONTEND_HOST}/login`;
  }
  return (
    <form
      onSubmit={(e) => {
        register(e);
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
      <input
        type="text"
        className="w-1/2 bg-ui-input placeholder:text-ui-text-light py-3 rounded-xl font-normal px-4"
        placeholder="Enter your password again"
      ></input>
      <button className="w-1/2 bg-ui-red py-3 rounded-xl font-bold">
        Ready to woof woof !
      </button>
    </form>
  );
}
