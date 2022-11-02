import type { NextPage } from "next";
import Image from "next/image";
import Intro from "../components/Intro/Intro";
import profile from "../../public/img/photo-profile.png";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import AboutMePitch from "../components/AboutMePitch/AboutMePitch";
import OfferPitch from "../components/OfferPitch/OfferPitch";
import FeaturedPitch from "../components/FeaturedPitch/FeaturedPitch";
import SkillsPitch from "../components/SkillsPitch/SkillsPitch";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Intro />
      {/* <Image src={profile} alt="woman smiling" layout="fixed" /> */}
      <AboutMePitch />
      <SkillsPitch />
      {/* <OfferPitch />
      <FeaturedPitch />
      <section>
        <h2>
          <Link href="/skills">My skills</Link>
        </h2>
      </section>
      <section>
        <h2>
          <Link href="/portfolio">Portfolio</Link>
        </h2>
      </section> */}
    </div>
  );
};

export default Home;
