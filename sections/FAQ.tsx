"use client";

import Image from "next/image";
import { Text, Card, Stack, Accordion, Title, Grid } from "@mantine/core";
import { useTranslations } from "next-intl";

import { JackInTheBox } from "react-awesome-reveal";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const FAQ = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
  ];

  return (
    <JackInTheBox triggerOnce>
      <Grid id="faq" px={"10vw"} gutter={"xl"} align="center">
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Stack>
            <Title order={2}>{t("title")}</Title>
            <Text>{t("description")}</Text>
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
