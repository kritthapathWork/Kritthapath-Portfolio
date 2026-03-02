'use client';

import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'kritthapathwork@gmail.com',
    href: 'mailto:kritthapathwork@gmail.com',
    desc: 'ส่งอีเมลมาคุยกันได้เลยครับ',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/kritthapathWork',
    href: 'https://github.com/kritthapathWork',
    desc: 'ดู Source Code ผลงานของผม',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '065-502-7907',
    href: 'tel:+66655027907',
    desc: 'โทรหาผมได้เลยครับ',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-[var(--brand-primary)] tracking-widest uppercase">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
              ติดต่อผม
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto text-sm sm:text-base">
              สนใจร่วมงาน หรืออยากพูดคุยเรื่องโปรเจค ติดต่อได้เลยครับ
            </p>
          </div>
        </AnimateOnScroll>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {CONTACT_LINKS.map((link, i) => (
            <AnimateOnScroll key={link.label} delay={i * 100}>
              <a
                href={link.href.startsWith('http') ? link.href : '#'}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!link.href.startsWith('http')) {
                    e.preventDefault();
                  }
                }}
                className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 group h-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-300 shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-medium">{link.label}</div>
                  <div className="text-xs sm:text-sm font-semibold truncate group-hover:text-[var(--brand-primary)] transition-colors mt-0.5">
                    {link.value}
                  </div>
                  <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mt-1 hidden sm:block">{link.desc}</p>
                </div>
                {link.href.startsWith('http') && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-secondary)] shrink-0 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Line QR Code */}
        <AnimateOnScroll delay={250}>
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="shrink-0">
              <Image
                src="/QRCodeKoKo.jpg"
                alt="Line QR Code - kritthapathwork"
                width={160}
                height={160}
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <svg className="w-6 h-6 text-[#06C755]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <span className="text-lg font-bold">Line</span>
              </div>
              <p className="text-xl font-semibold text-[var(--brand-primary)] mb-1">kritthapathwork</p>
              <p className="text-sm text-[var(--text-secondary)] mb-4">สแกน QR Code หรือค้นหา ID เพื่อเพิ่มเพื่อนครับ</p>
              <a
                href="https://line.me/ti/p/~kritthapathwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#06C755] text-white font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                เพิ่มเพื่อน Line
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll delay={300}>
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-[var(--brand-primary)]/20">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[#64d2ff] flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-[var(--brand-primary)]/20">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              สนใจคุยงาน? ทักมาได้เลยครับ
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
              ไม่ว่าจะเป็นโอกาสใหม่ ๆ หรือแค่อยากแลกเปลี่ยนความรู้ ยินดีครับ
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://github.com/kritthapathWork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl glass-card font-semibold text-sm sm:text-base hover:border-[var(--brand-primary)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub Profile
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
