"use client";
import "@mantine/carousel/styles.css";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Image from "next/image";
import { Text, Stack, Image as MantineImage, Title, Grid } from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import MachineCard from "../components/MachineCard";

import scissorLift from "../images/machinery/scissorLift/portada.jpg";
import scissorLift1 from "../images/machinery/scissorLift/1.jpg";
import scissorLift2 from "../images/machinery/scissorLift/2.jpg";
import scissorLift3 from "../images/machinery/scissorLift/3.jpg";
import scissorLift4 from "../images/machinery/scissorLift/4.jpg";
import scissorLift5 from "../images/machinery/scissorLift/5.jpg";
import scissorLift6 from "../images/machinery/scissorLift/6.jpg";
import scissorLift7 from "../images/machinery/scissorLift/7.jpg";
import scissorLift8 from "../images/machinery/scissorLift/8.jpg";
import scissorLift9 from "../images/machinery/scissorLift/9.jpg";
import scissorLift10 from "../images/machinery/scissorLift/10.jpg";
import scissorLift11 from "../images/machinery/scissorLift/11.jpg";
import scissorLift12 from "../images/machinery/scissorLift/12.jpg";
import scissorLift13 from "../images/machinery/scissorLift/13.jpg";
import scissorLift14 from "../images/machinery/scissorLift/14.jpg";
import scissorLift15 from "../images/machinery/scissorLift/15.jpg";
import scissorLift16 from "../images/machinery/scissorLift/16.jpg";

import forklift from "../images/machinery/forklift/portada.jpg";
import forklift1 from "../images/machinery/forklift/1.jpg";
import forklift2 from "../images/machinery/forklift/2.jpg";
import forklift3 from "../images/machinery/forklift/3.jpg";
import forklift4 from "../images/machinery/forklift/4.jpg";
import forklift5 from "../images/machinery/forklift/5.jpg";
import forklift6 from "../images/machinery/forklift/6.jpg";
import forklift7 from "../images/machinery/forklift/7.jpg";
import forklift8 from "../images/machinery/forklift/8.jpg";
import forklift9 from "../images/machinery/forklift/9.jpg";
import forklift10 from "../images/machinery/forklift/10.jpg";
import forklift11 from "../images/machinery/forklift/11.jpg";

import telehander from "../images/machinery/telehander/portada.jpg";
import telehander1 from "../images/machinery/telehander/1.jpg";
import telehander2 from "../images/machinery/telehander/2.jpg";
import telehander3 from "../images/machinery/telehander/3.jpg";
import telehander4 from "../images/machinery/telehander/4.jpg";
import telehander5 from "../images/machinery/telehander/5.jpg";
import telehander6 from "../images/machinery/telehander/6.jpg";
import telehander7 from "../images/machinery/telehander/7.jpg";
import telehander8 from "../images/machinery/telehander/8.jpg";
import telehander9 from "../images/machinery/telehander/9.jpg";
import telehander10 from "../images/machinery/telehander/10.jpg";
import telehander11 from "../images/machinery/telehander/11.jpg";
import telehander12 from "../images/machinery/telehander/12.jpg";
import telehander13 from "../images/machinery/telehander/13.jpg";
import telehander14 from "../images/machinery/telehander/14.jpg";
import telehander15 from "../images/machinery/telehander/15.jpg";
import telehander16 from "../images/machinery/telehander/16.jpg";

import { Slide } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

export default function MachineryCarousel() {
  const t = useTranslations("MachineryCarousel");

  const machinery = [
    {
      photos: [
        scissorLift,
        scissorLift1,
        scissorLift2,
        scissorLift3,
        scissorLift4,
        scissorLift5,
        scissorLift6,
        scissorLift7,
        scissorLift8,
        scissorLift9,
        scissorLift10,
        scissorLift11,
        scissorLift12,
        scissorLift13,
        scissorLift14,
        scissorLift15,
        scissorLift16,
      ],
      title: "Scissor Lift",
      desc: "19 ft / 550 lb 26 ft / 500 lb | 32 ft / 705 lb | 40 ft / 800 lb",
      button: t("button"),
    },
    {
      photos: [
        forklift,
        forklift1,
        forklift2,
        forklift3,
        forklift4,
        forklift5,
        forklift6,
        forklift7,
        forklift8,
        forklift9,
        forklift10,
        forklift11,
      ],
      title: "Pneumatic Tire Forklift",
      desc: "188 in / 5000 lb",
      button: t("button"),
    },
    {
      photos: [
        telehander,
        telehander1,
        telehander2,
        telehander3,
        telehander4,
        telehander5,
        telehander6,
        telehander7,
        telehander8,
        telehander9,
        telehander10,
        telehander11,
        telehander12,
        telehander13,
        telehander14,
        telehander15,
        telehander16,
      ],
      title: "Telehander",
      desc: "40 ft / 500lb | 60 ft / 1000 lb",
      button: t("button"),
    },
  ];

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
          slideGap={{ base: 0, sm: "md" }}
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
                  button={machine.button}
                />
              </Slide>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Grid.Col>
    </Grid>
  );
}
