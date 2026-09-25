import type { Metadata } from "next";
import { ServiceTemplate } from "#/components/service-template";
import { services } from "#/data/services";

const serviceId = "devops-cloud-engineering";
const data = services[serviceId];

export const metadata: Metadata = {
    title: `Services | ${data?.title || "Devops Cloud Engineering"}`,
    description: data?.shortDescription || "Professional ${serviceId} services engineered for success.",
    openGraph: {
        title: `Services | ${data?.title || "Devops Cloud Engineering"} - Dotenv`,
        description: data?.description || "Explore our premium ${serviceId} consulting and development services.",
    }
};

export default function Page() {
    if (!data) return null;
    return <ServiceTemplate data={data} />;
}
