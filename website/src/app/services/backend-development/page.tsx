import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Backend Development",
    openGraph: {
        title: "Services | Backend Development - Dotenv",
        description: "Explore the Services | Backend Development services delivered by Dotenv Consulting.",
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
