import { Text, VStack } from "@chakra-ui/react";
import { Link } from "../Link";

export const SideBar = () => {
  return (
    <VStack w="full" spacing="16">
      <Text fontWeight="bold">Invoicrrr</Text>

      <VStack w="full" align="flex-start" spacing="4">
        <Link href="/dashboard/" anchor="Invoices" />
        <Link href="/dashboard/my-details" anchor="Personal Details" />
        <Link href="/dashboard/banking-details" anchor="Banking Details" />
        <Link href="/dashboard/clients" anchor="Clients" />
      </VStack>
    </VStack>
  );
};
