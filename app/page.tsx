"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight, Globe, Package, Settings, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Blob } from "@/components/ui/blob"
import ScrollReveal from "@/components/scroll-reveal"
import CallToAction from "./cta"
import Section from "@/components/section"
import Logo from "@/components/logo"


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <Section containerClassName="relative overflow-hidden bg-white py-0 md:py-0 pb-28 min-h-screen -z-10">
          {/* <Blob
            variant="blob2"
            color="text-blue-400"
            size="xl"
            className="absolute -left-40 -top-20 z-0"
            opacity={0.07}
            animate
          />
          <Blob
            variant="blob3"
            color="text-blue-600"
            size="lg"
            className="absolute -right-20 top-40 z-0"
            opacity={0.05}
            animate
          />
          <Blob variant="dots" color="text-gray-400" size="xl" className="absolute right-0 top-0 z-0" opacity={0.3} /> */}

          {/* <div className="relative z-10">
            <div className="px-8 md:px-10 bg-white/40">
              <div className="flex flex-col justify-center space-y-4 py-20 md:py-28">
                <div className="space-y-2">
                  <ScrollReveal delay={300} direction="left">
                    <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                      Innovative Solutions <br /><span className="italic text-black font-light pl-6">for</span><br /> Global Industries
                    </h1>
                  </ScrollReveal>
                  <div className="mb-4">{mounted && <Logo width={176} height={100} className="pb-4" />}</div>
                  <ScrollReveal delay={600} direction="left">
                    <p className="max-w-[600px] text-gray-800 md:text-xl">
                      Vastex Resources Limited delivers expert consulting, industrial solutions, logistics, procurement,
                      and manufacturing services to businesses worldwide.
                    </p>
                  </ScrollReveal>
                </div>
                <ScrollReveal delay={900} direction="up">
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/services">
                      <Button className="bg-primary hover:bg-blue-800 transition-transform hover:scale-105">
                        Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-blue-50 transition-transform hover:scale-105"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={600} direction="right" className="-z-10 h-[40vh] w-full">
                <div className="flex items-center justify-center size-full">
                  <Image
                    src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg"
                    alt="Vastex Resources Limited"
                    className="rounded-lg object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500 -z-10"
                    priority
                    fill
                  />
                </div>
              </ScrollReveal>
            </div>
          </div> */}

          <div className="relative z-10">
            <div className="px-8 md:px-10 bg-white/40 h-[90vh]">
              <div className="flex flex-col justify-center space-y-4 py-20 md:py-28">
                <div className="space-y-2">
                  <ScrollReveal delay={300} direction="left">
                    <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                      Innovative Solutions <br /><span className="italic text-black font-light pl-6">for</span><br /> Global Industries
                    </h1>
                  </ScrollReveal>
                  <div className="mb-4">{mounted && <Logo width={176} height={100} className="pb-4" />}</div>
                  <ScrollReveal delay={600} direction="left">
                    <p className="max-w-[600px] text-gray-800 md:text-xl">
                      Vastex Resources Limited delivers expert consulting, industrial solutions, logistics, procurement,
                      and manufacturing services to businesses worldwide.
                    </p>
                  </ScrollReveal>
                </div>
                <ScrollReveal delay={900} direction="up">
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/services">
                      <Button className="bg-primary hover:bg-blue-800 transition-transform hover:scale-105">
                        Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-blue-50 transition-transform hover:scale-105"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
              <div className="absolute top-0 left-0 size-full">
                <ScrollReveal delay={600} direction="right" className="-z-10  size-full">
                  <Image
                    src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg"
                    alt="Vastex Resources Limited"
                    className="rounded-lg object-cover transition-transform hover:scale-[1.02] duration-500 -z-10"
                    priority
                    fill
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        {/* <div className="relative  rotate-180">
          <SectionDivider variant="wave1" fill="fill-gray-50" height={110} />
        </div> */}
        <Section className="relative bg-gray-50 z-20"
          // style={{ marginTop: "-300px" }}
          containerClassName="-mt-64"
          divider={{ variant: "waveAlt", fill: "fill-gray-50", height: 110, position: "both", className: "z-20" }}
        >
          <Blob
            variant="dots"
            color="text-blue-500"
            size="lg"
            className="absolute -left-20 bottom-40 z-0"
            opacity={0.1}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                    Comprehensive Business Solutions
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We provide end-to-end solutions tailored to your business needs
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Settings className="h-5 w-5 text-primary" />,
                  title: "Consulting",
                  description: "Expert business and technical consulting services",
                  features: ["Strategic planning", "Process optimization", "Business transformation"],
                  delay: 100,
                },
                {
                  icon: <Globe className="h-5 w-5 text-primary" />,
                  title: "Industrial Solutions",
                  description: "Comprehensive industrial solutions for your business",
                  features: ["Equipment supply", "Technical support", "Maintenance services"],
                  delay: 300,
                },
                {
                  icon: <Truck className="h-5 w-5 text-primary" />,
                  title: "Logistics",
                  description: "Efficient logistics and supply chain management",
                  features: ["Global shipping", "Warehousing", "Distribution"],
                  delay: 500,
                },
                {
                  icon: <Package className="h-5 w-5 text-primary" />,
                  title: "Procurement",
                  description: "Strategic procurement and sourcing solutions",
                  features: ["Vendor management", "Cost optimization", "Supply chain solutions"],
                  delay: 700,
                },
                {
                  icon: <Settings className="h-5 w-5 text-primary" />,
                  title: "Manufacturing",
                  description: "Custom manufacturing and production services",
                  features: ["Custom fabrication", "Quality control", "Production optimization"],
                  delay: 900,
                  colSpan: "md:col-span-2 lg:col-span-1",
                },
              ].map((service, index) => (
                <ScrollReveal key={index} delay={service.delay} direction="up">
                  <Card
                    className={`border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.colSpan || ""}`}
                  >
                    <CardHeader className="pb-2">
                      <div className="mb-2 rounded-full bg-blue-100 p-2 w-10 h-10 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={1000}>
              <div className="flex justify-center">
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-blue-50 transition-transform hover:scale-105"
                  >
                    View All Services <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Section>
        {/* <div className="relative">
          <SectionDivider variant="wave1" fill="fill-gray-50" height={110} />
        </div> */}


        {/* About Section */}
        <Section className="relative bg-white"
          divider={{
            variant: "curve", fill: "fill-white", height: 80,
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">About Us</div>
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                      Your Trusted Partner in Business Excellence
                    </h2>
                    <p className="text-gray-600 md:text-xl/relaxed">
                      Vastex Resources Limited is a global leader in providing comprehensive business solutions across
                      multiple industries.
                    </p>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      With years of experience and a team of dedicated professionals, we deliver innovative solutions
                      that help businesses optimize their operations, reduce costs, and achieve sustainable growth.
                    </p>
                    <p>
                      Our commitment to excellence, integrity, and customer satisfaction has made us a trusted partner
                      for businesses of all sizes around the world.
                    </p>
                  </div>
                  <div>
                    <Link href="/about">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-blue-50 transition-transform hover:scale-105"
                      >
                        Learn More About Us <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://images.pexels.com/photos/32074753/pexels-photo-32074753/free-photo-of-team-collaborating-in-modern-office-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    width={500}
                    height={500}
                    alt="About Vastex Resources Limited"
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

        {/* Testimonials Section */}
        <Section className="relative bg-gray-50"
          divider={{
            variant: "curve", fill: "fill-gray-50", height: 80, position: "top"
          }}
          dividerBottom={{
            variant: "waveAlt", fill: "fill-gray-50", height: 60, position: "bottom"
          }}
        >
          <Blob
            variant="dots"
            color="text-blue-500"
            size="xl"
            className="absolute -right-20 top-20 z-0"
            opacity={0.1}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                    What Our Clients Say
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from businesses that have partnered with Vastex Resources Limited
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto h-full grid max-w-5xl grid-cols-1 gap-6 py-28 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Vastex Resources Limited provided exceptional consulting services that transformed our business operations. Their expertise and dedication to our success were outstanding.",
                  name: "Sarah Johnson",
                  title: "CEO, Global Tech Solutions",
                  delay: 200,
                },
                {
                  quote:
                    "The logistics and procurement services provided by Vastex Resources Limited have significantly improved our supply chain efficiency and reduced costs.",
                  name: "Michael Chen",
                  title: "Operations Director, Innovative Manufacturing",
                  delay: 400,
                },
                {
                  quote:
                    "Vastex's industrial solutions have been instrumental in modernizing our production facilities. Their expertise and attention to detail are unmatched in the industry.",
                  name: "Emily Rodriguez",
                  title: "Plant Manager, Advanced Industries",
                  delay: 600,
                },
              ].map((testimonial, index) => (
                <ScrollReveal key={index} delay={testimonial.delay} direction="up">
                  <Card className="border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5 text-yellow-500"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600">{`"${testimonial.quote}"`}</p>
                        <div className="flex items-center space-x-4">
                          <div className="rounded-full bg-gray-200 p-1">
                            <div className="h-10 w-10 rounded-full bg-gray-300" />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </Section>

        {/*stats page*/}
        <Section className="relative  py-16 md:py-24">
          <div className="container mx-auto min-h-[50vh]">
            <div className="w-full h-[50vh]">
              <img
                src={"/map.svg"}
                alt="map"
                loading="lazy"
              />
            </div>
            <h3 className="text-center text-5xl capitalize">{"Don't"} Miss the <span className="text-primary font-black">Next Great</span><br /> Thing <span className="opacity-70 font-light">Ever Again</span></h3>
          </div>
        </Section>
        {/* CTA Section */}
        <CallToAction />
        {/* <div className="relative rotate-180 -mb-1">
          <SectionDivider variant="wave" fill="fill-primary" height={70} />
        </div>
        <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
          <Blob
            variant="blob2"
            color="text-white"
            size="xl"
            className="absolute -left-40 top-0 z-0"
            opacity={0.07}
            animate
          />
          <Blob variant="dots" color="text-white" size="lg" className="absolute right-0 bottom-0 z-0" opacity={0.1} />
          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact us today to discuss how Vastex Resources Limited can help your business thrive.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="bg-white text-primary hover:bg-blue-50 transition-transform hover:scale-105">
                      Contact Us Today
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:text-white hover:bg-blue-900 bg-primary transition-transform hover:scale-105"
                    // className="border-primary text-primary hover:bg-blue-50 transition-transform hover:scale-105"

                    >
                      Explore Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section> */}

      </main>

    </div >
  )
}
