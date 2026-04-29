"use client";

import { motion } from "framer-motion";
import { MapPinIcon } from "lucide-react";

const contactCards = [
  {
    location: "Jersey office (Channel Island)",
    icon: <MapPinIcon className="w-6 h-6" />,
    address:
      "2 Grosvenor Court, 8 Grosvenor Street, St Helier, Jersey, JE24QR, Channel Island",
    phone: "+447417528809",
    emails: ["ficiali.je@ficialisoftwares.com"],
  },
  {
    location: "Pakistan Office (Karachi)",
    icon: <MapPinIcon className="w-6 h-6" />,
    address:
      "Office # B25, Rabia City Commercial 2, Block 18, Gulistan-e-Johar, Karachi, Sindh, Pakistan",
    phone: "+923041346726",
    emails: ["info@ficialisoftwares.com"],
  },
];

export default function ContactUs() {
  return (
    <section id="contact-us" className="py-20 2xl:py-32 bg-white/1">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
            }}
            className="text-sm font-medium text-violet-400 uppercase tracking-wide mb-3"
          >
            Contact Us
          </motion.p>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
              delay: 0.1,
            }}
            className="text-2xl md:text-4xl text-white font-semibold"
          >
            Let&apos;s build something great together
          </motion.h2>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
              delay: 0.2,
            }}
            className="max-w-md mx-auto text-sm text-gray-400 my-3"
          >
            Have a project in mind? Reach out to us and let&apos;s discuss how
            we can help transform your ideas into reality.
          </motion.p>
        </div>

        {/* Contact Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.1 + i * 0.1,
              }}
              className="rounded-2xl p-6 bg-white/3 border border-white/6 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-violet-900/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {card.location}
                </h3>
              </div>
              <div className="text-gray-300 text-sm space-y-4">
                {/* Address */}
                <div>
                  <p className="text-violet-400 font-medium">Address</p>
                  <p className="text-xs">{card.address}</p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-violet-400 font-medium">Phone</p>
                  <a
                    href={`tel:${card.phone}`}
                    className="text-xs hover:text-violet-400 transition-colors"
                  >
                    {card.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-violet-400 font-medium">Email</p>
                  <div className="text-xs space-y-1">
                    {card.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="block hover:text-violet-400 transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
