import type { Metadata } from "next";
import { Heading } from "#/components/page-header";

import Link from "next/link";
import { ArrowRight, Bot, Cloud, Coffee, Cpu, Layers, Layout, Lock, MessageSquare, Monitor, Rocket, Search, Smartphone, Zap } from "lucide-react";
import servicesData from "#/data/services.json";

export const metadata: Metadata = {
    title: "Services",
    description: "Whether you're building from scratch or modernizing legacy systems, our end-to-end software services deliver results—fast, secure, and scalable.",
    openGraph: {
        title: "Our Services - Dotenv",
        description: "Whether you're building from scratch or modernizing legacy systems, our end-to-end software services deliver results—fast, secure, and scalable.",
    }
};

const iconMap: Record<string, any> = {
    "web-development": Monitor,
    "mobile-development": Smartphone,
    "ui-ux-design": Layout,
    "cto-consulting": Rocket,
    "scalable-software-architecture": Layers,
    "enterprise-software-testing": Lock,
    "devops-cloud-engineering": Zap,
    "legacy-system-modernization": Cpu,
    "software-consulting": MessageSquare,
    "backend-development": Layers,
    "frontend-development": Monitor,
    "seo": Search,
    "java-development": Coffee,
    "ai-development": Bot,
    "cloud-native-development": Cloud,
};

export default function Page() {
    const services = Object.values(servicesData);

    return (
        <>
            <Heading
                link="#our-services"
                name="Our Services"
                pageDescription="Whether you’re building from scratch or modernizing legacy systems, our end-to-end services are designed to deliver results—fast, secure, and scalable."
                pageTitleBold="Your Vision"
                pageTitleLight=", Our Precision Toolkit"
            />
            <section id="our-services" className="mx-auto px-4 md:px-6 py-20 container">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service: any) => {
                        const Icon = iconMap[service.id] || Rocket;
                        return (
                            <Link
                                key={service.id}
                                href={`/services/${service.id}` as any}
                                className="group flex flex-col bg-background p-8 border hover:border-primary/50 rounded-3xl h-full transition-all"
                            >
                                <div className="flex justify-center items-center bg-muted group-hover:bg-primary mb-6 rounded-2xl w-12 h-12 group-hover:text-primary-foreground transition-colors">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="mb-3 font-bold text-xl">{service.title}</h3>
                                <p className="mb-6 text-muted-foreground grow">{service.shortDescription}</p>
                                <div className="flex items-center font-medium text-primary text-sm group-hover:underline">
                                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
