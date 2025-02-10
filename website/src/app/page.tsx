import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Footer from "#/components/footer";
import { projects } from "#/configs/site";
import { Button } from "#/components/ui/button";
import ContactForm from "#/components/contact-form";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main
        className="flex justify-center items-center md:items-start gap-8 my-16 px-8 md:px-0 align-middle"
        id="home"
      >
        <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-5 md:mt-10">
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
            <Link href="/contact">
              <Button className="flex items-center gap-2">
                Schedule a Free Tech Audit <ArrowRight size={24} />
              </Button>
            </Link>
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
      <hr />
      <section id="about">
        <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
          <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-5">
            <Image
              src="/images/code-typing-animate.svg"
              alt="Code"
              width={500}
              height={500}
              className="col-span-2"
            />
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 col-span-3">
              <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                <span className="text-primary">Code</span>{" "}
                Should Work for You, Not Against You
              </h2>
              <ul className="flex flex-col gap-4 pl-4 md:list-disc">
                <li className="text-sm md:text-left text-center">
                  Struggling with{" "}
                  <strong className="font-medium text-primary">security</strong>
                  {" "}
                  flaws,{" "}
                  <strong className="font-medium text-primary">scaling</strong>
                  {" "}
                  bottlenecks, or{" "}
                  <strong className="font-medium text-primary">
                    deployment
                  </strong>{" "}
                  headaches? We diagnose and solve.
                </li>
                <li className="text-sm md:text-left text-center">
                  <strong className="font-medium text-primary">AWS</strong>,
                  {" "}
                  <strong className="font-medium text-primary">AZURE</strong>,
                  {" "}
                  <strong className="font-medium text-primary">GPC</strong>,
                  {" "}
                  <strong className="font-medium text-primary">
                    Kubernetes
                  </strong>,{" "}
                  <strong className="font-medium text-primary">Docker</strong>
                  {" "}
                  —we speak your stack’s language.
                </li>
                <li className="text-sm md:text-left text-center">
                  Weekly sprints, clear workflows, and no jargon—{" "}
                  <strong className="font-medium text-primary">
                    just results
                  </strong>.
                </li>
                <li className="text-sm md:text-left text-center">
                  Starting a new project? We can help you{" "}
                  <strong className="font-medium text-primary">build</strong>
                  {" "}
                  a scalable and secure{" "}
                  <strong className="font-medium text-primary">
                    software solution
                  </strong>{" "}
                  that meets your business needs.
                </li>
              </ul>
              <Link href="/contact">
                <Button className="flex items-center gap-2">
                  Talk To Us <ArrowRight size={24} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="contact">
        <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
          <div className="justify-center items-center gap-8 grid grid-cols-1">
            <div className="justify-center items-center gap-8">
              <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                <span className="text-primary">Ready</span> to Ship Smarter?
              </h2>
              <p>Stop patching leaks. Let’s engineer solutions that last.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <hr />
      <section id="services">
        <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
          <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-5">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 col-span-3">
              <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                <span className="text-primary">Our</span> Services
              </h2>
              <p className="text-base md:text-left text-center">
                We offer a wide range of services to help you build, scale, and
                secure your software. Our team of experts will work with you to
                optimize your software solutions and ensure your business
                success.
              </p>
              <Link href="/services">
                <Button className="flex items-center gap-2">
                  Learn More <ArrowRight size={24} />
                </Button>
              </Link>
            </div>
            <div className="col-span-2">
              <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/cloud.svg"
                    alt="Cloud"
                    width={128}
                    height={128}
                  />
                  <h3 className="font-bold text-muted-foreground text-2xl">
                    Cloud Architecture
                  </h3>
                  <p className="text-base text-center">
                    We design and implement cloud architectures that are
                    scalable, secure, and cost-effective.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/devops.svg"
                    alt="DevOps"
                    width={128}
                    height={128}
                  />
                  <h3 className="font-bold text-muted-foreground text-2xl">
                    DevOps Pipelines
                  </h3>
                  <p className="text-base text-center">
                    We build automated DevOps pipelines that streamline your
                    development process and increase productivity.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/security.svg"
                    alt="Security"
                    width={128}
                    height={128}
                  />
                  <h3 className="font-bold text-muted-foreground text-2xl">
                    Security Audits
                  </h3>
                  <p className="text-base text-center">
                    We conduct security audits to identify vulnerabilities and
                    protect your software from cyber threats.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/optimization.svg"
                    alt="Optimization"
                    width={128}
                    height={128}
                  />
                  <h3 className="font-bold text-muted-foreground text-2xl">
                    Performance Optimization
                  </h3>
                  <p className="text-base text-center">
                    We optimize your software solutions to improve performance
                    and enhance user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
