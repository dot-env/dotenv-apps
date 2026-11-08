import type { Metadata } from "next";
import { services, type ServiceId } from "#/data/services";

type PageMetadataInput = {
  absoluteTitle?: boolean;
  description: string;
  path: `/${string}` | "/";
  title: string;
};

export function pageMetadata({
  absoluteTitle = false,
  description,
  path,
  title,
}: PageMetadataInput): Metadata {
  return {
    alternates: {
      canonical: path,
    },
    description,
    openGraph: {
      description,
      title,
      url: path,
    },
    title: absoluteTitle ? { absolute: title } : title,
  };
}

export function serviceMetadata(serviceId: ServiceId): Metadata {
  const service = services[serviceId];

  return pageMetadata({
    description: service.shortDescription,
    path: `/services/${serviceId}`,
    title: service.title,
  });
}
