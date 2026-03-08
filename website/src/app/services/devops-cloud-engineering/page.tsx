import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | DevOps & Cloud Engineering",
    openGraph: {
        title: "Services | DevOps & Cloud Engineering - Dotenv",
        description: "Explore the Services | DevOps & Cloud Engineering services delivered by Dotenv Consulting.",
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
