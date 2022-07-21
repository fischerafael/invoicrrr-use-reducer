import { Text } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ILink extends LinkProps {
  anchor: string;
  href: string;
}

export const Link = ({ href, anchor, ...props }: ILink) => {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  return (
    <NextLink href={href} {...props}>
      <Text
        as="a"
        cursor="pointer"
        _hover={{ color: "yellow.600" }}
        color={isActive ? "yellow.600" : "gray.600"}
      >
        {anchor}
      </Text>
    </NextLink>
  );
};
