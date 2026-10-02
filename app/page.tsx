"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const builderSkills = [
  "Product Strategy",
  "Start-up Leadership",
  "Software Product Management",
  "Product Development",
  "Market Research",
  "UX Research",
  "Growth Analytics",
  "Data Engineering",
  "Full-Stack Development",
  "Software Design",
  "Statistical Data Analysis",
];

const projects = [
  {
    title: "$pendr — AI-Optimized Budget Allocator",
    shortTitle: "$pendr",
    href: "https://spendr-ai.vercel.app/",
    status: "Sep 2025 – Nov 2025",
    cardSummary: "AI-powered platform that dynamically distributes marketing budgets and optimizes ad spend by up to 40%. Features an interactive ad simulation system and AI scoring engine.",
    tags: ["AI Agents", "Optimization", "Python", "TypeScript", "React.js", "Firebase", "Data Visualization", "Product Strategy", "Research & Analysis"],
  },
  {
    title: "Code Canvas — Algorithm Learning & Visualization",
    shortTitle: "Code Canvas",
    status: "Jun 2026 – Sep 2026",
    cardSummary: "Local-first algorithm learning platform featuring an interactive visualization engine for concepts like Graphs, DP, and Binary Search with step-by-step trace timelines.",
    tags: ["React.js", , "TypeScript", "Tailwind CSS", "Algorithms", "Three.js", "Visualization", "Vite", "FastAPI", "Problem Definition"],
  },
];

const montserrat = Montserrat({
  subsets: ["latin"],
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Kafumi", href: "#kafumi" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/MayankGoyal495",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mayank-goyal-1199a2348/",
  },
];

const projectCardImages: Record<
  string,
  { src: string; alt: string; width: number; height: number; contain?: boolean }
> = {
  "$pendr": {
    src: "/spendr-preview.png",
    alt: "$pendr interface preview",
    width: 2500,
    height: 1200,
  },
  "Code Canvas": {
    src: "/code-canvas-preview.png",
    alt: "Code Canvas interface preview",
    width: 2500,
    height: 1200,
  },
  "Eastside Bike Routing": {
    src: "/eastside-bike-routing/ne24th-elevation-profile.png",
    alt: "NE 24th Street map and elevation profile showing a climb followed by a descent",
    width: 1595,
    height: 794,
    contain: true,
  },
  StreetEase: {
    src: "/StreetEase/StreetEase Updated UI.png",
    alt: "StreetEase interface preview",
    width: 1907,
    height: 507,
  },
  "Washington State Website": {
    src: "/Washington State Website/Homepage.png",
    alt: "Washington State Website homepage preview",
    width: 1907,
    height: 958,
  },
  "Lake Hills Orthodontics": {
    src: "/LHO/LHO B2B Marketing Brochure-1.png",
    alt: "Lake Hills Orthodontics brochure preview",
    width: 3300,
    height: 2550,
  },
  ModCotta: {
    src: "/ModCotta/Image 1.png",
    alt: "ModCotta product and brand preview",
    width: 600,
    height: 384,
  },
};

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.96-2.34 4.82-4.57 5.08.36.32.69.95.69 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM8.5 18.5H5.38V9.63H8.5v8.87ZM18.62 18.5H15.5v-4.32c0-1.03-.02-2.36-1.44-2.36-1.44 0-1.66 1.13-1.66 2.29v4.39H9.28V9.63h2.99v1.21h.04c.42-.79 1.43-1.62 2.95-1.62 3.15 0 3.73 2.08 3.73 4.79v4.49ZM20.18 2H3.82A1.8 1.8 0 0 0 2 3.79v16.42C2 21.2 2.8 22 3.79 22h16.39A1.8 1.8 0 0 0 22 20.21V3.79A1.8 1.8 0 0 0 20.18 2Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6.5h16v11H4z" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 2.75A6.25 6.25 0 0 0 5.75 9c0 4.35 5.18 10.72 5.4 10.99a1.1 1.1 0 0 0 1.7 0c.22-.27 5.4-6.64 5.4-10.99A6.25 6.25 0 0 0 12 2.75Zm0 8.9A2.65 2.65 0 1 1 12 6.35a2.65 2.65 0 0 1 0 5.3Z" />
    </svg>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeKafumiSlide, setActiveKafumiSlide] = useState(1);
  const scrollCueRef = useRef<HTMLAnchorElement>(null);
  const cueDotRef = useRef<HTMLSpanElement>(null);
  const cuePebbleRef = useRef<HTMLSpanElement>(null);
  const cueTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");
    const contactSection = document.getElementById("contact");

    const cue = scrollCueRef.current;
    const cueDot = cueDotRef.current;
    const cuePebble = cuePebbleRef.current;
    const cueText = cueTextRef.current;
    const animations: gsap.core.Animation[] = [];
    let cueHidden = false;

    const updateActiveSection = () => {
      const nearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 32;
      const scrollMarker = window.scrollY + 140;

      if (
        nearPageBottom ||
        (contactSection && scrollMarker >= contactSection.offsetTop)
      ) {
        setActiveSection("contact");
        return;
      }

      if (projectsSection && scrollMarker >= projectsSection.offsetTop) {
        setActiveSection("projects");
        return;
      }

      if (aboutSection && scrollMarker >= aboutSection.offsetTop) {
        setActiveSection("about");
        return;
      }

      if (homeSection) {
        setActiveSection("home");
      }
    };

    if (cue && cueDot && cuePebble && cueText) {
      gsap.set(cue, { autoAlpha: 1, y: 0, scale: 1 });

      animations.push(
        gsap.to(cue, {
          y: -8,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );

      animations.push(
        gsap.to(cueDot, {
          y: 11,
          duration: 1.15,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        })
      );

      animations.push(
        gsap.to(cuePebble, {
          x: 4,
          y: 2,
          rotation: 10,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );

      animations.push(
        gsap.to(cueText, {
          opacity: 0.55,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );
    }

    const onScroll = () => {
      updateActiveSection();

      if (!cue) {
        return;
      }

      if (window.scrollY > 36 && !cueHidden) {
        cueHidden = true;
        gsap.to(cue, {
          autoAlpha: 0,
          y: -12,
          scale: 0.94,
          duration: 0.35,
          ease: "power2.out",
        });
      } else if (window.scrollY <= 36 && cueHidden) {
        cueHidden = false;
        gsap.to(cue, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power2.out",
        });
      }
    };

    updateActiveSection();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      animations.forEach((animation) => animation.kill());
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const pinSection = document.getElementById("kafumi-pin-section");
    const carousel = document.getElementById("kafumi-carousel");

    if (pinSection && carousel) {
      const getScrollAmount = () => -(carousel.scrollWidth - carousel.parentElement!.offsetWidth);

      const tween = gsap.to(carousel, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          pin: true,
          scrub: 1,
          start: "center center",
          end: () => `+=${carousel.scrollWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const slideIndex = Math.min(6, Math.max(0, Math.round(self.progress * 6)));
            setActiveKafumiSlide(slideIndex + 1);
          },
        },
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, []);

  return (
    <main
      className={`${montserrat.className} min-h-screen overflow-x-hidden bg-[#F7F1E8] text-[#162b26]`}
    >
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8]/92 p-1.5 shadow-[0_14px_40px_rgba(22,43,38,0.08)] backdrop-blur-md">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block rounded-full px-4 py-2 text-[0.8rem] font-semibold transition sm:px-4.5 sm:py-2.5 sm:text-[0.83rem] lg:px-5 lg:py-2.5 lg:text-[0.88rem] ${activeSection === item.href.slice(1)
                      ? "bg-[#043439] text-white shadow-[0_10px_24px_rgba(4,52,57,0.22)]"
                      : "text-[#0F4C45] hover:bg-[#0F4C45]/8"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen scroll-mt-10 bg-[#F7F1E8] sm:scroll-mt-14"
      >
        <div className="mx-auto grid min-h-[calc(100vh-5.5rem)] w-full max-w-[1160px] grid-cols-1 items-center gap-8 px-6 pb-8 pt-20 sm:px-8 sm:py-10 md:px-10 md:py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:px-12 lg:py-10 xl:max-w-[1220px] xl:gap-10 xl:px-14">
          <div className="mx-auto w-full max-w-[420px] text-left">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-[0.74rem] lg:text-[0.8rem]">
              Technical Product Builder
            </p>

            <h1 className="max-w-[12ch] text-[2.15rem] font-extrabold leading-[0.92] tracking-tight sm:text-[2.9rem] md:text-[3.5rem] lg:text-[3.9rem] xl:text-[4.35rem]">
              Hello, I’m Mayank Goyal.
            </h1>

            <p className="mt-5 max-w-[25rem] text-[0.96rem] leading-7 text-[#3E514D] lg:text-[1rem] lg:leading-[1.9rem]">
              I combine strong user-focused product thinking with deep technical expertise to deliver software solutions that drive measurable impact.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/Mayank_Goyal_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#043439] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 lg:px-7 lg:py-3 lg:text-[0.92rem]"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#0F4C45] px-6 py-2.5 text-sm font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white lg:px-7 lg:py-3 lg:text-[0.92rem]"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] text-[#0F4C45] transition hover:-translate-y-0.5 hover:border-[#0F4C45]/25 hover:bg-[#0F4C45] hover:text-white"
                >
                  {link.label === "GitHub" ? <GitHubIcon /> : <LinkedInIcon />}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/mayank_avatar_circle.png"
              alt="Mayank Goyal avatar"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full max-w-[220px] rounded-full object-contain drop-shadow-xl transition-transform sm:max-w-[280px] md:max-w-[340px] lg:max-w-[420px] xl:max-w-[480px]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center sm:bottom-16">
          <a
            ref={scrollCueRef}
            href="#about"
            className="pointer-events-auto flex flex-col items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#0F4C45]/72 transition"
          >
            <span className="relative flex h-10 w-8 items-start justify-center">
              <span className="absolute top-0 h-6 w-6 rounded-full bg-[#0F4C45]" />
              <span className="absolute top-[0.8rem] h-4.5 w-4.5 rounded-full bg-[#F7F1E8]" />
              <span className="absolute bottom-[0.15rem] h-4.5 w-4.5 rotate-45 rounded-[0.25rem] bg-[#0F4C45]" />
              <span
                ref={cueDotRef}
                className="absolute bottom-0 h-2 w-2 rounded-full bg-[#0F4C45]/20 blur-[1px]"
              />
            </span>
            <span ref={cueTextRef}>Scroll</span>
          </a>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-10 bg-[#F7F1E8] pb-16 pt-7 sm:scroll-mt-14 sm:pb-20 sm:pt-9 lg:pb-24 lg:pt-12"
      >
        <div className="mx-auto flex w-full max-w-[1100px] justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:max-w-[1160px] xl:px-14">
          <div className="w-full max-w-[860px] rounded-[1.15rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 text-center shadow-[0_16px_34px_rgba(22,43,38,0.06)] sm:p-6 lg:p-7">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#0F4C45] sm:text-[0.74rem] lg:text-[0.78rem]">
              About
            </p>

            <h2 className="mx-auto mt-3.5 max-w-[20ch] text-[1.75rem] font-extrabold leading-[0.97] tracking-tight sm:text-[2.15rem] lg:text-[2.55rem]">
              Product thinking. Technical execution.
            </h2>

            <div className="mt-5 space-y-4 text-[0.88rem] leading-6.5 text-[#3E514D] lg:text-[0.94rem] lg:leading-[1.72rem]">
              <p>
                I am a Technical Product Builder combining strong user-focused product thinking with deep technical expertise in Software, Data, and AI/ML. My work focuses on bridging engineering, design, and business strategy to deliver software solutions that drive measurable impact.
              </p>

              <p>
                As the Founder &amp; Product Lead of Kafumi, a full-stack cafe discovery platform, I have experience in taking full ownership of ideation, data-driven decision-making, and go-to-market strategy. I enjoy conducting user research and market validation to continuously align product features with user needs.
              </p>

              <p>
                My technical toolkit includes Python, C++, JavaScript, TypeScript, React, Next.js, and various AI/ML tools like TensorFlow and PyTorch. I have also developed AI-optimized platforms like $pendr and Code Canvas, an algorithm learning and visualization platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="kafumi"
        className="scroll-mt-10 bg-[#EEF3EE] pb-20 pt-10 sm:scroll-mt-14 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16"
      >
        <div className="mx-auto w-full max-w-[1060px] px-6 sm:px-8 md:px-10 lg:px-10 xl:max-w-[1320px] xl:px-12">
          <div id="kafumi-pin-section" className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-5/12 max-w-[500px]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-[0.78rem] lg:text-[0.82rem]">
                Startup
              </p>
              <h2 className="mt-4 max-w-[18ch] text-[2rem] font-extrabold leading-[0.96] tracking-tight sm:text-[2.5rem] lg:text-[3rem]">
                Kafumi
              </h2>
              <p className="mt-5 text-[0.95rem] leading-7 text-[#3E514D] lg:text-[1rem] lg:leading-[1.85rem]">
                A full-stack cafe discovery platform featuring 75+ cafés where I led ideation, data-driven decision-making, and go-to-market strategy while building the core technical infrastructure.
              </p>
            </div>

            <div className="relative w-full lg:w-7/12 mt-4 lg:mt-0 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#EEF3EE] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#EEF3EE] to-transparent z-10 pointer-events-none" />

              <div
                id="kafumi-carousel"
                className="flex items-center w-max gap-6 lg:gap-8 py-24 pointer-events-none px-[35vw] lg:px-[15vw]"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                  const isActive = activeKafumiSlide === num;
                  return (
                    <div
                      key={num}
                      data-slide={num}
                      className={`kafumi-slide relative shrink-0 snap-center overflow-hidden rounded-[1rem] border border-[#0F4C45]/12 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center ${isActive
                        ? "scale-[1.65] opacity-100 shadow-[0_12px_30px_rgba(22,43,38,0.05)] z-10"
                        : "scale-[0.80] opacity-48 shadow-[0_4px_16px_rgba(22,43,38,0.04)] z-0 blur-[1px]"
                        }`}
                      style={{ width: "min(48vw, 210px)", aspectRatio: "4/5" }}
                    >
                      <Image
                        src={`/kafumi-slides/${num}.png`}
                        alt={`Kafumi slide ${num}`}
                        fill
                        sizes="(max-width: 768px) 60vw, 260px"
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-2">
            <a
              href="https://kafumi.com"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col w-full rounded-[1.05rem] border border-[#0F4C45]/12 bg-[#F7F1E8] p-3.5 text-left shadow-[0_14px_28px_rgba(22,43,38,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#0F4C45]/22 hover:shadow-[0_18px_34px_rgba(22,43,38,0.08)] sm:p-4"
            >
              <div className="mb-3 overflow-hidden rounded-[0.9rem] bg-[#DDE7DE] p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#0F4C45]">
                    Product Strategy & UX
                  </p>
                  <h3 className="text-[1.1rem] font-extrabold tracking-tight text-[#162b26] transition-colors duration-200 group-hover:text-[#0F4C45] sm:text-[1.2rem]">
                    Data-Driven Discovery
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-6 text-[#3E514D] sm:text-[0.9rem]">
                    Conducted primary user research and market validation through surveys and interviews with B2C consumers and B2B stakeholders, aligning product features continuously with real user needs.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://kafumi.com"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col w-full rounded-[1.05rem] border border-[#0F4C45]/12 bg-[#F7F1E8] p-3.5 text-left shadow-[0_14px_28px_rgba(22,43,38,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#0F4C45]/22 hover:shadow-[0_18px_34px_rgba(22,43,38,0.08)] sm:p-4"
            >
              <div className="mb-3 overflow-hidden rounded-[0.9rem] bg-[#DDE7DE] p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#0F4C45]">
                    Engineering
                  </p>
                  <h3 className="text-[1.1rem] font-extrabold tracking-tight text-[#162b26] transition-colors duration-200 group-hover:text-[#0F4C45] sm:text-[1.2rem]">
                    Mood-Based Recommendation Engine
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-6 text-[#3E514D] sm:text-[0.9rem]">
                    Maintained a high-velocity agile cycle with over 1,150 GitHub commits. Engineered a recommendation engine using Levenshtein matching, multi-factor weighting, and geohash spatial ranking.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-7 sm:mt-9 lg:mt-11 w-full overflow-hidden flex whitespace-nowrap border-y border-[#0F4C45]/10 bg-[#0F4C45]/[0.02] py-5">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
            }
          `}</style>
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 px-4">
            {builderSkills.map((skill) => (
              <span key={skill} className="flex items-center gap-2.5 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#0F4C45]/80 sm:text-[0.85rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C45]/30" />
                {skill}
              </span>
            ))}
          </div>
          <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 px-4">
            {builderSkills.map((skill) => (
              <span key={skill} className="flex items-center gap-2.5 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#0F4C45]/80 sm:text-[0.85rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C45]/30" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-10 bg-[#DDE7DE] pb-20 pt-10 sm:scroll-mt-14 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16"
      >
        <div className="mx-auto w-full max-w-[1060px] px-6 sm:px-8 md:px-10 lg:px-10 xl:max-w-[1320px] xl:px-12">
          <div className="max-w-[660px]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-[0.78rem] lg:text-[0.82rem]">
              Projects
            </p>

            <h2 className="mt-4 max-w-[18ch] text-[2rem] font-extrabold leading-[0.96] tracking-tight sm:text-[2.5rem] lg:text-[3rem]">
              Software, AI/ML, and product building.
            </h2>

            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-7 text-[#3E514D] lg:text-[1rem] lg:leading-[1.85rem]">
              Full-stack web applications, AI-powered tools, and algorithm visualization platforms. Each project bridges technical complexity with intuitive user experiences.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:gap-4">
            {projects.map((project) => {
              const image = projectCardImages[project.shortTitle];
              const Wrapper = 'href' in project ? 'a' : 'div';

              return (
                <Wrapper
                  key={project.title}
                  href={'href' in project ? project.href : undefined}
                  target={'href' in project ? "_blank" : undefined}
                  rel={'href' in project ? "noreferrer" : undefined}
                  className="group block w-full rounded-[1.05rem] border border-[#0F4C45]/12 bg-[#F7F1E8] p-3.5 text-center shadow-[0_14px_28px_rgba(22,43,38,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#0F4C45]/22 hover:shadow-[0_18px_34px_rgba(22,43,38,0.08)] sm:p-4"
                >
                  <div className="mb-3 overflow-hidden rounded-[0.9rem] bg-[#EEF3EE]">
                    <div className="relative h-[180px] sm:h-[220px] xl:h-[260px]">
                      {image ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1320px) 50vw, 600px"
                          className={`transition-transform duration-300 group-hover:scale-[1.02] ${image.contain ? "object-contain p-2" : "object-cover"
                            }`}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-4 text-center text-[0.68rem] font-semibold text-[#6B7B77] transition-colors duration-200 group-hover:text-[#4F625E] sm:text-[0.72rem]">
                          Project image placeholder
                        </div>
                      )}
                    </div>
                  </div>

                  {project.status ? (
                    <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#0F4C45]">
                      {project.status}
                    </p>
                  ) : null}
                  <h3 className="text-[0.95rem] font-extrabold tracking-tight text-[#162b26] transition-colors duration-200 group-hover:text-[#0F4C45] sm:text-[1rem]">
                    {project.shortTitle}
                  </h3>
                  <p className="mt-2 text-[0.72rem] leading-5 text-[#3E514D] sm:text-[0.76rem]">
                    {project.cardSummary}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-2 py-1 text-[0.62rem] font-semibold text-[#0F4C45] sm:text-[0.66rem]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-10 bg-[#F7F1E8] pb-16 pt-7 sm:scroll-mt-14 sm:pb-20 sm:pt-9 lg:pb-24 lg:pt-12"
      >
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-8 px-6 sm:px-8 md:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(260px,0.6fr)] lg:gap-12 lg:px-12 xl:max-w-[1160px] xl:gap-14 xl:px-14">
          <div className="max-w-[610px]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#0F4C45] sm:text-[0.74rem] lg:text-[0.78rem]">
              Contact
            </p>

            <h2 className="mt-3.5 max-w-[10ch] text-[1.75rem] font-extrabold leading-[0.97] tracking-tight sm:text-[2.15rem] lg:text-[2.55rem]">
              Let’s build something thoughtful.
            </h2>

            <p className="mt-4 max-w-[31rem] text-[0.88rem] leading-6.5 text-[#3E514D] lg:text-[0.94rem] lg:leading-[1.72rem]">
              I’m looking for opportunities in Technical Product Builder & Product Management Roles. I have deep technical expertise in Software, Data, and AI/ML. I demonstrate bias for action in leading initiatives, bridging engineering, design, and business strategy to deliver software solutions that drive measurable impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="mailto:mayankgoyal0495@gmail.com"
                className="rounded-full bg-[#043439] px-5 py-2 text-[0.82rem] font-semibold text-white transition hover:opacity-90 lg:px-6 lg:py-2.5 lg:text-[0.88rem]"
              >
                Email Me
              </a>
            </div>
          </div>

          <aside className="lg:pt-5">
            <div className="rounded-[1.15rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-4.5 shadow-[0_16px_34px_rgba(22,43,38,0.05)] sm:p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#0F4C45] sm:text-[0.74rem]">
                Connect
              </p>

              <div className="mt-5 space-y-4 text-[#162b26]">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0F4C45]/12 bg-[#F7F1E8] text-[#0F4C45]">
                    <EmailIcon />
                  </span>

                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6B7B77]">
                      Email
                    </p>
                    <a
                      href="mailto:mayankgoyal0495@gmail.com"
                      className="mt-1.5 inline-block text-[0.9rem] font-semibold text-[#162b26] transition hover:text-[#0F4C45] sm:text-[0.95rem]"
                    >
                      mayankgoyal0495@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0F4C45]/12 bg-[#F7F1E8] text-[#0F4C45]">
                    <LocationIcon />
                  </span>

                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6B7B77]">
                      Location
                    </p>
                    <p className="mt-1.5 text-[0.9rem] font-semibold sm:text-[0.95rem]">
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0F4C45]/12 bg-[#F7F1E8] text-[#0F4C45]">
                    <PhoneIcon />
                  </span>

                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6B7B77]">
                      Phone
                    </p>
                    <a
                      href="tel:+919462583532"
                      className="mt-1.5 inline-block text-[0.9rem] font-semibold text-[#162b26] transition hover:text-[#0F4C45] sm:text-[0.95rem]"
                    >
                      +91 9462583532
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#0F4C45]/10 pt-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6B7B77]">
                    Profiles
                  </p>

                  <div className="mt-3 flex items-center gap-2.5">
                    <a
                      href="https://github.com/MayankGoyal495"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0F4C45]/12 bg-[#F7F1E8] text-[#0F4C45] transition hover:-translate-y-0.5 hover:bg-[#0F4C45] hover:text-white"
                    >
                      <GitHubIcon />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/mayank-goyal-1199a2348/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0F4C45]/12 bg-[#F7F1E8] text-[#0F4C45] transition hover:-translate-y-0.5 hover:bg-[#0F4C45] hover:text-white"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-[#0F4C45]/10 bg-[#F7F1E8]">
        <div className="mx-auto flex w-full max-w-[1100px] justify-center px-6 py-6 text-center sm:px-8 md:px-10 lg:px-12 xl:max-w-[1160px] xl:px-14">
          <p className="text-[0.72rem] font-medium tracking-[0.04em] text-[#6B7B77] sm:text-[0.78rem]">
            © 2026 Mayank Goyal. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
