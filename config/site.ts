export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Grace City Church",
  description:
    "The Official Website of Grace City Church, Morong, Rizal, Philippines",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },

    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "Give",
      href: "/give",
    },
    {
      title: "About",
      href: "/who-we-are",
      submenu: [
        {
          title: "Who We Are",
          href: "/who-we-are",
        },
        {
          title: "The Gospel",
          href: "/the-gospel",
        },
        {
          title: "What We Believe",
          href: "/what-we-believe",
        },
        {
          title: "Leadership",
          href: "/leadership",
        },
        {
          title: "Our Ministries",
          href: "/our-ministries",
        },
      ],
    },
    {
      title: "I'm New",
      href: "/what-to-expect",
      submenu: [
        {
          title: "What To Expect",
          href: "/what-to-expect",
        },
        {
          title: "Plan Your Visit",
          href: "/plan-your-visit",
        },
        {
          title: "Service Times & Directions",
          href: "/service-time-directions",
        },
        {
          title: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
  ],
  links: {
    facebook: "https://www.facebook.com/gccmorong",
    youtube: "https://www.facebook.com/gccmorong",
  },
}
