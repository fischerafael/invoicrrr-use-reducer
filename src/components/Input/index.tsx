import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface IInput extends InputProps {}

export const Input = ({ ...props }: IInput) => {
  return <ChakraInput variant="flushed" borderColor="gray.800" {...props} />;
};
