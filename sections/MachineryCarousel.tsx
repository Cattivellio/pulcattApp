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
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import ElectricScissorLift from "../images/machinery/ElectricScissorLift.png";
import ElectricVerticalMastLift from "../images/machinery/ElectricVerticalMastLift.png";

export default function MachineryCarousel() {
  const machinery = [
    { img: ElectricScissorLift, desc: "Electric Scissor Lift" },
    {
      img: ElectricVerticalMastLift,
      desc: "Electric Vertical MastLift",
    },
  ]; 

  return (
    <Grid px={"10vw"} gutter={"xl"} align="center">
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Stack>
          <Title order={3}>Check Out All Our Maquinery</Title>

          <Text>
            Our vast selection of construction and event equipment ensures you
            have the right tools for every job. Services that we Offer:
          </Text>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, lg: 8 }}>
        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          withIndicators
          loop
          align={"start"}
        >
          {machinery.map((machine, index) => (
            <Carousel.Slide key={index}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <MantineImage
                    component={Image}
                    src={machine.img}
                    alt={machine.desc}
                    mah={400}
                    fit="cover"
                  />
                </Card.Section>
                <Text size="sm" c="dimmed">
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords
                  of Norway
                </Text>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Grid.Col>
    </Grid>
  );
}
