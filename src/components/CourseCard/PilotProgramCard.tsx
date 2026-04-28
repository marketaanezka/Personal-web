import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Button,
  VStack,
  Input,
  FormControl,
  Box,
  Badge,
  Image,
  HStack,
  Divider,
  UnorderedList,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import axios from "axios";

const PilotProgramCard: FC = () => {
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
          message: "PILOTNI PROGRAM " + email + " is interested in course",
        },
      });

      toast({
        title: "Děkuji za zájem! 🎉",
        description: "Do 24 hodin ti pošlu informace na e-mail.",
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
    <Card>
      <Stack>
        <CardBody>
          <Box display="flex" alignItems="center" gap={2} mb={6}>
            <Heading size="lg">Kariérní akcelerátor</Heading>
            <Badge colorScheme="purple" fontSize="md" px={2} py={1}>
              Pilotní program
            </Badge>
          </Box>

          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Frustruje tě pozice, ve které se jako IT kandidát nacházíš?
          </Text>

          <VStack align="start" spacing={6} mb={6}>
            <Box>
              <UnorderedList spacing={2} ml={{ base: 4, md: 8, lg: 14 }}>
                <ListItem>Všechno filtruje AI místo lidí</ListItem>
                <ListItem>Stovky CV bez odpovědi</ListItem>
                <ListItem>
                  Víš, že jsi kvalitní kandidát, ale nedostáváš šanci
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="sm" mb={3}>
                Chceš se naučit:
              </Heading>
              <UnorderedList spacing={2} ml={{ base: 4, md: 8, lg: 14 }}>
                <ListItem>
                  Jak se přestat podceňovat a ukázat svou hodnotu
                </ListItem>
                <ListItem>
                  Jak dnes reálně funguje nábor a proč nedostáváš odpovědi
                </ListItem>
                <ListItem>
                  Jak získat příležitosti mimo pracovní portály
                </ListItem>
                <ListItem>
                  Jak se prezentovat tak, aby tě zvali na pohovory
                </ListItem>
              </UnorderedList>
            </Box>

            <Divider />

            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              gap={8}
              overflow="hidden"
            >
              <Stack w={{ base: "100%", md: "60%" }}>
                <Box>
                  <Heading size="md" mb={3}>
                    Co ti nabízím:
                  </Heading>
                  <Box
                    border="1px solid"
                    borderColor="purple.300"
                    p={4}
                    borderRadius="md"
                    mb={4}
                  >
                    <UnorderedList spacing={2} ml={4}>
                      <ListItem>
                        <Text fontWeight="bold">
                          2 týdny intenzivní spolupráce
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text fontWeight="bold">4 online setkání</Text>
                      </ListItem>
                      <ListItem>
                        <Text fontWeight="bold">
                          Pracovní listy pro okamžité použití
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text fontWeight="bold">
                          Maximální kapacita 10 účastníků
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>

                <Box>
                  <Heading size="sm" mb={3}>
                    Za 14 dní:
                  </Heading>
                  <UnorderedList spacing={2} ml={4}>
                    <ListItem>
                      Víš proč tě firmy přehlížely - a jak to změnit
                    </ListItem>
                    <ListItem>Máš CV, které tě dostane na pohovor</ListItem>
                    <ListItem>
                      Chápeš strategii, která tě posune na současném trhu práce
                    </ListItem>
                    <ListItem>Cítíš, že máš kariéru ve svých rukou</ListItem>
                  </UnorderedList>
                </Box>
              </Stack>
              <Box
                display={{ base: "block" }}
                minW={{ md: "300px" }}
                maxW={{ md: "400px" }}
                w={{ md: "40%" }}
                position="relative"
                borderRadius={"md"}
              >
                <Image
                  objectFit="cover"
                  maxW="100%"
                  h="100%"
                  src="https://res.cloudinary.com/doqtwlcxw/image/upload/v1725034099/ArmchairApplifting_cpglwo.jpg"
                  alt="Osoba pracující na počítači"
                />
              </Box>
            </Box>

            <Box>
              <Heading size="sm" mb={3} mt={6}>
                Je to pro tebe, pokud:
              </Heading>
              <UnorderedList spacing={2} ml={{ base: 4, md: 8, lg: 14 }}>
                <ListItem>Posíláš životopisy, ale odpovědi nepřichází</ListItem>
                <ListItem>
                  Nechceš další zkratkovité AI tipy, ale funkční strategii
                </ListItem>
                <ListItem>Máš 5-7 hodin týdně pro práci na sobě</ListItem>
                <ListItem>Jsi ready vystoupit z komfortní zóny</ListItem>
                <ListItem>Dáváš a přijímáš konstruktivní feedback</ListItem>
              </UnorderedList>
            </Box>

            <Divider />

            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              gap={8}
              overflow="hidden"
              w={"100%"}
            >
              <Box
                display={{ base: "block" }}
                minW={{ md: "300px" }}
                maxW={{ md: "400px" }}
                w={{ md: "60%" }}
                position="relative"
                borderRadius={"md"}
              >
                <Image
                  objectFit="cover"
                  maxW="100%"
                  h="100%"
                  src="https://res.cloudinary.com/doqtwlcxw/image/upload/v1777411340/DSC_1424_tcjk7s.jpg"
                  alt="keynote speaker"
                />
              </Box>
              <Stack w={{ base: "100%", md: "40%" }}>
                <Box p={4} borderRadius="md">
                  <VStack spacing={3} align="start">
                    <Box>
                      <Text>
                        <Text as="span" fontWeight="bold">
                          Začátek:
                        </Text>{" "}
                        11.5. (pondělí)
                      </Text>
                      <Text>
                        <Text as="span" fontWeight="bold">
                          Dny:
                        </Text>{" "}
                        Pondělí a čtvrtek
                      </Text>
                      <Text>
                        <Text as="span" fontWeight="bold">
                          Čas:
                        </Text>{" "}
                        17:00-18:30, online
                      </Text>
                      <Text>
                        <Text as="span" fontWeight="bold">
                          Kapacita:
                        </Text>{" "}
                        10 míst (pilotní program)
                      </Text>
                    </Box>

                    <Box>
                      <Heading size="sm" mb={2}>
                        Cena:
                      </Heading>
                      <HStack spacing={2}>
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          color="purple.400"
                        >
                          1 990,- Kč
                        </Text>
                        <Text
                          as="s"
                          fontSize="lg"
                          opacity={0.6}
                          color="gray.500"
                        >
                          5 990,-
                        </Text>
                      </HStack>
                      <Text fontSize="sm" opacity={0.7} mt={1}>
                        Pilotní cena
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </Stack>
            </Box>
          </VStack>

          <form onSubmit={handleSubmit}>
            <Text as="span" fontWeight="bold" mb={2} display="block">
              Pro rezervaci místa zadej svůj email:
            </Text>
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
                size="lg"
                width="full"
                onClick={handleSubmit}
                fontWeight="bold"
                fontSize="md"
                py={6}
                type="submit"
                isLoading={loading}
              >
                Chci se zapojit do pilotního programu
              </Button>
            </VStack>
          </form>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default PilotProgramCard;
