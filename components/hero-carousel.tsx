/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sendArticleToMultipleMails } from "@/actions/email";
import toast from "react-hot-toast";
import { ChevronRight, Loader, Star } from "lucide-react";

// const images = ["/images/1.webp", "/images/2.webp"];

const images = [
  { src: "/images/1.webp" },
  { src: "/images/2.webp" },
  { src: "/images/3.webp" },
  { src: "/images/4.webp" },
  { src: "/images/5.webp" },
];

type Service = "web-design" | "web-development" | "seo" | "mobile-app";
type BudgetRange = "0-1000" | "1000-5000" | "5000-10000" | "10000+";

interface FormData {
  name: string;
  email: string;
  service: Service;
  budgetRange: BudgetRange;
  message: string;
}

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "web-design",
    budgetRange: "0-1000",
    message: "",
  });

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Form data ready to be sent to API:", formData);
    setLoading(true);
    try {
      const result = await sendArticleToMultipleMails(formData);
      if (result && result.status === 200) {
        toast.success(result.message);
        setFormData({
          name: "",
          email: "",
          service: "web-design",
          budgetRange: "0-1000",
          message: "",
        });
      } else if (result && result.status === 403) {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 flex items-center justify-center p-4">
  //     <div className="w-full max-w-4xl mx-auto">
  //       <Swiper
  //         modules={[Navigation, Pagination, Autoplay]}
  //         spaceBetween={30}
  //         slidesPerView={1}
  //         navigation
  //         pagination={{ clickable: true }}
  //         autoplay={{ delay: 3000 }}
  //         className="rounded-lg overflow-hidden shadow-xl"
  //       >
  //         {images.map((src, index) => (
  //           <SwiperSlide key={index}>
  //             <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
  //               {" "}
  //               {/* 16:9 Aspect Ratio */}
  //               <Image
  //                 src={src}
  //                 alt={`Slide ${index + 1}`}
  //                 fill
  //                 className="object-cover cursor-pointer"
  //                 onClick={handleImageClick}
  //                 sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
  //               />
  //             </div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>

  //     <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  //       <DialogContent className="sm:max-w-[700px] bg-gradient-to-br from-purple-100 to-pink-100">
  //         <DialogHeader>
  //           <DialogTitle className="text-2xl font-bold text-purple-800">
  //             Contact Us
  //           </DialogTitle>
  //           <DialogDescription className="text-purple-600">
  //             Fill in your details and we{"'"}ll get back to you as soon as
  //             possible.
  //           </DialogDescription>
  //         </DialogHeader>
  //         <form onSubmit={handleSubmit} className="space-y-4">
  //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  //             <div className="space-y-2">
  //               <Label htmlFor="name" className="text-purple-700">
  //                 Name
  //               </Label>
  //               <Input
  //                 id="name"
  //                 name="name"
  //                 value={formData.name}
  //                 onChange={handleInputChange}
  //                 placeholder="Your name"
  //                 required
  //                 className="border-purple-300 focus:border-purple-500"
  //               />
  //             </div>
  //             <div className="space-y-2">
  //               <Label htmlFor="email" className="text-purple-700">
  //                 Email
  //               </Label>
  //               <Input
  //                 id="email"
  //                 name="email"
  //                 type="email"
  //                 value={formData.email}
  //                 onChange={handleInputChange}
  //                 placeholder="Your email"
  //                 required
  //                 className="border-purple-300 focus:border-purple-500"
  //               />
  //             </div>
  //           </div>
  //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  //             <div className="space-y-2">
  //               <Label htmlFor="service" className="text-purple-700">
  //                 Service
  //               </Label>
  //               <Select
  //                 value={formData.service}
  //                 onValueChange={handleSelectChange("service")}
  //               >
  //                 <SelectTrigger className="border-purple-300 focus:border-purple-500">
  //                   <SelectValue placeholder="Select a service" />
  //                 </SelectTrigger>
  //                 <SelectContent>
  //                   <SelectItem value="web-design">Web Design</SelectItem>
  //                   <SelectItem value="web-development">
  //                     Web Development
  //                   </SelectItem>
  //                   <SelectItem value="seo">SEO Optimization</SelectItem>
  //                   <SelectItem value="mobile-app">
  //                     Mobile App Development
  //                   </SelectItem>
  //                 </SelectContent>
  //               </Select>
  //             </div>
  //             <div className="space-y-2">
  //               <Label htmlFor="budget" className="text-purple-700">
  //                 Budget Range
  //               </Label>
  //               <Select
  //                 value={formData.budgetRange}
  //                 onValueChange={handleSelectChange("budgetRange")}
  //               >
  //                 <SelectTrigger className="border-purple-300 focus:border-purple-500">
  //                   <SelectValue placeholder="Select budget range" />
  //                 </SelectTrigger>
  //                 <SelectContent>
  //                   <SelectItem value="0-1000">$0 - $1,000</SelectItem>
  //                   <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
  //                   <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
  //                   <SelectItem value="10000+">$10,000+</SelectItem>
  //                 </SelectContent>
  //               </Select>
  //             </div>
  //           </div>
  //           <div className="space-y-2">
  //             <Label htmlFor="message" className="text-purple-700">
  //               Message
  //             </Label>
  //             <Textarea
  //               id="message"
  //               name="message"
  //               value={formData.message}
  //               onChange={handleInputChange}
  //               placeholder="Your message"
  //               required
  //               className="border-purple-300 focus:border-purple-500"
  //             />
  //           </div>
  //           {loading ? (
  //             <Button
  //               disabled
  //               type="submit"
  //               className="w-full flex gap-2 items-center bg-purple-600 hover:bg-purple-700 text-white"
  //             >
  //               <Loader className="animate-spin w-4 h-4" />
  //               Submit
  //             </Button>
  //           ) : (
  //             <Button
  //               type="submit"
  //               className="w-full bg-purple-600 hover:bg-purple-700 text-white"
  //             >
  //               Submit
  //             </Button>
  //           )}
  //         </form>
  //       </DialogContent>
  //     </Dialog>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
        Elevate Your Digital Presence
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <Image
                  src={image.src}
                  alt="swiper images"
                  fill
                  className="object-cover cursor-pointer"
                  onClick={handleImageClick}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 text-center">
        <Button
          onClick={handleImageClick}
          className="bg-white text-purple-700 hover:bg-purple-100 transition-colors duration-300"
        >
          Get Started <ChevronRight className="ml-2" />
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          {
            title: "Expert Team",
            description: "Industry-leading professionals",
          },
          {
            title: "Cutting-Edge Tech",
            description: "Latest tools and frameworks",
          },
          {
            title: "Client Satisfaction",
            description: "5-star rated services",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-lg text-white text-center"
          >
            <Star className="mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[700px] bg-gradient-to-br from-purple-100 to-pink-100">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-800">
              Contact Us
            </DialogTitle>
            <DialogDescription className="text-purple-600">
              Fill in your details and we{"'"}ll get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple-700">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="border-purple-300 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  required
                  className="border-purple-300 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="service" className="text-purple-700">
                  Service
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={handleSelectChange("service")}
                >
                  <SelectTrigger className="border-purple-300 focus:border-purple-500">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-design">Web Design</SelectItem>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="mobile-app">
                      Mobile App Development
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-purple-700">
                  Budget Range
                </Label>
                <Select
                  value={formData.budgetRange}
                  onValueChange={handleSelectChange("budgetRange")}
                >
                  <SelectTrigger className="border-purple-300 focus:border-purple-500">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000+">$10,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-purple-700">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                required
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            {loading ? (
              <Button
                disabled
                type="submit"
                className="w-full flex gap-2 items-center bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Loader className="animate-spin w-4 h-4" />
                Submit
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Submit
              </Button>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
