"use client";

import Image from "next/image";
import {
  Text,
  Button,
  Group,
  Stack,
  Image as MantineImage,
  Title,
  Grid,
  em,
} from "@mantine/core";

import lift from "../images/lift.webp";
import { useMediaQuery } from "@mantine/hooks";

import { IconChevronRight } from "@tabler/icons-react";
export default function Hero() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Grid px={"10vw"} gutter={"xl"} align="center">
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Stack>
          <Title fz={isMobile ? em(30) : em(50)} c="black">
            Efficiency in Every Machine with {""}
            <Text span c="orange" inherit>
              PULCATT
            </Text>
          </Title>
          <Title order={4} fw={300}>
            Top-quality hardware tools and expert construction services for
            every project need.
          </Title>

          <Group>
            <Button
              fullWidth={isMobile}
              size="md"
              color="#fa5a15"
              fw={700}
              rightSection={<IconChevronRight size={18} />}
            >
              Start Exploring
            </Button>
            <Button fullWidth={isMobile} size="md" color="gray.4">
              Contact Us
            </Button>
          </Group>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6 }}>
        <MantineImage
          component={Image}
          alt="PULCATT"
          src={lift}
          h={"100%"}
          fit="contain"
        />
      </Grid.Col>
    </Grid>
  );
}
