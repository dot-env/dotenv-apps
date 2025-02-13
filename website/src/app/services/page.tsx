import { generateTitle } from "#/configs/site";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: generateTitle("Services"),
};

export default function page() {
    return (
        <div>
            <h1>Services</h1>
            <p>
                This is the about us page.
            </p>
        </div>
    );
}