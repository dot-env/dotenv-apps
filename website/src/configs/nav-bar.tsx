import type { UrlObject } from "url";

export const navData: {
  menu: {
    title: string;
    url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
    items?: {
      title: string;
      url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
    }[];
  }[];
  mobileExtraLinks: {
    name: string;
    url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  }[];
} = {
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Our Work",
      url: "/our-work",
    },
    {
      title: "Services",
      url: "/services",
      items: [
        {
          title: "Enterprise Java",
          url: "/services/java-development" as any,
        },
        {
          title: "AI & GenAI Solutions",
          url: "/services/ai-development" as any,
        },
        {
          title: "Cloud-Native Engineering",
          url: "/services/cloud-native-development" as any,
        },
        {
          title: "Custom Web Applications",
          url: "/services/web-development",
        },
        {
          title: "Mobile-First Innovation",
          url: "/services/mobile-development",
        },
        {
          title: "Backend Engineering",
          url: "/services/backend-development",
        },
        {
          title: "Scalable Architecture",
          url: "/services/scalable-software-architecture",
        },
        {
          title: "Enterprise QA & Testing",
          url: "/services/enterprise-software-testing",
        },
        {
          title: "DevOps Automation",
          url: "/services/devops-cloud-engineering",
        },
        {
          title: "UI/UX Design",
          url: "/services/ui-ux-design",
        },
        {
          title: "Legacy Modernization",
          url: "/services/legacy-system-modernization",
        },
        {
          title: "Technical SEO",
          url: "/services/seo",
        },
      ],
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ],
  mobileExtraLinks: [
    { name: "Contact", url: "/contact-us" },
  ],
};
