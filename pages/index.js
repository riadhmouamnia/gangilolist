import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>hello gangilos</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        soluta vero praesentium officiis quo fugiat iste sint ad sequi, libero
        cum blanditiis ea dolorum, aliquam similique. Blanditiis repellat et
        quos!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        soluta vero praesentium officiis quo fugiat iste sint ad sequi, libero
        cum blanditiis ea dolorum, aliquam similique. Blanditiis repellat et
        quos!
      </p>
      <Link href="/gangilos">
        <a className={styles.btn}>See Gang's Listing</a>
      </Link>
    </div>
  );
}
