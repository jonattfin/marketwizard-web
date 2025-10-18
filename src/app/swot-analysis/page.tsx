import {Container, Input, InputGroup, Kbd, Card, Image, Grid, Center, Blockquote} from "@chakra-ui/react";
import {LuSearch} from "react-icons/lu";

type SwotCardItem = {
  name: string;
  imageSrc: string;
  description: string;
  data?: string[],
}

const cardItems: SwotCardItem[] = [
  {
    name: "Strengths",
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    description: "Characteristics of the business or project that give it an advantage over others",
    data: [
      "Brand loyalty and reputation",
      "Easy-to-use software products",
      "Strong distribution channels"
    ]
  },
  {
    name: "Weaknesses",
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    description: "Characteristics that place the business or project at a disadvantage relative to others.",
    data: [
      "Dependence on hardware manufacturers",
      "Past poor acquisitions",
      "Security flaws criticism"
    ]
  },
  {
    name: "Opportunities",
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    description: "Elements in the environment that the business or project could exploit to its advantage.",
    data: [
      "Cloud infrastructure growth",
      "AI innovation and new products",
      "Growth in emerging markets"
    ]
  },
  {
    name: "Threats",
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    description: "Elements in the environment that could cause trouble for the business or project.",
    data: [
      "Intense competition (AWS, Google)",
      "Rapid technological changes",
      "Cybersecurity risks"
    ]
  }
]

export default async function SwotAnalysisPage() {
  return (
    <Container>
      <Center>
        <InputGroup maxW={"md"} flex="1" startElement={<LuSearch/>} endElement={<Kbd>⌘K</Kbd>}>
          <Input placeholder="Enter the stock symbol to perform the SWOT analysis"/>
        </InputGroup>
      </Center>
      <div>&nbsp;</div>
      <Grid templateColumns="repeat(2, 1fr)" gap="10">
        {cardItems.map(SwotCard)}
      </Grid>
    </Container>
  )
}

function SwotCard(card: SwotCardItem) {
  return (
    <Card.Root overflow="hidden">
      <Image
        src={card.imageSrc}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>{card.name}</Card.Title>
        <Card.Description>
          {card.description}
          <div>&nbsp;</div>
          {card.data?.map(d => <div key={d}>
            <>
              <Blockquote.Root colorPalette={"yellow"}>
                <Blockquote.Content>
                  {d}
                </Blockquote.Content>
              </Blockquote.Root>
              <div>&nbsp;</div>
            </>
          </div>)}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}