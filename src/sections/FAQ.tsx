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

    {
      question: t("question3"),
      answer: t("answer3"),
    },

    {
      question: t("question4"),
      answer: t("answer4"),
    },

    {
      question: t("question5"),
      answer: t("answer5"),
    },

    {
      question: t("question6"),
      answer: t("answer6"),
    },

    {
      question: t("question7"),
      answer: t("answer7"),
    },

    {
      question: t("question8"),
      answer: t("answer8"),
    },
  ];

  return (
    <JackInTheBox triggerOnce>
      <Grid id="faq" w={"100vw"} px={"10vw"} gutter={"xl"} mb={"xl"}>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Stack>
            <Title order={2}>{t("title")}</Title>
            <Text>{t("description")}</Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Accordion variant="filled" defaultValue={t("question2")}>
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
