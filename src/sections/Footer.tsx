import { Text, Group, Stack, Accordion, Title, Grid } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("Footer");

  return (
    <Stack py={"xl"} w={"100%"} bg={"gray.1"} px={"10vw"} mt={"auto"}>
      <Group>
        <Text size="sm">{t("title")}</Text>
      </Group>
    </Stack>
  );
}
