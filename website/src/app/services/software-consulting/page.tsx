import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Software Consulting",
    openGraph: {
        title: "Services | Software Consulting - Dotenv",
        description: "Explore the Services | Software Consulting services delivered by Dotenv Consulting.",
    }
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
