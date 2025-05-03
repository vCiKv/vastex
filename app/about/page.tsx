"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Clock, Globe, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionDivider } from "@/components/ui/section-divider"
import { Blob } from "@/components/ui/blob"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import CallToAction from "../cta"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 md:py-28">
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">About Us</div>
                    <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                      Our Story and Mission
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                      Vastex Resources Limited was founded with a vision to provide comprehensive business solutions
                      that drive growth and efficiency for our clients.
                    </p>
                  </div>
                  <p className="text-gray-600">
                    Since our inception, we have been committed to delivering excellence in consulting, industrial
                    solutions, logistics, procurement, and manufacturing services. Our team of experts brings decades of
                    combined experience to help businesses overcome challenges and achieve their goals.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    width={500}
                    height={500}
                    alt="About Vastex Resources Limited"
                    className="rounded-lg object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        {/* Values Section */}
        <div className="relative">
          <SectionDivider variant="curve" fill="fill-gray-50" height={80} />
        </div>
        <section className="relative bg-gray-50 py-16 md:py-24">
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
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Values</div>
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">What Drives Us</h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our core values shape everything we do at Vastex Resources Limited
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="h-full mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Award className="h-6 w-6 text-blue-700" />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, delivering the highest quality solutions to our clients.",
                  delay: 100,
                },
                {
                  icon: <Users className="h-6 w-6 text-blue-700" />,
                  title: "Integrity",
                  description:
                    "We conduct our business with the highest level of integrity, honesty, and transparency.",
                  delay: 200,
                },
                {
                  icon: <Globe className="h-6 w-6 text-blue-700" />,
                  title: "Innovation",
                  description:
                    "We embrace innovation and continuously seek new ways to improve and deliver value to our clients.",
                  delay: 300,
                },
                {
                  icon: <Building className="h-6 w-6 text-blue-700" />,
                  title: "Partnership",
                  description:
                    "We build strong, collaborative partnerships with our clients, understanding their unique needs and challenges.",
                  delay: 400,
                },
                {
                  icon: <Clock className="h-6 w-6 text-blue-700" />,
                  title: "Reliability",
                  description:
                    "We are committed to reliability, delivering on our promises and meeting deadlines consistently.",
                  delay: 500,
                },
                {
                  icon: <Users className="h-6 w-6 text-blue-700" />,
                  title: "Customer Focus",
                  description:
                    "We put our customers at the center of everything we do, ensuring their satisfaction and success.",
                  delay: 600,
                },
              ].map((value, index) => (
                <ScrollReveal key={index} delay={value.delay} direction="up">
                  <div className="flex h-full flex-col items-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="rounded-full bg-blue-100 p-3">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        <div className="relative">
          <SectionDivider variant="wave" fill="fill-gray-50" height={70} />
        </div>


        {/* Team Section */}
        <section className="relative bg-white py-16 md:py-24">
          <Blob
            variant="blob3"
            color="text-gray-400"
            size="lg"
            className="absolute right-0 top-20 z-0"
            opacity={0.07}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Team</div>
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Meet Our Leadership</h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Experienced professionals dedicated to your success
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Smith",
                  title: "Chief Executive Officer",
                  description: "With over 20 years of experience in business management and consulting.",
                  delay: 200,
                },
                {
                  name: "Sarah Johnson",
                  title: "Chief Operations Officer",
                  description: "Specializing in logistics and supply chain optimization.",
                  delay: 400,
                },
                {
                  name: "Michael Chen",
                  title: "Chief Technology Officer",
                  description: "Expert in industrial solutions and manufacturing technologies.",
                  delay: 600,
                },
              ].map((member, index) => (
                <ScrollReveal key={index} delay={member.delay} direction="up">
                  <div className="flex flex-col items-center space-y-4 transition-all duration-300 hover:-translate-y-1">
                    <div className="overflow-hidden rounded-full shadow-md">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt={`${member.name} - ${member.title}`}
                        className="aspect-square object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-700">{member.title}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </section>

        {/* CTA Section */}
        <CallToAction>
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
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Join Our Team</h2>
                  <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're always looking for talented individuals to join our growing team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/careers">
                    <Button className="bg-white text-blue-700 hover:bg-blue-50 transition-transform hover:scale-105">
                      View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </CallToAction>
      </main>
      <Footer />
    </div>
  )
}
