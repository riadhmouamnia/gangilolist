import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { gang: data },
  };
};

const Details = ({ gang }) => {
  return (
    <>
      <div>
        <h1>{gang.name}</h1>
        <p>{gang.email}</p>
        <p>{gang.website}</p>
        <p>{gang.address.city}</p>
      </div>
      <br />
      <div>
        <Link href="/gangilos/">Back to list</Link>
      </div>
    </>
  );
};

export default Details;
