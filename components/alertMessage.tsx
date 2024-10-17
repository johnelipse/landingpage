"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export default function DarkAlertMessage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl"
        >
          <Alert className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-gray-100 shadow-lg">
            <AlertTitle className="text-lg font-bold mb-2 text-emerald-400">
              Special Offer!
            </AlertTitle>
            <AlertDescription className="text-sm text-gray-300">
              <p className="mb-2">
                <span className="text-yellow-300 mr-1">✨</span>
                Get a{" "}
                <Link
                  href="https://coding-school-typescript.vercel.app/give-away"
                  className="font-semibold underline text-emerald-400 hover:text-emerald-300"
                >
                  Free Next.js Starter Kit
                </Link>{" "}
                and enjoy a{" "}
                <span className="font-semibold text-yellow-300">
                  50% Discount
                </span>{" "}
                on the Premium{" "}
                <Link
                  href="https://coding-school-typescript.vercel.app/give-away"
                  className="font-semibold underline text-emerald-400 hover:text-emerald-300"
                >
                  Next.js Fullstack Course
                </Link>
                ! <span className="text-yellow-300 ml-1">🚀</span>
              </p>
              <Link
                href="https://coding-school-typescript.vercel.app/give-away"
                className="inline-flex items-center font-semibold underline text-emerald-400 hover:text-emerald-300"
              >
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </AlertDescription>
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Close alert"
            >
              <X size={20} />
            </button>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
