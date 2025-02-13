import { generateTitle } from "#/configs/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: generateTitle("Privacy Policy"),
};

export default function page() {
    return (
        <>
            <main className="flex flex-col justify-center items-center mx-auto px-4 py-8 min-h-[60vh] container">
                <h1 className="mb-8 font-bold text-muted-foreground text-4xl text-center">
                    <span className="text-primary">Privacy{" "}</span>
                    Policy
                </h1>
                <p className="text-muted-foreground text-base">
                    Your privacy is important to us. We only collect the
                    information necessary to provide our services.
                </p>
                <p className="text-muted-foreground text-base">
                    We do not share or sell your personal information with third
                    parties without your consent, except as required by law.
                </p>
                <p className="text-muted-foreground text-base">
                    If you have any questions about our privacy practices,
                    please feel free to contact us.
                </p>
            </main>
            <hr />
        </>
    );
}
