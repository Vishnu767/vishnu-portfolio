import React from 'react'
import './App.css'
import resumePdf from './assets/VISHNU_VARDHAN_PUPPALA.pdf'

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-4 min-h-0">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-gray-100">
      <div className="w-full">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 px-6 py-6 md:py-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Hi, I'm Vishnu Vardhan Puppala</h2>
            <p className="text-gray-300 mt-1">Software Developer with 1+ years of experience at BNY, skilled in Java, Spring Boot, and building scalable client-facing applications</p>
            <p className="text-sm text-gray-400 mt-3">Chennai, Tamil Nadu • Interested to work in roles focusing on full-stack engineering</p>
          </div>
          <div className="w-full flex justify-center md:w-auto md:justify-end">
            <a
              href={resumePdf}
              download="VISHNU_VARDHAN_PUPPALA.pdf"
              className="inline-flex items-center justify-center text-center text-white px-4 rounded-md text-sm shadow-md relative z-20 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 opacity-100 no-underline w-44 h-10 leading-none"
              style={{ backgroundColor: '#4f46e5', color: '#ffffff' }}
            >
              Download Resume
            </a>
          </div>
        </header>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 pb-10">
          <main className="lg:col-span-2 space-y-8">
            <Section id="experience" title="Experience">
              <div className="space-y-6">
                <article className="p-4 bg-white/3 rounded-md border border-white/6">
                  <h3 className="font-semibold">Software Engineer — Bank of New York (BNY)</h3>
                  <p className="text-sm text-gray-300">Chennai, Tamil Nadu — July 2024 – Present</p>
                  <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                    <li>Delivered optimized REST APIs for large entitlement data, replacing a legacy reporting solution with modern PDF/Excel outputs.</li>
                    <li>Performed technical feasibility assessments (Java Streams, Reactive Java, Pagination) and implemented an efficient solution for large datasets.</li>
                    <li>Built an AI-powered RAG + SQL query agent enabling internal users to retrieve client data in &lt;30s, reducing query resolution time by ~85%.</li>
                    <li>Collaborated with stakeholders and multiple Agile teams to deliver within tight deadlines.</li>
                  </ul>
                </article>

                <article className="p-4 bg-white/3 rounded-md border border-white/6">
                  <h3 className="font-semibold">Software Engineer Intern — MAQ Software</h3>
                  <p className="text-sm text-gray-300">Hyderabad, Telangana — May 2023 – July 2023</p>
                  <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                    <li>Implemented Playwright-based automation for critical test cases, reducing manual testing effort by ~90% and providing detailed test reports.</li>
                  </ul>
                </article>
              </div>
            </Section>

            <Section id="projects" title="Projects">
              <div className="space-y-4">
                <article className="p-4 bg-white/3 rounded-md border border-white/6">
                  <h3 className="font-semibold">RNAS — Randomized Neural Architecture Search</h3>
                  <p className="text-sm text-gray-300">RNAS is aimed at efficiently discovering high-performing architectures. Our approach involves embedding the unstructured space of neural architectures within a manifold, enabling constrained exploration of architectures with promising performance potential. By diligently sampling architectures from regions exhibiting high performance values within this constrained space, our algorithm focuses its search efforts on promising candidates.</p>
                  <div className="mt-2 text-sm">
                    <a href="https://github.com/Vishnu767/BTP-RNAS" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:underline">Repository →</a>
                  </div>
                </article>

                <article className="p-4 bg-white/3 rounded-md border border-white/6">
                  <h3 className="font-semibold">Tirutsava Website — IIT Tirupati Fest</h3>
                  <p className="text-sm text-gray-300">Developed the Tirutsava fest website as part of the Web Development Committee to showcase events, schedules and registration flows for the college fest.</p>
                </article>

                <article className="p-4 bg-white/3 rounded-md border border-white/6">
                  <h3 className="font-semibold">ERP Project — MERN Stack</h3>
                  <p className="text-sm text-gray-300">Developed an ERP-style website as part of the Software Engineering course to learn and build full-stack features using the MERN stack.</p>
                  <div className="mt-2 text-sm">
                    <a href="https://github.com/Vishnu767/Software-Engineering-Web-development-project" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:underline">Repository →</a>
                  </div>
                </article>
              </div>
            </Section>

            <Section id="education" title="Education">
              <div className="p-4 bg-white/3 rounded-md border border-white/6 text-gray-300">
                <h4 className="font-semibold">B.Tech, Computer Science & Engineering — Indian Institute of Technology, Tirupati</h4>
                <p className="text-sm">Nov 2020 — July 2024</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/6 text-xs text-gray-100">GPA - 8.56 / 10.0</span>
                </div>
                <div className="mt-2 text-sm">
                  <div className="text-gray-300 mb-2">Relevant coursework</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-white/6 text-xs text-gray-100">Database Systems</span>
                    <span className="px-2 py-1 rounded-full bg-white/6 text-xs text-gray-100">Software Engineering</span>
                    <span className="px-2 py-1 rounded-full bg-white/6 text-xs text-gray-100">Operating Systems</span>
                    <span className="px-2 py-1 rounded-full bg-white/6 text-xs text-gray-100">Machine Learning</span>
                    <span className="px-2 py-1 rounded-full bg-white/6 text-xs text-gray-100">Computer Networks</span>
                    <span className="px-2 py-1 rounded-full bg-white/6 text-xs text-gray-100">Cyber Security</span>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <div className="text-gray-300 mb-2">Certifications</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between p-2 bg-white/4 rounded-md border border-white/6">
                      <div>
                        <div className="font-medium text-gray-100">Cryptography and Network Security</div>
                        <div className="text-xs text-gray-300">NPTEL — July 2022 - Oct 2022</div>
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-600/20 text-xs text-indigo-200">Top 1%</span>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-white/4 rounded-md border border-white/6">
                      <div>
                        <div className="font-medium text-gray-100">Blockchain and its applications</div>
                        <div className="text-xs text-gray-300">NPTEL — Jan 2023 - Apr 2023</div>
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-600/20 text-xs text-indigo-200">Top 1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </main>

          <aside className="lg:col-span-1 space-y-6">
            <Section id="skills" title="Skills">
              <div className="flex flex-col gap-3">
                <div className="p-3 rounded-md bg-white/3 border border-white/6">
                  <div className="font-medium text-gray-200 text-center">Programming & Query Languages</div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>C++</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>C</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>Java</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>JavaScript</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>TypeScript</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>Python</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>SQL</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>Mongoose</div>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-white/3 border border-white/6">
                  <div className="font-medium text-gray-200 text-center">Web Technologies</div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>Spring Boot</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>ExpressJS</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>ReactJS</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>NextJS</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>HTML</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>CSS</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>Bootstrap</div>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-white/3 border border-white/6">
                  <div className="font-medium text-gray-200 text-center">Core Competencies</div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>REST APIs</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>Microservices</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>System Design</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>DSA</div>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-white/3 border border-white/6">
                  <div className="font-medium text-gray-200 text-center">Databases & AI Tools</div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>DB2</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>MongoDB</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>GitHub Copilot</div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"/>M365 Copilot</div>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-white/3 border border-white/6 text-center">
                  <div className="font-medium text-gray-200">Technical Explorations</div>
                  <div className="mt-3 text-sm text-gray-300 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span>Apache Spark - Java RDDs, SparkSQL, Spark Streaming</span>
                  </div>
                </div>
              </div>
            </Section>

            <Section id="cp-profiles" title="Competitive Programming Profiles">
              <div className="text-gray-300">
                <div className="mt-3 text-sm">
                  <div className="font-medium">Profiles</div>
                  <div className="mt-2 grid grid-cols-1 gap-3">
                    <a href="https://codeforces.com/profile/Eren767" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-white/4 rounded-md border border-white/6 hover:bg-white/6">
                      <div>
                        <div className="font-medium text-gray-100">Codeforces</div>
                        <div className="text-xs text-gray-300">Max Rating: 1622</div>
                      </div>
                      <span className="ml-3 flex-shrink-0">
                        <span className="w-8 h-8 flex items-center justify-center bg-indigo-600/20 rounded-full">
                          <svg className="w-4 h-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M10 7h7v7" />
                          </svg>
                        </span>
                      </span>
                    </a>

                    <a href="https://www.codechef.com/users/mikey767" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-white/4 rounded-md border border-white/6 hover:bg-white/6">
                      <div>
                        <div className="font-medium text-gray-100">CodeChef</div>
                        <div className="text-xs text-gray-300">Max Rating: 2039</div>
                      </div>
                      <span className="ml-3 flex-shrink-0">
                        <span className="w-8 h-8 flex items-center justify-center bg-indigo-600/20 rounded-full">
                          <svg className="w-4 h-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M10 7h7v7" />
                          </svg>
                        </span>
                      </span>
                    </a>

                    <a href="https://leetcode.com/Vishnu767/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-white/4 rounded-md border border-white/6 hover:bg-white/6">
                      <div>
                        <div className="font-medium text-gray-100">LeetCode</div>
                        <div className="text-xs text-gray-300">Max rating: 2026 (Top 2.5%)</div>
                      </div>
                      <span className="ml-3 flex-shrink-0">
                        <span className="w-8 h-8 flex items-center justify-center bg-indigo-600/20 rounded-full">
                          <svg className="w-4 h-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M10 7h7v7" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Section>
            
            <Section id="personal-milestones" title="Personal Milestones">
              <div className="p-3 rounded-md bg-white/3 border border-white/6 text-gray-300">
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span>Secured a rank of <strong>1873</strong> in JEE Advanced 2020 (out of 1,200,000+ applicants)</span>
                  </li>
                </ul>
              </div>
            </Section>
          </aside>
        </div>

        <footer className="mt-12 text-sm text-gray-400 text-center pb-6">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-gray-200">Interested in collaborating or hiring? You can reach me at the email below — I typically respond within 48 hours.</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:vishnuvardhanpuppala2003@gmail.com" className="inline-flex items-center gap-2 h-6 leading-none text-indigo-300 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="align-middle">vishnuvardhanpuppala2003@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/vishnu767" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-6 leading-none text-gray-300 hover:text-indigo-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-14h4v2" />
                  <rect x="2" y="9" width="4" height="12" rx="1" ry="1" />
                </svg>
                <span className="align-middle">LinkedIn</span>
              </a>

              <a href="https://github.com/vishnu767" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-6 leading-none text-gray-300 hover:text-indigo-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.16.59.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
                <span className="align-middle">GitHub</span>
              </a>
            </div>

            <div className="mt-3 text-xs text-gray-500">© {new Date().getFullYear()} Vishnu Vardhan Puppala • Built with React + Tailwind</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
