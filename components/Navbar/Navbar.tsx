"use client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { useState, useEffect } from "react";
import {
  Box,
  Anchor,
  Flex,
  Image as MantineImage,
  Select,
} from "@mantine/core";

import Image from "next/image";

import { useDisclosure } from "@mantine/hooks";

import { IconHome } from "@tabler/icons-react";
import logoNavbar from "../../public/logoNavbar.png";

import setLang from "../../src/actions/setLanguage";
export default function RootLayout() {
  const [language, setLanguage] = useState<string | null>("en");

  useEffect(() => {
    const languages = async () => {
      await setLang(language ? language : "en");
    };
    languages();
  }, [language]);

  return (
    <Box
      h={60}
      w={"80vw"}
      mx={"10vw"}
      px={"md"}
      py={"xs"}
      bg={"rgba(0, 0, 0, 0)"}
      style={{
        zIndex: 1000,
        top: 20,
        left: 0,
        position: "fixed",
        border: "1px solid rgba(255, 255, 255, .20)",
        borderRadius: "5rem",
        backgroundColor: "rgba(255, 255, 255, .15)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Flex h={"100%"} align={"center"} px={"lg"} gap={"md"}>
        {/* <Image src={logoNavbar}></Image> */}

        <Box mr={"auto"} component="a" href="/">
          <MantineImage
            component={Image}
            src={logoNavbar}
            alt="logo"
            h={"40"}
          />
        </Box>

        <Flex visibleFrom="sm" align={"center"} px={"lg"} gap={"md"}>
          <Anchor fw={700} href="/" underline="never" c={"dark.3"}>
            Home
          </Anchor>
          <Anchor fw={700} href="/contactus" underline="never" c={"dark.3"}>
            Contact Us
          </Anchor>
        </Flex>

        <Select
          fw={700}
          styles={{ input: { color: "#fa5a15", letterSpacing: "1px" } }}
          w={"60"}
          allowDeselect={false}
          withCheckIcon={false}
          variant="unstyled"
          data={["es", "en"]}
          value={language}
          onChange={setLanguage}
        />
      </Flex>
    </Box>
  );
}
