import type { Metadata } from "next";
import { Heading } from "#/components/page-header";
import { JsonLd } from "#/components/json-ld";
import type { CollectionPage, WithContext } from "schema-dts";
import { siteConfig, projects } from "#/configs/site";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "#/components/ui/button";

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
        <div className="pb-20">
            <JsonLd data={portfolioJsonLd} />
            <Heading
                link="#projects"
                name="Our Work"
                pageDescription="From startups to enterprises, we’ve engineered solutions that scale, secure, and simplify. Here’s how we’ve transformed challenges into success stories."
                pageTitleBold="Code That Speaks "
                pageTitleLight="Volumes"
            />

            <section id="projects" className="mx-auto px-4 md:px-6 container">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-background border hover:border-primary/20 rounded-3xl h-full transition-all duration-300"
                        >
                            {/* Project Header / Media */}
                            <div className="relative bg-muted/30 border-b aspect-video overflow-hidden">
                                {project.image && !project.image.startsWith('/') ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex justify-center items-center w-full h-full text-muted-foreground">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="opacity-20 font-bold text-2xl">{project.name}</span>
                                            <span className="text-xs uppercase tracking-widest">{project.industry}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="top-4 right-4 absolute flex gap-2">
                                    <span className="bg-background/80 backdrop-blur-md px-3 py-1 border rounded-full font-medium text-primary text-xs tracking-tight">
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-8 md:p-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="font-medium text-primary text-sm uppercase tracking-wider">
                                            {project.industry}
                                        </span>
                                        <h3 className="mt-1 font-bold text-2xl md:text-3xl tracking-tight">
                                            {project.name}
                                        </h3>
                                    </div>
                                    {project.url && project.url !== '#' && (
                                        <Link
                                            href={project.url as any}
                                            target="_blank"
                                            className="bg-muted p-2 rounded-full hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="size-5" />
                                        </Link>
                                    )}
                                </div>

                                <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {(project as any).tags?.map((tag: string, i: number) => (
                                        <span
                                            key={i}
                                            className="bg-muted/50 px-3 py-1 rounded-lg font-medium text-muted-foreground text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA for collaborations */}
                <div className="mt-20 lg:mt-32 p-12 lg:p-24 border border-dashed rounded-[40px] text-center">
                    <h2 className="mb-6 font-bold text-3xl md:text-5xl tracking-tight">
                        Your vision, <span className="text-primary">our engineering.</span>
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-muted-foreground text-xl">
                        Ready to be our next success story? Let's discuss how we can build something
                        extraordinary together.
                    </p>
                    <Link href="/contact-us">
                        <Button size="lg" className="px-10 rounded-full h-16 text-lg">
                            Start a Project <ArrowRight className="ml-2 size-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
