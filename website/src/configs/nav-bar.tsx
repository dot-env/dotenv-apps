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
          title: "Backend Development",
          // description: "Get all the answers you need right here",
          // icon: <Zap className="size-5 shrink-0" />,
          url: "/services/backend-development",
        },
        {
          title: "Frontend Development",
          // description: "We are here to help you with any questions you have",
          // icon: <Sunset className="size-5 shrink-0" />,
          url: "/services/frontend-development",
        },
        {
          title: "Mobile Development",
          // description: "Check the current status of our services and APIs",
          // icon: <Trees className="size-5 shrink-0" />,
          url: "/services/mobile-development",
        },
        {
          title: "Web Development",
          // description: "Our terms and conditions for using our services",
          // icon: <Book className="size-5 shrink-0" />,
          url: "/services/web-development",
        },
        {
          title: "Enterprise Software Testing",
          // description: "Our terms and conditions for using our services",
          // icon: <Book className="size-5 shrink-0" />,
          url: "/services/enterprise-software-testing",
        },
        {
          title: "UI/UX Design",
          // description: "Get in touch with us for more information",
          // icon: <Zap className="size-5 shrink-0" />,
          url: "/services/ui-ux-design",
        },
        {
          title: "SEO",
          // description: "Check the current status of our services and APIs",
          // icon: <Trees className="size-5 shrink-0" />,
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
    // { name: "Imprint", url: "/imprint" },
    // { name: "Sitemap", url: "/sitemap" },
  ],
  // auth: {
  //   login: { text: "Log in", url: "/login" },
  //   signup: { text: "Sign up", url: "/signup" },
  // },
};
