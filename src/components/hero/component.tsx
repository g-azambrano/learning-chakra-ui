import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Link,
  Stack,
} from "@chakra-ui/react";
import ArrowIcon from "./arrow.svg";

export const Hero = () => {
  return (
    <VStack spacing={[2, 4]} textAlign="center">
      <Heading
        fontSize="md"
        fontWeight="light"
        fontFamily="Intercom Brand"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        Intercom For Marketing
      </Heading>
      <Heading
        fontSize={["4xl", "6xl"]}
        w={["min", "unset"]}
        as="h1"
        fontFamily="Honey Bold Banner"
      >
        Drive holistic growth
      </Heading>
      <Container maxW="container.md">
        <Text fontSize={["16px", "26px"]} fontWeight="400" fontFamily="Graphik">
          Increase conversions, prove product value and strengthen customer
          relationships at every step.
        </Text>
      </Container>
      <Stack direction={["column", "row"]} spacing={[2, 4]}>
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
      </Stack>
      <HStack pt={2}>
        <Text fontSize="13px" fontFamily="Graphik">
          Already using intercom?
        </Text>
        <Link
          fontSize="13px"
          fontFamily="Graphik"
          borderBottom="1px solid"
          sx={{
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          Sign in
        </Link>
      </HStack>
    </VStack>
  );
};
