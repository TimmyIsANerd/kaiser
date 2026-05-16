"use client"

import type React from "react"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    name: "Aethereon",
    url: "aethereon.netlify.app",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aethereon-logo-bMSwnsKPlzraRnws23ruFWFux9WJbP.png",
    type: "High-Performance Web App/Portfolio",
    roleFocus: "Developer Experience & Performance",
    roles: [
      "UX & Performance: Define and track metrics (Load Time, Conversion Rates). Optimize asset loading and approve designs based on usability.",
      "Feature Prioritization: Maintain a tight, prioritized backlog; ruthlessly prioritize for highest value with least complexity (Lean Methodology).",
      "Go-to-Market Strategy (GTM): Define positioning, create release communications, and ensure seamless deployment pipelines (CI/CD).",
    ],
  },
  {
    name: "ProofOS",
    url: "proofos.vercel.app",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proofos-pTC0zZumC1bG5ufWV6ysRkEJzu7sIY.png",
    type: "SaaS MVP or Proof-of-Concept",
    roleFocus: "Rapid Iteration & User Validation",
    roles: [
      "UX & Performance: Define and track metrics (Load Time, Conversion Rates). Optimize asset loading and approve designs based on usability.",
      "Feature Prioritization: Maintain a tight, prioritized backlog; ruthlessly prioritize for highest value with least complexity (Lean Methodology).",
      "Go-to-Market Strategy (GTM): Define positioning, create release communications, and ensure seamless deployment pipelines (CI/CD).",
    ],
  },
  {
    name: "Sunami Trade",
    url: "sunami.trade",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunaminobg-cvDULFm8jVhUaCiIxuFWFYC5cD1pWn.webp",
    type: "Decentralized Exchange (DEX)",
    roleFocus: "Financial Compliance & Trust",
    roles: [
      "Trust & Security: Define security features as product requirements (e.g., wallet connection, audit transparency, MFA). Manage relationships with auditing firms.",
      "Tokenomics and Incentives: Design economic models (staking, governance) and UIs to explain complex financial concepts clearly.",
      "Regulatory Strategy & Fiat Interoperability: Define strategy for KYC/AML compliance; manage third-party banking/API integrations.",
      "Community Product Management: Translate community needs into executable features and champion the product's vision.",
    ],
  },
  {
    name: "RemFi",
    url: "remfi.xyz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/remfi-hpO436qUbdGd9UHHLrVxh6QeNafUR7.png",
    type: "Crypto-Financial Service",
    roleFocus: "Community Engagement",
    roles: [
      "Trust & Security: Define security features as product requirements (e.g., wallet connection, audit transparency, MFA).",
      "Tokenomics and Incentives: Design economic models and UIs to explain complex financial concepts clearly.",
      "Regulatory Strategy: Define strategy for KYC/AML compliance and manage third-party integrations.",
      "Community Product Management: Translate community needs from Discord/Telegram into executable features.",
    ],
  },
  {
    name: "BooHaa",
    url: "boohaa.xyz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-10%20at%207.54.10%20PM-HApRNxL4ZEWBjyKnK3wuFAVhsRbG4i.jpeg",
    type: "Trading Bot",
    roleFocus: "Interoperability & Regulatory Compliance",
    roles: [
      "Trust & Security: Define security features and manage relationships with auditing firms.",
      "Tokenomics and Incentives: Design economic models for automated trading strategies.",
      "Regulatory Strategy: Ensure compliance with financial regulations across jurisdictions.",
      "Community Product Management: Champion the product's vision to token holders and DAO.",
    ],
  },
  {
    name: "Anubis Trade",
    url: "anubistrade.xyz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anubis-QEfJUtqJJLwdGwGAtvqnwNLsPc8i84.png",
    type: "DeFi Trading Platform",
    roleFocus: "Financial Compliance & Trust",
    roles: [
      "Trust & Security: Define security features as product requirements and manage audit transparency.",
      "Tokenomics and Incentives: Design economic models and governance structures.",
      "Regulatory Strategy: Define KYC/AML compliance strategy and manage banking integrations.",
      "Community Product Management: Translate community needs into executable features.",
    ],
  },
  {
    name: "SwiftPay",
    url: "swyftpay.xyz",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swiftpay-zq4j5IdLvc7HKUlygpdz6JXxym1FOC.svg",
    type: "Payment Gateway",
    roleFocus: "Fiat Interoperability",
    roles: [
      "Trust & Security: Define security features for payment processing and wallet connections.",
      "Regulatory Strategy & Fiat Interoperability: Manage KYC/AML compliance and crypto-to-fiat bridges.",
      "Community Product Management: Champion seamless payment experiences.",
      "Performance Optimization: Ensure low-latency transaction processing.",
    ],
  },
  {
    name: "Nomad",
    url: "x.com/use_nomad",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nomad-tCxoKK1YECRWyezwkYqs51YDs0saP2.jpg",
    type: "Cross-Chain Bridge",
    roleFocus: "Interoperability",
    roles: [
      "Trust & Security: Define cross-chain security protocols and audit requirements.",
      "Interoperability Strategy: Manage integrations across multiple blockchain networks.",
      "Community Product Management: Translate technical complexity into user-friendly experiences.",
      "Regulatory Compliance: Navigate multi-chain regulatory requirements.",
    ],
  },
  {
    name: "Greep",
    url: "greep.shop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14d7237e-fab6-4b87-bc16-254a771a36d3-dRQcKTVjFpdrjJbsz9wGAW1z3YmHB8.jpeg",
    type: "AI-Powered Local Retail Discovery",
    roleFocus: "Image Search Accuracy & Local Vendor Onboarding",
    roles: [
      "Computer Vision & Relevance: Maximize accuracy/speed of image search. Track KPIs like Search Precision, Recall, and mAP.",
      "Geo-Location & Real-Time Inventory: Define geo-fencing strategy and prioritize integration with local POS/IMS.",
      "Local Vendor Onboarding: Develop vendor-side app for simplified, high-quality image upload/management flows.",
      "Conversion & Fulfillment: Optimize path from discovery to local purchase with A/B testing.",
    ],
  },
  {
    name: "Superteam",
    url: "superteam.fun",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/superteam-Z9apEYPimFlJuM8fbD3zuamq1oygbQ.jpeg",
    type: "Web3 Talent Network & Community",
    roleFocus: "Community Growth & Ecosystem Development",
    roles: [
      "Community Product Management: Build and nurture a thriving Web3 talent community. Translate member needs into platform features.",
      "Ecosystem Development: Define strategies for onboarding developers, designers, and operators into the Solana ecosystem.",
      "Platform Experience: Design intuitive flows for talent discovery, project matching, and bounty management.",
      "Growth & Engagement: Track community health metrics and optimize for member retention and contribution quality.",
    ],
  },
]

const skills = {
  product: ["Developer Relations", "Customer Experience", "Business Analysis", "Agile & Scrum"],
  technical: [
    "JavaScript",
    "TypeScript",
    "Blockchain",
    "Smart Contracts",
    "DApps",
    "Git",
    "GitHub",
    "Technical Writing",
    "Jira",
    "Confluence",
    "Trello",
    "Asana",
  ],
}

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Sticky Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0a0a0a]/95 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.button
            onClick={scrollToTop}
            className="text-xl font-bold cursor-pointer font-[family-name:var(--font-heading)] z-50 relative"
            whileHover={{ scale: 1.05 }}
          >
            AYORINDE
          </motion.button>

          <div className="hidden md:flex gap-8">
            {["Work", "Skills", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                className="text-sm text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl md:hidden z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full gap-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {["Work", "Skills", "About", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                  className="text-3xl font-bold text-gray-400 hover:text-[#00ff88] transition-colors duration-300 font-[family-name:var(--font-heading)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
      >
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[1.1] text-balance font-[family-name:var(--font-heading)]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                AYORINDE
                <br />
                <span className="text-[#00ff88]">Oreoluwa</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Product Manager, Developer Advocate, Builder of Secure Digital Solutions
              </motion.p>
              <motion.p
                className="text-sm md:text-base lg:text-lg text-gray-500 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                4 years of experience driving product innovation in blockchain, DeFi, and secure digital solutions.
                Transforming complex technical challenges into scalable, customer-focused products.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-[#00ff88] text-black font-semibold rounded-full hover:bg-[#00dd77] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </div>

            {/* Right Side - Professional Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow effect background */}
                <div className="absolute inset-0 rounded-full bg-[#00ff88]/20 blur-2xl animate-pulse" />
                {/* Image container with border */}
                <div className="relative w-full h-full rounded-full border-4 border-[#00ff88] overflow-hidden shadow-2xl shadow-[#00ff88]/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ebe691f-eb18-42ff-857a-67ae5524cf5f-jvPVqjgMpSQS5X1wqiRoVkzXRY4BI3.jpeg"
                    alt="Ayorinde Oreoluwa - Product Manager"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88]/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-12 font-[family-name:var(--font-heading)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dynamic and results-driven Product Manager with 4 years of hands-on experience in software development,
            developer relations, and blockchain technology. With a passion for building impactful products and
            optimizing processes, I'm eager to harness my technical expertise and leadership to shape the future of
            cutting-edge technologies in a fast-paced, growth-oriented environment. My track record involves leading
            cross-functional teams to deliver secure, scalable, and customer-focused solutions, skilled at turning
            complex technical challenges into actionable business strategies and driving product innovation from concept
            to launch.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-16 font-[family-name:var(--font-heading)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#00ff88] font-[family-name:var(--font-heading)]">
                Core Product Disciplines
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.product.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#00ff88] font-[family-name:var(--font-heading)]">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Scroll-Driven Narrative */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-24 text-center font-[family-name:var(--font-heading)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="min-h-[80vh] flex flex-col md:flex-row gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Left Side - Text Details */}
                <motion.div
                  className="flex-1 space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-balance font-[family-name:var(--font-heading)]">
                    {project.name}
                  </h3>
                  <p className="text-[#00ff88] text-lg font-medium">{project.type}</p>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    <span className="font-semibold text-white">PM Role Focus:</span> {project.roleFocus}
                  </p>
                  <ul className="space-y-4 text-gray-300 leading-relaxed">
                    {project.roles.map((role, roleIndex) => (
                      <motion.li
                        key={roleIndex}
                        className="pl-6 border-l-2 border-white/10 hover:border-[#00ff88] transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                      >
                        {role}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Right Side - Visual Placeholder */}
                <motion.div
                  className="w-full md:w-2/5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                >
                  <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="block">
                    <motion.div
                      className="project-logo-card group cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="project-logo-inner">
                        {project.logo && (
                          <div className="relative w-full h-full">
                            <Image
                              src={project.logo || "/placeholder.svg"}
                              alt={`${project.name} logo`}
                              fill
                              className="object-contain p-8 logo-blend"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-12 font-[family-name:var(--font-heading)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to build something amazing together? Let's talk about your next product.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="mailto:ayorindeoreoluwa3@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">ayorindeoreoluwa3@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+2349054560345"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">+234 905 456 0345</span>
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/ayorindeoreoluwa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#00ff88] text-black font-semibold rounded-full hover:bg-[#00dd77] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Ayorinde Oreoluwa. Product Manager & Developer Advocate.</p>
        </div>
      </footer>
    </div>
  )
}
