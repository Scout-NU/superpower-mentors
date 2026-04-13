"use client";
import axios from "axios";

/**
 * Service function to be used in frontend to send an email to the Zapier webhook.
 * @param email the email to send
 * @param quizAnswers the answers to the popup quiz
 */
export const sendQuizAnswers = async (email: string, quizAnswers: object[]) => {
  try {
    await axios
      .post("/api/send-email", {
        email: email,
        quizAnswers: quizAnswers,
        requestType: "send-email"
      });
  } catch (e) {
    console.log("Error sending request to internal API:", e);
  }
};
