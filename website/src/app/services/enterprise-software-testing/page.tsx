import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Quality Assurance",
    openGraph: {
        title: "Services | Quality Assurance - Dotenv",
        description: "Explore the Services | Quality Assurance services delivered by Dotenv Consulting.",
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
