import { generateTitle } from "#/configs/site";
import { Metadata } from "next";


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