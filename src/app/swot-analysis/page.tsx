'use client';

import {Container, Input, InputGroup, Kbd, Card, Image, Grid, Center, Blockquote, Stack, Span} from "@chakra-ui/react";
import {LuSearch} from "react-icons/lu";
import Loading from "@/shared/loading";
import {useMemo, useState} from "react";
import hooks from "@/api/hooks";

const MAX_CHARACTERS = 4

type SwotCardItem = {
  name: string;
  imageSrc: string;
  description: string;
  data?: string[],
}

export default function SwotAnalysisPage() {
  const [companyName, setCompanyName] = useState("")
  const {swotAnalysis, loading, error} = hooks.useSwotAnalysis(companyName);

  const cardItems: SwotCardItem[] = useMemo(() => [
    {
      name: "Strengths",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      description: "Characteristics of the business or project that give it an advantage over others",
      data: swotAnalysis.strengths
    },
    {
      name: "Weaknesses",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      description: "Characteristics that place the business or project at a disadvantage relative to others.",
      data: swotAnalysis.weaknesses
    },
    {
      name: "Opportunities",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      description: "Elements in the environment that the business or project could exploit to its advantage.",
      data: swotAnalysis.opportunities
    },
    {
      name: "Threats",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      description: "Elements in the environment that could cause trouble for the business or project.",
      data: swotAnalysis.threats
    }
  ], [swotAnalysis]);

  if (loading) return <Loading/>;
  if (error) return `Page ${JSON.stringify(error)}`;

  return (
    <Container>
      <Center>
        <InputGroup maxWidth={"md"} flex="1" startElement={<LuSearch/>} endElement={
          <Span color="fg.muted" textStyle="xs">
            {companyName.length} / {MAX_CHARACTERS}
          </Span>
        }>
          <Input placeholder="Enter the stock symbol to perform the SWOT analysis" value={companyName} onChange={
            (e) => setCompanyName(e.target.value)} maxLength={MAX_CHARACTERS}
          />
        </InputGroup>
      </Center>
      <div>&nbsp;</div>
      <Grid templateColumns="repeat(2, 1fr)" gap="10">
        {cardItems?.map(SwotCard)}
      </Grid>
    </Container>
  )
}

function SwotCard(card: SwotCardItem) {
  return (
    <Card.Root overflow="hidden" variant={"subtle"} key={card.name}>
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