import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={71.75} height={100} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>ِAbout</a>
      </Link>
      <Link href="/gangilos">
        <a>Gang Listing</a>
      </Link>
    </nav>
  );
};

export default Nav;
