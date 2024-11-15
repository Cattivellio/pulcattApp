"use client";

import {
  Text,
  rem,
  Group,
  Stack,
  Title,
  TextInput,
  Grid,
  Textarea,
  Button,
  ThemeIcon,
  Anchor,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import Link from "next/link";
import {
  IconMessages,
  IconMapPin,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons-react";

import { useTranslations } from "next-intl";
import { Slide } from "react-awesome-reveal";
export default function ContactUs() {
  const t = useTranslations("ContactUs");

  return (
    <Stack align="center" gap={rem(100)} my={"12vh"}>
      <Slide direction="down" triggerOnce>
        <Grid
          h={"100%"}
          py={"xl"}
          w={"100%"}
          px={"10vw"}
          gutter={rem(100)}
          align="center"
        >
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack ta={"center"}>
              <Title>{t("title")}</Title>
              <Text>{t("description")}</Text>
              <Title order={3}>{t("fillForm")}</Title>

              <Group grow>
                <TextInput placeholder={t("name")} />
                <TextInput placeholder={t("apellido")} />
              </Group>
              <TextInput placeholder={t("email")} />
              <TextInput placeholder={t("phone")} />
              <Textarea placeholder={t("details")} />
              <Button>{t("submit")}</Button>
              <Text>{t("back")}</Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack>
              <Group wrap="nowrap" align="start">
                <ThemeIcon size={"lg"} variant="white" bg={"rgb(0,0,0,0)"}>
                  <IconMessages />
                </ThemeIcon>

                <Stack gap={2}>
                  <Title order={4}>{t("item1")}</Title>
                  <Text>{t("itemdesc1")}</Text>
                  <Anchor component={Link} href="/#faq">
                    {t("itemlink1")}
                  </Anchor>
                </Stack>
              </Group>
              <Divider />
              <Group wrap="nowrap" align="start">
                <ThemeIcon size={"lg"} variant="white" bg={"rgb(0,0,0,0)"}>
                  <IconMapPin />
                </ThemeIcon>

                <Stack gap={2}>
                  <Title order={4}>{t("item2")}</Title>
                  <Text>{t("itemdesc2")}</Text>
                  <Anchor
                    component={Link}
                    href="https://maps.app.goo.gl/TfFN9v7ZVpNVpk9P9"
                  >
                    {t("itemlink2")}
                  </Anchor>
                </Stack>
              </Group>
              <Divider />
              <Group wrap="nowrap" align="start">
                <ThemeIcon size={"lg"} variant="white" bg={"rgb(0,0,0,0)"}>
                  <IconPhone />
                </ThemeIcon>

                <Stack gap={2}>
                  <Title order={4}>{t("item3")}</Title>
                  <Text>{t("itemdesc3")}</Text>
                  <Anchor component={Link} href="tel:+1512-400-5002">
                    {t("itemlink3")}
                  </Anchor>
                </Stack>
              </Group>

              <Divider />
              <Group wrap="nowrap" align="start">
                <ThemeIcon size={"lg"} variant="white" bg={"rgb(0,0,0,0)"}>
                  <IconMailOpened />
                </ThemeIcon>

                <Stack gap={2}>
                  <Title order={4}>{t("item4")}</Title>
                  <Text>{t("itemdesc4")}</Text>
                  <Anchor component={Link} href="mailto:info@pulcatt.com">
                    {t("itemlink4")}
                  </Anchor>
                </Stack>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Slide>
    </Stack>
  );
}
