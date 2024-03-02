import { querySchemesCollection } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const schemes = await querySchemesCollection("example");
  return NextResponse.json(schemes);
}
