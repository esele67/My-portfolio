import { useState, useEffect, useRef } from "react";
import { ExperienceCard } from "./experience-card";
import { skills } from "@/utils/data.utils";
import { Skill } from "@/utils/types.utils";

const About = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [skillsVisible, setSkillsVisible] = useState<boolean>(false);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) skillsObserver.observe(skillsRef.current);

    return () => {
      observer.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={aboutRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 rounded-full text-sm font-medium backdrop-blur-sm border border-indigo-200/50">
              Get to know me
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Who I <span className="text-indigo-600">Am</span>
              </h3>

              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">
                  I&rsquo;m a passionate{" "}
                  <strong className="text-indigo-600">
                    Software Engineer
                  </strong>{" "}
                  with expertise in building modern, responsive web
                  applications. With a focus on creating efficient, maintainable
                  code, I deliver solutions that combine technical excellence
                  with great user experience.
                </p>

                <p>
                  My journey in development has led me to work with cutting-edge
                  technologies and collaborate with amazing teams to bring
                  innovative ideas to life.
                </p>
              </div>
            </div>

            <div ref={skillsRef}>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                My <span className="text-indigo-600">Skills</span>
              </h3>

              <div className="space-y-6">
                {skills.map((skill: Skill, index: number) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      skillsVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          {skill.icon}
                        </div>

                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-sm font-medium text-indigo-600">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100 + 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Professional{" "}
              <span className="text-indigo-600">Experience</span>
            </h3>

            <div className="relative space-y-8">

              {/* Code Campus International */}
              <ExperienceCard
                title="Project Developer / Software Development Intern"
                company="Code Campus International"
                location="Remote"
                period="August 2026 - September 2026"
                description="Designed and built Code Campus Code Arena, a full-stack coding challenge and assessment platform supporting administrators, instructors, students, and public challenge users. Developed instructor tools for challenge and question management, student workflows for timed coding attempts and automated evaluation, and an integrated code execution system for JavaScript and Python. Deployed the platform to Vercel with MySQL and email integration, and continued development and maintenance as the project developer after the internship."
                techStack="React.js, Node.js, Express.js, MySQL, Tailwind CSS"
                delay={300}
              />

              {/* Seed Faith Basic School */}
              <ExperienceCard
                title="Full-Stack Developer"
                company="Seed Faith Basic School Result Management Portal"
                location="Abuja, Nigeria"
                period="2026"
                description="Built a full-stack school result management system covering student records, result compilation, approval workflows, and parent access. Added role-based authentication for Administrators, Form Masters, Principals, and Parents, with automated result processing, PDF report generation, announcements, and notifications."
                techStack="React.js, Node.js, Express.js, MySQL, JWT, Tailwind CSS, Puppeteer, Cloudinary, REST APIs"
                delay={350}
              />

              {/* Sleeky Programmers */}
              <ExperienceCard
                title="Software Development Intern"
                company="Sleeky Programmers Ltd"
                location="Remote"
                period="April 2025 - August 2025"
                description="Built and deployed a full-featured electronic voting system for employee nominations, implementing real-time voting workflows and role-based access control. Developed API documentation that was adopted by the team, improving developer onboarding, API understanding, and long-term maintainability."
                techStack="Next.js, NestJS, MongoDB, REST APIs, Git, Agile/Scrum"
                delay={400}
              />

              {/* Lincoln College */}
              <ExperienceCard
                title="Software Engineer Intern (Research & Development)"
                company="Lincoln College"
                location="Abuja, Nigeria"
                period="July 2024 - December 2024"
                description="Led a 7-person team in delivering a Guest Book Security System that improved visitor tracking through structured data capture. Gathered stakeholder requirements and designed the UI/UX for a complaint management system for a live radio station. Delivered weekly project reports covering scope, schedule, progress, and risks to non-technical decision makers."
                techStack="HTML, CSS, Bootstrap, JavaScript, PHP, Git"
                delay={450}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;