import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center bg-cyan-500 text-gray-50">
      <nav className="max-w-screen-xl w-full px-2 md:px-6 flex items-center justify-between">
        <Link href={"/"}>
          <h1>
            <Image src={"/logo.png"} width={177} height={44} priority={true} alt="Chrono Bump" />
          </h1>
        </Link>

        <ul className="text-xl flex gap-4">
          <li>
            <Link href={"/help"} className="menu-link">
              Help
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="menu-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
