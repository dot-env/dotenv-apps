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
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import type { JSX } from "react";
import Link from "next/link";
import type { UrlObject } from "url";

interface MenuItem {
  title: string;
  url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  }[];
  auth?: {
    login: {
      text: string;
      url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
    };
    signup: {
      text: string;
      url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
    };
  };
}

const Navbar1 = ({
  menu,
}: Navbar1Props) => {
  return (
    <section className="z-50 sticky inset-0 bg-transparent backdrop-blur-lg p-4 border rounded-full">
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
                <Button
                  aria-label="Open menu"
                  className="rounded-full"
                  size="icon"
                  variant="ghost"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex h-full w-full flex-col gap-0 p-0 sm:max-w-sm">
                <SheetHeader className="border-b px-5 pt-5 pr-16 pb-4 text-left">
                  <Logo />
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
                  <Accordion className="flex flex-col" collapsible type="single">
                    {menu?.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </nav>
                <div className="border-t p-4">
                  <SheetClose asChild>
                    <Link href="/contact-us">
                      <Button className="w-full rounded-full">
                        Schedule a Free Tech Audit
                      </Button>
                    </Link>
                  </SheetClose>
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
      <NavigationMenuItem className="relative" key={item.title}>
        <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-transparent rounded-full hover:ring-1 hover:ring-zinc-200 text-muted-foreground transition-colors hover:text-accent-foreground">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="flex max-h-[70vh] w-max flex-col gap-1 overflow-y-auto p-2">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <Link
                    className="block whitespace-nowrap rounded-md px-4 py-2 font-medium text-muted-foreground text-sm outline-none transition-colors hover:bg-muted hover:text-accent-foreground hover:ring-1 hover:ring-zinc-200 select-none"
                    href={subItem.url}
                  >
                    {subItem.title}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          className="group inline-flex justify-center items-center bg-transparent hover:bg-muted px-4 py-2 rounded-full hover:ring-1 hover:ring-zinc-200 w-max min-w-20 font-medium text-muted-foreground text-sm transition-colors hover:text-accent-foreground"
          href={item.url}
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        className="border-none"
        key={item.title}
        value={item.title}
      >
        <AccordionTrigger className="rounded-xl px-3 py-3 text-base font-medium hover:bg-muted hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="pt-1 pb-2">
          <div className="flex flex-col">
            {item.items.map((subItem) => (
              <SheetClose asChild key={subItem.title}>
                <Link
                  className="rounded-lg px-3 py-2.5 text-muted-foreground text-sm transition-colors hover:bg-muted hover:text-foreground"
                  href={subItem.url}
                >
                  {subItem.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <SheetClose asChild key={item.title}>
      <Link
        className="flex items-center rounded-xl px-3 py-3 font-medium text-base transition-colors hover:bg-muted"
        href={item.url}
      >
        {item.title}
      </Link>
    </SheetClose>
  );
};

export { Navbar1 };
