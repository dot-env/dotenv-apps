import type { Metadata } from "next";
import { generateTitle } from "#/configs/site";
import { Heading } from "#/components/page-header";


export const metadata: Metadata = {
    title: generateTitle("Services"),
    description: "Whether you’re building from scratch or modernizing legacy systems, our end-to-end services are designed to deliver results—fast, secure, and scalable.",
};

export default function page() {
    return (
        <>
        <Heading
            link="#our-services"
            name="Our Services"
            pageDescription="Whether you’re building from scratch or modernizing legacy systems, our end-to-end services are designed to deliver results—fast, secure, and scalable."
            pageTitleBold="Your Vision"
            pageTitleLight=", Our Precision Toolkit"
        />
       <section id="our-services"></section>
    </>
    );
}