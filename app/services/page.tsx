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

const sectionVariants = ["wave", "curve", "tilt", "waveAlt"]
function DisplayServiceSupplyChain() {
  const services = companyServices.supplyChain
  return (
    <Section className="relative bg-white py-0 md:py-0 px-0 md:px-0" containerClassName="py-0 md:py-0" >
      {services.services.map((service, index) => (
        <div
          key={service.title + "-" + index}
          className="relative"
        >

          <SectionDivider fill={index % 2 === 0 ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="top" />
          <div
            className={cn(
              "relative py-24 md:py-26",
              index % 2 === 0 ? "" : "bg-gray-50"
            )}>

            <BlobVariants index={index} />
            <div className="container relative z-10 px-4 md:px-6" id={service.title}>
              <div className={cn("grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16")}>
                <ScrollReveal direction={(index % 2 === 0) ? "left" : "right"} className={(index % 2 === 0) ? "lg:order-first" : "lg:order-last"}>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                        Supply-Chain
                      </div>
                      <h2>
                        {service.title}
                      </h2>
                    </div>
                    <ul className="flex flex-col gap-y-2 text-gray-600">
                      {service.points.map((point, index) => (
                        <li key={"points-" + index} className="inline-flex items-center">
                          <CheckCircle className="mr-2 size-6 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/70 transition-transform hover:scale-105">
                          Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={(index % 2 === 0) ? "right" : "left"} delay={300}>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          <SectionDivider fill={index % 2 === 0 ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index + 1 % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="bottom" />
        </div>

      ))}
    </Section>
  )
}
function DisplayServiceTechnical() {
  const services = companyServices.technical
  return (
    <Section className="relative bg-white py-0 md:py-0 px-0 md:px-0" containerClassName="py-0 md:py-0" >
      {services.services.map((service, index) => (
        <div
          key={service.title + "-" + index}
          className="relative"
        >

          <SectionDivider fill={index % 2 !== 0 ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="top" />
          <div
            className={cn(
              "relative py-24 md:py-26",
              index % 2 !== 0 ? "" : "bg-gray-50"
            )}>

            <BlobVariants index={index} />
            <div className="container relative z-10 px-4 md:px-6" id={service.title}>
              <div className={cn("grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16")}>
                <ScrollReveal direction={(index % 2 === 0) ? "left" : "right"} className={(index % 2 === 0) ? "lg:order-first" : "lg:order-last"}>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary capitalize">
                        {services.department}
                      </div>
                      <h2>
                        {service.title}
                      </h2>
                    </div>
                    <ul className="flex flex-col gap-y-2 text-gray-600">
                      {service.points.map((point, index) => (
                        <li key={"points-" + index} className="inline-flex items-center">
                          <CheckCircle className="mr-2 size-6 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/70 transition-transform hover:scale-105">
                          Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={(index % 2 === 0) ? "right" : "left"} delay={300}>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          <SectionDivider fill={index % 2 !== 0 ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index + 1 % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="bottom" />
        </div>

      ))}
    </Section>
  )
}
function DisplayServiceNewBusinessSetup() {
  const services = companyServices.businessDevelopment
  return (
    <Section className="relative bg-white py-0 md:py-0 px-0 md:px-0" containerClassName="py-0 md:py-0 pb:24">
      {services.services.map((service, index) => (
        <div
          key={service.title + "-" + index}
          className="relative"
        >
          <SectionDivider fill={index % 2 !== 0 ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="top" />
          <div
            className={cn(
              "relative",
              index % 2 !== 0 ? "" : "bg-gray-50"
            )}>
            <BlobVariants index={index} />
            <div className="container relative z-10 px-4 md:px-6 py-24 md:py-26" id={service.title}>
              <div className={cn("grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16")}>
                <ScrollReveal direction={(index % 2 === 0) ? "left" : "right"} className={(index % 2 === 0) ? "lg:order-first" : "lg:order-last"}>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary capitalize">
                        {services.department}
                      </div>
                      <h2>
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                    <div>
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/70 transition-transform hover:scale-105">
                          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={(index % 2 === 0) ? "right" : "left"} delay={300}>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          <SectionDivider className={index % 2 !== 0 ? "fill-white" : "fill-gray-50"} variant={sectionVariants[index + 1 % 4] as "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"} position="bottom" />
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
          imageUrl="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg"
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
                    Integrated Service Firm
                  </h1>
                  <p className="pb-12">
                    VASTEX Resources Limited offers a wide range of services designed to help your business thrive in {"today's"} competitive market.
                  </p>
                  {/* <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                      Why?
                    </div> */}
                  <h3 className="text-center font-normal">Why VASTEX?</h3>
                  <div className="h-full mx-auto max-w-6xl gap-12 px-6 pb-12 pt-8 w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                    {[
                      "Deep industry experience in various sectors and industries.",
                      "Agile, data-driven approach to solutions from procurement to delivery.",
                      "Track record of on-time project execution and operational improvement."
                    ].map((description, index) => (
                      <ScrollReveal key={index} delay={100 * (index + 1)} direction="up" className="h-full">
                        <div className="relative h-full">
                          <span className="absolute text-9xl opacity-35 text-primary/70 -top-10 -left-6 -z-10  font-mono font-extralight">{index + 1}</span>
                          <div className="flex h-full flex-col lg:items-center space-y-2 rounded-xl p-6 lg:text-center transition-all duration-300">
                            <p>{description}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                  <h3 className="text-center font-normal">What VASTEX Offers</h3>
                  <p>
                    Our services covers a variety of sectors including FMCG and Manufacturing supporting both day-to-day operations and large-scale project execution. Our services will improve performance, reduce cost, and enable organizational growth. We deliver end-to-end SCM support tailored to your business goals.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Section>
        {/* <Section className="space-y-2 container mx-auto px-6">
          <div className="text-center space-y-2">
            <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
              why?
            </div>
            <h2 className="text-center">Why VASTEX?</h2>
          </div>
          <div className="h-full mx-auto max-w-6xl gap-12 px-6 py-12 w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
            {[
              "Deep industry experience in various sectors and industries.",
              "Agile, data-driven approach to solutions from procurement to delivery.",
              "Track record of on-time project execution and operational improvement."
            ].map((description, index) => (
              <ScrollReveal key={index} delay={100 * (index + 1)} direction="up" className="h-full">
                <div className="relative h-full">
                  <span className="absolute text-9xl opacity-35 text-primary/70 -top-10 -left-6 -z-10  font-mono font-extralight">{index + 1}</span>
                  <div className="flex h-full flex-col lg:items-center space-y-2 rounded-xl p-6 lg:text-center transition-all duration-300">
                    <p>{description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section> */}
        <DisplayServiceNewBusinessSetup />
        <DisplayServiceSupplyChain />
        <DisplayServiceTechnical />
        {/* CTA Section */}
        <CallToAction />
      </main>

    </div>
  )
}
