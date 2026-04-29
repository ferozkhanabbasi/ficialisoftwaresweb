"use client";
import { CONTACT } from "@/constants";
import Image from "next/image";
import { useEffect } from "react";

const WhatsappButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-1000">
      <a
        className="fixed bottom-6 md:bottom-10 right-6 md:right-10"
        href={`${CONTACT.BASE_URL}?phone=${CONTACT.NUMBER}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="absolute -left-3 -top-3 -z-50 size-14">
          <span className="flex size-full items-center justify-center animate-pulse rounded-full bg-green-500 opacity-75"></span>
        </span>
        <Image
          className="whatsapp-icon z-50"
          src="/whatsapp-icon.png"
          alt="Whatsapp"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};

export default WhatsappButton;
