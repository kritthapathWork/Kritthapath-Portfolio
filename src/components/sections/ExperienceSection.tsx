'use client';

import AnimateOnScroll from '../AnimateOnScroll';

const EXPERIENCES = [
  {
    type: 'work',
    title: 'Programmer',
    organization: 'บริษัท T.Logical Resolution',
    period: 'พ.ย. 2568 — ปัจจุบัน',
    description: 'ทำงานเต็มเวลาตำแหน่ง Programmer รับผิดชอบตั้งแต่ออกแบบ Database, วาง UX/UI, เขียน API Flow, ทำ CRUD ไปจนถึงให้คำปรึกษาเรื่อง UI และ Database Design กับทีม — ปัจจุบันดูแลโปรเจค Internal ให้กองกิจการนักศึกษา ม.บูรพา (BUU) และระบบสำรวจ สพฐ. (OBEC Survey)',
    skills: ['React 19', 'TypeScript', 'Vite', 'Express 5', 'Prisma', 'PostgreSQL', 'MongoDB', 'Ant Design', 'shadcn/ui', 'Socket.IO'],
    current: true,
  },
  {
    type: 'work',
    title: 'Programmer',
    organization: 'บริษัท มาร์เก็ตคอนเน็กชันส์เอเชีย จำกัด (มหาชน) — MCA',
    period: 'เม.ย. 2566 — ม.ค. 2567',
    description: 'ออกแบบโครงสร้างการทำงานของระบบแอปพลิเคชัน เขียนระบบสั่งสินค้าตั้งแต่บันทึกรายการ, คำนวณราคา ไปจนถึงออกรายงานด้วย AppSheet — ออกแบบฐานข้อมูลสำหรับเก็บข้อมูลต่าง ๆ ในองค์กร',
    skills: ['AppSheet', 'Google Sheets', 'Database Design', 'Automation'],
    current: false,
  },
  {
    type: 'project',
    title: 'Full-Stack Developer',
    organization: 'โปรเจคส่วนตัว',
    period: 'ตลอดเวลา',
    description: 'พัฒนาโปรเจคส่วนตัวหลายตัวเพื่อฝึกฝนทักษะอย่างต่อเนื่อง — ตั้งแต่ E-Commerce Platform, Enterprise CMS พร้อม RBAC และ 2FA, Task Management ไปจนถึง Yaowaret At Home (เว็บเฟอร์นิเจอร์) ครอบคลุมทั้ง Frontend, Backend และ Database Design',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'MySQL'],
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-[var(--brand-primary)] tracking-widest uppercase">
              Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
              ประสบการณ์ทำงาน
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-5 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--brand-primary)] via-[var(--brand-primary)]/50 to-transparent md:-translate-x-[1px]" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <AnimateOnScroll key={`${exp.title}-${exp.organization}`} delay={i * 150}>
                <div className={`relative flex items-start gap-6 sm:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className={`absolute left-5 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-4 border-[var(--bg-primary)] shadow-lg -translate-x-1/2 z-10 mt-2 ${
                    exp.current 
                      ? 'bg-[var(--accent-green)] shadow-[var(--accent-green)]/30' 
                      : 'bg-[var(--brand-primary)] shadow-[var(--brand-primary)]/20'
                  }`} />

                  {/* Content Card */}
                  <div className={`ml-10 sm:ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 group">
                      {/* Type Badge + Period */}
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ${
                          exp.current
                            ? 'bg-[var(--accent-green)]/10 text-[var(--accent-green)]'
                            : exp.type === 'work' 
                              ? 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]' 
                              : 'bg-[var(--text-secondary)]/10 text-[var(--text-secondary)]'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            exp.current
                              ? 'bg-[var(--accent-green)] animate-pulse'
                              : exp.type === 'work' ? 'bg-[var(--brand-primary)]' : 'bg-[var(--text-secondary)]'
                          }`} />
                          {exp.current ? 'ปัจจุบัน' : exp.type === 'work' ? 'Work' : 'Side Projects'}
                        </span>
                        <span className="text-[10px] sm:text-xs text-[var(--text-secondary)]">{exp.period}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold">{exp.title}</h3>
                      <p className="text-xs sm:text-sm text-[var(--brand-primary)] font-medium mt-0.5">{exp.organization}</p>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 sm:mt-3 leading-relaxed">{exp.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-3 sm:mt-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[9px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* What I Can Offer */}
        <AnimateOnScroll delay={300}>
          <div className="mt-16 sm:mt-20 glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8">
              สิ่งที่ผม <span className="gradient-text">ทำได้</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: '⚡',
                  title: 'Rapid Development',
                  desc: 'สร้าง Feature ได้รวดเร็ว ทั้ง Frontend และ Backend',
                },
                {
                  icon: '🏗️',
                  title: 'Clean Architecture',
                  desc: 'โค้ดอ่านง่าย ดูแลต่อได้ ตาม best practices',
                },
                {
                  icon: '🎨',
                  title: 'UX/UI Design',
                  desc: 'ออกแบบ Interface ที่ใช้งานง่ายและสวยงาม',
                },
                {
                  icon: '📱',
                  title: 'Responsive Design',
                  desc: 'ใช้งานได้ดีทุก device ทุกขนาดหน้าจอ',
                },
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                  <h4 className="font-semibold text-xs sm:text-sm mb-1">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
