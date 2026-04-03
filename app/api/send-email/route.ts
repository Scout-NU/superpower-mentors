import { NextRequest, NextResponse } from "next/server";

/**
 * Sends a POST request to the Zapier Webhook
 * @param request the request to send: must contain an 'email' and 'quizAnswers' key in the request's body.
 * @returns a NextResponse object containing the webhook's response, or an error if it fails.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email;
    const quizAnswers = body.quizAnswers;
    const type = body.requestType;

    // validation
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const webhook_url = process.env.ZAPIER_WEBHOOK_URL as string;
    if (!webhook_url) {
      throw new Error("Webhook URL not configured.");
    }
    
    if (!quizAnswers) {
      return NextResponse.json({error: "'Answers' field not found."}, {status: 400});
    }

    if (!type || type !== "send-email") {
      return NextResponse.json({error: "Request type not identified"}, {status: 400});
    }

    // send req
    const response = await fetch(process.env.ZAPIER_WEBHOOK_URL as string, {
      method: "POST",      
      body: JSON.stringify({ email, answers: quizAnswers, requestType: type }),
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
