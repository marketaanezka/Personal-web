import Link from "next/link";
import styles from "./AboutMePitch.module.scss";

const AboutMePitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>About Me</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus ullam repudiandae libero sint velit excepturi
        voluptates impedit!
      </p>
      <Link href="/about">Read more &#x2192;</Link>
    </section>
  );
};

export default AboutMePitch;
