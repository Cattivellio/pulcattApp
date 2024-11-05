import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { theme } from "../../theme";
import { poppins, roboto } from "../../ui/fonts";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../sections/Footer";
// import logoNavbar from "./public/logoNavbar.svg";

export const metadata = {
  title: "PULCATT",
  // description: "I am using Mantine with Next.js!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      style={{ scrollBehavior: "smooth" }}
      lang={locale}
      className={`${roboto.className} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript />
        {/* <link rel="shortcut icon" href="/logo.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        /> */}
      </head>
      <body>
        <MantineProvider theme={theme} forceColorScheme="light">
          <Navbar />

          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>

          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
