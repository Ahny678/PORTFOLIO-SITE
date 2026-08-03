"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "RiseVest – Backend Engineer",
      links: [
        {
          label: "Rise Treasury",
          url: "https://www.risevest.com/rise-treasury",
        },
        {
          label: "AssetBase",
          url: "https://assetbase.capital/",
        },
      ],
      duration: "January 2025 – Present",
      location: "Lagos, Nigeria",
      description: [
        "Built backend features for the Rise Treasury platform, enabling businesses to invest in real estate, save in USD, and earn interest on their investments.",
        "Mintained payment processing solutions with Yellowcard and Paystack, and implemented multi-currency virtual account services (USD, EUR, GBP) through Nuvion.",
        "Implemented OAuth(Apple),and updated KYB verification workflows using MetaMap and Dojah on Assetbase.",
        "Improved platform reliability and security through API auditing, dependency upgrades, Dockerfile refactoring, and other backend maintenance initiatives.",
      ],
      image: "/treasury.png",
    },

    {
      id: 2,
      title: "Rise Academy – Backend Trainee",
      links: [
        {
          label: "Rise Academy",
          url: "https://www.risevest.com/academy",
        },
      ],
      duration: "January 2024 – December 2024",
      location: "Lagos, Nigeria",
      description: [
        "Designed and developed IntelliScout, an AI-powered recruitment platform leveraging GPT-4.1 for intelligent resume parsing, candidate evaluation, job matching, and automated HR workflows using NestJS, Azure OpenAI, BullMQ, PostgreSQL, and RapidAPI.",
        "Built Ink & Keys, an AI-powered writing and document management platform featuring OCR-powered text extraction, AI image generation, smart document organization, and cloud-based media management using React, NestJS, PostgreSQL, Prisma, Tesseract.js, Hugging Face API, Cloudinary, and Docker.",
        "Collaborated with cross-functional teams to design, develop, test, and deploy scalable backend applications and AI-powered solutions while applying software engineering best practices.",
      ],
      image: "/rise.png",
    },

    {
      id: 3,
      title: "Applai Grants – Backend Engineer",
      links: [
        {
          label: "Website",
          url: "https://applaigrants.com/",
        },
      ],
      duration: "October 2024 – Present",
      location: "Lagos, Nigeria",
      description: [
        "Collaborated with cross-functional teams of UI/UX, frontend, and backend engineers to maintain and scale an AI-powered grant application platform for startups and SMEs.",
        "Improved backend performance, security, and API integrations to enhance automation and user experience.",
        "Contributed to the development and testing of the platform's V2 release, focusing on scalability and AI-driven features.",
        "Participated in agile sprints, code reviews, and CI/CD pipelines to ensure efficient, high-quality software releases.",
      ],
      image: "/applai.png",
    },

    {
      id: 4,
      title: "Freelance – ACIU (Community Platform)",
      links: [
        {
          label: "Platform",
          url: "https://app.aciuworldwide.com/",
        },
      ],
      duration: "July 2025 – March 2026",
      location: "Remote",
      description: [
        "Collaborated with a cross-functional team consisting of a Product Manager, frontend developers, UI/UX designer, and backend engineers to build a scalable community platform.",
        "Implemented Stripe payment integration, Resend-powered email delivery with queue workers, and administrative dashboards for dues, donations, projects, and events.",
        "Designed scalable backend architecture supporting national and branch administrators, member management, role-based access control, and organizational workflows.",
      ],
      image: "/aciu.png",
    },

    {
      id: 5,
      title: "HubbleMind – Machine Learning Engineer Intern",
      links: [
        {
          label: "Website",
          url: "https://hubblemind.com/",
        },
      ],
      duration: "December 2024",
      location: "Bangalore, India",
      description: [
        "Designed and implemented a Coupon Recommendation System using Random Forest, Logistic Regression, and Decision Tree models.",
        "Delivered detailed weekly technical reports documenting development progress, model improvements, and optimization strategies.",
        "Improved recommendation accuracy by approximately 20% through hyperparameter tuning and iterative model refinement.",
      ],
      image: "/hubblemind.png",
    },

    {
      id: 6,
      title: "EISL Lab, FUTMinna – Hardware Engineer Intern",
      links: [
        {
          label: "FUTMinna",
          url: "https://futminna.edu.ng/",
        },
      ],
      duration: "June 2024 – November 2024",
      location: "Niger, Nigeria",
      description: [
        "Developed a custom CNN-based flash flood classification model for real-time flood detection.",
        "Collaborated with machine learning and QA engineers to prototype AI-powered embedded systems.",
        "Enhanced legacy embedded system projects, improving overall system reliability and project success by approximately 20%.",
      ],
      image: "/EISL.jpg",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "DevOps Engineering",
      issuer: "She Codes Africa",
      date: "May 12, 2026",
      image: "/shecodes.png",
    },
    {
      id: 2,
      title: "Certificate of Recognition for Advancing Research",
      issuer: "Nubian Research",
      date: "April 16, 2026",
      image: "/nubian.png",
    },
    {
      id: 3,
      title: "Kubernetes and Cloud Native Essentials (LFS250)",
      issuer: "The Linux Foundation",
      date: "March 28, 2026",
      image: "/kubernetes.png",
    },
    {
      id: 4,
      title: "Certificate of Completion- Backend Engineering",
      issuer: "Rise Academy",
      date: "December 12, 2025",
      image: "/rise-academy.png",
    },
    {
      id: 5,
      title: "Effective Communication – Certificate of Completion",
      issuer: "HP LIFE Online Course",
      date: "June 2, 2025",
      image: "/EC.png",
    },
    {
      id: 6,
      title: "Design Thinking – Certificate of Completion",
      issuer: "HP LIFE Online Course",
      date: "May 31, 2025",
      image: "/DT.png",
    },
    {
      id: 7,
      title: "Certificate of Internship – Machine Learning Intern",
      issuer: "HubbleMind Labs Private Limited",
      date: "January 9, 2025",
      image: "/hubbleC.png",
    },
    {
      id: 8,
      title: "Introduction to the Internet of Things and Embedded Systems",
      issuer: "University of California, Irvine – Coursera",
      date: "December 27, 2023",
      image: "/cousera.png",
    },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4 font-mono">
          EXPERIENCE & CERTIFICATIONS
        </h2>

        <div className="h-1 w-32 bg-[#00ff88] mx-auto mb-12"></div>

        {/* Experience Section */}
        <h3 className="text-3xl font-bold text-white mb-6 font-mono">
          Work Experience
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border border-[#333333] rounded-2xl overflow-hidden hover:border-[#00ff88] transition-colors flex flex-col bg-[#1a1a1a]"
            >
              <div className="relative h-64">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <h4 className="text-2xl font-bold text-white font-mono">
                    {exp.title}
                  </h4>

                  {/* Company/Product Links */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-[#00ff88] px-3 py-1 text-xs font-medium text-[#00ff88] transition hover:bg-[#00ff88] hover:text-black"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 font-mono">
                  {exp.location} | {exp.duration}
                </p>

                <ul className="flex-1 space-y-3 text-gray-300 text-sm">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 text-[#00ff88] flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h3 className="text-3xl font-bold text-white mb-6 font-mono">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-[#333333] rounded-2xl overflow-hidden hover:border-[#00ff88] transition-colors flex flex-col items-center text-center p-4 bg-[#1a1a1a]"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-1 font-mono">
                {cert.title}
              </h4>
              <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
