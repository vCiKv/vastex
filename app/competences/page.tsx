"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Blob } from "@/components/ui/blob"
import ScrollReveal from "@/components/scroll-reveal"
import CallToAction from "@/components/cta"
import Section from "@/components/section"
import PageHeader from "@/components/page-header"
import { companyServices } from "../companyDetails"
import { cn } from "@/lib/utils"
import { SectionDivider } from "@/components/ui/section-divider"
import Logo from "@/components/logo"
import { useState } from "react"
import useHotjar from "@/hooks/useHotjar"

function BlobVariants(props: { index: number }) {
  const { index } = props
  if (index % 3 === 0) {
    return (
      <>
        <Blob
          variant="blob1"
          color="text-blue-400"
          size="sm"
          className="absolute -left-10 top-10 -z-10"
          opacity={0.4}
          animate
        />
        <Blob variant="dots" color="text-gray-400" size="xl" className="absolute right-0 top-0 -z-10" opacity={0.3} />
      </>
    )
  }
  if (index % 3 === 2) {
    return (
      <>
        <Blob variant="blob3" color="text-blue-400" size="lg" className="absolute right-5 top-10 -z-10" opacity={0.4} />
      </>
    )
  } else {
    return (
      <>
        <Blob
          variant="dots"
          color="text-blue-400"
          size="md"
          className="absolute -left-5 -bottom-30 -z-10"
          opacity={0.4}
          animate
        />
        <Blob variant="blob2" color="text-gray-400" size="sm" className="absolute right-0 top-0 -z-10" opacity={0.3} />
      </>
    )
  }
}
function ServiceCategory(props: {
  children: React.ReactElement;
  title: string
}) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(p => !p)
  return (
    <>
      <div className="flex gap-1 items-center py-4 z-20 cursor-pointer px-6" onClick={toggleShow} id={"service-" + props.title.toLowerCase()}>
        <ChevronDown className={"size-10 text-primary " + (show ? "rotate-0" : "-rotate-90")} />
        <div className="flex flex-col">
          <h3 className="text-primary capitalize pb-0">{props.title}</h3>
          <p className="opacity-90 text-xs -mt-2">click to hide/show section</p>
        </div>
      </div>
      {show && props.children}
    </>
  )
}
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
        <li key={"points-" + index} className="inline-flex items-center gap-2">
          <span className="size-6 block">
            <CheckCircle className="size-full text-primary" />
          </span>
          <span className="w-11/12">{point}</span>
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
          {index !== 0 && <SectionDivider fill={index % 2 === (isOdd ? 1 : 0) ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="top" />}
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
export default function CompetencesPage() {
  useHotjar()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PageHeader
          pageTitle="Competences"
          imageUrl="/imgs/service-hero.jpeg"
          breadcrumb={["competences"]}
        />
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-white pt-16 pb-8 min-h-[40vh]" containerClassName="py-0 md:py-0">
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
                    Our Competences
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                    VASTEX Resources Limited
                  </h1>
                  <p className="pb-12">
                    We are an integrated services firm that offers a wide range of innovative and practical solutions, designed to help your business thrive in today's competitive market.                  </p>
                  {/* <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                      Why?
                    </div> */}
                  <h2 className="text-center font-normal text-vastex-green inline-flex gap-2 items-center">Why <Logo /></h2>
                  <div className="h-full mx-auto max-w-6xl gap-12 px-6 pb-12 pt-8 w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                    {[
                      "We have deep industry experience and deep market knowledge",
                      "We offer agile and insight-driven solutions, from business start-up to launch.",
                      "We are true to our commitments, regulatory and legal demands. we will do it only when it is right."
                    ].map((description, index) => (
                      <ScrollReveal key={index} delay={100 * (index + 1)} direction="up" className="h-full">
                        <div className="relative h-full">
                          <span className="absolute text-9xl opacity-35 text-vastex-green/80 top-0 -left-10 lg:-top-10 lg:-left-6 -z-10  font-mono font-extralight">{index + 1}</span>
                          <div className="flex h-full flex-col lg:items-center space-y-2 rounded-xl p-6 lg:text-center transition-all duration-300">
                            <p className="text-left lg:text-center">{description}</p>
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
        <h2 className="text-center font-normal text-vastex-green pb-0 relative z-20">Our Competences</h2>

        <ServiceCategory title="business Development">
          <DisplayService services={companyServices.businessDevelopment} noPoints />
        </ServiceCategory>

        <ServiceCategory title="route to market">
          <Section className="relative bg-white py-0 md:py-0 px-0 md:px-0" containerClassName="py-0 md:py-0" >
            <div
              className={cn(
                "relative pb-24 py-10 md:pb-26",
              )}>
              <div className="container relative z-10 px-4 md:px-6" id={"Trade Channel and Customer Franchise Building Strategy"}>
                <div className={cn("")}>
                  <ScrollReveal direction={"left"}>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="pb-8">
                        <div className="space-y-2">
                          <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                            route-to-market
                          </div>
                          <h3>
                            Appropriate RTM Model for your Business
                          </h3>
                        </div>
                        <p>
                          At Vastex Resources we work with you to penetrate and hold on to new markets while reinforcing existing customer bases through tailored RTM strategies that will                        </p>
                        <div className="space-y-4">
                          <div>
                            <h6 className="font-bold pb-2">Identify, design and develop suitable distribution Channels </h6>
                            <p>We develop multi-layered sales networks that integrates both traditional and digital platforms for wider consumer accessibility.  </p>
                          </div>
                          <div>
                            <h6 className="font-bold pb-2">Build Strong Secondary Sales Force for Clients.</h6>
                            <p>
                              We Identify, recruit and groom the right internal and external trade partners that will drive businesses from Manufacturing, through to retail, mobilizing the right secondary sales force that will build your expected numeric and width of distribution is key to our Organization. We grow businesses through increased numeric strength of distribution and continuous brand exposition at consumer touch points.                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pb-8">
                        <div className="space-y-2">
                          <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                            route-to-market
                          </div>
                          <h3>
                            Develop customer service schemes for business sustainability
                          </h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h6 className="font-bold pb-2">Customer Acquisition & Retention </h6>
                            <p>
                              We Design personalized engagement solutions that attracts new customers, and deepen loyalty through superior service. In today’s Nigeria business environment, it has become more difficult to recruit, develop and keep Customers .At Vastex Resources Ltd, we will work with you to create and sustain the brand essence and offerings that keeps your business and entire customer channels profitable and competitive.
                            </p>
                          </div>

                          <div>
                            <h6 className="font-bold pb-2">Brand-Driven Consumer Connection</h6>
                            <p>
                              Implementing customer franchise-building strategies via implementation of cost effective Trade Marketing plans, digital and social engagement for great brand exposition and reach.
                            </p>
                          </div>
                          <div>
                            <h6 className="font-bold pb-2">B2B or Specialty Sales and Customer Service model</h6>
                            <p>
                              We build Business network for both FMCG and non FMCG Clients. We develop and maintain strong customer relationship with companies and major retail hubs in Nigeria. Our business model cuts across different business sectors and segments.                            </p>
                            <p>
                              We create mystery shopper teams for major brands to improve market information gathering and to ensure that chosen brands are at the right sales touch points.
                            </p>
                          </div>
                          <div>
                            <h6 className="font-bold pb-2">Business Health Check on Sales and distribution System</h6>
                            <p>
                              We help businesses to develop sales friendly business models that are measurable and compatible with financial, Customer service and Sales Operations standard.
                            </p>
                          </div>
                          <div>
                            <h6 className="font-bold pb-2">Sales Optimization for Local & International Brands </h6>
                            <p>
                              Creating scalable sales and customer service platforms tailored toward quick brand entrenchment
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Link href="/contact">
                          <Button className="bg-primary hover:bg-primary/70 transition-transform hover:scale-105">
                            Partner with us <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                      <p className="py-4">
                        From Nigeria to the broader West African market, we empower businesses with innovative solutions that fuel revenue growth and market leadership
                      </p>
                    </div>
                  </ScrollReveal>

                </div>
              </div>
            </div>
          </Section>
        </ServiceCategory>

        <ServiceCategory title="supply Chain">
          <DisplayService services={companyServices.supplyChain} buttonText="Contact Us" isOdd />
        </ServiceCategory>

        <ServiceCategory title="technical">
          <DisplayService services={companyServices.technical} buttonText="Learn More" />
        </ServiceCategory>


        {/* CTA Section */}
        <CallToAction>
          <div className="space-y-4 mx-auto text-center">
            <h6 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Ready to Innovate?</h6>
            <p className="mx-auto max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take the next step with VASTEX Resources Limited. We'll help you unlock your business's full potential.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-blue-50 transition-transform hover:scale-105">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-white text-white hover:text-primary hover:bg-accent"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </CallToAction>
      </main>

    </div>
  )
}
