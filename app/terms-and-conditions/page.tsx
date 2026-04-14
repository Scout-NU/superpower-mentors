"use client";

import { Space_Grotesk } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function TermsAndConditionsPage() {
  return (
    <main className={`${spaceGrotesk.className} min-h-screen pt-20 bg-white`}>
      {/* Hero */}
      <section className="px-6 py-24" style={{ background: "#571377" }}>
        <div className="max-w-7xl mx-auto">
          <h1
            className={`${jakarta.className} text-white leading-none text-center`}
            style={{ fontSize: "clamp(64px, 10vw, 120px)", fontWeight: 500 }}
          >
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="space-y-10 text-zinc-700 text-sm leading-relaxed">

          <div>
            <p className="mb-2">
              <strong>1. Scheduling.</strong> Program Sessions ("Sessions") are scheduled through direct communications between the assigned Mentor ("Mentor"), your Child or the Session/s attendee ("Mentee"), our Program Success Team, and Our Designated Scheduling Platform ("Site"). We are not responsible for the Mentee's attendance and participation in any Session, the program and Services. We ask that You encourage the Mentee to participate and if they feel uncomfortable, encourage the Mentee to speak with Us.
            </p>
          </div>

          <div>
            <p>
              <strong>2. Delivery.</strong> Sessions are typically delivered through online communications technologies, including but not limited to Zoom, Google Meet, and FaceTime, and You are responsible for ensuring that the Mentee has access to the minimum technical requirements for access to the products, services, sessions, and events ("Services"), including internet access. We may offer content and features via the Mentee's mobile device, and standard messaging, data, and other fees may be charged by your carrier. Your carrier may prohibit or restrict certain mobile features and certain mobile features may be incompatible with your carrier or mobile device. Contact your carrier with questions regarding these issues.
            </p>
          </div>

          <div>
            <p>
              <strong>3. Sessions Attendance.</strong> Each Session shall begin and end at the scheduled times and We are not obligated to extend any Session past the scheduled time. If the Mentee is more than 15 minutes late to or does not show up for a Session/s, you shall be deemed to have canceled the Session/s without notice to Us, and the Session/s shall be forfeited.
            </p>
          </div>

          <div>
            <p>
              <strong>4. Sessions Cancelation Policy.</strong> All requests to reschedule or cancel a Session/s or Service/s must be made with 24-hour advance notice through our ("Support Channels") which must include contacting via email the Program Success Team. If you fail to provide 24-hour notice of cancellation (other than due to a death in the family, a medical emergency, or other emergency circumstances), Sessions shall be forfeited and not be rescheduled, refunded, or otherwise credited. Other requests to reschedule will be at the discretion of the Mentor.
            </p>
          </div>

          <div>
            <p>
              <strong>5. Program Success Team.</strong> The Program Success Team shall be responsible for the delivery of the Services and the Program experience and efficient operation of the program. The duties of the Program Success Team shall include, but not be limited to, the oversight of the Program experience, the coordination of activities and communications between the Mentor and Mentee, addressing any issues or concerns that may arise during the Program, management of email Support Channels, and the administration of the mentor matching process.
            </p>
          </div>

          <div>
            <p>
              <strong>6. Recordings.</strong> Audio or video recordings or transcriptions of the Mentee's Services with the Mentor are not included in the Services and are prohibited. However, We may record a Service for monitoring, certifying, or quality assurance purposes, and We shall not be required to maintain copies of such recordings for any particular period of time. All recorded sessions will be consented by You prior to the Session start. In no event shall any recorded Service/s be shared with or disclosed to a third party without your prior consent except pursuant to court order or otherwise required by law. Mentors are permitted to take Service notes on the Site.
            </p>
          </div>

          <div>
            <p>
              <strong>7. Dress Code and Bathroom Breaks.</strong> The Mentee is required to wear appropriate attire during Services. Inappropriate attire includes but is not limited to, the absence of a shirt or pants, and any clothing deemed offensive or disruptive. We reserve the right to end same-day Services immediately if the Mentee does not comply with the dress code, as determined at Our sole discretion. If the Mentee brings Their device, on which the Service is being hosted, into the bathroom, the Mentor will immediately end the session. At that point, we will contact the Client to inform them and, if We deem it appropriate, we may proceed with Services.
            </p>
          </div>

          <div>
            <p>
              <strong>8. Communication with the Mentee.</strong> You agree that We may communicate directly with the Mentee. Communications between Us and the Mentee may occur through communications technologies including but not limited to Zoom, Google Meet, FaceTime, over the phone, by email, text, or other technology platforms, unless you provide Us with written restriction of access to any particular channel of communication. We may, at our discretion, make a good faith effort to notify you and secure your presence before communicating with the Mentee. However, your involvement is not a prerequisite to all communication with the Mentee.
            </p>
          </div>

          <div>
            <p>
              <strong>9. Raising Concerns.</strong> If You or the Mentee have any concerns as to how a Service was conducted, please raise those concerns via email to{" "}
              <a href="mailto:support@superpowermentors.com" className="text-blue-600 hover:underline">
                support@superpowermentors.com
              </a>. We uphold Our personnel to the highest standards of professionalism and expect the same in return from You and the Mentee. If the Mentee makes any inappropriate or sexually suggestive remarks or advances, Services will be terminated immediately and We may, in Our discretion, terminate your Program or take other action We deem appropriate.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>10. Our Referral Program.</strong> You may refer Our Program to future clients for a one-time credit towards your Program Fees as follows:
            </p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li>
                <strong>How it Works.</strong> You are eligible to receive a one-time credit of $250 for your Program fees for referring a friend, family member, or acquaintance to Us. Referral credit/s will be provided as a credit to your account for $250 for each family referred and will typically be issued within thirty (30) days after the referred family begins Program Fees. The referred family will also receive a credit of $250 to deduct from their first month's Program Fees. Any referral credit/s earned through the referral program will be subject to Terms. The referral program is a voluntary benefit that We offer and may be modified, amended, or discontinued at any time, at Our sole discretion, with or without notice.
              </li>
              <li>
                <strong>Who to Refer.</strong> The referral program is only valid for referrals who actually join and become new Program clients. This means that they must have paid the one-time Enrollment Fee, and have verbally committed to at least 3 months of the Program. You may refer anyone who you know and believe may be interested in joining our Program. However, the referral program does not apply to, and you will not receive a referral credit for referring, any former Program member who re-joins or any new member who joins with a short-term Program.
              </li>
              <li>
                <strong>Eligibility to Participate.</strong> Clients who have a past-due/overdue balance or are otherwise not in good standing with Us, who receive the Program on a complimentary basis, who have a short-term Program, or are employees of Superpower Mentors or one of its affiliates, are not eligible to participate in the referral program.
              </li>
              <li>
                <strong>Making a Referral.</strong> You may refer a friend, family member, or acquaintance by contacting{" "}
                <a href="mailto:hello@superpowermentors.com" className="text-blue-600 hover:underline">
                  hello@superpowermentors.com
                </a>. You may not generate referrals by using any robotic, automated, or programmed methods, engaging in spamming, or creating a website or other means to solicit referrals from individuals You do not know. We reserve the right to, at Our discretion, deny a referral credit to, permanently disqualify from the referrals program, or terminate the Program of any individual it believes is tampering with the functioning of or otherwise abusing the referrals program.
              </li>
            </ol>
          </div>

          <div>
            <p className="mb-4">
              <strong>11. SMS and Mobile Services.</strong> We have entered into a business relationship with an external provider of SMS messaging. The following Terms apply:
            </p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li>
                We may send promotional and transactional mobile messages in various formats through SMS Messaging. Transactional messages relate to an existing or ongoing transaction and may include inquiring about the Mentee's Mentor, setting up meetings with the Superpower Mentors team, and logistics related to Program enrollment. Message frequency will vary but will not exceed 40 messages per month. You agree that We, our affiliates, and any third-party Service providers may send you messages regarding the foregoing topics or any topic and that such messages and/or calls may be made or placed using different telephone numbers or short-codes, except in connection with marketing purposes.
              </li>
              <li>
                By providing your mobile phone number to Us, you are voluntarily opting into the SMS Messaging and you agree to receive recurring mobile messages from Us at the mobile phone number associated with your opt-in. If you change your mobile phone number or are no longer the owner or authorized user of the mobile phone number, you agree to promptly notify Us at{" "}
                <a href="mailto:support@superpowermentors.com" className="text-blue-600 hover:underline">
                  support@superpowermentors.com
                </a>.
              </li>
              <li>
                <strong>User Opt-Out and Support:</strong> You may opt-out of SMS Messaging at any time. If you wish to opt-out of the SMS Messaging and stop receiving mobile messages from Us, or you no longer agree to these Mobile Messaging Terms, reply STOP to the mobile number the message is sent from. If you want to receive SMS Messages with Superpower Mentors, sign up again.
              </li>
              <li>
                <strong>Disclaimer of Warranty and Liability:</strong> The SMS Messaging is offered on an "as-is" basis and may not be available in all areas, at all times, or on all mobile providers. You agree that neither We nor our service providers will be liable for any failed, delayed, or misdirected delivery of any mobile message or information sent through the SMS Messaging.
              </li>
            </ol>
          </div>

          <div>
            <p>
              <strong>12. Exclusive Access to Site.</strong> You agree that only you and the Mentee may access the Services using the Site and that you will not share log-in information with any third party except as legally required. No third parties may attend Services without Our written consent. You and the Mentee are responsible for ensuring that your account is used only for authorized purposes and that you comply with all laws or regulations.
            </p>
          </div>

          <div>
            <p>
              <strong>13. Intellectual Property and Data Privacy.</strong> We grant you a personal, non-exclusive, non-transferable, revocable license to access and use the Site or, if applicable, the Services only for your own personal, non-commercial use. All content and functionality in this Site and our Services, including text, graphics, logos, icons, images, books, questions, explanations, diagrams, animations, audio, and videos and the selection and arrangement thereof, in addition to any concepts, know-how, tools, frameworks, software, applications or other technology, Services, algorithms, models, processes, and industry perspectives underlying or embedded in the foregoing, along with any enhancements to or derivative works (collectively, the "Content") are owned by Us, our direct or indirect subsidiaries, affiliates, licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. The Site, Services, and Content feature logos, company names, product names, service names, designs, slogans, and other trademarks and service marks (collectively, the "Marks") that are registered and unregistered Marks of ours, our direct or indirect subsidiaries, licensors, or third party providers. All of these Marks are the property of their respective owners. Nothing contained in the Site, Services, or Content should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Mark without our written permission or any such third party that may own a Mark displayed on the Site, Services, or Content. We reserve all rights not expressly granted in and to the Site, Services, and Content. You acknowledge the Privacy Notice and understand it governs our use of both your data and that of the Mentee.
            </p>
          </div>

          <div>
            <p className="mb-4"><strong>Pausing Services.</strong> You may temporarily suspend ("Pause") the Program as follows:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="border border-zinc-300 px-4 py-3 text-left font-bold text-black bg-zinc-50 w-1/4"></th>
                    <th className="border border-zinc-300 px-4 py-3 text-left font-bold text-black bg-zinc-50">
                      Non-Medical Pause: Any reason other than medical.
                    </th>
                    <th className="border border-zinc-300 px-4 py-3 text-left font-bold text-black bg-zinc-50">
                      Medical Freeze: the Mentee is medically unable to receive Services. Including hospitalizations or in patient services. A doctor's notice is required.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-3 font-bold text-black align-top">
                      Duration: Pausing is for consecutive calendar months. Partial months of pausing are not permitted.
                    </td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">Up to 3 months.</td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">Up to 6 months.</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-3 font-bold text-black align-top">Frequency</td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">May be requested once after 6 months of the Program. Retroactive Pauses are not permitted.</td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">No limitation. Retroactive Pauses are not permitted.</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-3 font-bold text-black align-top">Fee</td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">$150 per month Paused. Pausing fees are non-refundable and non-cancellable, even if you subsequently elect to reduce the duration of your Non-Medical Pausing.</td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">None</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-3 font-bold text-black align-top">Billing</td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">
                      Billing of monthly dues will be held for the duration of the Non-Medical Pause, but requests must be submitted 5 business days before the 1st of the following month. If we do not receive your request within this time frame, the Pause will apply to the following month. We will charge the Pausing Fee at the start of your Non-Medical Freeze for the total months paused. For example, if you request 3 months paused, then you will be charged a lump sum of $450.
                    </td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">Billing of monthly dues will be held for the duration of the Medical Freeze.</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 px-4 py-3 font-bold text-black align-top">Contact</td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">
                      By emailing Our Support Channels at{" "}
                      <a href="mailto:support@superpowermentors.com" className="text-blue-600 hover:underline">
                        support@superpowermentors.com
                      </a>.
                    </td>
                    <td className="border border-zinc-300 px-4 py-3 align-top">
                      By emailing Our Support Channels at{" "}
                      <a href="mailto:support@superpowermentors.com" className="text-blue-600 hover:underline">
                        support@superpowermentors.com
                      </a>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}