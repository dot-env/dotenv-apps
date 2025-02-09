import Footer from "#/components/footer";
import { Button } from "#/components/ui/button";
import { projects } from "#/configs/site";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center items-center md:items-start gap-8 my-16 px-8 md:px-0 align-middle">
        <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-5">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 col-span-3">
            <h1 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
              <span className="text-primary">
                Build. Scale. Secure.
              </span>Your Software, Optimized.
            </h1>
            <p className="text-base md:text-left text-center">
              DotEnv Consulting configures high-performance software solutions
              for startups and enterprises. From cloud architecture to DevOps
              pipelines, we turn environment variables into{"  "}
              <code
                className="bg-primary-foreground rounded-md text-primary"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                business variables
              </code>.
            </p>

            <div className="flex gap-4 md:-mt-6">
              {projects.slice(0, 8).map((project) => (
                <Image
                  key={project.name}
                  src={project.image}
                  alt={project.name}
                  width={64}
                  height={64}
                  className="grayscale rounded-md w-8 h-8 filter"
                />
              ))}
            </div>{" "}
            <Button className="flex items-center gap-2">
              Schedule a Free Tech Audit <ArrowRight size={24} />
            </Button>
          </div>
          <Image
            src="/images/hero.svg"
            alt="Hero"
            width={500}
            height={500}
            className="col-span-2"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
