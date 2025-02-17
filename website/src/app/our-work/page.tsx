import type { Metadata } from "next";
import { generateTitle } from "#/configs/site";
import { Heading } from "#/components/page-header";

export const metadata: Metadata = {
    title: generateTitle("Our Work"),
    description: "",
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
