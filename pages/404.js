import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>This page cannot be found!</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
