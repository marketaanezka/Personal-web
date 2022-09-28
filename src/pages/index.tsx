import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import profile from "../../public/img/photo-profile.png";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Intro />
      {/* <Image src={profile} alt="woman smiling" layout="fixed" /> */}
      <section>
        <h2>
          <Link href="/about">About me</Link>
        </h2>
      </section>
      <section>
        <h2>
          <Link href="/featured">Featured in</Link>
        </h2>
      </section>
      <section>
        <h2>
          <Link href="/skills">My skills</Link>
        </h2>
      </section>
      <section>
        <h2>
          <Link href="/portfolio">Portfolio</Link>
        </h2>
      </section>
    </div>
  );
};

export default Home;
