import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Legacy System Modernization",
    openGraph: {
        title: "Services | Legacy System Modernization - Dotenv",
        description: "Explore the Services | Legacy System Modernization services delivered by Dotenv Consulting.",
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
