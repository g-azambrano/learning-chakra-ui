import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import ArrowIcon from './arrow.svg'

export const Hero = () => {
  return (
    <VStack spacing="4">
      <Heading fontSize="md" fontWeight="light">
        Intercom For Marketing
      </Heading>
      <Heading fontSize="6xl" as="h1">
        Drive holistic growth
      </Heading>
      <Container maxW="container.md">
        <Text textAlign="center" fontSize="26px" fontWeight="400">
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
        >
          Learn more
        </Button>
      </HStack>
      <HStack>
        <Text fontSize="13px">Already using intercom?</Text>
        <Button fontSize="13px" variant="link">
          Sign in
        </Button>
      </HStack>
    </VStack>
  );
};
