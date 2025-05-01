"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // استيراد motion

const HeroSection = () => {
  const videoUrl = "0_Earth_Planet_3840x2160.mov";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      {/* طبقة اللون الأسود مع الانيميشن */}
      <motion.div
        className="absolute inset-0 bg-black z-10"
        initial={{ opacity: 1 }} // يبدأ بالظهور
        animate={{ opacity: 0 }} // يختفي تدريجيًا
        transition={{ duration: 1.5, delay: 0.5 }} // مدة الانيميشن والتأخير
      ></motion.div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 mx-auto max-w-3xl text-center text-white">
        {/* انيميشن العنوان */}
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CosmoScope: Explore NASA's Universe
        </motion.h1>

        {/* انيميشن الوصف */}
        <motion.p
          className="mt-6 text-lg leading-8 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your daily dose of astronomical wonders, near-Earth object tracking,
          and more directly from NASA's vast data resources.
        </motion.p>

        {/* انيميشن الزر */}
        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button variant="outline" size="lg" className="text-black" asChild>
              <Link href="/apod">Start Exploring</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
