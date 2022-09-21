import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gangilos List | Home</title>
        <meta name="keywords" content="Gangilos" />
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>hello gangilos</h1>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis soluta vero praesentium officiis quo fugiat iste sint ad
            sequi, libero cum blanditiis ea dolorum, aliquam similique.
            Blanditiis repellat et quos!
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis soluta vero praesentium officiis quo fugiat iste sint ad
            sequi, libero cum blanditiis ea dolorum, aliquam similique.
            Blanditiis repellat et quos!
          </p>
        </div>
        <Link href="/gangilos">
          <a className={styles.btn}>See Gang Listing</a>
        </Link>
      </div>
    </>
  );
}
