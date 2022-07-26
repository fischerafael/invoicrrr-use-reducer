import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface IInput extends InputProps {}

export const Input = ({ ...props }: IInput) => {
  return (
    <ChakraInput
      _placeholder={{ color: "gray.700" }}
      variant="flushed"
      borderColor="gray.800"
      color="gray.500"
      {...props}
    />
  );
};
