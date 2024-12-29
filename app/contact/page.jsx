"use client";

import Form from "@/components/Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-12 px-4 min-h-screen bg-[#F8F8F8]">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tighter sm:text-5xl mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="bg-gradient-to-r from-[#cb314e] via-[#4d5089] to-[#85599f] inline-block text-transparent bg-clip-text">
              Contact Us
            </span>
          </motion.h2>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
            <p className="text-gray-600">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
