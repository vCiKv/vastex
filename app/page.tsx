"use client"
import Link from "next/link"
import Image from "next/image"
// import { ArrowRight, CheckCircle, ChevronRight, Package, Settings, TrafficCone, Truck } from "lucide-react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Blob } from "@/components/ui/blob"
import ScrollReveal from "@/components/scroll-reveal"
import CallToAction from "./cta"
import Section from "@/components/section"
import Logo from "@/components/logo"
// import { FloatingPaths } from "@/components/ui/background-paths"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function HeroText() {
  const innovativeAlternatives = [
    "Innovative",
    "Winning",
    "Practical",
    "Transformative",
  ]
  return (
    <div className="flex flex-col justify-center pt-16 pb-48 bg-white/10 bg-gradient-to-t to-white/80 via-50%-white/50 from-white/25 backdrop-blur-xs size-full">

      {/* <div className="space-y-2 pt-8 relative"> */}
      <div className="flex-col-reverse items-center md:grid grid-cols-2 w-full px-2">
        <ScrollReveal delay={300} direction="left" className="w-full">
          <div className="flex flex-col md:flex-row gap-y-6 gap-x-10 items-center justify-center">
            <h1 className="text-primary text-5xl md:text-5xl lg:text-6xl flex flex-col gap-y-2.5 items-center text-center w-full justify-center">
              <span className="flex flex-col justify-center items-center gap-x-2.5">
                <span className="p-1.5 bg-primary rounded-xl text-white"><AnimatedTextCycle words={innovativeAlternatives} interval={2500} /> </span>
                <span className="p-1.5">
                  Solutions
                </span>
              </span>
              <span className="block italic text-white font-light px-1.5">for</span>
              <span className="block">
                Businesses
              </span>
            </h1>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300} direction="right" className="flex justify-center pb-8 pr-4">
          <div className="scale-80 md:scale-100 w-[275px] h-[176px]">
            <Logo width={"100%"} height={"100%"} className="pb-4 size-full" />
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={600} direction="up">
        <p className="leading-snug text-center py-4 md:w-4/5 px-1 mx-auto text-stone-950 rounded-xl">
          VASTEX Resources Limited is an integrated services firm dedicated to assisting businesses in achieving their commercial objectives with focus on Operations Consulting, Company Representation and New Business Set Up.        </p>
      </ScrollReveal>
      <ScrollReveal delay={900} direction="up" className="relative pb-10 pt-2">
        <div className="flex flex-col gap-2 min-[400px]:flex-row items-center justify-center z-10 relative">
          <Link href="/services">
            <Button className="bg-primary hover:bg-primary/70 transition-transform hover:scale-105">
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-background"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </div>
    // </div>
  )
}
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-white py-0 md:py-0 pb-28 min-h-screen w-screen">
          <div className="relative bg-accent/60 w-full">
            <Carousel
              className="size-full"
              opts={{
                loop: true,
                containScroll: "keepSnaps"
              }}
              plugins={[Autoplay({ delay: 7500 })]}
            >
              <CarouselContent>
                <CarouselItem className="bg-[url('/imgs/hero.jpeg')] bg-center bg-cover min-h-[100vh] w-full">
                  <HeroText />
                </CarouselItem>
                <CarouselItem className="bg-[url('/imgs/slide-1.jpeg')] bg-center bg-cover min-h-[100vh] w-full">
                  <div className="bg-primary/30 bg-gradient-to-r from-primary/20 via-15%-primary/30 via-70%-primary/10 to-white/5 backdrop-blur-xs size-full">
                    <div className="container pt-32">
                      <div className="text-center flex justify-center items-center flex-col">
                        <h2 className="text-accent">Operations Advisory / Management Solutions</h2>
                        <p className="text-white max-w-[600px] pb-4">
                          Achieve peak performance with our expert operational guidance. We streamline your processes, optimize resources, and enhance efficiency, transforming challenges into clear opportunities that boost profitability and ensure sustainable success.                        </p>
                        <Link href="/services">
                          <Button className="border border-white hover:text-primary hover:bg-white hover:border-primary">See More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="bg-[url('/imgs/slide-2.jpeg')] bg-center bg-cover min-h-[100vh] w-full">
                  <div className="bg-primary/30 bg-gradient-to-r from-primary/60 via-15%-primary/30 via-70%-primary/10 to-white/5 backdrop-blur-xs size-full">
                    <div className="container pt-32">
                      <div className="text-center flex justify-center items-center flex-col">
                        <h2 className="text-accent">Company Representation</h2>
                        <p className="text-white max-w-[600px] pb-4">
                          Beyond a simple presence, we become your strategic partner and voice in the market. We build vital connections and identify new opportunities, significantly boosting your {"brand's"} influence and opening doors to unparalleled growth.
                        </p>
                        <Link href="/services">
                          <Button className="border border-white hover:text-primary hover:bg-white hover:border-primary">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="bg-[url('/imgs/slide-3.jpg')] bg-center bg-cover min-h-[100vh] w-full">
                  <div className="bg-primary/30 bg-gradient-to-r from-primary/60 via-15%-primary/30 via-70%-primary/10 to-white/5 backdrop-blur-xs size-full">
                    <div className="container pt-32">
                      <div className="text-center flex justify-center items-center flex-col">
                        <h2 className="text-accent">New Business Setup</h2>
                        <p className="text-white pb-4 max-w-[600px]">
                          We handle the complexities of launching your venture, from legal and regulatory compliance through to a winning market strategy.
                          We position your businesses / brands to appeal to the right target consumers, through the right channels and using the appropriate systems.
                        </p>
                        <Link href="/services">
                          <Button className="border border-white hover:text-primary hover:bg-white hover:border-primary">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {/* <div className="absolute inset-0">
              <FloatingPaths position={-2} />
            </div> */}
          </div>
        </section>

        {/* Services Section */}

        <Section className="relative bg-white z-20"
          containerClassName="-mt-64 md:-mt-40"
          divider={{ variant: "waveAlt", fill: "fill-white", height: 110, position: "top", className: "z-20" }}
        >
          <Blob
            variant="dots"
            color="text-blue-500"
            size="md"
            className="absolute -left-20 -bottom-10 z-0"
            opacity={0.1}
          />
          <Blob
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

          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                    Our Services
                  </div>
                  <h2>
                    Integrated Services Firm
                  </h2>
                  <p className="max-w-[900px]">
                    We provide end-to-end solutions tailored to your business needs
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              {[
                {
                  icon: <Settings className="size-10 text-primary" />,
                  title: "Operation Advisory",
                  description: "Expert business and technical consulting services",
                  features: ["Brand Essence & Positioning Solutions", "Brand Strategy", "New Product Development"],
                  delay: 100,
                },
                {
                  icon: <Truck className="size-10 text-primary" />,
                  title: "Logistics",
                  description: "Efficient logistics and supply chain management",
                  features: ["Compliance & Sustainability", "Warehousing", "Distribution"],
                  delay: 300,
                },
                {
                  icon: <Package className="size-10 text-primary" />,
                  title: "Procurement",
                  description: "Strategic procurement and sourcing solutions",
                  features: ["Vendor management", "Cost optimization", "Supply chain solutions"],
                  delay: 500,
                },
                {
                  icon: <TrafficCone className="size-10 text-primary" />,
                  title: "Manufacturing",
                  description: "Custom manufacturing and production services",
                  features: ["Project Supervision and Evaluation", "Production optimization", "Utilities management"],
                  delay: 700,
                  colSpan: "md:col-span-2 lg:col-span-1",
                },
              ].map((service, index) => (
                <ScrollReveal key={index} delay={service.delay} direction="up">
                  <Card
                    className={`border-2 h-full border-primary shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.colSpan || ""}`}
                  >
                    <CardHeader className="pb-2 flex flex-row gap-4 items-center space-y-0">
                      <div className="rounded-full bg-blue-100 p-2 size-10 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600">{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="mr-2 size-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div> */}
            <ScrollReveal delay={1000} className="pt-16">
              <div className="flex justify-center">
                <Link href="/services">
                  <Button
                    variant="outline"
                  >
                    View All Services <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Section>


        {/* About Section */}
        <Section className="relative bg-gray-50 py-24"
          divider={{
            variant: "curve", fill: "fill-gray-50", height: 80, position: "top"
          }}
          dividerBottom={{
            variant: "waveAlt", fill: "fill-gray-50", height: 60, position: "bottom"
          }}
        >

          <Blob
            variant="blob3"
            color="text-gray-400"
            size="md"
            className="absolute right-0 top-20 z-0"
            opacity={0.07}
            animate
          />
          <Blob variant="dots" color="text-gray-400" size="lg" className="absolute left-0 bottom-20 z-0" opacity={0.3} />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">About Us</div>
                    <h2>
                      Your Trusted Partner in Business Excellence
                    </h2>
                    <p>
                      VASTEX Resources Limited is an integrated services firm dedicated to assisting businesses in achieving their commercial objectives
                    </p>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      With years of experience between a team of dedicated professionals, we deliver innovative solutions
                      that help businesses optimize their operations, reduce costs, and achieve sustainable growth.
                    </p>
                    <p>
                      Our commitment to excellence, integrity, and client satisfaction makes us a trusted partner
                      for businesses of all sizes around the world.
                    </p>
                  </div>
                  <div>
                    <Link href="/about">
                      <Button
                        variant="outline"
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
                    src="/imgs/index-partners.jpeg"
                    width={500}
                    height={500}
                    alt="About VASTEX Resources Limited"
                    className="rounded-xl object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>



        {/*Map Section*/}
        <Section className="min-h-[50vh] py-0 md:py-0" containerClassName="py-0 md:py-0" >
          <ScrollReveal>
            <div className="container mx-auto">
              <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">
                Are You Ready?
              </div>
              <h2>
                What Are you waiting for?
              </h2>
            </div>
            <div className="-z-10 relative bg-[url('https://images.pexels.com/photos/280312/pexels-photo-280312.jpeg')] bg-center bg-cover bg-fixed h-[60vh] w-full rounded-xl opacity-95">
              <div className="relative bg-primary/30 bg-gradient-to-r from-primary/60 via-15%-primary/30 via-70%-primary/10 to-white/5 backdrop-blur-xs size-full rounded-xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
                  <h1 className="text-white text-center" >{"Let’s"} take your business to new heights!</h1>
                  {/* <h1 className="text-center capitalize">{"Don't"} Miss the <span className="text-primary font-black">Next Great</span><br /> Thing <span className="opacity-70 font-light">Ever Again</span></h1> */}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Section>
        {/* CTA Section */}
        <div className="-mt-10 z-10 relative">
          <CallToAction />
        </div>
      </main>

    </div >
  )
}