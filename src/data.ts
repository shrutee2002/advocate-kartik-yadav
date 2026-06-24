import { PracticeArea, CaseStudy, Testimonial, ProcessStep, LegalInsight } from "./types";

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    description: "Strategic advisory on mergers, acquisitions, regulatory compliance, corporate governance, and contract negotiations.",
    longDescription: "Navigating the complex landscape of corporate regulations requires foresight and strategic precision. Advocate Kartik Yadav provides counsel for joint ventures, private equity investments, shareholder agreements, and cross-border transactions, ensuring seamless compliance and liability protection.",
    iconName: "Briefcase",
    gradient: "from-espresso/10 to-camel/20"
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    description: "High-stakes representation in civil disputes, contractual breaches, tort claims, and appeals across multiple judicial levels.",
    longDescription: "Our civil litigation practice is built on aggressive advocacy and meticulous preparation. We represent corporations and high-net-worth individuals in breach of contract suits, recovery proceedings, partnership dissolution, and administrative law matters, always aiming for optimal settlements or decisive verdicts.",
    iconName: "Scale",
    gradient: "from-camel/15 to-cocoa/20"
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    description: "White-collar defense, criminal trial advocacy, bail applications, and protection of constitutional rights under Indian penal law.",
    longDescription: "With deep respect for the rule of law and due process, we mount robust defense strategies for clients facing criminal charges. Specializing in financial crimes, corporate fraud, corruption defense, cybercrimes, and trial advocacy, Kartik Yadav ensures your constitutional protections are zealously guarded.",
    iconName: "Shield",
    gradient: "from-espresso/20 to-cocoa/15"
  },
  {
    id: "property-law",
    title: "Property & Real Estate Law",
    description: "Comprehensive due diligence, title verification, property dispute resolution, and legal structuring of real estate assets.",
    longDescription: "Real estate represents substantial capital. We conduct exhaustive historical title reviews, draft high-value purchase and lease deeds, represent clients in RERA compliance disputes, and litigate complex partition and possession suits to safeguard your land and property investments.",
    iconName: "Home",
    gradient: "from-camel/10 to-khaki/20"
  },
  {
    id: "family-law",
    title: "Family Law",
    description: "Sincere and confidential counsel on matrimonial disputes, divorce, custody, inheritance planning, and division of familial wealth.",
    longDescription: "In times of domestic transition, we offer empathetic yet strategically decisive counsel. Our practice handles mutual and contested divorces, maintenance claims, child custody, domestic abuse protections, and the drafting of complex family settlement agreements and trust deeds.",
    iconName: "HeartHandshake",
    gradient: "from-cocoa/10 to-camel/15"
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    description: "Securing and protecting patents, trademarks, copyrights, trade secrets, and prosecuting infringement claims in digital age.",
    longDescription: "Intellectual property is often a business's most valuable asset. We guide creators, inventors, and tech firms through the registration of trademarks and copyrights, negotiate licensing agreements, and litigate intellectual property theft, passing-off actions, and copyright piracy.",
    iconName: "Award",
    gradient: "from-camel/20 to-khaki/10"
  },
  {
    id: "consumer-protection",
    title: "Consumer Protection",
    description: "Advocating for consumer rights, defending against unfair trade practices, and securing damages in state and national commissions.",
    longDescription: "We represent consumers and corporate defendants in high-value product liability claims, insurance disputes, banking negligence, and medical malpractice, arguing forcefully before the State and National Consumer Disputes Redressal Commissions (NCDRC).",
    iconName: "FileCheck",
    gradient: "from-espresso/15 to-khaki/15"
  },
  {
    id: "legal-documentation",
    title: "Legal Documentation",
    description: "Drafting immaculate contracts, power of attorney, legal notices, wills, covenants, and highly customized corporate charters.",
    longDescription: "A bulletproof document is the best insurance against future litigation. We meticulously draft, review, and vet power of attorneys, joint venture covenants, employment contracts, non-disclosure agreements, legal notices, and personalized testaments (Wills) tailored to preserve wealth.",
    iconName: "FileText",
    gradient: "from-cocoa/15 to-khaki/20"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "The Heritage Estate Restructuring",
    category: "Property & Inheritance Law",
    challenge: "A multi-generational family estate worth ₹450 Million was locked in a bitter partition dispute involving 12 heirs, multiple overlapping claims, and outdated wills.",
    strategy: "Advocate Kartik Yadav executed a forensic title investigation, conducted structured mediation sessions to align the core interests of key heirs, and drafted an airtight, comprehensive Family Settlement Agreement.",
    outcome: "Successfully resolved outside of court within 8 months. All heirs signed the agreement, avoiding years of costly, public litigation while preserving family relationships and securing tax-efficient wealth distribution.",
    clientName: "Mr. Rajinder K. Malhotra",
    feedback: "Kartik's strategic clarity and calm authority turned a toxic family feud into a dignified, win-win settlement. His legal mastery is paired with unparalleled emotional intelligence."
  },
  {
    id: "case-2",
    title: "Acquittal in Cross-Border Fraud Allegation",
    category: "White-Collar Criminal Defense",
    challenge: "A fintech executive was falsely implicated in a complex cross-border financial siphon scheme amounting to ₹120 Million, facing prospective freezing of all personal assets and immediate arrest.",
    strategy: "Kartik instituted an immediate writ petition for transit bail and protection against coercive actions. He systematically analyzed technical digital ledger logs to prove that the client's signature and API keys were maliciously spoofed by third-party actors.",
    outcome: "The High Court granted permanent anticipatory bail, and subsequent forensic findings led to the trial court dismissing all charges against our client, fully exonerating his name and restoring his active assets.",
    clientName: "Ananya Sen, CEO",
    feedback: "When the state machinery was turned against me, Kartik Yadav was an immovable wall. His technical understanding of modern digital transaction systems and forensic defense is world-class."
  },
  {
    id: "case-3",
    title: "Advising a Strategic FinTech Joint Venture",
    category: "Corporate & M&A Advisory",
    challenge: "A European payments giant sought a strategic partnership with a leading Indian neo-bank, encountering strict and evolving RBI compliance mandates, equity caps, and heavy data localization requirements.",
    strategy: "Advocate Yadav structured an innovative licensing and revenue-share model that fully complied with local Indian regulations without diluting the European entity's global proprietary IP. He negotiated and finalized the dynamic joint venture agreement.",
    outcome: "The transaction closed successfully within 120 days. The joint venture received all necessary regulatory nods from the Reserve Bank of India and Ministry of Corporate Affairs, marking a landmark partnership in South Asian neo-banking.",
    clientName: "Director of Global Expansion, ValoPay",
    feedback: "Kartik doesn't just list what the law forbids—he designs elegant, fully compliant pathways to achieve what our business goals demand. A truly premium legal architect."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    clientName: "Vikramaditya Oberoi",
    role: "Managing Director, Oberoi Estates & Infra",
    review: "Advocate Kartik Yadav operates at a level of intellectual refinement and strategic brilliance that is rarely seen. He represents our corporate and personal real estate interests with unmatched diligence. He is our trusted advisor in every high-stakes negotiation.",
    rating: 5,
    location: "New Delhi",
    avatarSeed: "vikram"
  },
  {
    id: "t-2",
    clientName: "Dr. Sunita Deshmukh",
    role: "Founder, Deshmukh Healthcare Group",
    review: "I was highly impressed by Kartik's poise, ethical grounding, and courtroom eloquence during a highly sensitive regulatory inquiry. He did not just protect our clinical assets—he preserved our reputation. Highly recommended for premium advisory.",
    rating: 5,
    location: "Mumbai",
    avatarSeed: "sunita"
  },
  {
    id: "t-3",
    clientName: "Rohan Vasudev",
    role: "Angel Investor & Tech Entrepreneur",
    review: "As an early-stage investor, clean documentation and sound regulatory structuring are paramount. Kartik drafted our complex seed-round covenants with surgical precision. His understanding of tech law, escrow, and founder vesting is top-tier.",
    rating: 5,
    location: "Bengaluru",
    avatarSeed: "rohan"
  },
  {
    id: "t-4",
    clientName: "Lord Charles Sterling",
    role: "Trustee, Sterling Global Charities",
    review: "We retained Kartik Yadav for an intricate cross-jurisdictional non-profit trust formation in India. His command over Indian foreign contribution rules (FCRA) and trust laws is absolute. His professionalism throughout was exemplary.",
    rating: 5,
    location: "London, UK",
    avatarSeed: "charles"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "A private, high-level briefing to discuss your objectives, legal variables, and prospective outcomes under absolute client-attorney confidentiality."
  },
  {
    number: 2,
    title: "Case Evaluation",
    description: "Exhaustive legal auditing, precedent searches, and risk-benefit matrix calculations. We leave no regulatory stone unturned to map out every leverage point."
  },
  {
    number: 3,
    title: "Legal Strategy Formulation",
    description: "Designing a tailored legal blueprint. We conceptualize multi-pronged strategies—combining proactive litigation, tactical mediation, or structural documentation."
  },
  {
    number: 4,
    title: "Decisive Representation",
    description: "Executing the strategy with fierce elegance. Be it elite verbal advocacy in courtroom corridors or meticulous, unyielding contract redlines at the boardroom table."
  },
  {
    number: 5,
    title: "Strategic Resolution",
    description: "Securing the optimal legal and business outcome. We handle post-verdict compliance, final transitions, and long-term asset/reputation safeguarding."
  }
];

export const LEGAL_INSIGHTS: LegalInsight[] = [
  {
    id: "insight-1",
    title: "Understanding Property Due Diligence in India",
    category: "Real Estate & Property Law",
    date: "June 15, 2026",
    readTime: "6 min read",
    excerpt: "Acquiring premium real estate in tier-one Indian metros demands exhaustive title audits. Learn the critical parameters to prevent litigation risks.",
    content: "When purchasing commercial or premium residential real estate, a simple search at the Sub-Registrar's office is insufficient. Buyers must conduct a historical search of the property title going back at least 30 years to verify the flow of ownership. This process involves verifying mutations in municipal records, ensuring the property is free of undisclosed mortgages or bank liens, checking compliance with environmental and local municipal zoning laws, and confirming RERA registrations. Advocate Yadav explores the seven fatal oversights high-value real estate buyers make in India and how a forensic title review protects generational wealth.",
    imageUrl: "https://picsum.photos/seed/legalproperty/600/400"
  },
  {
    id: "insight-2",
    title: "Know Your Rights: Legal Protections During Arrest",
    category: "Criminal Jurisprudence",
    date: "May 28, 2026",
    readTime: "5 min read",
    excerpt: "The Indian Constitution guarantees powerful fundamental safeguards during police custody. Every citizen must understand their rights.",
    content: "Under Article 22 of the Constitution of India and Section 50 of the Code of Criminal Procedure (CrPC), every citizen has the fundamental right to be informed of the grounds of their arrest and to consult a legal practitioner of their choice immediately. Furthermore, Section 57 mandates that an arrested individual must be produced before a Magistrate within 24 hours. The right to remain silent—safeguarded under the right against self-incrimination—protects you from coerced confessions, which are legally inadmissible. Kartik Yadav breaks down the procedural shields available to individuals facing surprise summons or custody.",
    imageUrl: "https://picsum.photos/seed/legalrights/600/400"
  },
  {
    id: "insight-3",
    title: "The Founders' Guide to Corporate Compliance & Capital Structure",
    category: "Corporate & Tech Advisory",
    date: "April 10, 2026",
    readTime: "8 min read",
    excerpt: "Avoid early corporate structural mistakes. Structuring correct shareholder classes, vesting schedules, and compliant filings is crucial before scaling.",
    content: "A successful startup is built on a sound corporate foundation. Many fast-growing companies face operational deadlocks or regulatory penalties due to poorly structured articles of association, failure to file annual returns with the MCA, or non-compliant director appointments. Establishing early shareholder agreements (SHA) with clear founder vesting terms, Drag-Along and Tag-Along rights, and IP transfer covenants is vital. Kartik Yadav provides an executive blueprint on how early corporate governance shields founders from hostile takeovers and simplifies future venture capital injection.",
    imageUrl: "https://picsum.photos/seed/legalcorporate/600/400"
  },
  {
    id: "insight-4",
    title: "Sovereign Wealth & Matrimonial Settlements: Preserving Legacies",
    category: "Family Law & Wealth Management",
    date: "March 18, 2026",
    readTime: "7 min read",
    excerpt: "Navigating family disputes requires discretion. Learn how high-asset divorces and family wealth partitions are settled with confidentiality.",
    content: "High-net-worth matrimonial disputes involve far more than personal emotions—they involve the complex valuation of equity, intellectual property, multi-city real estate, and legacy family trusts. Resolving these disputes requires a deep understanding of corporate accounting and trust laws, combined with a discreet, out-of-court dispute resolution approach. Kartik Yadav discusses how high-net-worth divorces are negotiated using confidential family settlement agreements and mutual-consent terms to preserve assets and safeguard the future of children, without spilling sensitive details into public registers.",
    imageUrl: "https://picsum.photos/seed/legalfamily/600/400"
  }
];
