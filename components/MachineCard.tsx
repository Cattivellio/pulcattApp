"use client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { useState } from "react";
import {
  List,
  Card,
  Button,
  Image as MantineImage,
  Text,
  Badge,
  Group,
  Title,
} from "@mantine/core";

import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import NextJsImage from "../components/NextJsImage";

type machine = {
  title: string;
  desc: string;
  photos: any[];
  button: string;
  button2: string;
  info: string;
};

export default function Navbar(machine: machine) {
  const [open, setOpen] = useState(false);

  // button: t("button"),
  // button2: t("button2"),
  // info: t("info"),

  return (
    <Card shadow="sm" padding="lg" radius="md" bg={"white"}>
      <Card.Section>
        <MantineImage
          component={Image}
          src={machine.photos[0]}
          alt={machine.title}
          mah={400}
          fit="cover"
        />
      </Card.Section>

      <Title fw={500} order={3} mt={"lg"}>
        {machine.title}
      </Title>

      <Group gap={6} mt={"xs"}>
        {machine.desc.split("\n").map((item: any, index: number) => (
          <Badge key={index} radius="xs" bg={"gray.1"} c={"dimmed"}>
            {item}
          </Badge>
        ))}
      </Group>

      <Group wrap="nowrap">
        <Button
          variant="outline"
          mt={"lg"}
          color="gray"
          onClick={() => setOpen(true)}
        >
          {/* {machine.button} */}
          {machine.button2}
        </Button>
        <Button
          component="a"
          href={`mailto:info@pulcatt.com?subject=Info%20${machine.title}&body=${machine.info}%20${machine.title}`}
          mt={"lg"}
        >
          {machine.button}
        </Button>
      </Group>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={machine.photos}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        render={{ slide: NextJsImage }}
        plugins={[Thumbnails]}
      />
    </Card>
  );
}
