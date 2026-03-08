import type { Metadata } from "next";
import { ServiceTemplate } from "#/components/service-template";
import servicesData from "#/data/services.json";

const serviceId = "cto-consulting";
const data = (servicesData as any)[serviceId];

export const metadata: Metadata = {
    title: `Services | ${data?.title || "Cto Consulting"}`,
    description: data?.shortDescription || "Professional ${serviceId} services engineered for success.",
    openGraph: {
        title: `Services | ${data?.title || "Cto Consulting"} - Dotenv`,
        description: data?.description || "Explore our premium ${serviceId} consulting and development services.",
    }
};

export default function Page() {
    if (!data) return null;
    return <ServiceTemplate data={data} />;
}
