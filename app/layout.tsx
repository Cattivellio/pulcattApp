"use client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  AppShell,
  Burger,
  Anchor,
  Flex,
  Image,
  Avatar,
  Title,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { IconHome } from "@tabler/icons-react";

import { theme } from "../theme";
import { poppins, roboto } from "../ui/fonts";

// import logoNavbar from "./public/logoNavbar.svg";

// export const metadata = {
//   title: "Mantine Next.js template",
//   description: "I am using Mantine with Next.js!",
// };

export default function RootLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();

  const data = [{ label: "Inicio", href: "/home", icon: IconHome }];

  return (
    <html lang="es" className={`${roboto.className} antialiased`}>
      <head>
        <ColorSchemeScript />
        <title>Pullcatt</title>
        <link rel="shortcut icon" href="/logo.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} forceColorScheme="light">
          <AppShell bg={"#e5e5e5"} header={{ height: 60 }}>
            <AppShell.Header
              px={"10vw"}
              bg={"rgba(0, 0, 0, 0)"}
              withBorder={false}
              zIndex={0}
            >
              <Flex h={"100%"} align={"center"} px={"lg"} gap={"md"}>

                {/* <Image src={logoNavbar}></Image> */}
                <Title mr={"auto"}>Pullcatt</Title>

                <Flex visibleFrom="sm" align={"center"} px={"lg"} gap={"md"}>
                  <Anchor href="/" underline="never" c={"black"}>
                    Home
                  </Anchor>
                  <Anchor href="/contactus" underline="never" c={"black"}>
                    Contact Us
                  </Anchor>
                </Flex>
              </Flex>
            </AppShell.Header>

            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
