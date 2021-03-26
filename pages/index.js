import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Enim sit ad voluptate amet aliqua id mollit veniam non. Aute aute
        laboris do eiusmod. Pariatur commodo minim eiusmod deserunt incididunt
        ea enim culpa deserunt Lorem deserunt consectetur sit. Lorem
        exercitation incididunt sit consectetur nulla adipisicing duis et
        consectetur laborum proident laboris deserunt. Aliquip reprehenderit
        aliqua fugiat commodo nulla laborum aliquip excepteur in. Sint eu sit ad
        mollit aliqua. Ipsum consequat ipsum laborum velit fugiat consequat
        dolore fugiat deserunt occaecat aliqua Lorem tempor.
      </p>
      <p className={styles.text}>
        Enim sit ad voluptate amet aliqua id mollit veniam non. Aute aute
        laboris do eiusmod. Pariatur commodo minim eiusmod deserunt incididunt
        ea enim culpa deserunt Lorem deserunt consectetur sit. Lorem
        exercitation incididunt sit consectetur nulla adipisicing duis et
        consectetur laborum proident laboris deserunt. Aliquip reprehenderit
        aliqua fugiat commodo nulla laborum aliquip excepteur in. Sint eu sit ad
        mollit aliqua. Ipsum consequat ipsum laborum velit fugiat consequat
        dolore fugiat deserunt occaecat aliqua Lorem tempor.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>Go to Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
