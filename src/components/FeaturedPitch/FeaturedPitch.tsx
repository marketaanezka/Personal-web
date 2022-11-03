import Link from "next/link";
import Image from "next/image";
import juniorguru from "../../../public/img/juniorguru.png";
import wdf from "../../../public/img/wdf.png";
import jury from "../../../public/img/jurapodcast.jpeg";
import styles from "./FeaturedPitch.module.scss";
import Carousel from "./Carousel";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Featured in</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus ullam repudiandae libero sint velit excepturi
        voluptates impedit!
      </p>
      <Carousel />
    </section>
  );
};

export default FeaturedPitch;
