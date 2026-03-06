import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST() {
  try {
    const count = await redis.incr("plays");
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}
