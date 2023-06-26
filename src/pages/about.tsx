import styles from "../styles/About.module.scss";
import Image from "next/image";
import laptop from "../assets/images/laptop-1.png";

const About = () => {
  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.top}>
            <span>Hello</span>
          </span>
          <h2 className={styles.heading}>
            I&#39;m Marketa, a Frontend Developer and Lecturer
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            eveniet quos temporibus ullam repudiandae libero sint velit
            excepturi voluptates impedit!
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <div className="aboutme-image"></div>
        </div>
      </section>
      <section className={styles.lighter}>
        <div className={styles.paragraphLeft}>
          <p>
            <div className={styles.paragraphTop}>
              <span>Hello</span>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolore, placeat accusantium quasi sed incidunt culpa
            assumenda praesentium facere blanditiis veniam alias soluta
            consectetur libero, aperiam, doloremque totam. Ex sint fuga at
            maxime dolore voluptate facilis fugit cum explicabo odio distinctio,
            culpa aspernatur veritatis aut inventore deleniti pariatur, porro
            tenetur laudantium exercitationem dolorum quis velit qui? Magnam
            reprehenderit, sunt accusantium omnis iusto consectetur maiores
            modi. Recusandae atque possimus distinctio eligendi vel quisquam
            officia dignissimos debitis deserunt cum. Eos numquam porro iure
            reiciendis eveniet explicabo, maxime aspernatur quas nostrum
            voluptas molestias fuga necessitatibus laboriosam dignissimos nulla
            animi. Nesciunt architecto modi dolore. Eum, labore quaerat?
            Laboriosam laudantium e
          </p>
          <div className={styles.paragraphImage}>
            <Image src={laptop} alt="laptop" />
          </div>
        </div>
        <div className={styles.paragraphRight}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolore, placeat accusantium quasi sed incidunt culpa
            assumenda praesentium facere blanditiis veniam alias soluta
            consectetur libero, aperiam, doloremque totam. Ex sint fuga at
            maxime dolore voluptate facilis fugit cum explicabo odio distinctio,
            culpa aspernatur veritatis aut inventore deleniti pariatur, porro
            tenetur laudantium exercitationem dolorum quis velit qui? Magnam
            reprehenderit, sunt accusantium omnis iusto consectetur maiores
            modi. Recusandae atque possimus distinctio eligendi vel quisquam
            officia dignissimos debitis deserunt cum. Eos numquam porro iure
            reiciendis eveniet explicabo, maxime aspernatur quas nostrum
            voluptas molestias fuga necessitatibus laboriosam dignissimos nulla
            animi. Nesciunt architecto modi dolore. Eum, labore quaerat?
          </p>
          <div className={styles.paragraphImage}>
            <Image src={laptop} alt="laptop" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
