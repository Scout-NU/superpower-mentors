"use client";

import { Space_Grotesk } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function PrivacyPolicyPage() {
  return (
    <main className={`${spaceGrotesk.className} min-h-screen pt-20 bg-white`}>
      {/* Hero */}
      <section className="px-6 py-24" style={{ background: "#571377" }}>
        <div className="max-w-7xl mx-auto">
          <h1
            className={`${jakarta.className} text-white leading-none text-center`}
            style={{ fontSize: "clamp(64px, 10vw, 120px)", fontWeight: 500 }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="space-y-10 text-zinc-700 text-sm leading-relaxed">

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              1. WHAT INFORMATION DO WE COLLECT?
            </h3>
            <p className="font-semibold text-black mb-2">Personal information you disclose to us</p>
            <p className="italic mb-3">
              <strong>In Short:</strong> We collect personal information that you provide to us.
            </p>
            <p className="mb-3">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p className="mb-3">
              <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4 mb-3">
              <li>names</li>
              <li>phone numbers</li>
              <li>email addresses</li>
            </ol>
            <p className="mb-3">
              <strong>Sensitive Information.</strong> We do not process sensitive information.
            </p>
            <p>
              All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
            </p>
            <p className="mb-3">
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
            </p>
            <p className="mb-3">
              <strong>If you are located in the EU or UK, this section applies to you.</strong>
            </p>
            <p className="mb-3">
              The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
              <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
              <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
              <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
            </ol>
            <p className="mb-3">
              <strong>If you are located in Canada, this section applies to you.</strong>
            </p>
            <p className="mb-3">
              We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
            </p>
            <p className="mb-3">
              In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
              <li>For investigations and fraud detection and prevention</li>
              <li>For business transactions provided certain conditions are met</li>
              <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
              <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
              <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
              <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
              <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
              <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
              <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
              <li>If the information is publicly available and is specified by the regulations</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
            </p>
            <p className="mb-3">We may need to share your personal information in the following situations:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              5. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
            </p>
            <p className="mb-3">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              6. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
            </p>
            <p className="mb-3">
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              7. DO WE COLLECT INFORMATION FROM MINORS?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
            </p>
            <p>
              We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at{" "}
              <a href="mailto:info@superpowermentors.com" className="text-blue-600 hover:underline">
                info@superpowermentors.com
              </a>.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              8. WHAT ARE YOUR PRIVACY RIGHTS?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
            </p>
            <p className="mb-3">
              In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>
            <p className="mb-3">We will consider and act upon any request in accordance with applicable data protection laws.</p>
            <p className="mb-3">
              If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
            </p>
            <p className="mb-3">
              If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
            </p>
            <p className="mb-3">
              <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>
            <p className="mb-3">
              However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you may email us at{" "}
              <a href="mailto:info@superpowermentors.com" className="text-blue-600 hover:underline">
                info@superpowermentors.com
              </a>.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h3>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
            </p>
            <p className="mb-3">
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
            </p>
            <p className="mb-3">
              If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
            </p>
            <p className="mb-3">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4 mb-4">
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests; and</li>
              <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
            </ol>
            <p className="mb-3"><strong>How do we use and share your personal information?</strong></p>
            <p className="mb-3">More information about our data collection and sharing practices can be found in this privacy notice.</p>
            <p className="mb-3">You may contact us or by referring to the contact details at the bottom of this document. If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>
            <p className="mb-3"><strong>Will your information be shared with anyone else?</strong></p>
            <p className="mb-3">
              We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CCPA.
            </p>
            <p className="mb-3">
              We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
            </p>
            <p className="mb-4">
              Superpower Consulting Group LLC has not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Superpower Consulting Group LLC will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
            </p>
            <p className="mb-3"><strong>Your rights with respect to your personal data</strong></p>
            <p className="mb-2"><strong>Right to request deletion of the data — Request to delete</strong></p>
            <p className="mb-3">
              You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
            </p>
            <p className="mb-2"><strong>Right to be informed — Request to know</strong></p>
            <p className="mb-3">Depending on the circumstances, you have a right to know:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4 mb-4">
              <li>whether we collect and use your personal information;</li>
              <li>the categories of personal information that we collect;</li>
              <li>the purposes for which the collected personal information is used;</li>
              <li>whether we sell or share personal information to third parties;</li>
              <li>the categories of personal information that we sold, shared, or disclosed for a business purpose;</li>
              <li>the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;</li>
              <li>the business or commercial purpose for collecting, selling, or sharing personal information; and</li>
              <li>the specific pieces of personal information we collected about you.</li>
            </ol>
            <p className="mb-3">
              In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
            </p>
            <p className="mb-2"><strong>Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</strong></p>
            <p className="mb-3">We will not discriminate against you if you exercise your privacy rights.</p>
            <p className="mb-2"><strong>Right to Limit Use and Disclosure of Sensitive Personal Information</strong></p>
            <p className="mb-3">We do not process consumer's sensitive personal information.</p>
            <p className="mb-2"><strong>Verification process</strong></p>
            <p className="mb-3">
              Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
            </p>
            <p className="mb-3">
              We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
            </p>
            <p className="mb-2"><strong>Other privacy rights</strong></p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>You may object to the processing of your personal information.</li>
              <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
              <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
              <li>You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
            </ol>
            <p className="mt-3">
              To exercise these rights, you can contact us or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              11. DO WE MAKE UPDATES TO THIS NOTICE?
            </h3>
            <p className="italic mb-3">
              <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>
            <p>
              We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black text-base mb-3">
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h3>
            <p className="mb-3">
              If you have questions or comments about this notice, you may email us at{" "}
              <a href="mailto:info@superpowermentors.com" className="text-blue-600 hover:underline">
                info@superpowermentors.com
              </a>{" "}
              or contact us by post at:
            </p>
            <address className="not-italic ml-4 space-y-1">
              <p className="font-semibold">Superpower Consulting Group LLC</p>
              <p>United States</p>
            </address>
          </div>

        </div>
      </section>
    </main>
  );
}