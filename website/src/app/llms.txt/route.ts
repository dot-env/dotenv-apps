import { contacts, projects, siteConfig } from "#/configs/site";
import { services } from "#/data/services";

function buildLlmsTxt() {
  const origin = siteConfig.url;
  const serviceLines = Object.values(services)
    .map(
      (service) =>
        `- [${service.title}](${origin}/services/${service.id}): ${service.shortDescription}`,
    )
    .join("\n");
  const projectLines = projects
    .map(
      (project) =>
        `- [${project.name}](${project.url}): ${project.description}`,
    )
    .join("\n");

  return `# Dotenv

> Dotenv is a software development agency in Johannesburg, South Africa. We design and build web platforms, mobile apps, and cloud systems for startups and enterprises. Work starts with a free technical audit. Price is scoped after that audit. There is no public rate card.

## Services

${serviceLines}

## Work

- [Our work](${origin}/our-work): Production systems for finance, hospitality, and higher education.
${projectLines}

## Company

- [Home](${origin}/): Software development agency in Johannesburg.
- [About](${origin}/about-us): Who builds the software and how engagements run.
- [Blog](${origin}/blog): Notes on software development, cloud architecture, and security.
- [Contact](${origin}/contact-us): ${contacts.email}, ${contacts.phone}, ${contacts.address}.
- [Privacy policy](${origin}/privacy-policy): What personal information the site collects.
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
