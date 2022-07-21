import { Avatar, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { theme } from "../../config/theme";

interface CardProps {
  title: string;
  subTitle: string;
  onDelete: () => void;
}

export const Card = ({ title, subTitle, onDelete }: CardProps) => {
  return (
    <HStack
      w="full"
      bg="gray.800"
      p="8"
      h="full"
      maxW="container.lg"
      spacing="8"
      borderRadius="4"
      _hover={{ shadow: "lg" }}
    >
      <Avatar bg={theme.color} color="gray.50" name={title} />

      <VStack w="full" align="flex-start" h="full">
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{subTitle}</Text>
      </VStack>

      <DeleteIcon onClick={onDelete} cursor="pointer" color={theme.color} />
    </HStack>
  );
};
