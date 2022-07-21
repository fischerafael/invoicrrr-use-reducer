import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import { theme } from "../../config/theme";

interface CardProps {
  title: string;
  subTitle: string;
}

export const Card = ({ title, subTitle }: CardProps) => {
  return (
    <HStack
      w="full"
      bg="gray.800"
      p="8"
      maxW="container.lg"
      spacing="8"
      borderRadius="4"
      _hover={{ bg: "gray.900" }}
      cursor="pointer"
    >
      <Avatar bg={theme.color} color="gray.50" name="Guildhawk" />

      <VStack w="full" align="flex-start">
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{subTitle}</Text>
      </VStack>
    </HStack>
  );
};
