"use client";

import { Stack, rem } from "@mantine/core";
import Hero from "../../sections/Hero";
import InfoGrid from "../../sections/InfoGrid";
import MachineryCarousel from "../../sections/MachineryCarousel";
import FAQ from "../../sections/FAQ";
import Footer from "../../sections/Footer";
export default function HomePage() {
  return (
    <Stack align="center" gap={rem(100)} mt={"12vh"}>
      <Hero />
      <InfoGrid />
      <MachineryCarousel />
      <FAQ />
    </Stack>
  );
}
