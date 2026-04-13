import { NextRequest, NextResponse } from "next/server";

/**
 * Sends a request for a strategy call to the backend.
 * @param request 
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json(); // fields from frontend

        const response = await fetch("need the url to send the booking to", body);

        return NextResponse.json({});
    } catch (e) {
        console.error(e);
    }
}