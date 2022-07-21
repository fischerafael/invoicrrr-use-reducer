import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { theme } from "../../config/theme";
import { DashboardTemplate } from "../../components/DashboardTemplate";
import { SideBar } from "../../components/SideBar";
import { useClientContext } from "../../store/clients";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { Card } from "../Card";

export const DashboardPageClients = () => {
  const { clients, handleDeleteClient } = useClientContext();

  return (
    <DashboardTemplate
      sidebar={<SideBar />}
      main={
        <VStack w="full" spacing="8">
          <HStack w="full" justify="flex-end">
            <Button
              onClick={() => handleNavigateTo("/dashboard/clients/add")}
              colorScheme={theme.title}
            >
              Add
            </Button>
          </HStack>

          {clients?.map((client) => (
            <Card
              key={client.id}
              title={client.name}
              subTitle={`${client.address}, ${client.city}, ${client.country}`}
              onDelete={() => handleDeleteClient(client.id!)}
            />
          ))}
        </VStack>
      }
    />
  );
};
