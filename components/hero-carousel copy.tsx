"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

const images = ["/images/1.webp", "/images/1.webp"];

// Define types for the form data
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Log the form data (replace with API call in production)
    console.log("Form data ready to be sent to API:", formData);

    // Close the modal
    setIsModalOpen(false);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      service: "web-design",
      budgetRange: "0-1000",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={600}
                className="w-full h-[400px] sm:h-[500px] object-cover cursor-pointer"
                onClick={handleImageClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[700px] bg-gradient-to-br from-purple-100 to-pink-100">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-800">
              Contact Us
            </DialogTitle>
            <DialogDescription className="text-purple-600">
              Fill in your details and we'll get back to you as soon as
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
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
