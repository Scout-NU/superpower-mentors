import { NextRequest, NextResponse } from "next/server";

/**
 * Sends a request for a strategy call to the backend.
 * @param request
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // fields from frontend

    // validation todo
    const url = process.env.ZAPIER_WEBHOOK_URL as string;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body)
    });

    return NextResponse.json(response);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
