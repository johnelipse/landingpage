/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Send } from "lucide-react";
// import TextInput from "../formInputs/textInput";
// import TextArea from "../formInputs/textArea";
// import SubmitButton from "../formInputs/submitButton";
// import { sendArticleToSingleMail } from "@/actions/email";
// import toast from "react-hot-toast";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// export type EmailProps = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };
// const websiteTypes = [
//   "Business Websites",
//   "E-commerce Platforms",
//   "Landing Pages",
//   "Blogs and Content Websites",
//   "Portfolio Sites",
// ];

// export default function ContactUsForm() {
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<EmailProps>();
//   const [loading, setLoading] = useState(false);
//   const [selectedType, setSelectedType] = useState("");

//   async function submit(data: EmailProps) {
//     console.log(data);
//     // setLoading(true);
//     // try {
//     //   const result = await sendArticleToSingleMail(data);
//     //   if (result && result.status === 200) {
//     //     toast.success(result.message);
//     //     reset();
//     //   } else if (result && result.status === 403) {
//     //     throw new Error(result.message);
//     //   }
//     // } catch (error) {
//     //   console.error(error);
//     //   toast.error("Failed to send email. Please try again.");
//     // } finally {
//     //   setLoading(false);
//     // }
//   }

//   return (
//     <form action="" onSubmit={handleSubmit(submit)} className="space-y-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <TextInput
//           className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
//           register={register}
//           errors={errors}
//           name="name"
//         />
//         <TextInput
//           className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
//           register={register}
//           errors={errors}
//           name="email"
//         />
//       </div>
//       <TextInput
//         className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
//         register={register}
//         errors={errors}
//         name="subject"
//       />
//       <Select onValueChange={setSelectedType} value={selectedType}>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder="Select a website type" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectLabel>Website Types</SelectLabel>
//             {websiteTypes.map((type) => (
//               <SelectItem key={type} value={type}>
//                 {type}
//               </SelectItem>
//             ))}
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//       <TextArea
//         className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
//         register={register}
//         errors={errors}
//         name="message"
//       />
//       <SubmitButton
//         size={"sm"}
//         className="w-full bg-gradient-to-r from-emerald-400 to-blue-500"
//         buttonIcon={Send}
//         title="Send Message"
//         loadingTitle="sending..."
//         showIcon
//         loading={loading}
//       />
//     </form>
//   );
// }

"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Send } from "lucide-react";
import TextInput from "../formInputs/textInput";
import TextArea from "../formInputs/textArea";
import SubmitButton from "../formInputs/submitButton";
import { sendArticleToSingleMail } from "@/actions/email";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type EmailProps = {
  name: string;
  email: string;
  message: string;
  websiteType: string;
};

const websiteTypes = [
  "Business Websites",
  "E-commerce Platforms",
  "Landing Pages",
  "Blogs and Content Websites",
  "Portfolio Sites",
];

export default function ContactUsForm() {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailProps>();
  const [loading, setLoading] = useState(false);

  async function submit(data: EmailProps) {
    setLoading(true);
    try {
      const result = await sendArticleToSingleMail(data);
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
    <form onSubmit={handleSubmit(submit)} className="space-y-6">
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
      <Controller
        name="websiteType"
        control={control}
        rules={{ required: "Please select a website type" }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300">
              <SelectValue placeholder="Select a website type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Website Types</SelectLabel>
                {websiteTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {errors.websiteType && (
        <p className="text-red-500 text-sm mt-1">
          {errors.websiteType.message}
        </p>
      )}
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
        title="Send Message"
        loadingTitle="sending..."
        showIcon
        loading={loading}
      />
    </form>
  );
}
