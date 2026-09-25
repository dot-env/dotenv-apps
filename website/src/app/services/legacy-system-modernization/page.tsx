import type { Metadata } from "next";
import { ServiceTemplate } from "#/components/service-template";
import { services } from "#/data/services";

const serviceId = "legacy-system-modernization";
const data = services[serviceId];

export const metadata: Metadata = {
    title: `Services | ${data?.title || "Legacy System Modernization"}`,
    description: data?.shortDescription || "Professional ${serviceId} services engineered for success.",
    openGraph: {
        title: `Services | ${data?.title || "Legacy System Modernization"} - Dotenv`,
        description: data?.description || "Explore our premium ${serviceId} consulting and development services.",
    }
};

export default function Page() {
    if (!data) return null;
    return <ServiceTemplate data={data} />;
}
