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
import { useMediaQuery, useScrollIntoView } from "@mantine/hooks";

import { IconChevronRight } from "@tabler/icons-react";

import { Fade, AttentionSeeker } from "react-awesome-reveal";
export default function Hero() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Grid px={"10vw"} gutter={"xl"} align="center">
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Fade triggerOnce direction="up">
          <Stack>
            <Title fz={isMobile ? em(40) : em(50)} c="black">
              Efficiency in Every Machine with {""}
              <Text span c="orange" inherit>
                PULCATT
              </Text>
            </Title>
            <Title order={4} fw={300}>
              Top-quality hardware tools and expert construction services for
              every project need.
            </Title>
            <AttentionSeeker effect="pulse" delay={1000} duration={1000}>
              <Group>
                <Button
                  fullWidth={isMobile}
                  size="md"
                  color="#fa5a15"
                  fw={700}
                  rightSection={<IconChevronRight size={18} />}
                  onClick={() =>
                    scrollIntoView({
                      alignment: "center",
                    })
                  }
                >
                  Start Exploring
                </Button>

                <Button
                  component="a"
                  href="/contactus"
                  fullWidth={isMobile}
                  size="md"
                  color="gray.4"
                >
                  Contact Us
                </Button>
              </Group>
            </AttentionSeeker>
          </Stack>
        </Fade>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Fade triggerOnce direction="up">
          <MantineImage
            component={Image}
            alt="PULCATT"
            src={lift}
            h={"100%"}
            fit="contain"
          />
        </Fade>
      </Grid.Col>
    </Grid>
  );
}
