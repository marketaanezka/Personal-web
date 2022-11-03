import type { NextPage } from "next";
import Image from "next/image";
import Intro from "../components/Intro/Intro";
import profile from "../../public/img/reactgirlstalk.jpeg";
import styles from "../styles/Home.module.scss";
import AboutMePitch from "../components/AboutMePitch/AboutMePitch";
import OfferPitch from "../components/OfferPitch/OfferPitch";
import FeaturedPitch from "../components/FeaturedPitch/FeaturedPitch";
import SkillsPitch from "../components/SkillsPitch/SkillsPitch";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <div className={styles.imageWrapper}>
        <div className="profile-image"></div>
      </div>
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
