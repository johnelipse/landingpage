/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "./ui/marquee";
import SliderComp from "./slider";

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
        <SliderComp />
        <main>
          <motion.section
            className="mb-12 mt-14 body-font"
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
            <div className="flex max-w-6xl mx-auto flex-col items-center justify-center">
              <Marquee pauseOnHover className="[--duration:20s] ">
                {process.map((process, i) => {
                  return (
                    <motion.div
                      key={i}
                      className="border w-[21rem] border-gray-800 rounded-lg py-2 px-4 hover:border-orange-400 transition-colors"
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
              </Marquee>
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

          {/* <motion.section
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
          </motion.section> */}

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
              <motion.h2 className="text-3xl font-bold  mt-6 mb-4" {...fadeIn}>
                Contact Us
              </motion.h2>
              {/* <ContactUsForm /> */}
              {/* <Tabs
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
              </Tabs> */}
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
