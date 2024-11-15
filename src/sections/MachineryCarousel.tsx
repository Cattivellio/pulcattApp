"use client";
import "@mantine/carousel/styles.css";

import { Text, Stack, Title, Grid } from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import MachineCard from "../components/MachineCard";

import { machinery } from "../lib/machinery";

import { Slide } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

export default function MachineryCarousel() {
  const t = useTranslations("MachineryCarousel");

  return (
    <Grid id="explore" px={"10vw"} gutter={"xl"} align="center" maw={"100%"}>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Stack>
          <Slide direction="left" triggerOnce>
            <Title order={2}>
              {t("title")}{" "}
              <Text span c="orange" inherit>
                {t("machinery")}
              </Text>
            </Title>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Text>{t("description")} </Text>
          </Slide>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, lg: 8 }}>
        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: "xs", sm: "md" }}
          withIndicators
          loop
          align={"start"}
          styles={{
            indicator: { background: "#fa5a15" },
            indicators: { position: "relative", marginTop: "2rem" },
          }}
        >
          {machinery.map((machine, index) => (
            <Carousel.Slide key={index}>
              <Slide direction="up" triggerOnce>
                <MachineCard
                  photos={machine.photos}
                  title={machine.title}
                  desc={machine.desc}
                  button={t("button")}
                  button2={t("button2")}
                  info={t("info")}
                />
              </Slide>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Grid.Col>
    </Grid>
  );
}
