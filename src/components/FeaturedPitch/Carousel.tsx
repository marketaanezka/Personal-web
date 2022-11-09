import Image from "next/image";
import juniorguru from "../../../public/img/juniorguru.png";
import wdf from "../../../public/img/wdf.png";
import jury from "../../../public/img/jurapodcast.jpeg";
import heroine from "../../../public/img/heroine.png";
import styles from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <>
      <div className={styles.carouselImage}>
        <Image
          src={juniorguru}
          alt="junior guru logo"
          width={100}
          height={100}
        />
      </div>
      <Image src={wdf} alt="wdf logo" width={100} height={100} />
      <Image src={jury} alt="svet podle jury logo" width={100} height={100} />
      <Image
        src={heroine}
        alt="magazine heroine logo"
        width={100}
        height={100}
      />
      <button onClick={() => console.log("hi button")}>Click me d</button>
    </>
  );
};

export default Carousel;
