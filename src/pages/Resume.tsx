import {
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "C# / .NET",
  "Python",
  "HTML / CSS",
  "Tailwind CSS",
  "AWS",
  "DynamoDB",
  "Lambda",
  "API Gateway",
  "Git / GitHub",
  "Linux",
  "SQL",
  "CAD / CAM",
];

const experience = [
  {
    company: "KCD Software",
    role: "Technical Support Engineer",
    period: "Sep 2022 — Present",
    description: [
      "Develop and maintain VB/VBS automation used in cabinet manufacturing and CNC workflows.",
      "Troubleshoot CAD/CAM, CNC, DXF, optimization, and software integration issues.",
      "Work directly with customers and internal development teams to diagnose complex technical problems.",
      "Test software changes and help improve manufacturing workflows and tooling.",
    ],
  },
  {
    company: "Makrams Inc.",
    role: "Software Implementation & Project Specialist",
    period: "2025 — Present",
    description: [
      "Support software implementation, configuration, testing, and project-related technical work.",
      "Assist with translating business requirements into practical software workflows.",
    ],
  },
  {
    company: "Guitar Template Network",
    role: "Owner",
    period: "Oct 2019 — Present",
    description: [
      "Operate an online business producing digital and physical templates for guitar building.",
      "Manage product development, customer support, website operations, and manufacturing.",
    ],
  },
];

const education = [
  {
    degree: "M.S. Software Engineering & Project Management",
    school: "Champlain College",
    period: "2026",
  },
  {
    degree: "B.S. Cybersecurity",
    school: "Champlain College",
    period: "2025",
  },
];

function Resume() {

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  scrollToTop()

  return (
    <section className="min-h-screen px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="" title="RESUME" />

        {/* Header */}
        <div className="mt-12 border border-green-500/20 bg-black/30">
          <div className="flex items-center justify-between border-b border-green-500/20 px-5 py-3 font-mono text-xs text-green-500/60">
            <span>~/portfolio/resume.tsx</span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              AVAILABLE
            </span>
          </div>

          <div className="p-6 md:p-10">
            <p className="mb-2 font-mono text-sm text-green-500">
              {"// SOFTWARE DEVELOPER + CYBERSECURITY"}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              VOLODYMYR
              <br />
              KRUSHYNSKYI
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <MapPin size={15} />
                Massachusetts, USA
              </span>

              <span className="flex items-center gap-2">
                <Terminal size={15} />
                Software Developer
              </span>
            </div>

            <p className="mt-7 max-w-3xl leading-7 text-zinc-400">
              Software developer with a background in cybersecurity,
              technical support, automation, and manufacturing software.
              Experienced with React, TypeScript, C#, AWS, and building
              practical software tools from frontend interfaces to cloud
              backends.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Volodymyr-Krushynskyi-Resume.pdf"
                download
                className="flex items-center gap-2 bg-green-500 px-5 py-3 font-mono text-sm font-bold text-black transition hover:bg-green-400"
              >
                <Download size={17} />
                DOWNLOAD_RESUME
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 border border-green-500/30 px-5 py-3 font-mono text-sm text-green-400 transition hover:border-green-400 hover:bg-green-500/10"
              >
                CONTACT_ME
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Resume body */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Left */}
          <div className="space-y-8">
            <ResumeSection
              icon={<GraduationCap size={18} />}
              title="EDUCATION"
            >
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.degree}>
                    <h3 className="font-semibold text-zinc-100">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      {item.school}
                    </p>

                    {item.period && (
                      <p className="mt-1 font-mono text-xs text-green-500/70">
                        {item.period}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection
              icon={<ShieldCheck size={18} />}
              title="CERTIFICATIONS"
            >
              <div>
                <h3 className="font-semibold text-zinc-100">
                  CompTIA Security+
                </h3>

                <p className="mt-1 font-mono text-xs text-green-500/70">
                  2026
                </p>
              </div>
            </ResumeSection>

            <ResumeSection
              icon={<Terminal size={18} />}
              title="TECH_STACK"
            >
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-green-500/20 bg-green-500/5 px-3 py-1.5 font-mono text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ResumeSection>
          </div>

          {/* Right */}
          <ResumeSection
            icon={<BriefcaseBusiness size={18} />}
            title="EXPERIENCE"
          >
            <div className="relative border-l border-green-500/20 pl-7">
              {experience.map((job, index) => (
                <article
                  key={job.company}
                  className={`relative ${
                    index !== experience.length - 1
                      ? "mb-10"
                      : ""
                  }`}
                >
                  <span className="absolute -left-[33px] top-1.5 h-3 w-3 border border-green-400 bg-black" />

                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.company}
                      </h3>

                      <p className="mt-1 text-green-400">
                        {job.role}
                      </p>
                    </div>

                    <span className="whitespace-nowrap font-mono text-xs text-zinc-500">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.description.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-zinc-400"
                      >
                        <span className="mt-[1px] font-mono text-green-500">
                          &gt;
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </ResumeSection>
        </div>
      </div>
    </section>
  );
}

type ResumeSectionProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

function ResumeSection({
  icon,
  title,
  children,
}: ResumeSectionProps) {
  return (
    <div className="border border-green-500/20 bg-black/20 p-6">
      <div className="mb-6 flex items-center gap-3 border-b border-green-500/20 pb-4">
        <span className="text-green-400">{icon}</span>

        <h2 className="font-mono text-sm font-semibold tracking-[0.15em] text-green-400">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}

export default Resume;