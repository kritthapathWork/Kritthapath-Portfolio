'use client';

import AnimateOnScroll from '../AnimateOnScroll';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-[var(--brand-primary)] tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
              เกี่ยวกับผม
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left - Profile Card */}
          <AnimateOnScroll delay={100} className="md:col-span-2">
            <div className="glass-card rounded-3xl p-6 sm:p-8 text-center">
              {/* Avatar */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[var(--brand-primary)] to-[#64d2ff] mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold shadow-lg shadow-[var(--brand-primary)]/20">
                K
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Kritthapath Thipakaew</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-1">Programmer @ T.Logical Resolution</p>

              {/* Info */}
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-left">
                {[
                  { icon: '📍', label: 'Location', value: 'Thailand' },
                  { icon: '🏢', label: 'Company', value: 'T.Logical Resolution' },
                  { icon: '🎓', label: 'Focus', value: 'Full-Stack Web Development' },
                  { icon: '💡', label: 'Interest', value: 'AI, Automation, UX/UI' },
                  { icon: '🌐', label: 'Languages', value: 'ไทย, English' },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-3 p-2 rounded-xl bg-[var(--bg-primary)]">
                    <span className="text-base sm:text-lg">{info.icon}</span>
                    <div className="min-w-0">
                      <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">{info.label}</div>
                      <div className="text-xs sm:text-sm font-medium truncate">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - About Text */}
          <AnimateOnScroll delay={200} className="md:col-span-3">
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                ทำงานจริงตั้งแต่
                <br />
                <span className="gradient-text">ออกแบบ Database จนถึง Production</span>
              </h3>

              <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                ผมเป็น Programmer ที่ทำงานเต็มเวลาที่บริษัท T.Logical Resolution ดูแลตั้งแต่ออกแบบฐานข้อมูล, 
                วาง UX/UI, เขียน API Flow, ทำ CRUD ไปจนถึงให้คำปรึกษาเรื่อง UI และ Database Design กับทีม —
                ปัจจุบันรับผิดชอบโปรเจคให้มหาวิทยาลัยบูรพาและ สพฐ.
              </p>

              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                ก่อนหน้านี้ผมทำงานที่ MCA (มหาชน) ตำแหน่ง Programmer ออกแบบแอปพลิเคชันสั่งสินค้าด้วย AppSheet 
                และออกแบบฐานข้อมูล พร้อมกับพัฒนาโปรเจคส่วนตัวหลายตัวเพื่อฝึกฝนทักษะอย่างต่อเนื่อง
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    ),
                    title: 'Full-Stack',
                    desc: 'Frontend + Backend ครบในคนเดียว',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    ),
                    title: 'Database Design',
                    desc: 'MySQL, PostgreSQL, MongoDB',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                    ),
                    title: 'UX/UI Design',
                    desc: 'ออกแบบ Interface ใช้งานง่าย',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg>
                    ),
                    title: 'No-Code / Automation',
                    desc: 'AppSheet, Google Workspace',
                  },
                ].map((item) => (
                  <div key={item.title} className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] mb-2 sm:mb-3 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
