'use client';

import AnimateOnScroll from '../AnimateOnScroll';

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    techs: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Ant Design / shadcn', level: 85 },
      { name: 'Bootstrap / MUI', level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-400',
    techs: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 90 },
      { name: 'REST API Design', level: 85 },
      { name: 'JWT / Auth', level: 85 },
      { name: 'Socket.IO', level: 75 },
      { name: 'PHP', level: 70 },
    ],
  },
  {
    title: 'Database',
    color: 'from-purple-500 to-pink-400',
    techs: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 80 },
      { name: 'Prisma ORM', level: 80 },
      { name: 'Mongoose', level: 80 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'from-orange-500 to-yellow-400',
    techs: [
      { name: 'Git / GitLab', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel / Deployment', level: 78 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Vitest / Testing', level: 72 },
      { name: 'AppSheet / No-Code', level: 80 },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-[var(--brand-primary)] tracking-widest uppercase">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
              เครื่องมือที่ผมใช้ทำงานจริง
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto text-sm sm:text-base">
              เทคโนโลยีที่ผมใช้พัฒนาระบบในบริษัทและโปรเจคส่วนตัว
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {TECH_CATEGORIES.map((category, i) => (
            <AnimateOnScroll key={category.title} delay={i * 100}>
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-base sm:text-lg font-bold">{category.title}</h3>
                </div>

                {/* Tech Skills */}
                <div className="space-y-3 sm:space-y-4">
                  {category.techs.map((tech) => (
                    <div key={tech.name}>
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                        <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                        <span className="text-[10px] sm:text-xs text-[var(--text-secondary)]">{tech.level}%</span>
                      </div>
                      <div className="w-full h-1.5 sm:h-2 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <AnimateOnScroll delay={400}>
          <div className="mt-10 sm:mt-12 text-center">
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] mb-4 uppercase tracking-wider">
              เคยใช้งานเพิ่มเติม
            </h4>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto">
              {[
                'TanStack React Query', 'React Router', 'Leaflet / Maps', 'Recharts',
                'Zod Validation', 'i18n (Multi-language)', 'RBAC',
                'Two-Factor Auth (TOTP)', 'Nodemailer', 'Cron Jobs',
                'Multer File Upload', 'PDF Generation', 'ExcelJS / XLSX',
                'Helmet Security', 'Rate Limiting', 'SonarQube',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
