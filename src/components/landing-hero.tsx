import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <FadeUp key="title-main" duration={0.6}>
            <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
              Md Ariful Islam
            </h1>
            <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
              Software Engineer
            </span>
          </FadeUp>

          <FadeUp key="description" duration={0.6} delay={0.2}>
            <div className="mt-8 max-w-3xl text-justify text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
              A positive, innovative, results-driven Junior Software Developer
              with 4 years of experience who takes pride in effectively
              combining workplace objectives with personal and professional
              goals. Proficient in solving technical problems with practical
              solutions using various software architectures and database
              designs. Also skilled in managing proper software documentation
              and completing tasks following various software development
              methodologies.
            </div>
          </FadeUp>
        </div>
      </div>
    </motion.section>
  );
}
