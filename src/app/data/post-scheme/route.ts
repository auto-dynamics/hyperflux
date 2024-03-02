import { insertScheme } from "@/db";
import { ProcessScheme } from "@/lib";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json()) as { name: string; scheme: ProcessScheme };
  const res = await insertScheme(body);
  return NextResponse.json(res);
}
