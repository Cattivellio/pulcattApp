"use client";

import { Stack, rem } from "@mantine/core";
import Hero from "../../sections/Hero";
import InfoGrid from "../../sections/InfoGrid";
import MachineryCarousel from "../../sections/MachineryCarousel";
import FAQ from "../../sections/FAQ";

import { useScrollIntoView } from "@mantine/hooks";
export default function HomePage() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    easing: (t) => t - (1 - t) ** 1,
    offset: -100,
  });

  return (
    <Stack align="center" gap={rem(100)} mt={"12vh"}>
      <Hero scrollToFAQ={scrollIntoView} />

      <InfoGrid />
      <div ref={targetRef}></div>
      <MachineryCarousel />

      <FAQ />
    </Stack>
  );
}
