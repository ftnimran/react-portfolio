import React from "react";
import SectionTitle from "../components/SectionTitle";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "bx bxl-html5" },
      { name: "CSS3", icon: "bx bxl-css3" },
      { name: "JavaScript", icon: "bx bxl-javascript" },
      { name: "React", icon: "bx bxl-react" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "bx bxl-nodejs" },
      { name: "Express", icon: "bx bxs-server" },
      { name: "MongoDB", icon: "bx bxl-mongodb" },
      { name: "MySQL", icon: "bx bxs-data" },
    ],
  },
  {
    category: "Styling & Frameworks",
    skills: [
      { name: "Tailwind", icon: "bx bxl-tailwind-css" },
      { name: "SASS", icon: "bx bxl-sass" },
      { name: "Bootstrap", icon: "bx bxl-bootstrap" },
      { name: "GSAP", icon: "bx bx-code-alt" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "VS Code", icon: "bx bxl-visual-studio" },
      { name: "Git", icon: "bx bxl-git" },
      { name: "GitHub", icon: "bx bxl-github" },
      { name: "REST APIs", icon: "bx bx-plug" },
    ],
  },
];

const SkillCard = ({ name, icon }) => (
  /* .skill-card: Mobile par p-6, Desktop par p-[2.5rem_1.5rem] */
  <div
    className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[15px] border border-[rgba(255,255,255,0.1)] bg-linear-to-br from-[rgba(99,102,241,0.1)] to-[rgba(236,72,153,0.05)] p-6 md:p-[2.5rem_1.5rem] text-center transition-all duration-[0.4s] ease-[ease] cursor-pointer 
    hover:-translate-y-2.5 hover:border-[hsl(184,100%,50%)] hover:bg-linear-to-br hover:from-[rgba(99,102,241,0.2)] hover:to-[rgba(236,72,153,0.1)] hover:shadow-[0_20px_40px_rgba(0,238,255,0.2)] active:scale-95"
  >
    {/* Shine Effect */}
    <div className="absolute top-0 -left-full h-full w-full bg-linear-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent transition-[left] duration-500 group-hover:left-full" />

    {/* .skill-icon: Mobile par thoda chota, Desktop par exact 60px/2.8rem */}
    <div
      className="mb-[0.8rem] md:mb-4 flex h-12.5 w-12.5 md:h-15 md:w-15 items-center justify-center rounded-[50%] bg-[rgba(99,102,241,0.1)] text-[2rem] md:text-[2.8rem] text-[#0ef] transition-all duration-[0.4s] ease-[ease] 
      group-hover:scale-[1.3] group-hover:rotate-360 group-hover:bg-[rgba(99,102,241,0.2)]"
    >
      <i className={icon}></i>
    </div>

    {/* .skill-card span */}
    <span className="relative z-1 text-[0.85rem] md:text-[0.95rem] font-bold text-gray-200">
      {name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section
      className="w-full min-h-screen pt-17.5 px-[5%] md:px-[10%] pb-0 *:leading-tight"
      id="skills"
    >
      <SectionTitle titleText1="My" titleText2=" Skills" />

      <div className="w-full mt-8 md:mt-20">
        <div className="grid gap-5 md:gap-5">
          {skillsData.map((section, idx) => (
            <div
              key={idx}
              className="rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(99,102,241,0.05)] p-6 md:p-12 transition-all duration-[0.4s] ease-[ease] hover:bg-[rgba(99,102,241,0.1)] hover:border-[rgb(0,238,255)] hover:shadow-[0_20px_40px_rgba(0,238,255,0.2)]"
            >
              <h3 className="mb-6 md:mb-8 text-[1.2rem] md:text-[1.5rem] font-bold tracking-[1px] bg-[linear-gradient(to_bottom_right,#00eeff,#83f0ff,#c3f1ff,#ecf5ff,#ffffff)] bg-clip-text text-transparent uppercase text-center md:text-left">
                {section.category}
              </h3>

              {/* Responsive Grid: Mobile size pe 2 cards (grid-cols-2) with gap-4 | Desktop pe auto-fit with gap-8 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4 md:gap-8">
                {section.skills.map((skill, sIdx) => (
                  <SkillCard key={sIdx} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
