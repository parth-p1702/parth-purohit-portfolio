"use client";

import { certificates } from "@/lib/certificate";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Certificates() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = containerRef.current;
    if (!el) return;
    const onResize = () => updateScrollButtons();
    const onScroll = () => updateScrollButtons();
    window.addEventListener("resize", onResize);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".cert-card");
    const cardWidth =
      firstCard
        ? firstCard.offsetWidth +
          parseInt(getComputedStyle(firstCard).marginRight || "16")
        : el.clientWidth * 0.8;
    const distance = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section
      id="certificates"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6 relative"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">
          My Certificates
        </h1>

        <div className="relative">
          {/* Left button */}
          <button
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 shadow-md transition border 
              ${
                canScrollLeft
                  ? "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 hover:scale-105 border-gray-300 dark:border-gray-400"
                  : "bg-white/60 text-gray-400 dark:bg-gray-700/60 dark:text-gray-400 border-gray-200 dark:border-gray-600 cursor-not-allowed"
              }`}
          >
            <BsChevronLeft size={20} />
          </button>

          {/* Right button */}
          <button
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 shadow-md transition border 
              ${
                canScrollRight
                  ? "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 hover:scale-105 border-gray-300 dark:border-gray-400"
                  : "bg-white/60 text-gray-400 dark:bg-gray-700/60 dark:text-gray-400 border-gray-200 dark:border-gray-600 cursor-not-allowed"
              }`}
          >
            <BsChevronRight size={20} />
          </button>

          {/* Scrollable row */}
          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-auto no-scrollbar px-4 py-2 snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="cert-card min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-xl snap-start"
              >
                <h2 className="text-lg font-semibold mb-1">{cert.title}</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {cert.platform}
                </p>

                <div className="relative w-full h-44 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <Link
                  href={cert.link}
                  target="_blank"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-lg transition"
                >
                  View Certificate
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* hide scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
