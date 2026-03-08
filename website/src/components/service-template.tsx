import React from "react";
import { CheckCircle2, Cpu, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "#/components/ui/button";
import Link from "next/link";

interface Feature {
    title: string;
    description: string;
}

interface ServiceData {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    features: Feature[];
    benefits: string[];
    technologies: string[];
}

export const ServiceTemplate = ({ data }: { data: ServiceData }) => {
    return (
        <div className="flex flex-col gap-16 py-12 md:py-24">
            {/* Hero Section */}
            <section className="mx-auto px-4 md:px-6 container">
                <div className="max-w-3xl">
                    <h1 className="mb-6 font-bold text-4xl md:text-6xl tracking-tight">
                        <span className="text-primary">{data.title}</span>
                    </h1>
                    <p className="mb-8 text-muted-foreground text-xl md:text-2xl leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact-us">
                            <Button size="lg" className="rounded-full">
                                Get a Free Audit
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="rounded-full" asChild>
                            <a href="#features">Explore Features</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="bg-muted/30 py-16 md:py-24">
                <div className="mx-auto px-4 md:px-6 container">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <h2 className="mb-4 font-bold text-3xl md:text-4xl">Core Capabilities</h2>
                        <p className="max-w-2xl text-muted-foreground">
                            We combine deep technical expertise with industry best practices to deliver
                            results that scale with your business.
                        </p>
                    </div>
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                        {data.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-background hover:shadow-lg p-8 border rounded-2xl transition-shadow"
                            >
                                <div className="flex justify-center items-center bg-primary/10 mb-6 rounded-xl w-12 h-12 text-primary">
                                    {index === 0 && <Rocket className="w-6 h-6" />}
                                    {index === 1 && <Cpu className="w-6 h-6" />}
                                    {index === 2 && <ShieldCheck className="w-6 h-6" />}
                                    {index >= 3 && <CheckCircle2 className="w-6 h-6" />}
                                </div>
                                <h3 className="mb-3 font-bold text-xl">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits & Tech Stack */}
            <section className="items-start gap-16 grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 md:px-6 container">
                <div className="space-y-8">
                    <h2 className="font-bold text-3xl md:text-4xl">Why Partner With Us?</h2>
                    <div className="space-y-4">
                        {data.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 w-6 h-6 text-primary shrink-0" />
                                <p className="text-muted-foreground text-lg">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-primary p-8 md:p-12 rounded-3xl text-primary-foreground">
                    <h3 className="mb-8 font-bold text-2xl">Our Toolkit</h3>
                    <div className="flex flex-wrap gap-3">
                        {data.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 rounded-full font-medium text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-12 pt-12 border-white/10 border-t">
                        <p className="mb-6 text-primary-foreground/80 italic">
                            "DotEnv transformed our legacy infrastructure into a high-performance engine.
                            Their precision and technical depth are unmatched."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center bg-white/20 rounded-full w-12 h-12 font-bold">
                                CL
                            </div>
                            <div>
                                <p className="font-bold">Cassidie Lewis</p>
                                <p className="opacity-70 text-sm">CEO, FinNode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mx-auto px-4 md:px-6 container">
                <div className="flex md:flex-row flex-col justify-between items-center gap-8 bg-muted p-8 md:p-16 rounded-3xl md:text-left text-center">
                    <div className="max-w-xl">
                        <h2 className="mb-4 font-bold text-3xl md:text-4xl">Ready to engineer your success?</h2>
                        <p className="text-muted-foreground text-lg">
                            Let's discuss how our {data.title.toLowerCase()} expertise can solve your unique business challenges.
                        </p>
                    </div>
                    <Link href="/contact-us">
                        <Button size="lg" className="px-8 rounded-full h-14 text-lg">
                            Schedule Your Free Session
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
