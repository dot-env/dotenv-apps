import Link from "next/link";
import type { UrlObject } from "url";
import { ArrowDown, FileText } from "lucide-react";

import { Button } from "./ui/button";

const Heading = ({
    link,
    name,
    pageDescription,
    pageTitleBold,
    pageTitleLight,
}: {
    pageTitleBold: string;
    pageTitleLight: string;
    pageDescription: string;
    link: string;
    name: string;
}) => (
    <main className="flex flex-col justify-center items-center md:min-h-[80vh]">
        <div className="flex flex-col justify-center items-center md:items-start gap-8 my-16 px-8 md:px-0 text-center align-middle">
            <div className="flex justify-center items-center gap-4 mx-auto p-2 border rounded-full w-3/6 md:w-1/6 text-primary">
                <FileText size={14} />
                <p
                    className="font-bold text-primary text-sm"
                    aria-label={name}
                >
                    {name}
                </p>
            </div>

            <h1
                className="mx-auto w-fit font-bold text-muted-foreground text-4xl md:text-5xl text-center leading-relaxed"
                aria-label="Engineering Success, One Line of Code at a Time"
            >
                <span className="text-primary">
                    {pageTitleBold}
                </span>
                {pageTitleLight}
            </h1>
            <p className="mx-auto w-fit text-md text-muted-foreground text-center">
                {pageDescription}
            </p>
        </div>

        <Link
            href={link as unknown as UrlObject}
            className="justify-self-end self-center w-fit align-baseline"
        >
            <Button
                className="flex items-center gap-2 w-fit"
                variant="ghost"
            >
                <ArrowDown size={24} className="animate-bounce" />
            </Button>
        </Link>
    </main>
);

export { Heading };
