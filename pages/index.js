import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1>hello gangilos</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        soluta vero praesentium officiis quo fugiat iste sint ad sequi, libero
        cum blanditiis ea dolorum, aliquam similique. Blanditiis repellat et
        quos!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        soluta vero praesentium officiis quo fugiat iste sint ad sequi, libero
        cum blanditiis ea dolorum, aliquam similique. Blanditiis repellat et
        quos!
      </p>
      <Footer />
    </div>
  );
}
