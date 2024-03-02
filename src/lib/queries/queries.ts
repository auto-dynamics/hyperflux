import { ProcessScheme } from "..";
import { InsertSchemeBody, QueryResponseStatus } from "./types";

export async function getSchemes() {
  const res = await fetch("http://localhost:3000/data/get-schemes", {
    method: "GET",
  });
  return (await res.json()) as ProcessScheme[];
}

export async function insertScheme(
  body: InsertSchemeBody,
): Promise<QueryResponseStatus> {
  const res = await fetch("http://localhost:3000/data/post-scheme", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
}
