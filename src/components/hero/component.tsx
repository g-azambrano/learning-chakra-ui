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
    <VStack spacing={[2, 6]} textAlign="center">
      <Heading variant="eyebrow">Intercom For Marketing</Heading>
      <Heading
        fontSize={["4xl", "6xl"]}
        fontWeight={["bold", "extrabold"]}
        lineHeight="none"
        w={["min", "unset"]}
        as="h1"
        color="black"
      >
        Drive holistic growth
      </Heading>
      <Container maxW="container.md">
        <Text fontSize={["16px", "26px"]} mb={{ base: '5', md: '8', lg: '0' }}>
          Increase conversions, prove product value and strengthen customer
          relationships at every step.
        </Text>
      </Container>
      <Stack direction={["column", "row"]} spacing={[2, 4]}>
        <IntercomButton
          variant="link"
          size="md"
          fontWeight="bold"
          colorScheme="black"
          sx={{
            "&:hover .chakra-button__icon": {
              transition: "all 200ms ease 0s",
              transform: 'translateX(4px)'
            }
          }}
        >
          Learn more
        </IntercomButton>
        <IntercomButton size="md" variant="primary">Learn more</IntercomButton>
      </Stack>
      <HStack pt={2}>
        <Text fontSize="disclaimer">Already using intercom?</Text>
        <Link
          fontSize="disclaimer"
          borderBottom='1px solid'
          _hover={
            { textDecoration: 'none' }
          }
        >
          Sign in
        </Link>
      </HStack>
    </VStack>
  );
};
