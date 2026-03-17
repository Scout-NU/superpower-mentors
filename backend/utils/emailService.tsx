"use client";
import axios from "axios";
import { useState } from "react";

export const sendEmail = async (email: string) => {
  try {
    await axios
      .post("/api/send-email", {
        email: email
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
      <button
        className="border-2 p-2 border-black"
        id="test-email-button"
        onClick={() => sendEmail(email)}
      >
        {" "}
        Send Email to Webhook{" "}
      </button>
    </div>
  );
}
