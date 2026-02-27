'use client';

import AnimateOnScroll from '../AnimateOnScroll';

const PROJECTS = [
  {
    title: 'BUU Student Affairs',
    subtitle: 'ระบบจัดการเอกสารกองกิจการนักศึกษา ม.บูรพา',
    description: 'ระบบ Document Management สำหรับกองกิจการนักศึกษา มหาวิทยาลัยบูรพา — ผมดูแลตั้งแต่ออกแบบ Database, วาง UX/UI, เขียน API และทำ CRUD ครบทุกส่วน ครอบคลุมระบบประกาศ, เอกสารดาวน์โหลด, ทำเนียบบุคลากร, โครงสร้างหน่วยงาน, ข่าวสาร, แบนเนอร์ และ Dashboard พร้อม RBAC Granular Permissions และ Audit Logging ที่เก็บถึงระดับ field-level diff',
    tags: ['React 19', 'TypeScript', 'Vite', 'Express 5', 'Prisma', 'PostgreSQL', 'Ant Design', 'shadcn/ui', 'Socket.IO', 'TanStack Query'],
    gradient: 'from-indigo-600 to-blue-600',
    badge: 'INTERNAL PROJECT',
    highlights: ['RBAC Granular Permissions', 'Prisma + PostgreSQL', 'Audit Logging (Diff Tracking)', 'Multi-language (TH/EN)', 'Session Management', 'PDF Security Scanning'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'OBEC Survey System',
    subtitle: 'ระบบสำรวจข้อมูลโรงเรียน สพฐ.',
    description: 'ระบบสำรวจสำหรับ สพฐ. (สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน) ที่ผมร่วมพัฒนา — เก็บข้อมูลจาก 4 กลุ่มเป้าหมาย ได้แก่ ครู, นักเรียน, ผู้ปกครอง และผู้บริหาร พร้อมระบบจัดการครุภัณฑ์, แผนที่โรงเรียน Leaflet, Dashboard วิเคราะห์ข้อมูล Recharts และ Export Excel',
    tags: ['React 19', 'TypeScript', 'Vite', 'Express 5', 'MongoDB', 'Mongoose', 'Ant Design', 'Leaflet', 'Recharts', 'Socket.IO'],
    gradient: 'from-emerald-600 to-teal-600',
    badge: 'INTERNAL PROJECT',
    highlights: ['Multi-role Survey (4 กลุ่ม)', 'School Database + GPS Map', 'Equipment Management', 'Dashboard Analytics', 'Excel/CSV Export', 'CMS (News/Banner)'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'ระบบ E-Commerce เต็มรูปแบบ',
    description: 'โปรเจคส่วนตัวที่ผมสร้างเองตั้งแต่ศูนย์ มี Admin Panel แยกต่างหาก รองรับ Multi-role (Super Admin, Admin), WebSocket Real-time Session, Cron Jobs จัดการ Task อัตโนมัติ, PDF Report และ Dashboard Analytics ครบวงจร',
    tags: ['React 19', 'Express 5', 'MySQL', 'WebSocket', 'JWT', 'Recharts', 'jsPDF', 'Vitest'],
    gradient: 'from-blue-600 to-sky-600',
    badge: null,
    highlights: ['Multi-role Admin Panel', 'Real-time WebSocket', 'PDF Reports', 'Cron Jobs', 'Dashboard Analytics'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.614A3.001 3.001 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise CMS Platform',
    subtitle: 'ระบบ CMS ระดับ Enterprise',
    description: 'แพลตฟอร์ม CMS ที่ผมออกแบบ Architecture เองทั้งหมด — มีระบบ RBAC แบบ Granular, Two-Factor Authentication (TOTP + QR Code), Email Verification, Audit Logging, Media Management พร้อม Multi-language (TH/EN)',
    tags: ['React 18', 'TypeScript', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'Zod', 'i18next'],
    gradient: 'from-slate-600 to-zinc-600',
    badge: null,
    highlights: ['RBAC + Permissions', '2FA (TOTP)', 'Prisma ORM', 'Audit Logging', 'Multi-language (i18n)'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    title: 'Task Management System',
    subtitle: 'ระบบจัดการงาน',
    description: 'ระบบ Task Management ที่ผมทำไว้ฝึกมือ มีระบบสมาชิก Cookie-based JWT Auth, CRUD Tasks, ฟีเจอร์กรองและจัดเรียงงาน ใช้ MUI DataGrid แสดงข้อมูลแบบตาราง',
    tags: ['React 19', 'Express 5', 'MongoDB', 'Mongoose', 'JWT', 'MUI DataGrid', 'Bootstrap'],
    gradient: 'from-teal-600 to-cyan-600',
    badge: null,
    highlights: ['Cookie-based JWT', 'Task CRUD', 'MUI DataGrid', 'MongoDB', 'Toast Notifications'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    title: 'Yaowaret At Home',
    subtitle: 'เว็บไซต์ขายเฟอร์นิเจอร์ออนไลน์',
    description: 'เว็บ E-Commerce ขายเฟอร์นิเจอร์ที่ผมทำตอนเรียน — มีระบบสมาชิก, ตะกร้าสินค้า, สั่งซื้อ, ชำระเงิน, ติดตามคำสั่งซื้อ และ Admin Dashboard',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS', 'Glide.js', 'AOS'],
    gradient: 'from-orange-600 to-amber-600',
    badge: null,
    highlights: ['Session Auth', 'Shopping Cart', 'Payment System', 'Order Tracking', 'Admin Dashboard'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: 'AppSheet Order System',
    subtitle: 'ระบบสั่งสินค้าด้วย AppSheet',
    description: 'ผมออกแบบ AppSheet Application สำหรับระบบสั่งสินค้าให้บริษัท MCA — ครอบคลุมตั้งแต่บันทึกรายการ, คำนวณราคา/ส่วนลด/ภาษีอัตโนมัติ ไปจนถึงออกรายงาน ช่วยลดเวลาทำงานของทีมขายอย่างเห็นผล',
    tags: ['AppSheet', 'Google Sheets', 'Automation', 'No-Code', 'Cloud-Based'],
    gradient: 'from-violet-600 to-purple-600',
    badge: null,
    highlights: ['Auto Calculation', 'Real-time Dashboard', 'Role-based Access', 'Mobile-first', 'No-Code Solution'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-[var(--brand-primary)] tracking-widest uppercase">
              Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
              ผลงานที่ผมทำ
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto text-sm sm:text-base">
              ทั้งงานในบริษัทและโปรเจคส่วนตัวที่ผมออกแบบและพัฒนาด้วยตัวเอง
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {PROJECTS.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 80}>
              <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden group">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-0">
                  {/* Left - Visual */}
                  <div className={`bg-gradient-to-br ${project.gradient} p-5 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[160px] sm:min-h-[180px] md:min-h-[200px]`}>
                    {/* Decorative Pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                      }}
                    />

                    <div className="relative z-10">
                      {/* Badge */}
                      {project.badge && (
                        <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm uppercase tracking-wider mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {project.badge}
                        </span>
                      )}
                      <div className="text-white/80 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500">
                        {project.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/70 text-xs sm:text-sm mt-1">{project.subtitle}</p>
                    </div>

                    {/* Tags in visual */}
                    <div className="relative z-10 flex flex-wrap gap-1.5 mt-4 md:mt-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/20 text-white/90 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right - Details */}
                  <div className="md:col-span-2 p-5 sm:p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-1.5 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[var(--accent-green)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-[var(--text-secondary)] text-[10px] sm:text-[11px] md:text-xs">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* All Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[var(--border-color)]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] sm:text-[10px] md:text-[11px] font-medium px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                        >
                          {tag}
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
    </section>
  );
}
