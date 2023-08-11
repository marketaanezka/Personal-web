import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { Linkedin } from "../../../assets/Icons/icons";
import PitchHeading from "../../PitchHeading/PitchHeading";
import styles from "./OfferPitch.module.scss";

const OfferPitch = () => {
  return (
    <section className={styles.wrapper}>
      <PitchHeading heading="Co dělám" linkUrl="/about" linkText="Více o mně" />
      <Text></Text>
      <List spacing={3}>
        <ListItem display="flex" alignItems="center">
          <ListIcon as={Linkedin} color="green.500" />
          <Box as="span">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Box>
        </ListItem>
      </List>
    </section>
  );
};

export default OfferPitch;
