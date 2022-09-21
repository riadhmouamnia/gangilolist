import Head from "next/head";
import styles from "../../styles/gangilos.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  return {
    props: { gangilos: data },
  };
};

const Gangilos = ({ gangilos }) => {
  return (
    <>
      <Head>
        <title>Gangilos List | All Gang</title>
        <meta name="keywords" content="Gangilos list" />
      </Head>
      <div>
        <h1>All gangilos</h1>
        {gangilos.map((gang) => (
          <Link href={`/gangilos/${gang.id}`} key={gang.id}>
            <a className={styles.single}>
              <h3>{gang.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Gangilos;
