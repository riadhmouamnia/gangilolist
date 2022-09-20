import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Gangilo list</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>ِAbout</a>
      </Link>
      <Link href="/gangilos">
        <a>ِGangilo Listing</a>
      </Link>
    </nav>
  );
};

export default Nav;
