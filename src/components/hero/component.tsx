import {
  Button,
  ButtonProps,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Link,
  Stack,
} from "@chakra-ui/react";
import ArrowIcon from "./arrow.svg";

// See issue https://github.com/chakra-ui/chakra-ui/issues/2989
const IntercomButton = (props: ButtonProps) => (
  <Button rightIcon={<ArrowIcon />} {...props} />
);

export const Hero = () => {
  return (
    <VStack spacing={[2, 4]} textAlign="center">
      <Heading variant="eyebrow">Intercom For Marketing</Heading>
      <Heading
        fontSize={["4xl", "6xl"]}
        w={["min", "unset"]}
        as="h1"
        color="black"
      >
        Drive holistic growth
      </Heading>
      <Container maxW="container.md">
        <Text fontSize={["16px", "26px"]}>
          Increase conversions, prove product value and strengthen customer
          relationships at every step.
        </Text>
      </Container>
      <Stack direction={["column", "row"]} spacing={[2, 4]}>
        <IntercomButton
          variant="link"
          size="lg"
          py="4"
          px="6"
          colorScheme="black"
        >
          Learn more
        </IntercomButton>
        <IntercomButton variant="primary">Learn more</IntercomButton>
      </Stack>
      <HStack pt={2}>
        <Text fontSize="disclaimer">Already using intercom?</Text>
        <Link
          fontSize="disclaimer"
          sx={{
            "&": {
              borderBottom: "1px dotted",
            },
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
