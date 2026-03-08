import type { Metadata } from "next";
import { Heading } from "#/components/page-header";

export const metadata: Metadata = {
    title: "Our Work",
    description: "From startups to enterprises, explore our engineered solutions that scale, secure, and simplify.",
    openGraph: {
        title: "Our Work - Dotenv",
        description: "From startups to enterprises, explore our engineered solutions that scale, secure, and simplify.",
    }
};

export default function page() {
    return (
        <>
            <Heading
                link="#projects"
                name="Our Work"
                pageDescription="From startups to enterprises, we’ve engineered solutions that scale, secure, and simplify. Here’s how we’ve transformed challenges into success stories."
                pageTitleBold="Code That Speaks "
                pageTitleLight="Volumes"
            />
            <section id="projects"></section>
        </>
    );
}
