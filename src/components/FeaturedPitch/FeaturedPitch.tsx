import Link from "next/link";
import styles from "./FeaturedPitch.module.scss";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Featured in</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus ullam repudiandae libero sint velit excepturi
        voluptates impedit!
      </p>
      <Link href="/featured">Read more &#x2192;</Link>
    </section>
  );
};

export default FeaturedPitch;
