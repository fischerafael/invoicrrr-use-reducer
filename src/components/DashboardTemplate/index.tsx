import { HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DashboardTemplateProps {
  sidebar: ReactNode;
  main: ReactNode;
}

export const DashboardTemplate = ({
  sidebar,
  main,
}: DashboardTemplateProps) => {
  return (
    <HStack
      w="full"
      bg="gray.900"
      minH="100vh"
      align="flex-start"
      color="gray.50"
      spacing="0"
    >
      <VStack
        w="full"
        bg="gray.800"
        maxW="200px"
        h="100vh"
        align="flex-start"
        p="8"
        shadow="xl"
      >
        {sidebar}
      </VStack>

      <VStack
        bgGradient="linear(to-b, gray.900, gray.800)"
        w="full"
        align="center"
        p="8"
        h="100vh"
        overflowY="auto"
      >
        <VStack w="full" maxW="container.sm">
          {main}
        </VStack>
      </VStack>
    </HStack>
  );
};
