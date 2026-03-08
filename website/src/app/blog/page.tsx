import type { Metadata } from "next";

import { Heading } from "#/components/page-header";

export const metadata: Metadata = {
    title: "Blog",
    description: "Dive into the latest in software development, cloud architecture, and cybersecurity. Professional insights to engineer success.",
    openGraph: {
        title: "Blog - Dotenv",
        description: "Dive into the latest in software development, cloud architecture, and cybersecurity. Professional insights to engineer success.",
    }
};

export default function page() {
    return (
        <>
            <Heading
                link="#blogs"
                name="Blog"
                pageDescription="Dive into the latest in software development, cloud architecture, and cybersecurity. From technical deep dives to industry trends, we’ve got you covered."
                pageTitleBold="Insights That "
                pageTitleLight="Engineer Success"
            />
            <section id="blogs"></section>
        </>
    );
}
