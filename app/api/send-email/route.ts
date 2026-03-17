import { NextRequest, NextResponse } from "next/server";

/**
 * Sends a POST request to the Zapier Webhook
 * @param request the request to send: must contain an 'email' key in the request's body.
 * @returns a NextResponse object containing the webhook's response, or an error if it fails.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const webhook_url = process.env.ZAPIER_WEBHOOK_URL as string;
    if (!webhook_url) {
      throw new Error("Webhook URL not configured.");
    }

    const response = await fetch(webhook_url, {
      method: "POST",

      // having content-type headers seems to mess with the expected types of the webhook, comment for now

      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: response.status },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
