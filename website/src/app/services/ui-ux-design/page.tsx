import { generateTitle } from "#/configs/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: generateTitle("Services | UI/UX Design"),
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
