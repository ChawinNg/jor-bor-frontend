import Image from "next/image";
import Link from "next/link";
export default function BackButton() {
  return (
    <Link href="/menu">
      <div className="fixed p-10">
        <Image
          src="/img/home/arrow-left.svg"
          alt="back"
          width={32}
          height={32}
        />
      </div>
    </Link>
  );
}
