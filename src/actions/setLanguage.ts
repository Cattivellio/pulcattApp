"use-server";

import { cookies } from "next/headers";

export default async function setLang(language: string) {
  cookies().set("language", language);
}
