"use client"
import type React from "react"
import { useState, } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Blob } from "@/components/ui/blob"
import ScrollReveal from "@/components/scroll-reveal"
import CallToAction from "@/components/cta"
import Section from "@/components/section"
import { companyAddress } from "../companyDetails"
import { CompanyNumbers } from "@/components/helper-company-detail"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"
import useHotjar from "@/hooks/useHotjar"

function GridImage(props: { src: string }) {
  return (
    <img
      src={props.src}
      alt="grid-image"
      className="size-full object-cover rounded-xl aspect-square opacity-70"
    />
  )
}
function OutroGrid() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 p-4 min-h-[30vh] max-h-[50vh]">
      <div className="md:block hidden rounded-xl relative col-span-1">
        <GridImage src="./logo.png" />
      </div>
      <div className="flex size-full relative rounded-xl col-span-2 bg-primary text-accent p-4 items-center justify-center">
        <h1 className="text-center">
          VASTEX Resources Limited
        </h1>
      </div>

      <div className="w-full h-[100%] md:block hidden rounded-xl relative col-span-2" >
        <div className="relative bg-primary/30 bg-gradient-to-l from-primary/60 via-15%-primary/30 via-70%-primary/10 to-white/5 size-full rounded-xl">
          <GridImage src="/imgs/contact-hello.jpeg" />
        </div>
      </div>

      <div className="size-full col-span-1 flex flex-row justify-center items-start gap-4 bg-dot-pink rounded-xl">
        <div className="rounded-xl relative bg-transparent ">
          <div className="size-full z-[1]">
            <h4 className="text-pink md:text-4xl text-3xl font-bold uppercase pb-6">
              Get to <span className="text-primary">know us</span>
            </h4>
            <div className="inline-flex gap-1.5">
              <Button size={"sm"} className="border-2 border-transparent hover:border-primary hover:bg-white hover:text-primary">
                <Link href="/competences">
                  see competences
                </Link>
              </Button>
              <Button size={"sm"} variant={"outline"}>
                <Link href="/about">
                  learn about us
                </Link>
              </Button>
            </div>
          </div>
        </div >
      </div>
    </div >
  )
}
const defaultContactData = {
  name: "",
  email: "",
  company: "",
  message: "",
}
const isValidString = (str: unknown) => {
  return (typeof (str) === "string" && str.trim() !== "")
}
export default function ContactPage() {
  useHotjar()
  const [formData, setFormData] = useState(defaultContactData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidString(formData.email)) {
      toast.error("Contact Form", { description: `Invalid Email` })
      return
    }
    if (!isValidString(formData.message)) {
      toast.error("Contact Form", { description: `Invalid Message` })
      return
    }
    if (!isValidString(formData.name)) {
      toast.error("Contact Form", { description: `Invalid Name` })
      return
    }
    emailjs.send("service_ceyu3zy", "template_ha43dkm", formData, {
      publicKey: "OPtHgyJK1HpW2xPE2",
      limitRate: {
        throttle: 90 * 1000
      }
    }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Contact Form", { description: "Thank you for your message. We will get back to you shortly." })
        setFormData(defaultContactData)
      },
      (error) => {
        console.log('FAILED...', error);
        toast.error("Contact Form", { description: "There was an issue sending your mail, Please try again." })

      },
    );
  }

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <PageHeader
          pageTitle="Contact"
          imageUrl="/imgs/contact-hero.jpeg"
          breadcrumb={["contact"]}
        />
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-white py-16 min-h-[20vh]" containerClassName="py-0 md:py-0">
          {/* Background blobs */}
          <Blob
            variant="blob2"
            color="text-primary"
            size="lg"
            className="absolute -left-40 -top-20 z-0"
            opacity={0.2}
            animate
          />
          <Blob variant="blob1" color="text-gray-400" size="md" className="absolute -right-10 top-0 z-0" opacity={0.3} />

          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">Contact Us</div>
                  <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                    Get in Touch with Vastex Resources
                  </h1>
                  <p  >
                    We are here to answer your questions and help your business succeed.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </Section>

        {/* Contact Form and Info Section */}

        <Section className="relative bg-gray-50"
          divider={{ variant: "tilt", fill: "fill-gray-50", height: 80, position: "top" }}
          dividerBottom={{
            variant: "waveAlt", fill: "fill-gray-50", height: 60
          }}
        >
          <Blob
            variant="dots"
            color="text-blue-500"
            size="lg"
            className="absolute -left-20 bottom-40 z-0"
            opacity={0.1}
          />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal direction="left">
                <div className="flex flex-col space-y-6">
                  <div className="space-y-2">
                    <h3>Send Us a Message</h3>
                    <p>
                      Fill out the form below and our team will get back to you as soon as possible.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company (optional)"
                          value={formData.company}
                          onChange={handleChange}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 grid-cols-1">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[150px] transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/70 transition-transform hover:scale-[1.02]"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="flex flex-col space-y-6">
                  <div className="space-y-2">
                    <h3>
                      Contact Information
                    </h3>
                    <p>Reach out to us directly using the information below.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="border-0 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <div className="mb-4 rounded-full bg-blue-100 p-3">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold">Phone</h4>
                        <p className="flex flex-col tracking-widest">
                          <CompanyNumbers noStyle />
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <div className="mb-4 rounded-full bg-blue-100 p-3">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold">Email</h4>
                        <p>info@vastex.ng</p>
                        {/* <p>support@vastex.ng</p> */}
                      </CardContent>
                    </Card>
                  </div>
                  <Card className="border-0 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 rounded-full bg-blue-100 p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold">Headquarters</h4>
                      <p>{companyAddress}</p>
                      <p>Mon-Fri, 9am-5pm</p>

                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </Section>

        {/* Map Section */}
        <Section className="relative bg-white">
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
                  <h3>Find Us</h3>
                  <p>
                    Visit our headquarters or regional offices
                  </p>
                  <p>{companyAddress}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-xs transition-all duration-300 hover:shadow-md">
                <div className="aspect-video w-full bg-gray-200">
                  {/* Replace with actual map component or embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.4782203728105!2d3.455383645742792!3d6.439012886125669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf56744174089%3A0x85d46038b6fc5759!2sRegus%20-%20Lagos%2C%20Lennox!5e0!3m2!1sen!2sng!4v1748296947638!5m2!1sen!2sng"
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* <div className="flex h-full w-full items-center justify-center">
                    <p className="text-gray-500">Map Placeholder</p>
                  </div> */}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </Section>

        {/* FAQ Section */}
        {/* <Section className="relative bg-gray-50 py-16"
          divider={{
            variant: "curveAlt", fill: "fill-gray-50", height: 60, position: "top", className: "mt-4"
          }}
          dividerBottom={{
            variant: "tilt", fill: "fill-gray-50", height: 60
          }}
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
                  <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">FAQs</div>
                  <h2>
                    Frequently Asked Questions
                  </h2>
                  <p  >
                    Find answers to common questions about our services
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2 ">
              {[
                {
                  question: "What industries do you serve?",
                  answer:
                    "VASTEX Resources Limited serves a wide range of industries including manufacturing, logistics, healthcare, technology, energy, and more. Our solutions are tailored to meet the specific needs of each industry.",
                  delay: 200,
                },
                {
                  question: "Do you offer international services?",
                  answer:
                    "Yes, we provide international services through our global network of offices and partners. We have experience working with clients across North America, Europe, Asia, and the Middle East.",
                  delay: 300,
                },
                {
                  question: "How do I request a quote?",
                  answer:
                    "You can request a quote by filling out our contact form, calling our office, or sending an email to info@vastex.ng. Please provide details about your project or requirements for an accurate quote.",
                  delay: 400,
                },
                {
                  question: "What makes Vastex Resources different?",
                  answer:
                    "Our comprehensive approach sets us apart. We offer end-to-end solutions across operations advisory, management solutions, industrial solutions, logistics, procurement, manufacturing and much more, allowing us to address all aspects of your business needs with integrated expertise.",
                  delay: 500,
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={faq.delay} direction="up">
                  <Card className="h-full border-0 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-gray-900">{faq.question}</h4>
                        <p>{faq.answer}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section> */}


        {/* Outro */}
        <div className="relative py-12">
          <OutroGrid />
        </div>
        {/* CTA Section */}
        <CallToAction />
      </main>

    </div>
  )
}
