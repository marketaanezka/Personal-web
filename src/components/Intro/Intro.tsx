import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Markéta Willis, frontend vývojářka, mentor a lektor
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          eveniet quos temporibus ullam repudiandae libero sint velit excepturi
          voluptates impedit!
        </p>
      </div>
      <div className={styles.imageWrapper}>
        {/* <div className="profile-image"></div> */}
      </div>
    </section>
  );
};

export default Intro;
