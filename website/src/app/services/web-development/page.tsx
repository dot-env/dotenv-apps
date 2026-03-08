import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Web Development",
    openGraph: {
        title: "Services | Web Development - Dotenv",
        description: "Explore the Services | Web Development services delivered by Dotenv Consulting.",
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
