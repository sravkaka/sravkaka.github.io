// All resume content lives here. Edit this file to update the site — no other changes needed.
// Skill levels: 1 = Beginner, 2 = Elementary, 3 = Intermediate, 4 = Advanced.
window.RESUME = {
  name: "Sravanthi Kakarla",
  headline: "Senior Product Manager at Microsoft",
  location: "Hyderabad, Telangana, India",
  tagline: "Making complex systems work better for people.",

  about: {
    title: "From tax tables to product roadmaps",
    paragraphs: [
      "My career has been a journey of making complex systems work better for people. I started in financial services at Deloitte, managing expatriate tax and compensation for global organizations — learning to break down complexity, leverage data, and drive alignment across stakeholders.",
      "I then moved into product management, where I found the perfect intersection of strategy, technology, and human-centered problem solving. At athenahealth I built products that improved operational efficiency for healthcare teams. On the Microsoft Store team I've worked on catalog quality, merchandising, recommendations, and personalization.",
      "The common thread: understanding people, simplifying complexity, and turning insights into products that deliver value."
    ],
    // Career split shown as a visual next to "About me". Dates are "YYYY-MM"; use "present" for the current role.
    industries: [
      { name: "Financial services", org: "Deloitte", from: "2013-12", to: "2018-03", color: "#86bc25" },
      { name: "MBA", org: "Indian School of Business", from: "2018-04", to: "2019-05", color: "#ff7a59", study: true },
      { name: "Healthcare tech", org: "athenahealth", from: "2019-06", to: "2021-07", color: "#7a4fb3" },
      { name: "Consumer tech & platforms", org: "Microsoft", from: "2021-07", to: "present", color: "#0067c0" }
    ]
  },

  skills: [
    { name: "Product Strategy & Roadmapping", level: 4 },
    { name: "Experimentation & A/B Testing", level: 4 },
    { name: "Customer Journey Mapping", level: 4 },
    { name: "Strategic Thinking", level: 4 },
    { name: "Recommendations & Personalization", level: 4 },
    { name: "Stakeholder Alignment", level: 4 },
    { name: "Business Intelligence Tools", level: 4 },
    { name: "Privacy & Compliance", level: 3 },
    { name: "Lean Six Sigma", level: 3 }
  ],

  // Listed in chronological order (left → right as you scroll).
  journey: [
    {
      type: "job",
      company: "Sujana Metal Products",
      role: "Summer Intern",
      dates: "Jun 2012",
      color: "#8a94a6",
      height: 0.42,
      bullets: [
        "Rotational program across HR, Marketing, Management and Enabling functions.",
        "Recommended lean-methodology actions to the CEO office."
      ]
    },
    {
      type: "job",
      company: "Deloitte",
      role: "Senior Tax Consultant",
      dates: "Dec 2013 – Mar 2018",
      color: "#86bc25",
      height: 0.62,
      bullets: [
        "Managed expatriate tax and compensation for global organizations.",
        "Led a 5-member team covering 2,800+ assignees in 50+ countries.",
        "Standardized global processes to hit quality and timeline targets.",
        "Launched a monthly client survey that drove service improvements.",
        "Trained 10+ new hires on Excel and Global Advantage."
      ],
      tags: ["Team leadership", "Process design", "Client success"]
    },
    {
      type: "milestone",
      title: "MBA · Indian School of Business",
      dates: "2018 – 2019",
      note: "Strategy Management & Marketing — the pivot into product."
    },
    {
      type: "job",
      company: "athenahealth",
      role: "Product Manager",
      dates: "Jun 2019 – Jul 2021",
      color: "#7a4fb3",
      height: 0.6,
      bullets: [
        "Led 0→1 development of Atlas, a role-based task management tool helping claim-readiness teams meet client SLAs.",
        "Owned roadmap, release planning and backlog for Rules 2.0 (athenaCollector RCM)."
      ],
      tags: ["0→1", "Healthcare", "Roadmapping"]
    },
    {
      type: "job",
      company: "Microsoft",
      role: "Product Manager 2",
      dates: "Jul 2021 – Aug 2024",
      color: "#3b8ee0",
      height: 0.7,
      summary: "Product lead for Microsoft Store discovery.",
      bullets: [
        "Quality: fixed search-quality issues like spam and low-quality apps ranking prominently.",
        "Smart merchandising: algorithm-driven collections and experimentation across Store browse.",
        "Platform migration: moved collections off a retiring recommendation service.",
        "Personalization: experiments across collections, deals, bundles and add-ons, with privacy and compliance built in."
      ],
      tags: ["Discovery", "Experimentation", "Personalization"]
    },
    {
      type: "job",
      company: "Microsoft",
      role: "Senior Product Manager",
      dates: "Sep 2024 – Present",
      color: "#0067c0",
      height: 0.82,
      summary: "Building the next generation of how developers publish to the Microsoft Store.",
      bullets: [
        "Agentic publishing: driving the strategy for a unified Store API and a governed MCP server so developers can publish and manage apps directly from AI agents, CLI, CI/CD and IDEs.",
        "Games: led the Xbox GDK publishing program for independent studios, from spec to a private preview reaching 30+ studios."
      ],
      tags: ["Developer platform", "AI agents & MCP", "Games"]
    }
  ],

  education: [
    { school: "Indian School of Business", degree: "MBA, Strategy Management & Marketing", dates: "2018 – 2019" },
    { school: "Vellore Institute of Technology", degree: "Bachelor's, Business Administration & Management", dates: "2010 – 2013" },
    { school: "Chinmaya International Residential School", degree: "Intermediate Education, Commerce", dates: "2008 – 2010" },
    { school: "Parkwood School International", degree: "Higher Secondary Education", dates: "2006 – 2008" }
  ],

  certifications: ["HUL Marketing in Practice (MiP)", "Lean Six Sigma Green Belt"],
  // Grouped by organization; shown in the "Honors & awards" scene.
  honors: [
    {
      org: "Microsoft",
      color: "#0067c0",
      items: [
        { title: "WXP Greatness Award", date: "CY25 Q3", text: "Drove compliance and privacy sign-off, helping raise developer onboarding success from 60% to 90%." },
        { title: "Star Award, Growth Mindset", date: "FY25 H2", text: "Built personalized, automated merchandising for Microsoft Store, improving relevance and cutting manual work." },
        { title: "Star Award, Growth Mindset", date: "Aug 2025", text: "Led cross-org alignment with Xbox to bring unmanaged game developers onto Microsoft Store." }
      ]
    },
    {
      org: "athenahealth",
      color: "#7a4fb3",
      items: [
        { title: "Grace Hopper Celebration 2019", text: "Selected by senior management to represent athenahealth at the Grace Hopper Celebration 2019." }
      ]
    },
    {
      org: "Deloitte",
      color: "#86bc25",
      items: [
        { title: "Applause & Spot Awards", text: "Multiple Quarterly Applause Awards and Spot Awards for exceptional performance." }
      ]
    },
    {
      org: "Academic",
      color: "#20a39e",
      items: [
        { title: "Dean's List", text: "VIT University." }
      ]
    }
  ],
  languages: [
    { name: "Telugu", level: "Native" },
    { name: "English", level: "Full professional" },
    { name: "Hindi", level: "Professional working" }
  ],

  contact: {
    email: "sravanthi.seraph@gmail.com",
    linkedin: "https://www.linkedin.com/in/sravanthikakarla/",
    topmate: "https://topmate.io/sravanthi_kakarla"
  }
};
