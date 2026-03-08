import type { Metadata } from "next";
import { ServiceTemplate } from "#/components/service-template";
import servicesData from "#/data/services.json";

const serviceId = "java-development";
const data = (servicesData as any)[serviceId];

export const metadata: Metadata = {
    title: `Services | ${data?.title || "Java Development"}`,
    description: data?.shortDescription || "Professional ${serviceId} services engineered for success.",
    openGraph: {
        title: `Services | ${data?.title || "Java Development"} - Dotenv`,
        description: data?.description || "Explore our premium ${serviceId} consulting and development services.",
    }
};

export default function Page() {
    if (!data) return null;
    return <ServiceTemplate data={data} />;
}
