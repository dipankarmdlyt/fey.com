import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import * as React from "react";
import { cn } from "@/src/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
  onClick?: () => void;
  active?: boolean;
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
      onClick?: () => void;
    };
    signup: {
      text: string;
      url: string;
      onClick?: () => void;
    };
  };
  onNavigate?: (path: any) => void;
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Fey",
  },
  menu = [],
  mobileExtraLinks = [],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
  onNavigate,
}: Navbar1Props) => {
  return (
    <section className="py-4 border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate?.('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tight text-white">{logo.title}</span>
            </button>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white" onClick={auth.login.onClick}>
              {auth.login.text}
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={auth.signup.onClick}>
              {auth.signup.text}
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate?.('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tight text-white">{logo.title}</span>
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white/10 text-white">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-background border-white/10">
                <SheetHeader>
                  <SheetTitle>
                    <button onClick={() => onNavigate?.('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                      <img src={logo.src} className="w-8" alt={logo.alt} />
                      <span className="text-lg font-semibold tracking-tight text-white">
                        {logo.title}
                      </span>
                    </button>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t border-white/5 py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/5" onClick={auth.login.onClick}>
                      {auth.login.text}
                    </Button>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={auth.signup.onClick}>
                      {auth.signup.text}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-white/60">
        <NavigationMenuTrigger className={cn("bg-transparent hover:bg-white/5 text-white/60 hover:text-white transition-colors", item.active && "text-accent")}>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3 bg-neutral-900 border border-white/5 rounded-lg shadow-2xl">
            <NavigationMenuLink asChild>
              <div className="flex flex-col gap-1">
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <button
                      className="w-full text-left flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white group"
                      onClick={subItem.onClick}
                    >
                      <div className="text-accent group-hover:scale-110 transition-transform">
                        {subItem.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-1">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-xs leading-snug text-white/40">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </div>
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <button
      key={item.title}
      className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white", item.active && "text-accent")}
      onClick={item.onClick}
    >
      {item.title}
    </button>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className={cn("py-0 font-semibold hover:no-underline text-white/80 hover:text-white", item.active && "text-accent")}>
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <button
              key={subItem.title}
              className="w-full text-left flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-white/5 hover:text-white"
              onClick={subItem.onClick}
            >
              <div className="text-accent">{subItem.icon}</div>
              <div>
                <div className="text-sm font-semibold text-white/90">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-xs leading-snug text-white/40">
                    {subItem.description}
                  </p>
                )}
              </div>
            </button>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <button key={item.title} onClick={item.onClick} className={cn("block w-full text-left font-semibold text-white/80 hover:text-white", item.active && "text-accent")}>
      {item.title}
    </button>
  );
};

export { Navbar1 };
