import { Button, Checkbox, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { DashboardTemplate } from "../../components/DashboardTemplate";
import { Input } from "../../components/Input";
import { SideBar } from "../../components/SideBar";
import { theme } from "../../config/theme";

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

export const DashboardPageBankingDetails = () => {
  const [myDetails, setMyDetails] = useState<IMyDetails>(
    MY_DETAILS_INITIAL_STATE
  );

  const [hasIntermediate, setHasIntermediate] = useState(true);

  const handleHasIntermediateChange = (e: any) => {
    if (hasIntermediate) {
      setHasIntermediate(false);
      return;
    }
    setHasIntermediate(true);
  };

  return (
    <DashboardTemplate
      sidebar={<SideBar />}
      main={
        <VStack w="full" spacing="8" as="form">
          <Text alignSelf="start" color={theme.title}>
            1. Beneficiary Bank Details
          </Text>
          <Input
            placeholder="Account Onwer Name"
            value={myDetails.name}
            onChange={(e) =>
              setMyDetails({ ...myDetails, name: e.target.value })
            }
          />
          <Input
            placeholder="Beneficiary Bank Name"
            value={myDetails.name}
            onChange={(e) =>
              setMyDetails({ ...myDetails, name: e.target.value })
            }
          />

          <HStack w="full" spacing="8">
            <Input
              placeholder="Beneficiary Bank SWIFT"
              value={myDetails.name}
              onChange={(e) =>
                setMyDetails({ ...myDetails, name: e.target.value })
              }
            />
            <Input
              placeholder="Beneficiary Bank IBAN"
              value={myDetails.name}
              onChange={(e) =>
                setMyDetails({ ...myDetails, name: e.target.value })
              }
            />
          </HStack>

          <HStack w="full" spacing="8">
            <Input
              placeholder="Beneficiary Bank Address"
              value={myDetails.name}
              onChange={(e) =>
                setMyDetails({ ...myDetails, name: e.target.value })
              }
            />
            <Input
              placeholder="Beneficiary Bank City"
              value={myDetails.name}
              onChange={(e) =>
                setMyDetails({ ...myDetails, name: e.target.value })
              }
            />
          </HStack>

          <HStack w="full" spacing="8">
            <Input
              placeholder="Beneficiary Bank Country"
              value={myDetails.name}
              onChange={(e) =>
                setMyDetails({ ...myDetails, name: e.target.value })
              }
            />
            <Input
              placeholder="Beneficiary Bank Postal Code"
              value={myDetails.name}
              onChange={(e) =>
                setMyDetails({ ...myDetails, name: e.target.value })
              }
            />
          </HStack>

          <HStack w="full" justify="space-between">
            <Text
              alignSelf="start"
              color={hasIntermediate ? theme.title : "gray.600"}
            >
              2. Intermediate Bank
            </Text>

            <Checkbox
              colorScheme="yellow"
              isChecked={hasIntermediate}
              onChange={handleHasIntermediateChange}
            >
              Has Intermediate Bank
            </Checkbox>
          </HStack>

          {hasIntermediate && (
            <>
              <Input
                placeholder="Intermediate Bank Account Owner"
                value={myDetails.name}
                onChange={(e) =>
                  setMyDetails({ ...myDetails, name: e.target.value })
                }
              />

              <Input
                placeholder="Intermediate Bank Account Number"
                value={myDetails.name}
                onChange={(e) =>
                  setMyDetails({ ...myDetails, name: e.target.value })
                }
              />

              <HStack w="full" spacing="8">
                <Input
                  placeholder="Intermediate Bank Name"
                  value={myDetails.name}
                  onChange={(e) =>
                    setMyDetails({ ...myDetails, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Intermediate Bank SWIFT"
                  value={myDetails.name}
                  onChange={(e) =>
                    setMyDetails({ ...myDetails, name: e.target.value })
                  }
                />
              </HStack>

              <HStack w="full" spacing="8">
                <Input
                  placeholder="Intermediate Bank City"
                  value={myDetails.name}
                  onChange={(e) =>
                    setMyDetails({ ...myDetails, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Intermediate Bank Country"
                  value={myDetails.name}
                  onChange={(e) =>
                    setMyDetails({ ...myDetails, name: e.target.value })
                  }
                />
              </HStack>
            </>
          )}

          <HStack w="full" spacing="8" justify="space-between">
            <Button alignSelf="flex-end" variant="outline" colorScheme="yellow">
              Reset Banking Details
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
