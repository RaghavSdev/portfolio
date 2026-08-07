import { ExternalLink, GitFork } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "./Effects";
import { getAssetPath } from "@/lib/utils";

const projects = [
  {
    id: "p1",
    title: "RAG-Vision-AI",
    type: "AI / ML Project",
    desc: "Retrieval-Augmented Generation (RAG) chatbot with FAISS vector search, SSE streaming, and Cyberpunk UI.",
    img: "/rag_chat_demo_real.png",
    tech: ["Python", "FAISS", "Generative AI", "SSE", "React"],
    demo: "https://raghavsdev.github.io/RAG-Vision-AI/",
    source: "https://github.com/RaghavSdev/RAG-Vision-AI",
    badge: "Live AI Web App ⚡",
  },
  {
    id: "p2",
    title: "Plant Disease Prediction Model",
    type: "Machine Learning",
    desc: "Python ML classification model utilizing preprocessed image datasets to classify crop diseases with 98% accuracy.",
    img: "/rag_vision_ai_real.png",
    tech: ["Python", "scikit-learn", "Deep Learning", "CNN"],
    demo: "https://github.com/RaghavSdev",
    source: "https://github.com/RaghavSdev",
    badge: "98% Accuracy 🌿",
  },
  {
    id: "p3",
    title: "DigitalAudio Website",
    type: "Client / Commercial",
    desc: "Premium, responsive commercial site for Digital Audio presenting acoustic consultation & audio rental.",
    img: "/digital_audio_real.png",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    demo: "https://digitalaudioo.vercel.app/",
    source: "https://github.com/RaghavSdev/DigitalAudio-Website",
    badge: "Live Website 🔊",
  },
  {
    id: "p4",
    title: "Placement & Recruitment Management",
    type: "Full-Stack System",
    desc: "Full-stack enterprise platform engineered with React, Spring Boot, and MySQL for recruitment workflows.",
    img: "/rag_screenshot_real.png",
    tech: ["React", "Spring Boot", "MySQL", "AWS"],
    demo: "https://github.com/RaghavSdev",
    source: "https://github.com/RaghavSdev",
    badge: "Full-Stack 💼",
  },
  {
    id: "p5",
    title: "Student Grade Prediction ML Model",
    type: "Predictive Analytics",
    desc: "Predictive machine learning models using Python and scikit-learn to forecast academic performance.",
    img: "/project1.png",
    tech: ["Python", "scikit-learn", "Pandas", "Analytics"],
    demo: "https://github.com/RaghavSdev",
    source: "https://github.com/RaghavSdev",
    badge: "Predictive ML 📈",
  },
  {
    id: "p6",
    title: "RaghavSdev Portfolio",
    type: "Personal Brand",
    desc: "Developer portfolio powered by Next.js 16, Tailwind CSS v4, 120fps magnetic cursor, and vinyl player.",
    img: "/raghavsdev_portfolio.png",
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Canvas"],
    demo: "https://github.com/RaghavSdev/portfolio",
    source: "https://github.com/RaghavSdev/portfolio",
    badge: "Open Source ✦",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#111111] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Index Header */}
        <div className="reveal mb-8 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-[#f84525] font-bold">
              03 // CREATIONS
            </span>
            <span className="h-px w-16 bg-[#f84525]/30" />
            <span className="font-mono text-xs tracking-wider text-zinc-500 uppercase">REPOSITORIES &amp; PROJECTS</span>
          </div>
          <a
            href="https://github.com/RaghavSdev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#f84525] hover:underline uppercase"
          >
            VIEW ALL REPOS &rarr;
          </a>
        </div>

        {/* Headline */}
        <h2 className="reveal text-[clamp(2.2rem,5vw,4rem)] font-black leading-[0.98] tracking-tight uppercase text-white mb-10">
          FEATURED WORK.<br />
          <span className="text-gradient-flame">AI MODELS &amp; WEB APPLICATIONS.</span>
        </h2>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <TiltCard key={p.id} className={`reveal reveal-d${(i % 3) + 1}`}>
              <article className="premium-card group flex flex-col justify-between p-5 rounded-none relative overflow-hidden h-full">
                
                {/* Top Badge & Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 bg-[#f84525]/10 border border-[#f84525]/30 text-[#f84525]">
                      {p.type}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase text-white mb-2 group-hover:text-[#f84525] transition-colors">
                    {p.title}
                  </h3>

                  {/* Thumbnail Image Container */}
                  <div className="relative w-full h-40 mb-4 overflow-hidden border border-white/10 bg-black">
                    <Image
                      src={getAssetPath(p.img)}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 will-change-transform"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-transparent to-transparent opacity-80" />
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {p.desc}
                  </p>
                </div>

                {/* Tech Pills & Links Footer */}
                <div className="pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 font-mono text-[11px] pt-1">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f84525] hover:underline flex items-center gap-1 uppercase font-semibold"
                      >
                        <span>LIVE LINK</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white flex items-center gap-1 uppercase"
                    >
                      <GitFork size={11} />
                      <span>SOURCE REPO</span>
                    </a>
                  </div>
                </div>

              </article>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
