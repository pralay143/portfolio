// Single source for the site owner's name, contact details and profile links.
// Plain constants only, so it is safe to import from client components.

const name = "Pralay Mehta";

export const siteConfig = {
  name,
  initials: name
    .split(" ")
    .map((part) => part[0])
    .join(""),
  jobTitle: "Angular Developer",
  title: `${name} — Angular Developer`,
  email: "pralaymehta97@gmail.com",
  links: {
    github: "https://github.com/pralay143",
    linkedin: "https://linkedin.com/in/mehta-pralay-6555531a1",
  },
} as const;
