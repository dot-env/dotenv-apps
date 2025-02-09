import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#/components/ui/accordion";
import { Button } from "#/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "#/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { JSX } from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
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
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  menu,
  mobileExtraLinks,
}: Navbar1Props) => {
  return (
    <section className="top-1 z-50 sticky bg-transparent backdrop-blur-lg p-4 border rounded-full">
      <div className="container">
        <nav className="hidden lg:flex">
          <div className="flex justify-between items-center gap-6 w-full">
            <Logo />
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-2">
                  {menu?.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>
        <div className="lg:hidden block">
          <div className="flex justify-between items-center">
            <Logo />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 my-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col gap-4 w-full"
                  >
                    {menu?.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="py-4 border-t">
                    <div className="justify-start grid grid-cols-2">
                      {mobileExtraLinks?.map((link, idx) => (
                        <Link
                          key={idx}
                          className="inline-flex items-center gap-2 hover:bg-muted px-4 py-2 rounded-full hover:ring-1 hover:ring-zinc-200 h-10 font-medium text-muted-foreground text-sm whitespace-nowrap transition-colors hover:text-accent-foreground"
                          href={link.url}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
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

export const Logo = () => (
  <Link href="/" className="flex flex-col w-max">
    <h1 className="font-semibold text-2xl text-left">
      <span className="text-accent-foreground">dot</span>
      <span className="text-muted-foreground">env</span>
    </h1>
    <p className="-mt-2 text-muted-foreground text-sm text-right lowercase">
      consulting
    </p>
  </Link>
);

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger className="rounded-full hover:ring-1 hover:ring-zinc-200">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="p-0 min-w-64">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex hover:bg-muted px-3 py-2 outline-none hover:ring-1 hover:ring-zinc-200 font-medium text-md text-muted-foreground text-sm hover:underline no-underline leading-none transition-colors hover:text-accent-foreground select-none"
                    href={subItem.url}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="group inline-flex justify-center items-center bg-background hover:bg-muted px-3 py-2 rounded-full hover:ring-1 hover:ring-zinc-200 w-max min-w-20 font-medium text-muted-foreground text-sm transition-colors hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b-0 rounded-full hover:ring-1 hover:ring-zinc-200"
      >
        <AccordionTrigger className="py-0 rounded-full hover:ring-1 hover:ring-zinc-200 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              className="flex gap-4 hover:bg-muted px-3 py-2 rounded-full outline-none hover:ring-1 hover:ring-zinc-200 leading-none transition-colors hover:text-accent-foreground select-none"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="font-semibold text-sm">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-muted-foreground text-sm leading-snug">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="px-3 py-2 rounded-full hover:ring-1 hover:ring-zinc-200 font-semibold"
    >
      {item.title}
    </Link>
  );
};

export { Navbar1 };
