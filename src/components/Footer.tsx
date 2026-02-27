export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[#64d2ff] flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <div>
              <p className="font-semibold text-sm">Kritthapath Thipakaew</p>
              <p className="text-xs text-[var(--text-secondary)]">Programmer &middot; Full-Stack Developer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#about" className="text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">About</a>
            <a href="#projects" className="text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">Projects</a>
            <a href="#experience" className="text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">Experience</a>
            <a href="#contact" className="text-xs text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-all duration-300"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border-color)] mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
          <p>&copy; {new Date().getFullYear()} Kritthapath Thipakaew. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
