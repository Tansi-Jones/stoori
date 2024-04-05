import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  ProfileIcon,
  StoriesIcon,
  LibraryIcon,
  StatsIcon,
} from "@/icons/icons";

export const socials = [
  {
    name: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    name: "Github",
    href: "#",
    icon: GithubIcon,
  },
  {
    name: "YouTube",
    href: "#",
    icon: YouTubeIcon,
  },
  {
    name: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
];

export const menuLinks = [
  {
    name: "Discover",
    href: "/discover",
  },
  {
    name: "Stories",
    href: "/stories",
  },
];

export const subMenuLinks = [
  {
    name: "Profile",
    href: "/me/profile",
    icon: ProfileIcon,
  },
  {
    name: "Stories",
    href: "/me/stories",
    icon: StoriesIcon,
  },
  {
    name: "Library",
    href: "/me/library",
    icon: LibraryIcon,
  },
  {
    name: "Stats",
    href: "#",
    icon: StatsIcon,
  },
];

export const storiesTabLinks = [
  {
    name: "Drafts",
    href: "/me/stories/drafts",
  },
  {
    name: "Published",
    href: "/me/stories/published",
  },
  {
    name: "Archived",
    href: "/me/stories/archived",
  },
];
