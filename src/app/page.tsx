import MenuSection from "@/components/home/MenuSection";
import Link from "next/link";

export default function Home() {
  return (
    <MenuSection>
      <Link href="/register">
        <button className="w-1/2 bg-ui-red py-3 rounded-xl">Register</button>
      </Link>
      <Link href="/login">
        <button className="w-1/2 bg-ui-red py-3 rounded-xl">Login</button>
      </Link>
    </MenuSection>
  );
}
