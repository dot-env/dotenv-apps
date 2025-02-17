import {
    ArrowRight,
    Handshake,
    Lightbulb,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Button } from "#/components/ui/button";
import { generateTitle } from "#/configs/site";
import { Heading } from "#/components/page-header";

export const metadata: Metadata = {
    title: generateTitle("About Us"),
    description:
        "At DotEnv Consulting, we don’t just write code—we craft solutions that scale, secure, and simplify.",
};

export default function page() {
    return (
        <>
            <Heading
                link="#our-story"
                pageDescription="At DotEnv Consulting, we don’t just write code—we craft solutions that scale, secure, and simplify."
                pageTitleBold="Engineering Success"
                pageTitleLight=", One Line of Code at a Time"
                name="About Us"
            />

            <section id="our-story" aria-label="Our Story">
                <article className="grid grid-cols-1 md:grid-cols-6">
                    <article className="flex flex-col justify-center items-center md:items-start gap-8 col-span-4 my-16 px-8 md:px-0 text-center align-middle">
                        <h1 className="font-bold text-muted-foreground text-4xl md:text-5xl text-center">
                            From Frustration
                            <span className="text-primary">
                                {" "}to Innovation
                            </span>
                        </h1>
                        <p className="text-md text-muted-foreground md:text-lg text-center">
                            <Link href="https://dotenv.co.za">
                                <span className="text-primary">DotEnv</span>
                                {" "}
                            </Link>
                            was born out of a shared frustration: too many
                            businesses struggle with bloated systems, security
                            vulnerabilities, and missed deadlines. We saw an
                            opportunity to do things differently.
                        </p>
                        <p className="text-md text-muted-foreground md:text-lg text-center">
                            Founded in 2024 by a team of engineers and
                            architects,{" "}
                            <Link href="https://dotenv.co.za">
                                <span className="text-primary">DotEnv</span>
                                {" "}
                            </Link>

                            Consulting was built on one core belief:{" "}
                            <span className="font-semibold">
                                software should work for you, not against you
                            </span>. Today, we’re proud to partner with startups
                            and enterprises alike, helping them turn technical
                            challenges into competitive advantages.
                        </p>
                    </article>
                    <figure className="flex justify-center items-center col-span-2">
                        <Image
                            src="/images/innovation-animate.svg"
                            alt="Our Story"
                            width={10}
                            height={10}
                            className="w-full h-full"
                            layout="responsive"
                            quality={100}
                        />
                    </figure>
                </article>
            </section>

            <section id="our-mission" aria-label="Our Mission">
                <div className="flex flex-col justify-center items-center gap-16 my-16 px-8 md:px-0 text-center align-middle">
                    <article className="justify-center items-center gap-8 grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                                <span className="text-primary">
                                    We exist
                                </span>{" "}
                                to
                            </h2>
                        </div>
                        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                            {mission.map((mission) => (
                                <article
                                    key={mission.title}
                                    className="flex flex-col justify-center items-center gap-4 hover:shadow-sm rounded-lg text-primary text-center transition-shadow"
                                >
                                    <h3 aria-label={mission.title}>
                                        <strong className="font-bold text-muted-foreground text-2xl">
                                            {mission.title}
                                        </strong>
                                    </h3>
                                    <p
                                        className="text-md text-muted-foreground"
                                        aria-description={mission.description}
                                    >
                                        {mission.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </article>
                    <div className="flex justify-center items-center gap-8 w-full">
                        <Link href="/contact-us" className="w-fit">
                            <Button className="flex items-center gap-2 w-fit">
                                Schedule a Free Consultation{" "}
                                <ArrowRight size={24} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="why-us" aria-label="Why Choose Us?">
                <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 text-center align-middle">
                    <article className="justify-center items-center gap-8 grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                                The{" "}
                                <span className="text-primary">
                                    DotEnv
                                </span>{" "}
                                Difference
                            </h2>
                        </div>
                        <ol className="gap-4 grid grid-cols-1 md:grid-cols-2">
                            {whyUs.map((value, index) => (
                                <li
                                    key={index}
                                >
                                    <article className="group flex flex-col justify-start items-center gap-4 hover:shadow-sm p-8 border hover:border border-transparent rounded-lg text-primary text-center transition-all">
                                        <h3 aria-label={value.title}>
                                            <strong className="group-hover:text-primary font-bold text-muted-foreground text-2xl group-hover:scale-105 transition-colors">
                                                {value.title}
                                            </strong>
                                        </h3>
                                        <p
                                            className="text-md text-muted-foreground group-hover:scale-105 transition-transform"
                                            aria-description={value.description}
                                        >
                                            {value.description}
                                        </p>
                                    </article>
                                </li>
                            ))}
                        </ol>
                    </article>
                </div>
            </section>

            <section id="our-values" aria-label="What Guides Us">
                <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 text-center align-middle">
                    <article className="justify-center items-center gap-8 grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                                What{" "}
                                <span className="text-primary">
                                    Guides
                                </span>{" "}
                                Us?
                            </h2>
                        </div>
                        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                            {values.map((value, index) => (
                                <article
                                    key={index}
                                    className="flex flex-col justify-center items-center gap-4 bg-primary-foreground/50 hover:shadow-sm p-8 rounded-lg text-primary text-center transition-shadow"
                                >
                                    <value.icon
                                        size={44}
                                        aria-hidden="true"
                                    />
                                    <h3 aria-label={value.title}>
                                        <strong className="font-bold text-muted-foreground text-2xl">
                                            {value.title}
                                        </strong>
                                    </h3>
                                    <p
                                        className="text-md text-muted-foreground"
                                        aria-description={value.description}
                                    >
                                        {value.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section id="our-team" aria-label="Meet the Team"></section>

            <section id="cta" aria-label="Join Our Mission">
                <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 text-center align-middle">
                    <div className="justify-center items-center gap-8 grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                                <span className="text-primary">
                                    Let’s Build
                                </span>{" "}
                                Something Extraordinary
                            </h2>
                            <p className="text-md text-muted-foreground text-center">
                                Whether you’re a startup with a bold vision or
                                an enterprise looking to modernize, we’d love to
                                hear from you. Let’s engineer your success
                                together.
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-8 w-full">
                            <Link href="/contact-us" className="w-fit">
                                <Button className="flex items-center gap-2 w-fit">
                                    Schedule a Free Consultation{" "}
                                    <ArrowRight size={24} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const values = [
    {
        title: "Integrity",
        description: "We do what’s right, even when no one’s watching.",
        icon: ShieldCheck,
    },
    {
        title: "Innovation",
        description: "We stay ahead of the curve, so you don’t have to.",
        icon: Lightbulb,
    },
    {
        title: "Partnership",
        description: "Your success is our success.",
        icon: Handshake,
    },
    {
        title: "Excellence",
        description: "Good enough isn’t in our vocabulary.",
        icon: TrendingUp,
    },
];

const whyUs = [
    {
        title: "Senior-Level Expertise",
        description:
            "Our team combined 10+ years of experience in software development, cloud architecture, and cybersecurity. No junior developers—just seasoned professionals.",
    },
    {
        title: "Outcome-Focused Approach",
        description:
            "We don’t just deliver code; we deliver measurable results. From faster load times to higher user retention, we’re obsessed with your success.",
    },
    {
        title: "Agile & Transparent",
        description:
            "Weekly updates, clear timelines, and no surprises. You’ll always know where your project stands.",
    },
    {
        title: "Tailored Solutions",
        description:
            "No cookie-cutter approaches here. Every solution is custom-built to fit your unique needs.",
    },
];

const mission = [
    {
        title: "Simplify Complexity",
        description:
            "Break down technical barriers so you can focus on growth.",
    },
    {
        title: "Engineer Confidence",
        description:
            "Build systems that scale seamlessly and secure your future.",
    },
    {
        title: "Deliver Clarity",
        description:
            "Provide transparent, jargon-free communication every step of the way.",
    },
];
