import { NextResponse } from "next/server";
import { getUpcomingDrops } from "@/lib/drops";

// Re-evaluate on every request so the "upcoming" window stays current.
export const dynamic = "force-dynamic";

export function GET() {
  const drops = getUpcomingDrops();
  return NextResponse.json({
    count: drops.length,
    generatedAt: new Date().toISOString(),
    drops,
  });
}
