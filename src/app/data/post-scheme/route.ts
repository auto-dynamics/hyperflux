import { insertScheme } from "@/db";
import { InsertSchemeBody } from "@/lib/queries/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json()) as InsertSchemeBody;
  const res = await insertScheme(body);
  return NextResponse.json(res);
}
