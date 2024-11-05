"use client";

import { Text, Group, Stack, Title, Grid, ThemeIcon } from "@mantine/core";
import { Fade } from "react-awesome-reveal";

import {
  IconBulldozer,
  IconDiscount,
  IconShovel,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
export default function InfoGrid() {
  const infoGrid = [
    {
      icon: <IconBulldozer style={{ width: "100%", height: "100%" }} />,
      title: "Diverse Inventory",
      description:
        "Our vast selection of construction and event equipment ensures you have the right tools for every job.",
    },
    {
      icon: <IconDiscount style={{ width: "100%", height: "100%" }} />,
      title: "Special Discounts",
      description:
        "Get exclusive deals on top-quality equipment for your next project.",
    },
    {
      icon: <IconShovel style={{ width: "100%", height: "100%" }} />,
      title: "Local Expertise",
      description:
        "Our deep roots in Houston’s vibrant market mean we understand your needs and are here to support your projects with local insight.",
    },
    {
      icon: (
        <IconRosetteDiscountCheck style={{ width: "100%", height: "100%" }} />
      ),
      title: "Exceptional Service",
      description:
        "We’re committed to your success, providing fast, reliable rentals and unmatched customer support every step of the way.",
    },
  ];

  return (
    <Grid px={"10vw"} gutter={"xl"}>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Stack>
          <Fade cascade triggerOnce>
            <Title order={2}>Empowering Construction Excellence</Title>

            <Text>
              At PULCATT Rental, we understand the dynamic demands of the
              construction and event industries. With our extensive inventory of
              high-quality equipment and commitment to superior service, we’re
              here to ensure your projects are completed with efficiency and
              precision. Whether you’re building the future or crafting
              memorable events, we are is your partner in success.
            </Text>
          </Fade>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, lg: 8 }}>
        <Grid gutter={"xl"}>
          {infoGrid.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
              <Fade triggerOnce delay={index * 200}>
                <Group wrap="nowrap" align="start">
                  <ThemeIcon size={"lg"} variant="white" bg={"rgb(0,0,0,0)"}>
                    {item.icon}
                  </ThemeIcon>

                  <Stack gap={2}>
                    <Title order={4}>{item.title}</Title>
                    <Text>{item.description}</Text>
                  </Stack>
                </Group>
              </Fade>
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
