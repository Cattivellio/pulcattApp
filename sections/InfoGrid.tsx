"use client";

import { Text, Group, Stack, Title, Grid, ThemeIcon } from "@mantine/core";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

import {
  IconBulldozer,
  IconDiscount,
  IconShovel,
  IconTir,
} from "@tabler/icons-react";
export default function InfoGrid() {
  const t = useTranslations("InfoGrid");

  const infoGrid = [
    {
      icon: <IconBulldozer style={{ width: "100%", height: "100%" }} />,
      title: t("item1"),
      description: t("itemDes1"),
    },
    {
      icon: <IconDiscount style={{ width: "100%", height: "100%" }} />,
      title: t("item2"),
      description: t("itemDes2"),
    },
    {
      icon: <IconShovel style={{ width: "100%", height: "100%" }} />,
      title: t("item3"),
      description: t("itemDes3"),
    },
    {
      icon: (
        <IconTir style={{ width: "100%", height: "100%" }} />
      ),
      title: t("item4"),
      description: t("itemDes4"),
    },
  ];

  return (
    <Grid px={"10vw"} gutter={"xl"}>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Stack>
          <Fade cascade triggerOnce>
            <Title order={2}>{t("title")}</Title>

            <Text>{t("description")} </Text>
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
