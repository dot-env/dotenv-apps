import type { Metadata } from "next";
import { Heading } from "#/components/page-header";
import { JsonLd } from "#/components/json-ld";
import type { CollectionPage, WithContext } from "schema-dts";
import { siteConfig, projects } from "#/configs/site";

export const metadata: Metadata = {
    title: "Our Work",
    description: "From startups to enterprises, explore our engineered solutions that scale, secure, and simplify.",
    openGraph: {
        title: "Our Work - Dotenv",
        description: "From startups to enterprises, explore our engineered solutions that scale, secure, and simplify.",
    }
};

export default function page() {
    const portfolioJsonLd: WithContext<CollectionPage> = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Our Work Portfolio | Dotenv",
        "description": "Explore our portfolio of engineered solutions for startups and enterprises.",
        "url": `${siteConfig.url}/our-work`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "CreativeWork",
                    "name": project.name,
                    "description": project.description,
                    "url": project.url,
                    "image": project.image
                }
            }))
        }
    };

    return (
        <>
            <JsonLd data={portfolioJsonLd} />
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
