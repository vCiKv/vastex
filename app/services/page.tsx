"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionDivider } from "@/components/ui/section-divider"
import { Blob } from "@/components/ui/blob"
import ScrollReveal from "@/components/scroll-reveal"
import CallToAction from "../cta"
import Section from "@/components/section"

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-white py-20 md:py-28 h-[60vh]">
          {/* Background blobs */}
          <Blob
            variant="blob2"
            color="text-blue-400"
            size="xl"
            className="absolute -left-40 -top-20 z-0"
            opacity={0.07}
            animate
          />
          <Blob variant="dots" color="text-gray-400" size="xl" className="absolute right-0 top-0 z-0" opacity={0.3} />

          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                    Our Services
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                    Comprehensive Business Solutions
                  </h1>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Vastex Resources Limited offers a wide range of services designed to help your business thrive in
                    today's competitive market.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </Section>
        {/* <div className="relative rotate-180 -mb-0.5">
          <SectionDivider variant="wave" fill="fill-gray-50" height={70} />
        </div> */}
        {/* Consulting Section */}
        <Section className="relative bg-white">
          <Blob
            variant="dots"
            color="text-blue-500"
            size="lg"
            className="absolute -left-20 bottom-40 z-0"
            opacity={0.1}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                      Consulting
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                      Expert Business Consulting
                    </h2>
                    <p className="text-gray-600 md:text-xl/relaxed">
                      Our consulting services help businesses identify opportunities, overcome challenges, and achieve
                      their strategic goals.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Strategic business planning and development",
                      "Process optimization and efficiency improvement",
                      "Market analysis and competitive intelligence",
                      "Business transformation and change management",
                      "Financial analysis and planning",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-blue-800 transition-transform hover:scale-105">
                        Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={600}
                    height={400}
                    alt="Consulting Services"
                    className="rounded-lg object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>
        {/* <div className="relative">
          <SectionDivider variant="curve" fill="fill-white" height={80} />
        </div> */}
        {/* Industrial Solutions Section */}
        <Section className="relative bg-gray-50"
          divider={{
            variant: "curve", fill: "fill-gray-50", height: 80, position: "top"
          }}
          dividerBottom={{
            variant: "tilt", fill: "fill-gray-50", height: 80, position: "bottom"
          }}
        >
          <Blob
            variant="blob3"
            color="text-gray-400"
            size="lg"
            className="absolute right-0 top-20 z-0"
            opacity={0.07}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left" className="order-2 lg:order-1">
                <div className="flex items-center justify-center">
                  <Image
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={600}
                    height={400}
                    alt="Industrial Solutions"
                    className="rounded-lg object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300} className="order-1 lg:order-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                      Industrial Solutions
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                      Comprehensive Industrial Solutions
                    </h2>
                    <p className="text-gray-600 md:text-xl/relaxed">
                      We provide end-to-end industrial solutions to optimize your operations and improve productivity.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Industrial equipment supply and installation",
                      "Technical support and maintenance services",
                      "Facility optimization and modernization",
                      "Safety compliance and risk management",
                      "Energy efficiency and sustainability solutions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-blue-800 transition-transform hover:scale-105">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>
        {/* <div className="relative">
          <SectionDivider variant="tilt" fill="fill-white" height={60} />
        </div> */}

        {/* Logistics Section */}
        <Section className="relative bg-white">
          <Blob
            variant="dots"
            color="text-blue-500"
            size="lg"
            className="absolute -left-20 bottom-40 z-0"
            opacity={0.1}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Logistics</div>
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                      Efficient Logistics Solutions
                    </h2>
                    <p className="text-gray-600 md:text-xl/relaxed">
                      Our logistics services ensure the smooth flow of goods and materials throughout your supply chain.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Global shipping and transportation management",
                      "Warehousing and inventory management",
                      "Distribution network optimization",
                      "Supply chain visibility and tracking",
                      "Customs clearance and compliance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-blue-800 transition-transform hover:scale-105">
                        Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={600}
                    height={400}
                    alt="Logistics Services"
                    className="rounded-lg object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>
        {/* <div className="relative">
          <SectionDivider variant="curve" fill="fill-white" height={80} />
        </div> */}

        {/* Procurement Section */}
        <Section className="relative bg-gray-50"
          divider={{
            variant: "curveAlt", fill: "fill-gray-50", height: 80, position: "top", className: "mt-4"
          }}
          dividerBottom={{
            variant: "waveAlt", fill: "fill-gray-50", height: 80, position: "bottom"
          }}
        >
          <Blob
            variant="blob3"
            color="text-gray-400"
            size="lg"
            className="absolute right-0 top-20 z-0"
            opacity={0.07}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left" className="order-2 lg:order-1">
                <div className="flex items-center justify-center">
                  <Image
                    src="https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={600}
                    height={400}
                    alt="Procurement Services"
                    className="rounded-lg object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300} className="order-1 lg:order-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                      Procurement
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                      Strategic Procurement Services
                    </h2>
                    <p className="text-gray-600 md:text-xl/relaxed">
                      Our procurement services help you source the right materials and equipment at competitive prices.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Strategic sourcing and vendor management",
                      "Cost optimization and spend analysis",
                      "Contract negotiation and management",
                      "Supply chain risk management",
                      "Sustainable and ethical sourcing",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-blue-800 transition-transform hover:scale-105">
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>
        {/* <div className="relative">
          <SectionDivider variant="tilt" fill="fill-gray-50" height={60} />
        </div> */}

        {/* Manufacturing Section */}
        <Section className="relative bg-white">
          <Blob
            variant="dots"
            color="text-blue-500"
            size="lg"
            className="absolute -left-20 bottom-40 z-0"
            opacity={0.1}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                      Manufacturing
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                      Custom Manufacturing Solutions
                    </h2>
                    <p className="text-gray-600 md:text-xl/relaxed">
                      Our manufacturing services provide high-quality production capabilities tailored to your specific
                      needs.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Custom fabrication and production",
                      "Quality control and assurance",
                      "Production process optimization",
                      "Product design and engineering support",
                      "Prototyping and small batch production",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-blue-800 transition-transform hover:scale-105">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://images.pexels.com/photos/3811832/pexels-photo-3811832.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={600}
                    height={400}
                    alt="Manufacturing Services"
                    className="rounded-lg object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <CallToAction />
      </main>

    </div>
  )
}
