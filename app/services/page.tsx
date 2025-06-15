import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Blob } from "@/components/ui/blob"
import ScrollReveal from "@/components/scroll-reveal"
import CallToAction from "../cta"
import Section from "@/components/section"
import PageHeader from "@/components/page-header"
import { companyServices } from "../companyDetails"
import { cn } from "@/lib/utils"
import { SectionDivider } from "@/components/ui/section-divider"
import Logo from "@/components/logo"

function BlobVariants(props: { index: number }) {
  const { index } = props
  if (index % 3 === 0) {
    return (
      <>
        <Blob
          variant="blob1"
          color="text-blue-400"
          size="sm"
          className="absolute -left-10 -top-10 z-0"
          opacity={0.4}
          animate
        />
        <Blob variant="dots" color="text-gray-400" size="xl" className="absolute right-0 top-0 z-0" opacity={0.3} />
      </>
    )
  }
  if (index % 3 === 2) {
    return (
      <>
        <Blob variant="blob3" color="text-blue-400" size="lg" className="absolute right-5 top-10 z-0" opacity={0.4} />
      </>
    )
  } else {
    return (
      <>
        <Blob
          variant="dots"
          color="text-blue-400"
          size="md"
          className="absolute -left-15 -top-30 z-0"
          opacity={0.4}
          animate
        />
        <Blob variant="blob2" color="text-gray-400" size="sm" className="absolute right-0 top-0 z-0" opacity={0.3} />
      </>
    )
  }
}

// const sectionVariants = ["wave", "curve", "tilt", "waveAlt"]
type ServiceType = {
  department: string;
  introText?: string;
  services: {
    title: string;
    imageUrl: string;
    points?: string[];
    description?: string;
  }[];
}
function ServicePoints(props: { points: string[] }) {
  return (
    <ul className="flex flex-col gap-y-2 text-gray-600">
      {props.points.map((point, index) => (
        <li key={"points-" + index} className="inline-flex items-center">
          <CheckCircle className="mr-2 size-6 text-primary" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  )
}
function DisplayService(props: { services: ServiceType, noPoints?: boolean, isOdd?: boolean, buttonText?: string }) {
  const defaultButtonText = "Request Consultation"
  const sectionVariants = ["wave", "curve", "tilt", "waveAlt"]
  const { isOdd, services } = props
  return (
    <Section className="relative bg-white py-0 md:py-0 px-0 md:px-0" containerClassName="py-0 md:py-0" >
      {services.services.map((service, index) => (
        <div
          key={service.title + "-" + index}
          className="relative"
        >
          <SectionDivider fill={index % 2 === (isOdd ? 1 : 0) ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="top" />
          <div
            className={cn(
              "relative pb-24 py-10 md:pb-26",
              index % 2 === (isOdd ? 1 : 0) ? "" : "bg-gray-50"
            )}>

            <BlobVariants index={index} />
            <div className="container relative z-10 px-4 md:px-6" id={service.title}>
              <div className={cn("grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16")}>
                <ScrollReveal direction={(index % 2 === (isOdd ? 1 : 0)) ? "left" : "right"} className={(index % 2 === (isOdd ? 1 : 0)) ? "lg:order-first" : "lg:order-last"}>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                        {services.department}
                      </div>
                      <h2>
                        {service.title}
                      </h2>
                    </div>
                    {
                      props.noPoints ?
                        <p className="text-gray-600">
                          {service.description ?? ""}
                        </p>
                        :
                        <ServicePoints points={service.points ?? []} />
                    }

                    <div>
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/70 transition-transform hover:scale-105">
                          {props.buttonText ?? defaultButtonText} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={(index % 2 === (isOdd ? 1 : 0)) ? "right" : "left"} delay={300}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={service.imageUrl}
                      width={600}
                      height={400}
                      alt={service.title}
                      className="rounded-xl object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
          <SectionDivider fill={index % 2 === (isOdd ? 1 : 0) ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index + 1 % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="bottom" />
        </div>

      ))}
    </Section>
  )
}
export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PageHeader
          pageTitle="Services"
          imageUrl="/imgs/service-hero.jpg"
          breadcrumb={["services"]}
        />
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-white py-20 md:py-28 min-h-[40vh]" containerClassName="py-0 md:py-0">
          <Blob
            variant="blob3"
            color="text-blue-400"
            size="sm"
            className="absolute -left-10 top-10 z-0"
            opacity={0.8}
            animate
          />
          <Blob variant="dots" color="text-blue-400" size="sm" className="absolute right-0 bottom-0 z-0" opacity={0.3} />

          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                    Our Services
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                    VASTEX Resources Limited
                  </h1>
                  <p className="pb-12">
                    We are an integrated services firm offers a wide range of innovative and practical solutions, designed to help your business thrive in {"today's"} competitive market.
                  </p>
                  {/* <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                      Why?
                    </div> */}
                  <h2 className="text-center font-normal text-vastex-green">Why <Logo />?</h2>
                  <div className="h-full mx-auto max-w-6xl gap-12 px-6 pb-12 pt-8 w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                    {[
                      "We have deep industry experience and deep market knowledge",
                      "We offer agile and insight-driven solutions, from business start-up to launch.",
                      "We are true to our commitments, regulatory and legal demands. we will do it only when it is right."
                    ].map((description, index) => (
                      <ScrollReveal key={index} delay={100 * (index + 1)} direction="up" className="h-full">
                        <div className="relative h-full">
                          <span className="absolute text-9xl opacity-35 text-vastex-green/80 -top-10 -left-6 -z-10  font-mono font-extralight">{index + 1}</span>
                          <div className="flex h-full flex-col lg:items-center space-y-2 rounded-xl p-6 lg:text-center transition-all duration-300">
                            <p>{description}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                  {/* <p>
                    Our services covers a variety of sectors including FMCG and Manufacturing supporting both day-to-day operations and large-scale project execution. Our services will improve performance, reduce cost, and enable organizational growth. We deliver end-to-end SCM support tailored to your business goals.
                  </p> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Section>
        <h2 className="text-center font-normal text-vastex-green pb-0">Our Services</h2>
        <DisplayService services={companyServices.businessDevelopment} noPoints />
        <Section className="relative bg-white py-0 md:py-0 px-0 md:px-0" containerClassName="py-0 md:py-0" >

          <SectionDivider fill={"fill-white"} variant="curve" position="top" />
          <div
            className={cn(
              "relative pb-24 py-10 md:pb-26",
            )}>

            <BlobVariants index={4} />
            <div className="container relative z-10 px-4 md:px-6" id={"Trade Channel and Customer Franchise Building Strategy"}>
              <div className={cn("")}>
                <ScrollReveal direction={"left"}>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                        route-to-market
                      </div>
                      <h2>
                        Trade Channel and Customer Franchise Building Strategy
                      </h2>
                    </div>
                    <p>
                      At Vastex Resources Limited, we don’t just sell—we build lasting partnerships, expand market reach, and drive sustainable growth.
                      Our expertise lies in optimizing primary and secondary sales strategies, enhancing customer engagement, and positioning businesses for long-term success across Nigeria and the West African sub-region.
                      We offer tailored solutions, designed to amplify brand visibility, strengthen trade relationships, and maximize revenue potential. No matter where your business stands, we provide the right platform for performance and expansion.
                    </p>
                    <h4 className="font-bold">Our Expertise & Offerings</h4>
                    <div>
                      <h3>
                        Strategic Route-to-Market (RTM) Models
                      </h3>
                      <p>We help businesses penetrate new markets and fortify existing customer bases with customized RTM strategies:  We help to build,</p>
                      <ul className="pt-4 pb-12 space-y-4 opacity-85">
                        <li><b>Smart Distribution Networks: </b> Establishing multi-tiered sales channels that blend traditional trade and digital platforms for seamless consumer access.</li>
                        <li><b>High-Impact Secondary Sales Force: </b> Recruiting trade partners with great passion to fuel wholesale-to-retail distribution with powerful numeric growth and brand visibility.  </li>
                      </ul>
                    </div>
                    <div>
                      <h3>
                        Customer Engagement & Sustainability Model
                      </h3>
                      <ul className="pt-4 pb-12 space-y-4 opacity-85">
                        <li><b>Customer Acquisition & Retention Model: </b> We shall craft personalized engagement models that attract new customers while deepening loyalty through superior service. In today’s competitive market, retaining customers is harder than ever—but we make it easier because of our understanding of the environment in which we operate.  </li>
                        <li><b>Digital & Social Brand Connection: </b> Strengthening customer franchise-building strategies through interactive digital and social platforms to boost long-term brand loyalty.  </li>
                      </ul>
                    </div>
                    <div>
                      <h3>
                        B2B & Specialty Sales Growth
                      </h3>
                      <ul className="pt-4 pb-12 space-y-4 opacity-85">
                        <li><b>Industry-Specific Sales Solutions: </b>It is ours to strengthen client relations across major food service centers, hypermarkets, downstream oil sector players, and premium retail outlets.</li>
                        <li><b>Business Development Segments: </b>We develop blue prints that Specializes in machine tools, chemical, and agro supplies, to simplify industrial sourcing and procurement.</li>
                        <li><b>Market Intelligence & Mystery Shopping: </b> Deploying expert shopper teams to gather market insights and ensure strategic product placement at high-value sales touch points</li>

                      </ul>
                    </div>
                    <div>
                      <h3>
                        Sales Optimization & Sales Operational Support model
                      </h3>
                      <ul className="pt-4 pb-12 space-y-4 opacity-85">
                        <li><b>Hub Centre Establishment & Franchising: </b> Setting up storage, logistics, and sales operations centers for efficient supply chains and accelerated sell-out success.</li>
                        <li><b>Comprehensive Business Health Checks: </b> Evaluating and optimizing sales models to align financial strategies, operational effectiveness, and customer service excellence.  </li>
                        <li><b>Local & International Brand Expansion: </b> Crafting scalable sales strategies for both domestic businesses and global brands seeking market entry in Nigeria and West Africa.   </li>
                      </ul>
                    </div>
                    <div>
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/70 transition-transform hover:scale-105">
                          Partner with us <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <p className="py-12">
                      From Nigeria to the broader West African market, we empower businesses with innovative solutions that fuel revenue growth and market leadership
                    </p>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </div>
          <SectionDivider fill={"fill-white"} variant="wave" position="bottom" />

        </Section>
        <DisplayService services={companyServices.supplyChain} buttonText="Contact Us" />
        <DisplayService services={companyServices.technical} buttonText="Learn More" />


        {/* CTA Section */}
        <CallToAction />
      </main>

    </div>
  )
}
