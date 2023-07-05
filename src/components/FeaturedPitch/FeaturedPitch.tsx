import Link from "next/link";
import Image from "next/image";
import juniorguru from "../../../public/img/juniorguru.png";
import wdf from "../../../public/img/wdf.png";
import styles from "./FeaturedPitch.module.scss";
import heroine from "../../../public/img/heroine.png";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Featured in</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus.
      </p>
      <div className={styles.thumbs}>
        <Image
          src={juniorguru}
          alt="junior guru logo"
          width={100}
          height={100}
        />
        <Image src={wdf} alt="wdf logo" width={100} height={100} />
        <Image
          src={heroine}
          alt="magazine heroine logo"
          width={100}
          height={100}
        />
      </div>
      <Link href="/featured" className={styles.link}>
        Read more &#x2192;
      </Link>
    </section>
  );
};

export default FeaturedPitch;
