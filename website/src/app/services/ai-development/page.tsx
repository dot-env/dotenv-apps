import { notFound } from "next/navigation";
import { ServiceTemplate } from "#/components/service-template";
import { services } from "#/data/services";
import { serviceMetadata } from "#/lib/page-metadata";

const serviceId = "ai-development";
const data = services[serviceId];

export const metadata = serviceMetadata(serviceId);

export default function Page() {
    if (!data) notFound();
    return <ServiceTemplate data={data} />;
}
