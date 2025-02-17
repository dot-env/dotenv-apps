import type { Metadata } from "next";

import { generateTitle } from "#/configs/site";
import { Heading } from "#/components/page-header";

export const metadata: Metadata = {
    title: generateTitle("Blog"),
    description:
        "Dive into the latest in software development, cloud architecture, and cybersecurity. From technical deep dives to industry trends, we’ve got you covered.",
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
