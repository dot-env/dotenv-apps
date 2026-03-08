import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | UI/UX Design",
    openGraph: {
        title: "Services | UI/UX Design - Dotenv",
        description: "Explore the Services | UI/UX Design services delivered by Dotenv Consulting.",
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
