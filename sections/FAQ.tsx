"use client";

import Image from "next/image";
import { Text, Card, Stack, Accordion, Title, Grid } from "@mantine/core";

import { JackInTheBox } from "react-awesome-reveal";

export default function FAQ() {
  const FAQ = [
    {
      question: "What types of tools are included in the Starter Kit?",
      answer:
        "The Starter Kit features essential hand and power tools for diverse DIY projects, including hammers, drills, screwdrivers, and a variety of fasteners. It's a curated selection to help beginners and experienced DIYers alike tackle most home improvement tasks.",
    },
    {
      question:
        "Can I upgrade from the Starter Kit to the Professional Toolbox?",
      answer:
        "Absolutely! You can upgrade to the Professional Toolbox at any time to access a wider range of high-quality tools, enjoy priority customer support, and receive exclusive content. Contact our support team for a seamless transition.",
    },
  ];

  return (
    <JackInTheBox triggerOnce>
      <Grid id="faq" px={"10vw"} gutter={"xl"} align="center">
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Stack>
            <Title order={2}>Frequently asked questions</Title>
            <Text>
              Ask us anything about our machinery and its rental, and get
              factual responses.
            </Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Accordion
            variant="filled"
            defaultValue="Can I upgrade from the Starter Kit to the Professional Toolbox?"
          >
            {FAQ.map((item, index) => (
              <Accordion.Item key={index} value={item.question}>
                <Accordion.Control styles={{ label: { fontWeight: "bold" } }}>
                  {item.question}
                </Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Grid.Col>
      </Grid>
    </JackInTheBox>
  );
}
