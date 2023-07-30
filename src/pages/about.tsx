import styles from "../styles/About.module.scss";
import Image, { StaticImageData } from "next/image";
import laptop from "../assets/images/laptop-1.png";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Heart, Instagram } from "../assets/Icons/icons";
import { FC } from "react";

interface InstagramImageProps {
  imageLink: string;
  imageSource: StaticImageData;
}

const InstagramImage: FC<InstagramImageProps> = ({
  imageLink,
  imageSource,
}) => {
  return (
    <Box
      className={styles.paragraphImage}
      background={"#4d3d9f"}
      borderRadius={"md"}
    >
      <Link href="https://www.instagram.com/marketa_willis/">
        <Flex
          p={1}
          alignItems={"center"}
          justifyContent="space-between"
          color={"white"}
        >
          <Flex alignItems={"center"}>
            <Instagram fontSize="xl" mr={1} opacity={0.7} />
            <Text fontSize="0.8rem">marketa_willis</Text>
          </Flex>
          <Heart fontSize="md" mr={2} />
        </Flex>
      </Link>
      <Link href={imageLink}>
        <Image src={imageSource} alt="laptop" />
      </Link>
    </Box>
  );
};

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
        <Box className={styles.paragraphLeft}>
          <Text>
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
            reiciendis eveniet explicabo, maxime aspernatur quas n
          </Text>
          <InstagramImage
            imageLink="https://www.instagram.com/p/CkIfwipjfRm/"
            imageSource={laptop}
          />
        </Box>
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
            modi. Recusandae atque possimus distinctio eligendi vel quisqu
          </p>
          <InstagramImage
            imageLink="https://www.instagram.com/p/CkIfwipjfRm/"
            imageSource={laptop}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
