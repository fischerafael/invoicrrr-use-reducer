import { Text, VStack } from "@chakra-ui/react";
import { Link } from "../Link";

export const SideBar = () => {
  return (
    <VStack w="full" spacing="16">
      <Text fontWeight="bold">Invoicrrr</Text>

      <VStack w="full" align="flex-start" spacing="4">
        <Link href="/dashboard/" anchor="Invoices" />
        <Link href="/dashboard/clients" anchor="Clients" />
        <Link href="/dashboard/my-details" anchor="My Details" />
      </VStack>
    </VStack>
  );
};
