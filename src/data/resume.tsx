import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ahmad Harits Ramadhani",
  initials: "AHR",
  url: "https://aharits.vercel.app",
  location: "Tangerang, Banten",
  locationLink: "https://www.google.com/maps/place/tangerang",
  description:
    "A highly motivated Information Systems graduate passionate about administrative technology, system management, and quality control.",
  summary:
    "Information Systems Graduate specialized in process optimization, quality assurance, and digital workflow management. Experienced in building operational tracking tools and validating enterprise systems to deliver efficient, reliable, and data-driven solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL", icon: Icons.mysql},
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ahharits.r@gmail.com",
    tel: "+62",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aharitsr",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmad-harits-r-5876b1215/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Kejaksaan Negeri Lebak",
      href: "https://kejari-lebak.kejaksaan.go.id/",
      badges: [],
      location: "On Site",
      title: "Case Management & Detainee Escort Specialist",
      logoUrl: "https://kejari-kotatangerang.kejaksaan.go.id/assets/img/logo-kejak.png",
      start: "Mei 2024",
      end: "Mar 2025",
      description:
        "Managed end-to-end legal administration and sentence execution for General and Juvenile Crimes, while coordinating detainee logistics across Courts, Correctional Facilities, and Law Enforcement. Built an AppSheet digital tracking system to optimize case monitoring and archiving over 9 months, executed secure physical detainee escorts, and maintained accurate case databases with regular operational reporting for section heads.",
    },
    {
      company: "CIMB Niaga",
      badges: [],
      href: "https://www.cimbniaga.co.id/",
      location: "On Site",
      title: "IT Testing Management (Intern)",
      logoUrl: "https://www.cimbniaga.co.id/etc/designs/cimb/clientlib-site/img/cimb-favicon.ico",
      start: "Feb 2023",
      end: "Jun 2023",
      description:
        "Formulated comprehensive test strategies and designed end-to-end test cases for the Wealth Management System to ensure full functional coverage. Executed manual test scripts across core modules, managed the complete defect lifecycle by logging and verifying bug fixes with developer teams, and generated data-driven test summary reports to provide quality insights and risk assessments for key business stakeholders.",
    },
  ],
  education: [
    {
      school: "Mercu Buana University",
      href: "https://mercubuana.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "https://mercubuana.ac.id/images/logo.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: false,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
