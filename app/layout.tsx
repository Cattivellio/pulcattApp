"use client";
import "@mantine/carousel/styles.css";
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
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { IconHome } from "@tabler/icons-react";

import { theme } from "../theme";
import { poppins, roboto } from "./ui/fonts";

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
          <AppShell header={{ height: 60 }}>
            <AppShell.Header bg={"blue"} withBorder={false}>
              <Flex h={"100%"} align={"center"} px={"lg"} gap={"md"}>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                  color="white"
                />
                {/* <Image src={logoNavbar}></Image> */}

                <Flex visibleFrom="sm" align={"center"} px={"lg"} gap={"md"}>
                  <Anchor href="/" underline="never" c={"white"}>
                    Inicio
                  </Anchor>
                  <Anchor href="/reservaciones" underline="never" c={"white"}>
                    Reservaciones
                  </Anchor>
                  <Anchor href="/tienda" underline="never" c={"white"}>
                    Tienda
                  </Anchor>
                </Flex>
                <Avatar radius="xl" color={"white"} />
              </Flex>
            </AppShell.Header>

            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
