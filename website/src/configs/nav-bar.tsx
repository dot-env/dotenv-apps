export const navData = {
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
          url: "/backend-development",
        },
        {
          title: "Frontend Development",
          // description: "We are here to help you with any questions you have",
          // icon: <Sunset className="size-5 shrink-0" />,
          url: "/frontend-development",
        },
        {
          title: "Mobile Development",
          // description: "Check the current status of our services and APIs",
          // icon: <Trees className="size-5 shrink-0" />,
          url: "/mobile-development",
        },
        {
          title: "Web Development",
          // description: "Our terms and conditions for using our services",
          // icon: <Book className="size-5 shrink-0" />,
          url: "/web-development",
        },
        {
          title: "UI/UX Design",
          // description: "Get in touch with us for more information",
          // icon: <Zap className="size-5 shrink-0" />,
          url: "/ui-ux-design",
        },
        {
          title: "SEO",
          // description: "Check the current status of our services and APIs",
          // icon: <Trees className="size-5 shrink-0" />,
          url: "/seo",
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
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  // auth: {
  //   login: { text: "Log in", url: "/login" },
  //   signup: { text: "Sign up", url: "/signup" },
  // },
};
