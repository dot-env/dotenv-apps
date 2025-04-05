import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gamepad2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start gap-[32px] row-start-2">
        <div className="flex flex-col justify-center items-center space-y-8 bg-[#0d0d0d] px-6 py-12 min-h-screen text-white">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Sparkles className="mr-2 w-10 h-10 text-[#ff4c60] animate-pulse" />
              <h1 className="font-extrabold text-white text-5xl tracking-tight">
                Welcome to <span className="text-[#ff4c60]">Codee</span>
              </h1>
            </div>
            <p className="mx-auto max-w-xl text-gray-400 text-lg">
              Level up your coding skills with fun challenges, achievements, and
              a community of curious minds. Let the games begin!
            </p>
          </div>

          <div className="flex sm:flex-row flex-col gap-4">
            <Link href="/signup">
              <Button className="bg-[#ff4c60] hover:bg-[#e84252] shadow-md px-6 py-3 rounded-xl font-bold text-white">
                Get Started
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="hover:bg-white px-6 py-3 border-white rounded-xl font-semibold text-white hover:text-black"
              >
                I Have an Account
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <Gamepad2 className="w-16 h-16 text-gray-600 animate-bounce" />
          </div>
        </div>
      </main>
      <footer className="flex flex-wrap justify-center items-center gap-[24px] row-start-3">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"
        >
          Terms of Service
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy"
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
