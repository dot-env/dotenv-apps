import Link from "next/link";
import { Logo } from "./shadcnblocks-com-navbar1";
import { contacts, links, socials } from "#/configs/site";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-6 mt-8 px-4 md:px-0 pb-4 w-full">
            <div className="flex flex-col items-center gap-4 w-full">
                <div className="gap-4 grid grid-cols-10 w-full">
                    <div className="col-span-9 md:col-span-2">
                        <Logo />
                    </div>

                    <div className="flex flex-col gap-2 col-span-9 md:col-span-2">
                        <h6 className="font-semibold text-md text-muted-foreground">
                            Links
                        </h6>
                        <ul className="flex md:flex-col gap-2 text-muted-foreground text-sm">
                            {links.map((link) => (
                                <li key={link.text}>
                                    <Link
                                        href={link.url}
                                        className="hover:text-accent-foreground"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2 col-span-9 md:col-span-2">
                        <h6 className="font-semibold text-md text-muted-foreground">
                            Locations
                        </h6>
                        <address className="flex flex-col gap-2 text-muted-foreground text-sm">
                            {contacts.address}
                        </address>
                    </div>

                    <div className="flex flex-col gap-2 col-span-9 md:col-span-2">
                        <h6 className="font-semibold text-md text-muted-foreground">
                            Phone Us
                        </h6>
                        <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <Link
                                href={`mailto:${contacts.phone}`}
                                className="hover:text-accent-foreground"
                            >
                                {contacts.phone}
                            </Link>
                        </ul>
                        <h6 className="mt-4 font-semibold text-md text-muted-foreground">
                            Email Us
                        </h6>
                        <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <Link
                                href={`mailto:${contacts.email}`}
                                className="hover:text-accent-foreground"
                            >
                                {contacts.email}
                            </Link>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2 col-span-9 md:col-span-2">
                        <h6 className="font-semibold text-md text-muted-foreground">
                            Socials
                        </h6>
                        <ul className="flex gap-4 md:gap-2 md:grid md:grid-cols-4 text-muted-foreground text-xs">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <li key={social.url as string}>
                                        <Link
                                            href={social.url}
                                            target="_blank"
                                            aria-label={social.icon.name}
                                            rel="noreferrer"
                                        >
                                            <Icon className="w-5 h-5 text-muted-foreground hover:text-accent-foreground" />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <hr className="mt-4 border-[0.5px] border-muted-foreground border-solid w-full" />
                <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex md:flex-row flex-col justify-center md:justify-start md:items-start w-full">
                        <p className="text-muted-foreground text-xs">
                            Operating Hours
                        </p>
                        <p className="text-muted-foreground text-xs">
                            Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                    </div>
                    <Link
                        href="/privacy-policy"
                        className="min-w-fit text-xs text-accent-foreground"
                    >
                        Privacy Policy
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-muted-foreground text-xs">
                        © {new Date().getFullYear()}{" "}
                        dotenv consulting. All rights reserved. Developed by
                        {"  "}
                        <Link
                            href="https://dotenv.co.za"
                            className="text-accent-foreground"
                        >
                            dotenv consulting
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
