import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.top}></span>
        <span>Hello</span>
        <h1 className={styles.heading}>
          I&#39;m Marketa, a Frontend Developer and Lecturer
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          eveniet quos temporibus ullam repudiandae libero sint velit excepturi
          voluptates impedit!
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <div className="profile-image"></div>
      </div>
    </section>
  );
};

export default Intro;
