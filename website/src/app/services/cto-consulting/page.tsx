import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - CTO Consulting",
    openGraph: {
        title: "Services - CTO Consulting - Dotenv",
        description: "Explore the Services - CTO Consulting services delivered by Dotenv Consulting.",
    },
    description:
        "CTO Consulting offers a wide range of services to help you with your technology needs.",
};

export default function page() {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                This is the about us page.
            </p>
        </div>
    );
}
