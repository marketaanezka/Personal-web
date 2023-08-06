import styles from "../styles/About.module.scss";
import Image, { StaticImageData } from "next/image";
import laptop from "../assets/images/laptop-1.png";
import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Heart, Instagram } from "../assets/Icons/icons";
import { FC } from "react";
import { CldImage } from "next-cloudinary";

interface InstagramImageProps {
  imageLink: string;
  imageSource: string;
  imageAlt: string;
}

const InstagramImage: FC<InstagramImageProps> = ({
  imageLink,
  imageSource,
  imageAlt,
}) => {
  return (
    <Box
      className={styles.paragraphImage}
      background={useColorModeValue("#c9c2ee", "#594d91")}
      borderRadius={"md"}
    >
      <Link href="https://www.instagram.com/marketa_willis/">
        <Flex
          p={1}
          alignItems={"center"}
          justifyContent="space-between"
          color={useColorModeValue("gray.900", "white")}
        >
          <Flex alignItems={"center"}>
            <Instagram fontSize="xl" mr={1} opacity={0.7} />
            <Text fontSize="0.8rem">marketa_willis</Text>
          </Flex>
          <Heart fontSize="md" mr={2} />
        </Flex>
      </Link>
      <Link href={imageLink}>
        <Image
          src={imageSource}
          alt={imageAlt}
          width={800}
          height={800}
          className={styles.image}
        />
      </Link>
    </Box>
  );
};

const About = () => {
  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Těší mě! Jsem Markéta a tohle je můj příběh.
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            eveniet quos temporibus ullam repudiandae libero sint velit
            excepturi voluptates impedit!
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <CldImage
            width="350"
            height="350"
            src="rgtalk_jtakgk"
            alt="a girl programmer lecturer smiling"
          />
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
            imageSource="https://res.cloudinary.com/doqtwlcxw/image/upload/c_fill,h_800,w_800/v1691359480/content_03_zsq0np.png"
            imageAlt="corner of a monitor with code on it with iced coffee next to it"
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
            imageSource="https://res.cloudinary.com/doqtwlcxw/image/upload/c_fill,h_800,w_800/v1691358223/content_02_ypvojv.jpg"
            imageAlt="A girl programmer next to a monitor with code on it"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
