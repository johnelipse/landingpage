/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ContactUsForm from "./emailForms/contactUs";
import AuditForm from "./emailForms/auditService";
import Link from "next/link";
import Marquee from "./ui/marquee";

export default function DesishubLanding() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navLinks = [
    {
      title: "Services",
      link: "#services",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Contact",
      link: "#contactUs",
    },
    {
      title: "Blog",
      link: "/",
    },
  ];

  const services = [
    {
      title: "Business Websites",
      description:
        "Tailored for professional online presence, enhancing credibility and attracting potential clients effectively.",
    },
    {
      title: "E-commerce Platforms",
      description:
        "User-friendly online stores optimized for seamless product listing, purchasing, and customer management.",
    },
    {
      title: "Landing Pages",
      description:
        "Focused, high-converting pages designed for marketing campaigns to capture leads or promote offers.",
    },
    {
      title: "Blogs and Content Websites",
      description:
        "Platforms for publishing articles, news, and media, fostering engagement and driving organic traffic.",
    },
    {
      title: "Portfolio Sites",
      description:
        "Personal or business portfolios showcasing work, skills, and achievements to attract potential clients.",
    },
  ];

  const process = [
    {
      title: "Subscribe",
      description:
        " Users stay updated with the latest offerings, news, or services through timely notifications.",
    },
    {
      title: "Request",
      description:
        "Clients can easily submit inquiries or service requests, ensuring personalized responses and support.",
    },
    {
      title: "Build",
      description:
        "The process of creating tailored digital solutions, transforming ideas into fully functional online platforms.",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen body-font bg-black text-white font-sans">
      <div className="container body-font mx-auto px-4 py-8">
        <motion.header
          className="flex justify-between items-center lg:mb-16 md:mb-16 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-bold">Desishub</div>
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((navLink, i) => {
              return (
                <motion.a
                  key={i}
                  href={navLink.link}
                  className="hover:text-green-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {navLink.title}
                </motion.a>
              );
            })}
          </nav>
          <Button className="bg-[#419253] hover:none text-white">
            <Link href="#contactUs">Get Started</Link>
          </Button>
        </motion.header>

        <main>
          <motion.section
            id="about"
            className="text-center body-font mb-12"
            {...fadeIn}
          >
            <h1 className="lg:text-6xl md:text-3xl text-2xl font-bold mb-6 relative inline-block">
              Driving growth with
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                {" Web Development."}
              </motion.span>
              <motion.div
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-green-400 to-orange-400 opacity-20 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We{"'"}re a full-service Web Development Agency 🌐 We turn
              businesses into web-driven 🚀 industry leaders.
            </p>
          </motion.section>

          <motion.section
            className="mb-12 body-font"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl body-font font-bold mb-8"
              {...fadeIn}
            >
              Our process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((process, i) => {
                return (
                  <motion.div
                    key={i}
                    className="border border-gray-800 rounded-lg py-1 px-3 hover:border-green-400 transition-colors"
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-green-400 mb-2">{`0${i + 1}`}</div>
                    <h3 className="text-xl font-semibold mb-1">
                      {process.title}
                    </h3>
                    <p className="text-gray-400">{process.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            className="mb-24"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.h2 className="text-3xl font-bold mb-8" {...fadeIn}>
              Why Choose Desishub?
            </motion.h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Custom designs tailored to your brand",
                "Responsive websites that look great on all devices",
                "SEO-optimized to help you rank higher on search engines",
                "Reliable web hosting with 99.9% uptime",
                "Ongoing support and maintenance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  variants={fadeIn}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full mr-3"
                    whileHover={{ scale: 1.5 }}
                  ></motion.div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="mb-12 body-font"
            variants={staggerChildren}
            id="services"
            initial="initial"
            animate="animate"
          >
            <motion.h2 className="text-3xl font-bold mb-8" {...fadeIn}>
              Our Services Include:
            </motion.h2>
            <div className="flex max-w-6xl mx-auto flex-col items-center justify-center">
              <Marquee pauseOnHover className="[--duration:20s] ">
                {services.map((service, i) => {
                  return (
                    <motion.div
                      key={i}
                      className="border w-[20rem] border-gray-800 rounded-lg py-2 px-4 hover:border-orange-400 transition-colors"
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, borderColor: "#f97316" }}
                    >
                      <h3 className="text-xl font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </motion.div>
                  );
                })}
              </Marquee>
            </div>
          </motion.section>

          <motion.section
            className="mb-12 body-font mx-auto max-w-md"
            id="contactUs"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {/* <motion.h2 className="text-3xl font-bold mb-8" {...fadeIn}>
              Ready to Get Started?
            </motion.h2> */}
            <motion.div className="" {...fadeIn}>
              <Tabs
                defaultValue="contact us"
                className="lg:w-[500px] md:w-[500px] w-full"
              >
                <TabsList>
                  <TabsTrigger value="contact us">contact us</TabsTrigger>
                  <TabsTrigger value="Audit website">Audit website</TabsTrigger>
                </TabsList>
                <TabsContent value="contact us">
                  <motion.h2
                    className="text-3xl font-bold  mt-6 mb-4"
                    {...fadeIn}
                  >
                    Contact Us
                  </motion.h2>
                  <ContactUsForm />
                </TabsContent>
                <TabsContent value="Audit website">
                  <motion.h2
                    className="text-3xl font-bold mt-6 mb-4"
                    {...fadeIn}
                  >
                    Audit Website
                  </motion.h2>
                  <AuditForm />
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.section>
        </main>

        <motion.footer
          className="text-center text-gray-400 body-font"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>&copy; {currentYear} Desishub. All rights reserved.</p>
        </motion.footer>
      </div>
      {/* <Link href="">
        <Image
          width={281}
          height={281}
          className="w-10 h-10 animate-pulse fixed bottom-[10%] right-[2%]"
          src="/what.png"
          alt="logo"
        />
      </Link> */}
    </div>
  );
}
