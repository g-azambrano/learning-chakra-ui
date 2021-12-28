import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";
import ArrowIcon from "./arrow.svg";

export const Hero = () => {
  return (
    <VStack spacing="4">
      <Heading
        fontSize="md"
        fontWeight="light"
        fontFamily="Intercom Brand"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        Intercom For Marketing
      </Heading>
      <Heading fontSize="6xl" as="h1" fontFamily="Honey Bold Banner">
        Drive holistic growth
      </Heading>
      <Container maxW="container.md">
        <Text
          textAlign="center"
          fontSize="26px"
          fontWeight="400"
          fontFamily="Graphik"
        >
          Increase conversions, prove product value and strengthen customer
          relationships at every step.
        </Text>
      </Container>
      <HStack>
        <Button
          size="lg"
          variant="link"
          py="4"
          px="6"
          rightIcon={<ArrowIcon />}
          fontFamily="Graphik"
        >
          Learn more
        </Button>
        <Button
          size="lg"
          borderRadius="25px"
          colorScheme="blackAlpha"
          py="4"
          px="6"
          rightIcon={<ArrowIcon />}
          fontFamily="Graphik"
        >
          Learn more
        </Button>
      </HStack>
      <HStack>
        <Text fontSize="13px" fontFamily="Graphik">
          Already using intercom?
        </Text>
        <Link fontSize="13px" fontFamily="Graphik" borderBottom="1px solid">
          Sign in
        </Link>
      </HStack>
    </VStack>
  );
};
