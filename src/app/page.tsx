'use client'
import MenuSection from "@/components/home/MenuSection";
import Link from "next/link";

export default function Home() {
  return (
    <MenuSection>
      <Link href="/register" className="w-full flex justify-center">
        <button className="w-1/2 bg-ui-red py-3 rounded-xl font-bold">
          Register
        </button>
      </Link>
      <Link href="/login" className="w-full flex justify-center">
        <button className="w-1/2 bg-ui-red py-3 rounded-xl font-bold">
          Login
        </button>
      </Link>
    </MenuSection>
  );
}
