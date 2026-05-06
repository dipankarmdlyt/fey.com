import { Book, Sunset, Trees, Zap } from "lucide-react";
import * as React from "react";

import { Navbar1 } from "@/src/components/ui/shadcnblocks-com-navbar1"

const demoData = {
  logo: {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "Fey Logo",
    title: "Fey",
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Dashboard",
          description: "Real-time portfolio management and tracking",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Charts",
          description: "Institutional-grade charting and analysis",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "AI Analysis",
          description: "Automated earnings summaries and sentiment",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Historical Data",
          description: "Comprehensive database of market history",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "API Docs",
          description: "Build on top of our institutional data pipeline",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Community",
          description: "Connect with other traders and investors",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Security",
          description: "Learn about our data protection standards",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth: {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
};

interface NavbarProps {
  onAuthOpen: (mode: 'signin' | 'signup') => void;
  onNavigate: (path: any) => void;
  currentPath: string;
}

export function Navbar1Demo({ onAuthOpen, onNavigate, currentPath }: NavbarProps) {
  const demoData = {
    logo: {
      url: "/",
      src: "https://www.shadcnblocks.com/images/block/block-1.svg",
      alt: "Fey Logo",
      title: "Fey",
    },
    menu: [
      {
        title: "Home",
        url: "#",
        onClick: () => onNavigate('home'),
        active: currentPath === 'home',
      },
      {
        title: "Products",
        url: "#",
        items: [
          {
            title: "Dashboard",
            description: "Real-time portfolio management and tracking",
            icon: <Zap className="size-5 shrink-0" />,
            url: "#",
            onClick: () => onNavigate('product'),
          },
          {
            title: "Charts",
            description: "Institutional-grade charting and analysis",
            icon: <Trees className="size-5 shrink-0" />,
            url: "#",
            onClick: () => onNavigate('charts'),
          },
          {
            title: "AI Analysis",
            description: "Automated earnings summaries and sentiment",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "#",
            onClick: () => onNavigate('news'),
          },
          {
            title: "Historical Data",
            description: "Comprehensive database of market history",
            icon: <Book className="size-5 shrink-0" />,
            url: "#",
          },
        ],
      },
      {
        title: "Resources",
        url: "#",
        items: [
          {
            title: "Sync",
            description: "Institutional-grade data syncing",
            icon: <Trees className="size-5 shrink-0" />,
            url: "#",
            onClick: () => onNavigate('sync'),
          },
          {
            title: "API Docs",
            description: "Build on top of our institutional data pipeline",
            icon: <Zap className="size-5 shrink-0" />,
            url: "#",
          },
          {
            title: "Community",
            description: "Connect with other traders and investors",
            icon: <Trees className="size-5 shrink-0" />,
            url: "#",
          },
          {
            title: "Security",
            description: "Learn about our data protection standards",
            icon: <Book className="size-5 shrink-0" />,
            url: "#",
          },
        ],
      },
      {
        title: "Pricing",
        url: "#",
        onClick: () => onNavigate('pricing'),
        active: currentPath === 'pricing',
      },
      {
        title: "About",
        url: "#",
        onClick: () => onNavigate('about'),
        active: currentPath === 'about',
      },
    ],
    mobileExtraLinks: [
      { name: "Press", url: "#" },
      { name: "Contact", url: "#" },
      { name: "Imprint", url: "#" },
      { name: "Sitemap", url: "#" },
    ],
    auth: {
      login: { text: "Log in", url: "#", onClick: () => onAuthOpen('signin') },
      signup: { text: "Sign up free", url: "#", onClick: () => onAuthOpen('signup') },
    },
  };

  return <Navbar1 {...demoData} onNavigate={onNavigate} />;
}

export default Navbar1Demo;
