import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa"
import { FiGithub, FiInstagram } from "react-icons/fi"
import { IoDocumentTextOutline } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* Ambient glow top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="w-11/12 m-auto py-8">
        {/* Top row */}
        <div className="flex sm1:flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-1">Portfolio</div>
            <div className="text-white font-extrabold text-xl tracking-tight font-change2">Atul Raj</div>
            <div className="text-white/40 text-xs mt-0.5">Full Stack Developer · NIST University</div>
          </div>

          {/* Get in touch — fixed with plain <a> (Next.js Link doesn't support mailto) */}
          <a
            href="mailto:rajatul8496@gmail.com"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-400/30 bg-blue-400/5 hover:bg-blue-400/15 hover:border-blue-400/70 transition-all duration-300"
          >
            <span className="text-sm font-semibold text-blue-400 tracking-wide">Get in touch</span>
            <span className="text-blue-400 text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/AtulRaj37" target="_blank" rel="noreferrer"
               className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200 text-lg">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/atulraj7" target="_blank" rel="noreferrer"
               className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200 text-lg">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/raj_atul37" target="_blank" rel="noreferrer"
               className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200 text-lg">
              <FiInstagram />
            </a>
            <a href="/Atul Resume.pdf" target="_blank"
               className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200 text-lg">
              <IoDocumentTextOutline />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/5" />

        {/* Bottom row */}
        <div className="flex sm1:flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-white/30 text-xs">
            made with <span className="text-red-400">♥</span> by <span className="text-white/60 font-semibold">Atul Raj</span>
          </div>
          <div className="text-white/20 text-xs">
            © {new Date().getFullYear()} Atul Raj · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
