"use client";
import axios from "axios";
import { useState } from "react";

/**
 * Service function to be used in frontend to send an email to the Zapier webhook.
 * @param email the email to send
 */
export const sendResponse = async (email: string, quizAnswers: string[]) => {
  const [answer1, answer2] = quizAnswers;
  try {
    await axios
      .post("/api/send-email", {
        email: email,
        quizAnswers: quizAnswers
      })
      .then((res) => {
        console.log("successful attempt", res);
      });
  } catch (e) {
    console.log("attempt failed", e);
  }
};

export default function TestingEmail() {
  const [email, setEmail] = useState<string>("");
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const quizAnswers = [answer1, answer2];

  return (
    <div id="testing-email">
      <label htmlFor="email-input" className="p-2">
        {" "}
        Email{" "}
      </label>
      <input
        className="border-2 p-2"
        type="text"
        id="email-input"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <br />
      <label htmlFor="answer1-input" className="p-2">
        {" "}
        Answer 1{" "}
      </label>
      <input
        className="border-2 p-2"
        type="text"
        id="answer1-input"
        onChange={(e) => setAnswer1(e.target.value)}
      ></input>
      <br />
      <br />
      <label htmlFor="answer1-input" className="p-2">
        {" "}
        Answer 2{" "}
      </label>
      <input
        className="border-2 p-2"
        type="text"
        id="answer2-input"
        onChange={(e) => setAnswer2(e.target.value)}
      ></input>
      <br />
      <br />
      <button
        className="border-2 p-2 border-black"
        id="test-email-button"
        onClick={() => sendResponse(email, quizAnswers)}
      >
        {" "}
        Send Email to Webhook{" "}
      </button>
    </div>
  );
}
