import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/logo.svg"
          width={124}
          height={32}
          alt="Lahipa.com"
        />
      </a>
    </Link>
  );
}
