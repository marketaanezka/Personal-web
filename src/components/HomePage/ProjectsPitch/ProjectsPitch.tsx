import Link from "next/link";
import ProjectCardMini from "../../ProjectCardMini/ProjectCardMini";
import styles from "./ProjectsPitch.module.scss";

const ProjectsPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Projekty</h2>
      <ProjectCardMini />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus ullam repudiandae libero sint velit excepturi
        voluptates impedit!
      </p>
      <Link href="/about" className={styles.link}>
        Read more &#x2192;
      </Link>
    </section>
  );
};

export default ProjectsPitch;
