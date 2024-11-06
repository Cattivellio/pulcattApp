"use client";
import "@mantine/carousel/styles.css";

import Image from "next/image";
import {
  Text,
  Card,
  Stack,
  Image as MantineImage,
  Title,
  Grid,
  Button,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import ElectricScissorLift from "../images/machinery/ElectricScissorLift.png";
import ElectricVerticalMastLift from "../images/machinery/ElectricVerticalMastLift.png";
import MitsubishiForklift from "../images/machinery/MitsubishiForklift.png";
import MobileAirCompressor from "../images/machinery/MobileAirCompressor.png";
import MobileGenerator from "../images/machinery/MobileGenerator.png";
import SnakeRiver from "../images/machinery/SnakeRiver.png";
import TelescopicBoomLift from "../images/machinery/TelescopicBoomLift.png";

import { Slide } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

export default function MachineryCarousel() {
  const t = useTranslations("MachineryCarousel");

  const machinery = [
    {
      img: ElectricScissorLift,
      title: t("machine1"),
      desc: t("desc1"),
    },
    {
      img: ElectricVerticalMastLift,
      title: t("machine2"),
      desc: t("desc2"),
    },
    {
      img: MitsubishiForklift,
      title: t("machine3"),
      desc: t("desc3"),
    },
    {
      img: MobileAirCompressor,
      title: t("machine4"),
      desc: t("desc4"),
    },
    {
      img: MobileGenerator,
      title: t("machine5"),
      desc: t("desc5"),
    },
    {
      img: SnakeRiver,
      title: t("machine6"),
      desc: t("desc6"),
    },
    {
      img: TelescopicBoomLift,
      title: t("machine7"),
      desc: t("desc7"),
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
              <Slide direction="up" triggerOnce >
                <Card shadow="sm" padding="lg" radius="md" bg={"white"}>
                  <Card.Section>
                    <MantineImage
                      component={Image}
                      src={machine.img}
                      alt={machine.desc}
                      mah={400}
                      fit="cover"
                    />
                  </Card.Section>
                  <Text fw={500} mt={"lg"}>
                    {machine.title}
                  </Text>
                  <Text size="sm" c="dimmed" mt={"xs"}>
                    {machine.desc}
                  </Text>

                  <Button variant="light" size="xs" mt={"lg"}>
                    {t("button")}
                  </Button>
                </Card>
              </Slide>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Grid.Col>
    </Grid>
  );
}
