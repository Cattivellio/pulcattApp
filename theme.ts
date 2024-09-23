"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    orange: [
      "#FDE4D3", // lightest
      "#FBC2A4",
      "#F6A175",
      "#F18146",
      "#EE703A",
      "#EB5C2F",
      "#EB4D2C", // 7th color
      "#C44325",
      "#95351D",
      "#662514", // darkest
    ],
    gray: [
      "#F2F2F2", // Más claro que el blanco para un efecto suave
      "#D9D9D9",
      "#C6C6C6",
      "#B3B3B3",
      "#A0A0A0",
      "#878787",
      "#262626", // Séptimo color fijo
      "#1C1C1C",
      "#121212",
      "#080808" // Más oscuro que el negro puro para un efecto suave
  ],
  },

  primaryColor: "orange",
});
