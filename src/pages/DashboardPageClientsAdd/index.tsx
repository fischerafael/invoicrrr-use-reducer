import { Button, HStack, VStack } from "@chakra-ui/react";
import { theme } from "../../config/theme";
import { DashboardTemplate } from "../../src/components/DashboardTemplate";
import { SideBar } from "../../src/components/SideBar";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const DashboardPageClientsAdd = () => {
  const handleAddClient = () => {
    handleNavigateTo("/dashboard/clients");
  };

  return (
    <DashboardTemplate
      sidebar={<SideBar />}
      main={
        <VStack w="full" spacing="8">
          <HStack w="full" justify="flex-end">
            <Button
              onClick={handleAddClient}
              color="gray.50"
              colorScheme={theme.title}
            >
              Cancelar
            </Button>
          </HStack>
        </VStack>
      }
    />
  );
};
