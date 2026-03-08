import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Scalable Software Architecture",
    openGraph: {
        title: "Services | Scalable Software Architecture - Dotenv",
        description: "Explore the Services | Scalable Software Architecture services delivered by Dotenv Consulting.",
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
