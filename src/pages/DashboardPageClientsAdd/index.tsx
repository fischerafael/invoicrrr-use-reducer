import { Button, HStack, VStack } from "@chakra-ui/react";
import { theme } from "../../config/theme";
import { DashboardTemplate } from "../../components/DashboardTemplate";
import { SideBar } from "../../components/SideBar";
import { useClientContext } from "../../store/clients";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { Input } from "../../components/Input";

export const DashboardPageClientsAdd = () => {
  const { handleAddClient, client, setClient } = useClientContext();

  const handleSubmit = () => {
    handleAddClient();
    handleNavigateTo("/dashboard/clients");
  };

  return (
    <DashboardTemplate
      sidebar={<SideBar />}
      main={
        <VStack w="full" spacing="8">
          <HStack w="full" justify="flex-end">
            <Button
              onClick={() => handleNavigateTo("/dashboard/clients")}
              color="gray.50"
              colorScheme={theme.title}
            >
              Cancelar
            </Button>
          </HStack>

          <VStack w="full" spacing="8">
            <Input
              placeholder="Name"
              value={client?.name}
              onChange={(e) => {
                setClient({
                  ...client,
                  name: e.target.value,
                });
              }}
            />
            <Input
              placeholder="Address"
              value={client?.address}
              onChange={(e) => {
                setClient({
                  ...client,
                  address: e.target.value,
                });
              }}
            />
            <Input
              placeholder="City"
              value={client?.city}
              onChange={(e) => {
                setClient({
                  ...client,
                  city: e.target.value,
                });
              }}
            />
            <Input
              placeholder="Country"
              value={client?.country}
              onChange={(e) => {
                setClient({
                  ...client,
                  country: e.target.value,
                });
              }}
            />
            <Button
              onClick={handleSubmit}
              color="gray.50"
              colorScheme={theme.title}
              alignSelf="flex-end"
            >
              Salvar
            </Button>
          </VStack>
        </VStack>
      }
    />
  );
};
