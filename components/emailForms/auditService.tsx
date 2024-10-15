/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import TextInput from "../formInputs/textInput";
import TextArea from "../formInputs/textArea";
import SubmitButton from "../formInputs/submitButton";
import { sendMessageToSingleMail } from "@/actions/email";
import toast from "react-hot-toast";
export type EmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
  auditLink: string;
};
export default function AuditForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailProps>();
  const [loading, setLoading] = useState(false);

  async function submit(data: EmailProps) {
    console.log(data);
    setLoading(true);
    try {
      const result = await sendMessageToSingleMail(data);
      if (result && result.status === 200) {
        toast.success(result.message);
        reset();
      } else if (result && result.status === 403) {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action="" onSubmit={handleSubmit(submit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TextInput
          className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          register={register}
          errors={errors}
          name="name"
        />
        <TextInput
          className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          register={register}
          errors={errors}
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TextInput
          className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          register={register}
          errors={errors}
          name="subject"
        />
        <TextInput
          className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          register={register}
          errors={errors}
          name="auditLink"
        />
      </div>
      <TextArea
        className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
        register={register}
        errors={errors}
        name="message"
      />
      <SubmitButton
        size={"sm"}
        className="w-full bg-gradient-to-r from-emerald-400 to-blue-500"
        buttonIcon={Send}
        title="Audit website"
        loadingTitle="sending..."
        showIcon
        loading={loading}
      />
    </form>
  );
}
