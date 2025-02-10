import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "#/components/ui/button";
import ContactForm from "#/components/contact-form";
import { projects, services, skills } from "#/configs/site";

export default function Home() {
  return (
    <>
      <main
        aria-label="Home"
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
      <section id="about" aria-label="About Us">
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
      <section id="contact" aria-label="Contact Us">
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
      <section id="services" aria-label="Our Services">
        <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
          <div className="group justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-6">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 md:col-span-2">
              <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                <span className="text-primary">Our</span> Services
              </h2>
              <p className="text-base md:text-left text-center">
                We offer a wide range of services to help you build, scale, and
                secure your software. Our team of experts will work with you to
                optimize your software solutions and ensure your business
                success.
              </p>
              <Link href="/services" aria-label="Learn more about our services">
                <Button className="flex items-center gap-2">
                  Learn More <ArrowRight size={24} />
                </Button>
              </Link>
            </div>
            <div className="md:col-span-4">
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                {services.slice(0, 4).map((service) => (
                  <Service key={service.name} service={service} />
                ))}
              </div>
            </div>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 md:col-span-6">
              {services.slice(4, 7).map((service) => (
                <Service key={service.name} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="projects" aria-label="Our Projects">
        <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
          <div className="flex flex-col justify-center items-center gap-8 md:grid grid-cols-1">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
              <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                <span className="text-primary">Code</span> That Speaks Volumes
              </h2>
              <p className="text-base md:text-left text-center">
                See how we turn complex challenges into scalable solutions. Our
                team of experts will work with you to optimize your software
                solutions and ensure your business success.
              </p>
            </div>

            <div className="gap-8 grid grid-cols-2 md:grid-cols-3">
              {projects.slice(0, 6).map((project) => (
                <Link
                  href={`/our-work#${
                    project.name.toLocaleLowerCase().replaceAll(" ", "-")
                  }`}
                  key={project.name}
                  className="group flex flex-col gap-4 bg-primary-foreground hover:shadow-md peer-hover:blur-sm p-4 rounded-md text-primary hover:scale-105 transition-all"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={100}
                    height={100}
                    className="group-hover:filter-none grayscale group-hover:grayscale-0 rounded-md w-12 h-12 transition-all filter"
                  />
                  <div>
                    <h3 className="font-bold text-muted-foreground text-lg text-left">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/projects"
              aria-label="Learn more about our projects"
              className="mt-8"
            >
              <Button className="flex items-center gap-2">
                View Our Portfolio<ArrowRight size={24} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <hr />
      <section id="process" aria-label="Our Process">
        <div className="flex flex-col justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
          <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-5">
            <Image
              src="/images/project-stages-animate.svg"
              alt="Process"
              width={500}
              height={500}
              className="col-span-2"
            />
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 col-span-3">
              <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                How <span className="text-primary">It Works</span>
              </h2>
              <ul className="flex flex-col gap-4 pl-4 md:list-disc">
                <li className="text-sm md:text-left text-center">
                  <strong className="font-medium text-primary">Consult</strong>:
                  {" "}
                  Free 60-minute discovery call to map your needs.
                </li>
                <li className="text-sm md:text-left text-center">
                  <strong className="font-medium text-primary">Plan</strong>:
                  {" "}
                  Roadmap with timelines, milestones, and costs.
                </li>
                <li className="text-sm md:text-left text-center">
                  <strong className="font-medium text-primary">Build</strong>:
                  {" "}
                  Agile development with biweekly demos.
                </li>
                <li className="text-sm md:text-left text-center">
                  <strong className="font-medium text-primary">
                    Launch & Optimize
                  </strong>
                  : Post-deployment support and scaling.
                </li>
              </ul>
            </div>
          </div>

          <Link href="/contact">
            <Button className="flex items-center gap-2">
              Get Started <ArrowRight size={24} />
            </Button>
          </Link>
        </div>
      </section>
      <hr />
      <section id="skills" aria-label="Our Skills">
        <div className="justify-center items-center gap-8 grid grid-cols-1 my-16">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
            <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
              <span className="text-primary">Your Project,</span>{" "}
              Our Precision Toolkit
            </h2>
            <p className="text-base md:text-left text-center">
              We don’t just code – we engineer success with our{" "}
              <strong className="font-semibold">Experience</strong>,{" "}
              <strong className="font-semibold">Expertise</strong>,{" "}
              <strong className="font-semibold">Skills</strong> and a{" "}
              <strong className="font-semibold">full-stack of services</strong>.
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 px-8 md:px-4">
            {skills.map((skill) => (
              <div key={skill.category} className="flex flex-col gap-4">
                <h3>
                  <strong className="font-bold text-muted-foreground text-lg">
                    {skill.category}
                  </strong>
                </h3>
                <ul className="flex flex-col gap-4 pl-4 list-disc">
                  {skill.skills.map((s) => (
                    <li key={s.name} className="text-sm">
                      <strong className="font-medium text-primary">
                        {s.name}
                      </strong>
                      <br />
                      <span className="text-muted-foreground">
                        {s.description}
                      </span>
                      <br />
                      <span className="text-muted-foreground">{s.tagline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Image
              src="/images/business-challenge-animate.svg"
              alt="Skills"
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>

      <hr />

      <section
        id="cta"
        aria-label="Book Your Free Session"
        className="relative h-80 md:h-72 overflow-hidden md:overflow-visible"
      >
        <div className="left-0 md:-left-1/4 absolute bg-primary-foreground w-screen text-primary">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
              <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-5">
                <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 md:col-span-3">
                  <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
                    <span className="text-primary">Ready</span> to Ship Smarter?
                  </h2>
                  <p className="text-base md:text-left text-center">
                    Stop patching leaks. Let’s engineer solutions that last.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex justify-center md:justify-start"
                >
                  <Button className="flex items-center gap-2">
                    Book Your Free Session <ArrowRight size={24} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Service: React.FC<{
  service: typeof services[number];
}> = ({ service }) => (
  <Link
    href={service.url}
    className="peer flex flex-col gap-4 bg-primary-foreground hover:shadow-md peer-hover:blur-sm p-4 rounded-md text-primary hover:scale-105 transition-all"
    aria-label={`Learn more about ${service.name}`}
  >
    <h3 className="font-bold text-muted-foreground text-lg text-left">
      {service.name}
    </h3>
    <p className="text-muted-foreground text-sm">
      {service.description}
    </p>
  </Link>
);
