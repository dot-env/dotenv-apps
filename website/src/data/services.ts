import servicesJson from "./services.json";

export type ServiceRecord = {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    features: { title: string; description: string }[];
    benefits: string[];
    technologies: string[];
};

export type ServiceId = keyof typeof servicesJson;

export const services = servicesJson as Record<ServiceId, ServiceRecord>;
