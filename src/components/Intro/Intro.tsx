import styles from "./Intro.module.scss";

const Header = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>
        Hi, I'm Marketa, a Frontend Developer and Lecturer
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus ullam repudiandae libero sint velit excepturi
        voluptates impedit!
      </p>
    </section>
  );
};

export default Header;
