import {Button, Card, Flex, Grid, Image, Text} from "@chakra-ui/react"
import {Portfolio} from "@/api/types";

export type PortfolioCardProps = {
  readonly portfolio: Portfolio;
}

export default function PortfolioCard({portfolio}: PortfolioCardProps) {
  return (
    <Card.Root overflow="hidden">
      <Image
        src={portfolio.imageUrl}
        alt={portfolio.description}
      />
      <Card.Body gap="2">
        <Card.Title>{portfolio.name}</Card.Title>
        <Card.Description>
          {portfolio.description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {portfolio.totalValue || 1000}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button colorPalette={"green"} variant={"ghost"}>View details</Button>
        <Button colorPalette={"yellow"} variant={"ghost"}>Update</Button>
        <Button colorPalette={"red"} variant={"solid"}>Delete</Button>
      </Card.Footer>
    </Card.Root>
  );
}
