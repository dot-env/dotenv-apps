"use client";
import { Button } from "./ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { navData } from "#/configs/nav-bar";
import Link from "next/link";
import { useReCaptcha } from "next-recaptcha-v3";
import { handleContactForm } from "#/backend/contact-form";
import { useToast } from "#/hooks/use-toast";

const ContactForm = () => {
    const { toast } = useToast();
    const { executeRecaptcha } = useReCaptcha();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const token = await executeRecaptcha("contact_form");
        formData.append("recaptcha_token", token);
        const res = await handleContactForm(
            Object.fromEntries(formData.entries()),
        );

        toast({
            title: res.success ? "Success" : "Error",
            description: res.message,
            variant: res.success ? "default" : "destructive",
        });

        if (res.success) form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="gap-4 grid grid-cols-1">
                <div className="gap-4 md:gap-4 grid grid-cols-1 md:grid-cols-2">
                    <Input
                        type="text"
                        placeholder="First Name"
                        required
                        autoComplete="given-name"
                        pattern="[A-Za-z]{1,32}"
                        name="first-name"
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        required
                        autoComplete="family-name"
                        pattern="[A-Za-z]{1,32}"
                        aria-required="true"
                        aria-invalid="true"
                        name="last-name"
                    />
                    <Input
                        type="email"
                        placeholder="Email Address"
                        required
                        autoComplete="email"
                    />
                    <Input
                        type="tel"
                        placeholder="Phone Number (011-456-7890)"
                        required
                        autoComplete="tel"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    />
                    <Select name="company-size" required>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Company Size" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="large">
                                Large &gt;300 people
                            </SelectItem>
                            <SelectItem value="medium">
                                Medium 50-300 people
                            </SelectItem>
                            <SelectItem value="small">
                                Small 5-50 people
                            </SelectItem>
                            <SelectItem value="startup">
                                Startup / Individual
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Select name="service" required>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Service" />
                        </SelectTrigger>
                        <SelectContent>
                            {navData?.menu?.[3]?.items?.map((item, index) => (
                                <SelectItem key={index} value={item.url}>
                                    {item.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Textarea
                        placeholder="Message"
                        className="md:col-span-2"
                    />
                </div>
                <Button type="submit">
                    Book Your Free Session
                    <ArrowRight size={24} />
                </Button>
            </div>
            <div className="mt-2">
                <small className="mt-2 w-full text-gray-500 text-xs text-center">
                    By submitting this form, you agree to our{" "}
                    <Link
                        className="text-black"
                        href="/privacy-policy"
                    >
                        Privacy Policy
                    </Link>
                    .
                </small>
            </div>
        </form>
    );
};

export default ContactForm;
