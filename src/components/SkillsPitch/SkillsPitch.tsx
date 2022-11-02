import Link from "next/link";
import styles from "./SkillsPitch.module.scss";

const SkillsPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>My skills</h2>
      <p>
        As a self taught developer... from different industry... how to
        transfer... mental load, how to succeed, interview, network, beat
        imposter syndrome
      </p>
      <Link href="/skills">Read more &#x2192;</Link>
    </section>
  );
};

export default SkillsPitch;
