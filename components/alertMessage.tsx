// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { X } from "lucide-react";

// export default function DarkAlertMessage() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleDismiss = () => {
//     setIsVisible(false);
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           transition={{ duration: 0.5 }}
//           className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md"
//         >
//           <Alert className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-gray-100 shadow-lg">
//             <AlertTitle className="text-lg font-bold mb-2 text-emerald-400">
//               Welcome to Our Website!
//             </AlertTitle>
//             <AlertDescription className="text-sm text-gray-300">
//               Discover amazing features and exclusive offers waiting just for
//               you. Don{"'"}t miss out!

//             </AlertDescription>
//             <button
//               onClick={handleDismiss}
//               className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
//               aria-label="Close alert"
//             >
//               <X size={20} />
//             </button>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={handleDismiss}
//                 className="bg-emerald-600 text-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
//               >
//                 Got it, thanks!
//               </button>
//             </div>
//           </Alert>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { X, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import Link from "next/link";

// export default function DarkAlertMessage() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleDismiss = () => {
//     setIsVisible(false);
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           transition={{ duration: 0.5 }}
//           className="fixed bottom-4 animate-shine right-[1%] transform -translate-x-1/2 z-50 w-full max-w-3xl"
//         >
//           <Alert className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-gray-100 shadow-lg">
//             <AlertTitle className="text-lg font-bold mb-2 text-emerald-400">
//               Special Offer!
//             </AlertTitle>
//             <AlertDescription className="text-sm text-gray-300">
//               <span className="inline-flex items-center text-white flex-wrap">
//                 <span className="mr-2 text-yellow-300">✨</span>
//                 Get a{" "}
//                 <Link
//                   href="https://coding-school-typescript.vercel.app/give-away"
//                   className="mx-1 font-semibold underline text-emerald-400 hover:text-emerald-300"
//                 >
//                   Free Next.js Starter Kit
//                 </Link>{" "}
//                 and enjoy{" "}
//                 <span className="mx-1 font-semibold text-yellow-300">
//                   50% Discount
//                 </span>{" "}
//                 on the Premium{" "}
//                 <Link
//                   href="https://coding-school-typescript.vercel.app/give-away"
//                   className="mx-1 font-semibold underline text-emerald-400 hover:text-emerald-300"
//                 >
//                   Next.js Fullstack Course!
//                 </Link>
//                 <span className="ml-2 text-yellow-300">🚀</span>
//                 <Link
//                   href="https://coding-school-typescript.vercel.app/give-away"
//                   className="flex gap-1 items-center font-semibold underline text-emerald-400 hover:text-emerald-300 mt-2"
//                 >
//                   Learn More
//                   <ChevronRight className="w-4 h-4" />
//                 </Link>
//               </span>
//             </AlertDescription>
//             <button
//               onClick={handleDismiss}
//               className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
//               aria-label="Close alert"
//             >
//               <X size={20} />
//             </button>
//           </Alert>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

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
