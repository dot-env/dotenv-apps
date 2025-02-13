import { Metadata } from "next";

export const contacts = {
    email: "team@dotenv.co.za",
    phone: "+27 68 172 1606",
    address: "Johannesburg, South Africa",
};

const NewTwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#000000"}
        fill={"none"}
        {...props}
    >
        <path
            d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#000000"}
        fill={"none"}
        {...props}
    >
        <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path
            d="M17.5078 6.5L17.4988 6.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Linkedin02Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#000000"}
        fill={"none"}
        {...props}
    >
        <path
            d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path
            d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path
            d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);

const Facebook02Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#000000"}
        fill={"none"}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);

export const socials = [
    {
        url: "https://twitter.com/dotenv_co_za",
        icon: NewTwitterIcon,
    },
    {
        url: "https://www.linkedin.com/company/dotenv-co-za",
        icon: Linkedin02Icon,
    },
    {
        url: "https://www.facebook.com/dotenv.co.za",
        icon: Facebook02Icon,
    },
    {
        url: "https://www.instagram.com/dotenv.co.za",
        icon: InstagramIcon,
    },
];

export const links = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "About",
        url: "/about",
    },
    {
        text: "Our Work",
        url: "/our-work",
    },
    {
        text: "Services",
        url: "/services",
    },
    {
        text: "Blog",
        url: "/blog",
    },

    {
        text: "Contact",
        url: "/contact",
    },
];

export const generateTitle = (title: string) => `${title} - Dotenv | Software Development`;

export const meta: Metadata = {
    title: "Home - Dotenv | Software Development",
    description:
        "Dotenv is a software development company that specializes in web and mobile applications.",
    robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    authors: { name: "Axole Maranjana", url: "https://www.dotenv.co.za" },
    classification: "Software Development",
    keywords: [
        "Software Development",
        "Web Development",
        "Mobile Development",
        "Software Engineering",
        "Software Design",
    ],
    openGraph: {
        countryName: "South Africa",
        authors: ["Axole Maranjana"],
        emails: contacts.email,
        locale: "en_ZA",
        siteName: "Dotenv",
        title: "Home - Dotenv | Software Development",
        url: "https://www.dotenv.co.za",
    },
    category: "Software Development",
    publisher: "Dotenv",
    referrer: "no-referrer-when-downgrade",
    creator: "Axole Maranjana",
    manifest: "/site.webmanifest",
    other: {
        "canonical": "https://.dotenv.co.za",
    },
};

export const projects = [
    {
        name: "PipAlert",
        description: "A stock market trading platform.",
        url: "https://pipalert.co.za",
        image: "https://pipalert.co.za/logo.svg",
        status: "Live",
        industry: "Finance",
    },
    {
        name: "Local Lifestyle",
        description: "A local business directory.",
        status: "Live",
        industry: "Finance",
        url: "https://locallifestyle.co.za",
        image:
            "https://www.locallifestyle.co.za/_next/image?url=%2Flogo.png&w=256&q=75",
    },
];

export const skills = [
    {
        "category": "Core Technical Expertise",
        "skills": [
            {
                "name": "Cloud Architecture",
                "description":
                    "Designing scalable, cost-optimized systems on AWS/Azure/GCP with Kubernetes, Docker, and IaC (Terraform).",
                "tagline": "No more vendor lock-in or surprise bills.",
            },
            {
                "name": "Frontend Engineering",
                "description":
                    "Building pixel-perfect React, Angular, or Vue.js apps with 60% faster load times via code-splitting and edge caching.",
                "tagline": "Websites that convert, not just look pretty.",
            },
            {
                "name": "Mobile Development",
                "description":
                    "Cross-platform (React Native) or native (Swift/Kotlin) apps with offline-first capabilities and App Store compliance.",
                "tagline": "Launch in half the time, double the impact.",
            },
            {
                "name": "DevSecOps",
                "description":
                    "CI/CD pipelines with embedded security checks (SAST/DAST) and GitOps workflows for zero-downtime deployments.",
                "tagline": "Ship fearlessly, even in regulated industries.",
            },
        ],
    },
    {
        "category": "Strategic Methodologies",
        "skills": [
            {
                "name": "Microservices & Event-Driven Design",
                "description":
                    "Breaking monoliths into resilient, independently deployable services using Kafka/RabbitMQ.",
                "tagline": "Scale individual features, not entire systems.",
            },
            {
                "name": "Legacy Modernization",
                "description":
                    "Rewriting COBOL/Java EE systems into cloud-native Node.js/Python stacks with phased rollouts.",
                "tagline": "Make technical debt history.",
            },
            {
                "name": "AI/ML Integration",
                "description":
                    "Embedding LLMs (GPT-4, Claude) and predictive analytics into workflows without infrastructure bloat.",
                "tagline": "Turn data into decisions, not just dashboards.",
            },
            {
                "name": "Compliance Engineering",
                "description":
                    "GDPR/HIPAA/SOC2-ready architectures with automated audit trails and role-based access.",
                "tagline": "Sleep well knowing you’re lawsuit-proof.",
            },
        ],
    },
    {
        "category": "Performance & Optimization",
        "skills": [
            {
                "name": "Database Tuning",
                "description":
                    "100x query speed boosts via PostgreSQL indexing, Redis caching, and MongoDB sharding strategies.",
                "tagline": "Your data shouldn’t be your bottleneck.",
            },
            {
                "name": "Web3 & Blockchain",
                "description":
                    "Smart contract development (Solidity), tokenomics design, and private Hyperledger solutions.",
                "tagline": "Innovate without crypto volatility exposure.",
            },
            {
                "name": "Serverless Architectures",
                "description":
                    "Cost-efficient AWS Lambda/Firebase setups with cold-start mitigation and auto-scaling.",
                "tagline": "Pay per millisecond, not per month.",
            },
        ],
    },
    {
        "category": "Client-Centric Practices",
        "skills": [
            {
                "name": "Agile Leadership",
                "description":
                    "Biweekly sprints with Jira/Linear transparency and client-prioritized backlogs.",
                "tagline": "No black boxes. Ever.",
            },
            {
                "name": "UX-Driven Development",
                "description":
                    "A/B tested interfaces using Figma prototypes and Hotjar heatmaps.",
                "tagline": "Designs proven to boost signups by 40%+.",
            },
            {
                "name": "Disaster Recovery",
                "description":
                    "Multi-region backups, chaos engineering, and 5-minute RTO guarantees.",
                "tagline": "Your insurance policy against downtime.",
            },
            {
                "name": "Tech Stack Audits",
                "description":
                    "90-day action plans to eliminate bloated dependencies and security vulnerabilities.",
                "tagline": "Cut costs, not capabilities.",
            },
        ],
    },
    {
        "category": "Industry Specializations",
        "skills": [
            {
                "name": "FinTech",
                "description":
                    "Real-time transaction systems, fraud detection algorithms.",
                "tagline": "Secure, scalable financial solutions.",
            },
            {
                "name": "HealthTech",
                "description":
                    "FHIR/HL7 compliance, wearable device integrations.",
                "tagline": "Innovating healthcare with tech.",
            },
            {
                "name": "E-Commerce",
                "description":
                    "Headless Shopify/Medusa setups, checkout flow optimization.",
                "tagline": "Boost conversions, reduce cart abandonment.",
            },
            {
                "name": "SaaS",
                "description":
                    "Multi-tenant architectures, usage-based billing engines.",
                "tagline": "Scale your software, not your headaches.",
            },
        ],
    },
];

export const services = [
    {
        name: "Enterprise Web Development",
        shortDescription: "Transform ideas into high-performance web platforms",
        description:
            "Crafting cloud-native web solutions that handle millions of users while maintaining blazing speed. From React-powered PWAs to Node.js microservices, we build digital engines for growth.",
        url: "/services/enterprise-web-development",
    },
    {
        name: "Mobile-First Innovation",
        shortDescription: "Native apps that users love & investors notice",
        description:
            "Build App Store-ready iOS/Android experiences with Flutter or native stacks. Featuring AI-driven analytics, offline capabilities, and seamless API integration - mobile success, engineered.",
        url: "/services/premium-mobile-development",
    },
    {
        name: "Conversion-Centered UI/UX",
        shortDescription: "Design that drives engagement & revenue",
        description:
            "User journeys scientifically optimized to boost retention by 60%+. Our data-backed designs combine behavioral psychology with stunning aesthetics for interfaces that perform.",
        url: "/services/ui-ux-design-conversion",
    },
    {
        name: "Technical Leadership as Service",
        shortDescription: "Your outsourced CTO team",
        description:
            "Get Fortune 500-grade architecture guidance without the overhead. We blueprint scalable systems, lead DevOps transformations, and de-risk your tech roadmap.",
        url: "/services/cto-consulting",
    },
    {
        name: "Future-Proof Architecture",
        shortDescription: "Systems that scale at startup speed",
        description:
            "Design serverless ecosystems, event-driven architectures, and fault-tolerant distributed systems. Sleep well knowing your foundation handles 10x growth overnight.",
        url: "/services/scalable-software-architecture",
    },
    {
        name: "Bulletproof Quality Assurance",
        shortDescription: "Ship with zero-critical-issues confidence",
        description:
            "Our military-grade testing combines penetration testing, load simulation, and mutation testing to eliminate risks before they reach production.",
        url: "/services/enterprise-software-testing",
    },

    {
        name: "DevOps & Cloud Engineering",
        shortDescription: "Automate your deployment pipeline",
        description:
            "From CI/CD pipelines to Kubernetes clusters, we automate your infrastructure to scale with your business. Sleep well knowing your systems are secure, scalable, and cost-efficient.",
        url: "/services/devops-cloud-engineering",
    },
    {
        name: "Legacy System Modernization",
        shortDescription: "Revitalize your outdated software stack",
        description:
            "Upgrade your legacy systems to cloud-native, microservices-based architectures. We refactor monoliths into scalable, maintainable systems that cut costs by 70%.",
        url: "/services/legacy-system-modernization",
    },
    {
        name: "Software Consulting",
        shortDescription: "Expert advice for your digital journey",
        description:
            "Get strategic guidance on technology investments, product-market fit, and digital transformation. Our consultants have a track record of turning ideas into profitable software products.",
        url: "/services/software-consulting",
    },
];
