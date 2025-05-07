import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Button,
  Input,
  FormControl,
  useToast,
  VStack,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import styles from "./CourseCard.module.scss";
import axios from "axios";

const CourseInterestCard: FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await axios({
        method: "post",
        url: "/api/subscribe",
        data: {
          name: email,
          email: email,
          message: "USER " + email + " is interested in course",
        },
      });

      toast({
        title: "Děkuji za zájem! 🎉",
        description: "Dám vědět, jakmile bude kurz k dispozici.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setEmail("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Něco se pokazilo",
        description: "Zkuste to prosím znovu.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
      my={2}
      className={styles.card}
    >
      <Box
        display={{ base: "none", md: "block" }}
        minW={{ md: "300px" }}
        maxW={{ md: "400px" }}
        w={{ md: "40%" }}
        position="relative"
      >
        <Image
          objectFit="cover"
          maxW="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Osoba pracující na počítači"
        />
      </Box>

      <Stack w={{ base: "100%", md: "60%" }}>
        <CardBody>
          <Heading size="md">Autentické a efektivní hledání práce v IT</Heading>
          <Text py="4" className={styles.description}>
            Připravuji kurz zaměřený na hledání práce v IT, které přináší
            skutečné výsledky. V kurzu se naučíte:
          </Text>
          <Text as="ul" ml={4} mb={4}>
            <li>co musíte mít připravené před hledáním práce</li>
            <li>kde a jak vznikají nové pozice v IT</li>
            <li>jak cílit na správné firmy a přestat se porovnávat </li>
            <li>jak mít sebevědomí na pohovorech a nebát se odmítnutí</li>
            <li>jak se zorientovat na trhu vyjednávat o mzdě</li>
          </Text>
          <Text fontWeight="bold" mb={4}>
            Kurz je ve vývoji. Zanechte svůj email a buďte první, kdo se dozví o
            jeho spuštění!
          </Text>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <Input
                  type="email"
                  placeholder="Váš email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="purple"
                size="md"
                width="full"
                type="submit"
                isLoading={loading}
              >
                Mám zájem o kurz
              </Button>
            </VStack>
          </form>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CourseInterestCard;
