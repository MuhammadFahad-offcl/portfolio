import { FormEvent, useEffect, useState } from "react";

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["certifications", "Credentials"],
  ["contact", "Contact"],
] as const;

const skillGroups = [
  {
    title: "Languages",
    items: [
      ["C++", 92],
      ["TypeScript", 88],
      ["JavaScript", 90],
    ],
  },
  {
    title: "AI / Agentic AI",
    items: [
      ["AI Agents", 95],
      ["Agentic AI Systems", 90],
      ["Multi-Modal AI", 85],
    ],
  },
  {
    title: "Automation",
    items: [
      ["n8n (Core)", 95],
      ["Workflow Automation", 92],
      ["API Integrations", 90],
    ],
  },
  {
    title: "Web Development",
    items: [
      ["React / Next.js", 92],
      ["Tailwind CSS", 94],
      ["Responsive UI", 90],
    ],
  },
  {
    title: "Backend / Data",
    items: [
      ["Supabase", 88],
      ["PostgreSQL", 86],
      ["Database Design", 90],
    ],
  },
  {
    title: "Engineering Foundations",
    items: [
      ["OOP", 92],
      ["DSA", 87],
      ["Problem Solving", 91],
    ],
  },
] as const;

const projects = [
  {
    index: "01",
    title: "WhatsApp AI Agent",
    description:
      "Intelligent WhatsApp automation agent handling user queries, automated responses, and workflow management using AI tools and backend integrations.",
    tags: ["AI Agent", "n8n", "Node.js", "Webhooks"],
  },
  {
    index: "02",
    title: "Social Media Automation Agent",
    description:
      "AI-powered social media automation for automated posting, scheduling, content handling, and engagement workflows across platforms.",
    tags: ["AI", "n8n", "Automation", "APIs"],
  },
  {
    index: "03",
    title: "Hotel Reservation System",
    description:
      "Designed and developed a full hotel reservation management system with room booking, customer management, and database integration.",
    tags: ["C++", "OOP", "Database", "Booking"],
  },
  {
    index: "04",
    title: "n8n Automation Workflows",
    description:
      "Production-grade webhook patterns, AI integrations, and complex HTTP node flows that automate real business operations.",
    tags: ["n8n", "Webhooks", "HTTP", "Workflows"],
  },
  {
    index: "05",
    title: "Agentic AI Workflow",
    description:
      "Multi-step agentic AI system that plans, calls tools, and coordinates sub-agents to complete complex business tasks autonomously.",
    tags: ["Agentic AI", "AI Agents", "LLM", "Tools"],
  },
  {
    index: "06",
    title: "Lead Gen Chatbot",
    description:
      "AI-powered chatbot that qualifies leads 24/7, captures contact details, and routes hot prospects straight to the sales pipeline.",
    tags: ["AI", "Chatbot", "Lead Gen", "n8n"],
  },
] as const;

const certifications = [
  {
    title: "Founder & Lead Automation Architect",
    org: "VoxAi",
    date: "May 2026 - Present",
    description:
      "Founded VoxAi - a technology agency focused on AI automation, agentic workflows, and intelligent digital systems. Architected scalable backend systems with Supabase and PostgreSQL.",
  },
  {
    title: "AI Automation & Agentic AI",
    org: "Self-led Projects",
    date: "2025 - Present",
    description:
      "Built multi-modal AI automation workflows integrating text, audio, and image processing. Developed production AI agents and workflow systems with n8n and modern AI tooling.",
  },
  {
    title: "Bachelor of Science in Computer Science",
    org: "University of Management and Technology (UMT)",
    date: "Oct 2024 - Expected 2028",
    description:
      "Specializing in software engineering, AI, and database systems. Deep focus on C++, OOP, Data Structures & Algorithms.",
  },
  {
    title: "Intermediate in Computer Science (ICS)",
    org: "Punjab Group of Colleges",
    date: "Aug 2022 - Aug 2024",
    description:
      "Foundations in programming, mathematics, and computing. Built early-stage academic software projects.",
  },
] as const;

function App() {
  const counter = projects.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaded(true);
    }, 750);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const next = total <= 0 ? 0 : (window.scrollY / total) * 100;
      setProgress(next);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const updateCursor = (event: globalThis.MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className={`page-loader${loaded ? " is-hidden" : ""}`}>
        <div className="loader-mark" />
        <span>Muhammad Fahad</span>
      </div>

      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="cursor-orb" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }} />

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand">
            <span className="text-gradient">MF.</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="nav-link">
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="talk-button desktop-only">
            Let&apos;s Talk
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen ? (
          <div className="mobile-menu">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              Available for AI automation projects
            </div>
            <h1 data-reveal="up">Hi, I&apos;m Muhammad Fahad</h1>
            <h2 data-reveal="up" style={{ transitionDelay: "120ms" }}>
              AI Automation &amp; Agentic AI Specialist
            </h2>
            <p>
              Crafting immersive digital experiences with modern web technologies,
              intelligent automation, and agentic AI systems.
            </p>
            <div className="hero-actions" data-reveal="up" style={{ transitionDelay: "240ms" }}>
              <a href="#contact" className="primary-link">
                Hire Me
              </a>
              <a href="#projects" className="secondary-link hero-secondary">
                View Projects
              </a>
            </div>
          </div>

          <div className="hero-metrics" data-reveal="up" style={{ transitionDelay: "360ms" }}>
            <div className="metric-chip glass-card">
              <span>Projects shipped</span>
              <strong>{counter}</strong>
            </div>
            <div className="metric-chip glass-card">
              <span>Focus</span>
              <strong>AI + Automation</strong>
            </div>
            <div className="metric-chip glass-card">
              <span>Status</span>
              <strong>Available now</strong>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-kicker" data-reveal="up">About Me</div>
            <h2 className="section-title center" data-reveal="up">
              Engineering the future, <span className="text-gradient">one workflow at a time</span>
            </h2>

            <div className="about-grid">
              <div className="profile-card glass-card" data-reveal="left">
                <div className="profile-orb">MF</div>
                <div className="profile-footer glass-card">
                  <span>Founder</span>
                  <strong>VoxAi</strong>
                </div>
              </div>

              <div className="about-copy" data-reveal="right">
                <p className="lead">
                  I&apos;m a <strong>BSCS student at UMT</strong> and the founder of{" "}
                  <span className="text-gradient strongish">VoxAi</span> - a Pakistan-based
                  technology agency focused on AI automation, agentic workflows, and
                  intelligent digital systems. I specialize in <strong>AI Agents</strong>,{" "}
                  <strong>n8n automation</strong>, and modern web development that turns
                  manual chaos into intelligent systems.
                </p>
                <p>
                  My mission: become a top AI Engineer and ship products that genuinely move
                  the needle for businesses and people. Strong foundations in C++, OOP, DSA,
                  and database design.
                </p>

                <div className="fact-grid">
                  <div className="fact-card glass-card" data-reveal="up">
                    <span>Location</span>
                    <strong>Lahore, Pakistan</strong>
                  </div>
                  <div className="fact-card glass-card" data-reveal="up" style={{ transitionDelay: "90ms" }}>
                    <span>Company</span>
                    <strong>VoxAi</strong>
                  </div>
                  <div className="fact-card glass-card" data-reveal="up" style={{ transitionDelay: "180ms" }}>
                    <span>Education</span>
                    <strong>BSCS @ UMT - 2024-2028</strong>
                  </div>
                  <div className="fact-card glass-card" data-reveal="up" style={{ transitionDelay: "270ms" }}>
                    <span>Role</span>
                    <strong>Founder &amp; Lead Automation Architect</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-kicker" data-reveal="up">Skills</div>
            <h2 className="section-title center" data-reveal="up">
              The <span className="text-gradient">stack</span> I build with
            </h2>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="glass-card skill-card"
                  data-reveal="up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <h3>
                    <span className="text-gradient">{group.title}</span>
                  </h3>
                  <div className="meter-list">
                    {group.items.map(([label, value]) => (
                      <div key={label} className="meter">
                        <div className="meter-row">
                          <span>{label}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="meter-track">
                          <div className="meter-fill" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-kicker" data-reveal="up">Projects</div>
            <h2 className="section-title center" data-reveal="up">
              Things I&apos;ve <span className="text-gradient">shipped</span>
            </h2>
            <p className="section-subtitle center" data-reveal="up">
              A mix of AI, automation, and engineering work - built end-to-end.
            </p>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article
                  key={project.index}
                  className="glass-card project-card"
                  data-reveal="up"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="project-top">
                    <div className="project-icon" />
                    <span>{project.index}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container narrow">
            <div className="section-kicker" data-reveal="up">Certifications</div>
            <h2 className="section-title center" data-reveal="up">
              Credentials &amp; <span className="text-gradient">milestones</span>
            </h2>

            <div className="cert-grid">
              {certifications.map((item, index) => (
                <article
                  key={item.title}
                  className="glass-card cert-card"
                  data-reveal="up"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="cert-icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <div className="cert-meta">
                      <span className="text-gradient">{item.org}</span>
                      <span>-</span>
                      <span>{item.date}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-wrap">
            <div className="section-kicker" data-reveal="up">Contact</div>
            <h2 className="section-title center" data-reveal="up">
              Let&apos;s build something <span className="text-gradient">intelligent</span>
            </h2>
            <p className="section-subtitle center" data-reveal="up">
              Have a workflow to automate or an AI product to ship? Drop a message.
            </p>

            <div className="contact-grid">
              <div className="contact-cards" data-reveal="left">
                <a className="glass-card contact-card" href="mailto:f2024266822@umt.edu.pk">
                  <span>Email</span>
                  <strong>f2024266822@umt.edu.pk</strong>
                </a>
                <a
                  className="glass-card contact-card"
                  href="https://wa.me/923044782376?text=Hi%20Fahad%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>WhatsApp</span>
                  <strong>+92 304 4782376</strong>
                </a>
                <div className="glass-card contact-card">
                  <span>Based in</span>
                  <strong>Lahore, Pakistan</strong>
                </div>
                <div className="glass-card contact-card">
                  <span>Company</span>
                  <strong>VoxAi</strong>
                </div>
                <div className="glass-card contact-card">
                  <span>Find me online</span>
                  <div className="social-row">
                    <a
                      aria-label="LinkedIn"
                      href="https://linkedin.com/in/muhammad-fahad-275aa5390"
                      rel="noreferrer"
                      target="_blank"
                    >
                      in
                    </a>
                    <a aria-label="GitHub" href="https://github.com" rel="noreferrer" target="_blank">
                      gh
                    </a>
                  </div>
                </div>
              </div>

              <form className="glass-card contact-form" data-reveal="right" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label>
                    <span>Name</span>
                    <input
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      placeholder="John Doe"
                      type="text"
                      value={form.name}
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      placeholder="you@email.com"
                      type="email"
                      value={form.email}
                    />
                  </label>
                </div>
                <label>
                  <span>Subject</span>
                  <input
                    onChange={(event) => setForm({ ...form, subject: event.target.value })}
                    placeholder="Project inquiry"
                    type="text"
                    value={form.subject}
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={form.message}
                  />
                </label>
                <button type="submit">Send Message</button>
                {submitted ? (
                  <p className="submit-note">
                    Demo form captured. Connect this button to EmailJS, Formspree, or a backend
                    endpoint before going live.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand" data-reveal="up">
            <div className="footer-mark">{"</>"}</div>
            <span>FAHAD</span>
            <p>
              Senior Web Developer &amp; AI Automation Specialist crafting intelligent digital
              experiences that drive business growth.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/muhammad-fahad-275aa5390" rel="noreferrer" target="_blank">
                LinkedIn
              </a>
              <a href="https://github.com" rel="noreferrer" target="_blank">
                GitHub
              </a>
              <a href="mailto:f2024266822@umt.edu.pk">Email</a>
            </div>
          </div>

          <div data-reveal="up" style={{ transitionDelay: "120ms" }}>
            <h4>Navigation</h4>
            <div className="footer-links">
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label === "Credentials" ? "Certs" : label}
                </a>
              ))}
            </div>
          </div>

          <div data-reveal="up" style={{ transitionDelay: "240ms" }}>
            <h4>Get in Touch</h4>
            <p>Have a project in mind or want to collaborate? Let&apos;s build something extraordinary together.</p>
            <a className="footer-cta" href="mailto:f2024266822@umt.edu.pk">
              Say Hello
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>Copyright 2026 FAHAD. All rights reserved.</p>
          <a href="https://linkedin.com/in/muhammad-fahad-275aa5390" rel="noreferrer" target="_blank">
            Crafted by Muhammad Fahad
          </a>
          <a href="#home">Back to top</a>
        </div>

        <div className="footer-wordmark">FAHAD</div>
      </footer>
    </div>
  );
}

export default App;
