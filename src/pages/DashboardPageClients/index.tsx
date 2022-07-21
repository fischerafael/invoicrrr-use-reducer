import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { theme } from "../../config/theme";
import { DashboardTemplate } from "../../src/components/DashboardTemplate";
import { SideBar } from "../../src/components/SideBar";
import { useClientContext } from "../../store/clients";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { Card } from "../Card";

export const DashboardPageClients = () => {
  const { handleAddClient } = useClientContext();

  return (
    <DashboardTemplate
      sidebar={<SideBar />}
      main={
        <VStack w="full" spacing="8">
          <HStack w="full" justify="flex-end">
            <Button
              onClick={() => handleAddClient()}
              color="gray.50"
              colorScheme={theme.title}
            >
              Adicionar
            </Button>
          </HStack>

          <Card
            title="Guildhawk"
            subTitle="Head Office 18th and 19th Floors, 100 Bishopsgate, London EC2M 1GT, UK"
          />
          <Card
            title="Guildhawk"
            subTitle="Head Office 18th and 19th Floors, 100 Bishopsgate, London EC2M 1GT, UK"
          />
          <Card
            title="Guildhawk"
            subTitle="Head Office 18th and 19th Floors, 100 Bishopsgate, London EC2M 1GT, UK"
          />
          <Card
            title="Guildhawk"
            subTitle="Head Office 18th and 19th Floors, 100 Bishopsgate, London EC2M 1GT, UK"
          />
        </VStack>
      }
    />
  );
};
