"use client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { useState, useEffect } from "react";
import { Box, Card, Button, Image as MantineImage, Text } from "@mantine/core";

import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import NextJsImage from "../components/NextJsImage";

type machine = {
  title: string;
  desc: string;
  button: string;
  photos: any[];
};

export default function Navbar(machine: machine) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      bg={"white"}
      onClick={() => setOpen(true)}
    >
      <Card.Section>
        <MantineImage
          component={Image}
          src={machine.photos[0]}
          alt={machine.title}
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
        {machine.button}
      </Button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={machine.photos}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Thumbnails]}
      />
    </Card>
  );
}
