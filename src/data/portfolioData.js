export const personalInfo = {
  name: "Rajamuri Sai Rithik Reddy",
  shortName: "Rithik Reddy",
  monogram: "RSRR",
  title: "Technologist · Policy Fellow · Venture Architect",
  location: "Hyderabad, Telangana, India",
  coordinates: "17.3850° N, 78.4867° E",
  currentRole: "Cultural Secretary (2025–2026)",
  institution: "Prof. C.R. Rao AIMSCS, University of Hyderabad Campus",
  tagline: "Building at the intersection of technology, institutional ideas, and relentless execution.",
  status: "Available for Strategic Research, High-Impact Engineering & Advisory",
  bio: {
    lead: "Rajamuri Sai Rithik Reddy operates across machine intelligence, public governance, and venture architecture. Based in Hyderabad, his work synthesizes computational data science with institutional statecraft to build foundational digital infrastructure.",
    body: "From the hallowed legislative galleries of the New Parliament of India and the podium of the Constitution Club of India to architecting deep retrieval-augmented intelligence systems for Indian agriculture (Bhoomi) and cloud optimization frameworks under ISRO scientist mentorship, Rithik treats code, governance, and capital as unified levers of national impact.",
    discipline: "Outside algorithmic systems, he practices competitive open-water swimming and archery—disciplines that hone endurance in unyielding currents and precision under acute focus."
  },
  socials: {
    email: "rithikreddy.rajamuri@gmail.com",
    linkedin: "https://www.linkedin.com/in/rajamuri-sai-rithik-reddy-738986259/",
    github: "https://github.com/rithikreddy",
    locationMap: "https://maps.google.com/?q=Hyderabad,Telangana"
  }
};

export const institutionalPolicy = {
  title: "Institutional & Policy Fellowships",
  subtitle: "Statecraft, Legislative Discourse & Governance",
  leadText: "True systemic transformation occurs where frontier engineering meets democratic institutional architecture. Engaging with national policy frameworks at Rishihood University, the New Parliament of India, and the Constitution Club of India.",
  fellowships: [
    {
      id: "pbc-10",
      institution: "Rishihood University",
      program: "Policy BootCamp — 10th Edition Cohort",
      location: "Sonipat, NCR, India",
      period: "2026",
      role: "Selected Policy Fellow",
      description: "Immersive policy accelerator addressing public governance, economic statecraft, regulatory frameworks, and systemic institutional reforms in India. Evaluated real-world legislative proposals and socio-economic governance models.",
      highlights: [
        "Selected for competitive 10th Edition National Cohort",
        "Engaged in direct deliberations with civil servants, policy analysts, and legislators",
        "Conducted strategic policy brief on agricultural supply-chain digitization",
        "Awarded Official Certificate of Completion on stage"
      ],
      image: "/assets/policy/pbc-cohort.jpeg",
      secondaryImage: "/assets/policy/pbc-certificate-stage.jpeg",
      badge: "Policy Fellow 2026"
    },
    {
      id: "parliament-engagement",
      institution: "Parliament of India (Sansad Bhavan)",
      program: "Parliamentary Delegation & Legislative Observation",
      location: "New Delhi, India",
      period: "2026",
      role: "Institutional Delegate",
      description: "Conducted archival and on-site legislative studies within the New Parliament building (Lok Sabha, Rajya Sabha chambers) and the historic Samvidhan Sadan (Constitution Hall). Examined the architectural synthesis of ancient Indian heritage with modern high-capacity legislative infrastructure.",
      highlights: [
        "Studied parliamentary procedure and committee governance in Lok Sabha & Rajya Sabha precincts",
        "Photographic ledger and archival exploration of Samvidhan Sadan colonnades and Raisina Hill",
        "Synthesized principles of institutional longevity and constitutional continuity"
      ],
      image: "/assets/parliament/loksabha-1.jpg",
      secondaryImage: "/assets/parliament/samvidhan-sadan.jpg",
      badge: "Parliamentary Study"
    },
    {
      id: "constitution-club",
      institution: "Constitution Club of India",
      program: "National Policy Summit & Address",
      location: "Rafi Marg, New Delhi",
      period: "2026",
      role: "Keynote / Podium Speaker",
      description: "Delivered a podium address on youth-driven technological integration, sovereign AI infrastructure, and empowering agrarian ecosystems through open data architectures.",
      highlights: [
        "Addressed policy practitioners, youth leaders, and civil society delegates",
        "Advocated for vernacular intelligence interfaces in tier-2 and tier-3 rural economies",
        "Highlighted the role of computational models in sovereign economic resilience"
      ],
      image: "/assets/parliament/constitution-club-podium.jpg",
      secondaryImage: "/assets/parliament/constitution-club-address.jpg",
      badge: "Keynote Address"
    }
  ]
};

export const venturesAndEngineering = [
  {
    id: "bhoomi",
    title: "BHOOMI (Farmer GPT)",
    category: "Agritech AI / Sovereign Enterprise",
    stage: "MCA Incorporated · Antler Pitch Cohort",
    role: "Founder & Lead Architect",
    summary: "A unified AI-powered agricultural intelligence ecosystem providing hyperlocal, agronomic advisory via multilingual voice and RAG architectures over verified ICAR research.",
    metrics: [
      { label: "Architecture", value: "RAG + Specialized LLMs" },
      { label: "Vernacular Voice", value: "Indic Speech Models" },
      { label: "Incorporation", value: "Ministry of Corporate Affairs (MCA)" },
      { label: "Paper", value: "Published Research Abstract" }
    ],
    description: "Bhoomi solves the critical last-mile information divide for 140M+ Indian farmers. Existing LLMs hallucinate agronomic dosage and lack regional dialect nuances. Bhoomi couples dense vector retrieval over verified agricultural university compendiums with voice-in, voice-out multilingual synthesis in regional languages (Telugu, Hindi, and Indian dialects).",
    techStack: ["Python", "FastAPI", "LangChain / LlamaIndex", "ChromaDB / Pinecone", "Whisper ASR", "ElevenLabs / Indic TTS", "React Native"],
    logo: "/assets/bhoomi/bhoomi-logo-circle.png",
    brandImage: "/assets/bhoomi/bhoomi-brand-green.png",
    filingImage: "/assets/bhoomi/bhoomi-mca-filing.png",
    featured: true,
    paperTitle: "Bhoomi: Building a Unified Digital Ecosystem for India's Agricultural Future",
    author: "R. Sai Rithik Reddy"
  },
  {
    id: "isro-cloud",
    title: "Cloud Cost Optimization Framework",
    category: "Distributed Systems & Cloud Infrastructure",
    stage: "Research & Systems Engineering",
    role: "Lead Systems Engineer (Mentored by Senior ISRO Scientist)",
    summary: "Algorithmic resource allocation and predictive autoscaling system designed under the direct mentorship of a Senior Space Scientist from ISRO.",
    metrics: [
      { label: "Spend Reduction", value: "35–45% Idle Trim" },
      { label: "Heuristics", value: "Predictive Workload Modeling" },
      { label: "Mentorship", value: "Senior ISRO Scientist" },
      { label: "Stack", value: "AWS / Kubernetes / Python" }
    ],
    description: "Developed an autonomous cloud cost governance architecture that analyzes telemetry data, spots zombie compute instances, and predicts traffic spikes. Replaces static threshold autoscaling with predictive statistical modeling, drastically cutting cloud expenditure without violating SLA latency bounds.",
    techStack: ["AWS CloudWatch", "Python", "Prometheus", "Kubernetes", "Time-Series Forecasting", "Terraform"],
    featured: true
  },
  {
    id: "sentinel-voice",
    title: "Sentinel Voice — Deepfake Audio Detector",
    category: "Machine Learning & Acoustic Forensics",
    stage: "2nd Place Winner · National Hackathon",
    role: "Machine Learning Architect",
    summary: "Neural acoustic classification framework detecting synthetic voice cloning and deepfake speech manipulation in real-time.",
    metrics: [
      { label: "Accolade", value: "2nd Place Nationally" },
      { label: "Accuracy", value: "94.2% Zero-Shot" },
      { label: "Latency", value: "< 250ms Inference" },
      { label: "Analysis", value: "Multi-Band Spectrograms" }
    ],
    description: "Built to counter malicious voice phishing and executive identity impersonation. The pipeline transforms raw waveform audio into mel-spectrograms and bispectral representations, feeding a residual neural network that captures vocoder-generated micro-artifacts imperceptible to the human ear.",
    techStack: ["PyTorch", "Librosa", "ResNet-Audio", "ONNX Runtime", "FastAPI", "Web Audio API"],
    featured: true
  },
  {
    id: "asr-convention",
    title: "ASR Convention & Resort Systems",
    category: "Enterprise ERP & Venue Infrastructure",
    stage: "Production Deployment",
    role: "Full-Stack System Architect",
    summary: "Integrated management system handling large-scale venue reservations, banquet logistics, multi-tier staff coordination, and revenue analytics.",
    metrics: [
      { label: "Operations", value: "Multi-Acre Facility" },
      { label: "Bookings", value: "Zero-Conflict Realtime" },
      { label: "Reporting", value: "Automated Ledger & Tax" },
      { label: "Uptime", value: "99.9% Production" }
    ],
    description: "Architected a custom high-reliability ERP tailored for luxury convention centres and destination resort complexes. Features role-based access control, automated dynamic pricing schedules, contract generation, and multi-department task dispatch.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis", "Docker"],
    featured: false
  },
  {
    id: "rithsaa",
    title: "RITHSAA",
    category: "Luxury Event Management & Brand Advisory",
    stage: "Founder & Managing Director",
    role: "Founder",
    summary: "Bespoke executive event production, institutional summit management, and strategic brand choreography for high-net-worth gatherings and institutional galas.",
    metrics: [
      { label: "Focus", value: "Curated Experiences" },
      { label: "Scale", value: "High-Caliber Summits" },
      { label: "Services", value: "End-to-End Orchestration" }
    ],
    description: "RITHSAA brings structural precision and architectural elegance to executive events, cultural festivals, and brand experiences, bridging luxury aesthetic curation with military-grade operational logistics.",
    techStack: ["Executive Production", "Vendor Operations", "Spatial Architecture", "VIP Protocol"],
    featured: false
  }
];

export const executiveLeadership = [
  {
    id: "cultural-sec",
    role: "Cultural Secretary (2025–2026)",
    organization: "Prof. C.R. Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)",
    affiliation: "University of Hyderabad Campus",
    period: "2025 — 2026",
    summary: "Elected institutional executive steering the comprehensive cultural, academic, and summit portfolio of the institute.",
    responsibilities: [
      "Stewarding an institutional budget of ₹5–6 Lakhs across major annual summits, inter-collegiate festivals, and technical symposiums.",
      "Governing operational, logistics, and hospitality workflows for a 1,000+ student body and visiting academic dignitaries.",
      "Leading 30+ member cross-functional organizing councils with rigorous fiscal accountability, vendor negotiations, and protocol enforcement.",
      "Pioneering streamlined sponsorship acquisition models and digital attendee verification pipelines."
    ],
    impactNumbers: [
      { metric: "₹5–6 Lakhs", label: "Budget Stewarded" },
      { metric: "1,000+", label: "Students Governed" },
      { metric: "30+", label: "Council Members" },
      { metric: "100%", label: "Audit Compliance" }
    ]
  },
  {
    id: "ppei",
    role: "Initiator & Founding Lead",
    organization: "People's Platform for Educational Innovation (PPEI)",
    period: "2024 — Present",
    summary: "Grassroots youth policy think-tank and collaborative forum committed to modernizing STEM pedagogy and public educational accessibility.",
    responsibilities: [
      "Conceived and founded PPEI as an autonomous intellectual incubator for students and young policy thinkers.",
      "Authored student-centric policy position papers on integrating practical machine intelligence curricula into undergraduate studies.",
      "Organized multi-college roundtables examining educational equity, digital literacy gaps, and vocational skill pipelines.",
      "Mentored inter-disciplinary student cohorts in open-source contribution and civic technology."
    ],
    impactNumbers: [
      { metric: "Founding", label: "Pioneer & Lead" },
      { metric: "12+", label: "Symposia Hosted" },
      { metric: "500+", label: "Youth Engaged" }
    ]
  }
];

export const athleticDiscipline = {
  title: "The Crucible of Discipline",
  subtitle: "Open-Water Swimming & Competitive Archery",
  manifesto: "High-stakes executive decision-making and deep algorithmic focus require an unshakeable physiological and mental baseline. Rithik approaches competitive athletics not as pastimes, but as rigorous calibrations of the human instrument.",
  disciplines: [
    {
      sport: "Open-Water Swimming",
      metaphor: "Stamina & Calm in Turbulent Waters",
      description: "Unlike static pool lanes, open water demands continuous sensory calibration against currents, temperature fluctuations, and boundless depth. It trains unyielding cardiovascular grit and the emotional equanimity to sustain momentum when immediate visibility is zero.",
      attributes: ["Endurance Under Pressure", "Directional Awareness", "Mental Self-Regulation"]
    },
    {
      sport: "Competitive Archery",
      metaphor: "Singular Target Precision",
      description: "Archery is the art of extreme stillness. The archer must arrest heart rate, read subtle cross-winds, align skeletal geometry, and execute clean release without anticipation. A discipline where perfection is measured in millimeters at extreme distance.",
      attributes: ["Laser Focus", "Biomechanical Control", "Zero-Variance Execution"]
    }
  ]
};

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering (Data Science)",
  institution: "Prof. C.R. Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)",
  campus: "University of Hyderabad Campus, Gachibowli, Hyderabad",
  focusAreas: [
    "Machine Learning & Statistical Data Modeling",
    "Deep Neural Architectures & Retrieval Systems",
    "Distributed Cloud Systems & Database Internals",
    "Algorithmic Complexity & Discrete Mathematics"
  ]
};

export const technicalMatrix = [
  {
    domain: "Machine Intelligence & NLP",
    skills: ["Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "Vector Databases (Pinecone, ChromaDB)", "PyTorch", "Audio Spectrogram Forensics", "Whisper Speech ASR", "LangChain"]
  },
  {
    domain: "Cloud & Distributed Architecture",
    skills: ["AWS (EC2, Lambda, S3, CloudWatch)", "Kubernetes", "Docker", "Predictive Cloud Optimization", "FastAPI", "Node.js / Express", "PostgreSQL", "Redis"]
  },
  {
    domain: "Policy, Strategy & Governance",
    skills: ["Public Policy Analysis (Rishihood PBC Fellow)", "Legislative Studies (Parliament of India)", "Institutional Budget Governance (₹5–6L)", "MCA Corporate Filings", "Venture Incubation", "Cross-Functional Leadership"]
  }
];
