import {Button, Card, Image, Text, Link as ChakraLink} from "@chakra-ui/react"
import {Portfolio} from "@/api/types";
import Link from "next/link";

export type PortfolioCardProps = {
  onDeletePortfolio: (id: string) => Promise<void>;
  readonly portfolio: Portfolio;
}

export default function PortfolioCard({portfolio, onDeletePortfolio}: PortfolioCardProps) {
  return (
    <Card.Root overflow="hidden">
      <Image
        src={portfolio.imageUrl}
        alt={portfolio.description}
      />
      <Card.Body gap="2">
        <Card.Title>
          <ChakraLink asChild>
            <Link href={`/portfolios/${portfolio.id}`}>{portfolio.name}</Link>
          </ChakraLink>
        </Card.Title>
        <Card.Description>
          {portfolio.description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {portfolio.totalValue || 1000}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button colorPalette={"yellow"} variant={"outline"}>Update</Button>
        <Button colorPalette={"red"} variant={"outline"} onClick={async () => {
          await onDeletePortfolio(portfolio.id);
        }}>Delete</Button>
      </Card.Footer>
    </Card.Root>
  );
}
