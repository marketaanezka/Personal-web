import Link from "next/link";
import styles from "./OfferPitch.module.scss";

const OfferPitch = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.subtitle}>Coaching programme</p>
      <h2 className={styles.heading}>How I can help</h2>
      <h3>Career guidance</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        tempora ab? Facere veniam
      </p>
      <h3>Portfolio pimp</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        tempora ab? Facere veniam
      </p>
      <h3>Interview counseling</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        tempora ab? Facere veniam
      </p>
      <h3>Support after first months</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        tempora ab? Facere veniam
      </p>
      <Link href="/coaching">
        <button className={styles.linkButton}>Learn more</button>
      </Link>
    </section>
  );
};

export default OfferPitch;
