"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8360c3] to-[#2ebf91]">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Carl Andrew",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Designer",
                2000,
                "Customer Service",
                2000,
                "Data Entry",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I'm Carl, a skilled professional in Data Entry, Customer Service,
            and Web Design, with a proven track record of success. I thrive on
            turning chaos into order, helping businesses like yours save time
            and boost productivity. Let's connect and discuss how I can support
            your goals!
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#8360c3] to-[#2ebf91] hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/ehe.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
