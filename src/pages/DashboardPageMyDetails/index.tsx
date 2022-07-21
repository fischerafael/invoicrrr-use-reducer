import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { DashboardTemplate } from "../../components/DashboardTemplate";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Input";
import { FormEvent, useEffect, useState } from "react";
import { setLocalStorage } from "../../utils/setLocalStorage";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { getLocalStorage } from "../../utils/getLocalStorage";
import { removeLocalStorage } from "../../utils/removeLocalStorage";

interface IMyDetails {
  name: string;
  company: string;
  address: string;
  postalCode: string;
  id: string;
  city: string;
  country: string;
  email: string;
  phone: string;
}

const MY_DETAILS_INITIAL_STATE: IMyDetails = {
  name: "",
  company: "",
  address: "",
  postalCode: "",
  id: "",
  city: "",
  country: "",
  email: "",
  phone: "",
};

export const DashboardPageMyDetails = () => {
  const [myDetails, setMyDetails] = useState<IMyDetails>(
    MY_DETAILS_INITIAL_STATE
  );

  const handleResetMyDetails = () => {
    setMyDetails(MY_DETAILS_INITIAL_STATE);
    removeLocalStorage("@invoicrrr-myDetails");
  };

  const handleSaveMyDetails = (e: FormEvent) => {
    e.preventDefault();
    setLocalStorage<IMyDetails>("@invoicrrr-myDetails", myDetails);
    handleNavigateTo("/dashboard");
  };

  useEffect(() => {
    const myDetails = getLocalStorage<IMyDetails>("@invoicrrr-myDetails");
    if (!myDetails) return;
    setMyDetails(myDetails);
  }, []);

  return (
    <DashboardTemplate
      sidebar={<SideBar />}
      main={
        <VStack w="full" spacing="8" as="form" onSubmit={handleSaveMyDetails}>
          <Input
            placeholder="Your Name"
            value={myDetails.name}
            onChange={(e) =>
              setMyDetails({ ...myDetails, name: e.target.value })
            }
          />
          <Input
            placeholder="Your Company Name"
            value={myDetails.company}
            onChange={(e) =>
              setMyDetails({ ...myDetails, company: e.target.value })
            }
          />
          <Input
            placeholder="Your Address"
            value={myDetails.address}
            onChange={(e) =>
              setMyDetails({ ...myDetails, address: e.target.value })
            }
          />

          <HStack w="full" spacing="8">
            <Input
              placeholder="Your Postal Code"
              value={myDetails.postalCode}
              onChange={(e) =>
                setMyDetails({ ...myDetails, postalCode: e.target.value })
              }
            />
            <Input
              placeholder="Your Tax / ID Number"
              value={myDetails.id}
              onChange={(e) =>
                setMyDetails({ ...myDetails, id: e.target.value })
              }
            />
          </HStack>

          <HStack w="full" spacing="8">
            <Input
              placeholder="Your City"
              value={myDetails.city}
              onChange={(e) =>
                setMyDetails({ ...myDetails, city: e.target.value })
              }
            />
            <Input
              placeholder="Your Country"
              value={myDetails.country}
              onChange={(e) =>
                setMyDetails({ ...myDetails, country: e.target.value })
              }
            />
          </HStack>

          <HStack w="full" spacing="8">
            <Input
              placeholder="Your Email"
              type="email"
              value={myDetails.email}
              onChange={(e) =>
                setMyDetails({ ...myDetails, email: e.target.value })
              }
            />
            <Input
              placeholder="Your Phone"
              value={myDetails.phone}
              onChange={(e) =>
                setMyDetails({ ...myDetails, phone: e.target.value })
              }
            />
          </HStack>

          <HStack w="full" spacing="8" justify="space-between">
            <Button
              alignSelf="flex-end"
              variant="ghost"
              colorScheme="yellow"
              onClick={handleResetMyDetails}
            >
              Reset My Details
            </Button>

            <Button alignSelf="flex-end" colorScheme="yellow" type="submit">
              Save
            </Button>
          </HStack>
        </VStack>
      }
    />
  );
};
