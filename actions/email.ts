/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { sendClientEmail } from "@/components/emailForms/clientEmail";
import { sendNewsletterEmail } from "@/components/emailForms/Newsletter";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

export type MailDataProps = {
  name: string;
  email: string;
  service: string;
  budgetRange: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendArticleToMultipleMails(formData: MailDataProps) {
  const { name, email, service, message, budgetRange } = formData;

  try {
    // Send email to business owner
    const ownerRes = await resend.emails.send({
      from: `${email} <info@kyaja.com>`,
      to: "johnelipse472@gmail.com",
      subject: `New Website Request: ${service}`,
      html: sendNewsletterEmail(name, email, service, budgetRange, message),
    });

    // Send confirmation email to client
    const clientRes = await resend.emails.send({
      from: "Desishub <info@kyaja.com>",
      to: email,
      subject: "Thank you for your website request",
      html: sendClientEmail(name, service),
    });

    revalidatePath("/");
    return {
      success: true,
      message: "Messages Sent",
      status: 200,
    };
  } catch (error) {
    console.error("Error processing website request:", error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
      status: 403,
    };
  }
}
