"use client";

import { X, ExternalLink, Download, FileText } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const pdfPath = getAssetPath("/raghav_s_resume.pdf");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-5xl h-[88vh] bg-[#141413] border border-white/20 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1c1b1a]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#f84525]/10 border border-[#f84525]/30 rounded-lg text-[#f84525]">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Raghav S — Official Resume
              </h3>
              <p className="font-mono text-xs text-zinc-400">
                B.Sc. AI &amp; ML · Sri Krishna Arts &amp; Science College
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#f84525] hover:underline flex items-center gap-1.5 px-3 py-1.5 bg-[#f84525]/10 border border-[#f84525]/30 rounded-md"
            >
              <span>FULL SCREEN</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={pdfPath}
              download="raghav_s_resume.pdf"
              className="font-mono text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-md hover:bg-white/5"
            >
              <Download size={13} />
              <span className="hidden sm:inline">DOWNLOAD</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close Resume Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Iframe Container */}
        <div className="flex-1 w-full bg-[#1c1b1a] overflow-hidden min-h-[60vh]">
          <iframe
            src={`${pdfPath}#toolbar=0`}
            className="w-full h-full min-h-[65vh] border-0"
            title="Raghav S Resume PDF Viewer"
          />
        </div>

      </div>
    </div>
  );
}
