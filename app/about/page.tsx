import Link from "next/link"
import Image from "next/image"
import CallToAction from "../cta"
import ScrollReveal from "@/components/scroll-reveal"
import { Blob } from "@/components/ui/blob"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Building, Clock, Globe, Users } from "lucide-react"
import Section from "@/components/section"
import { partners } from "../companyDetails"

function Person(props: {
  member: {
    name: string;
    role: string;
    department: string;
    bio: string;
    avatarUrl: string;
    contact: {
      phones: string[];
      companyEmail: string;
      emails: string[];
    }
  }, index: number
}) {
  const { index, member } = props
  return (
    <ScrollReveal delay={(index + 1) * 200} direction="up">
      <div className="flex flex-col items-center space-y-4 transition-all duration-300 hover:-translate-y-1 py-8">
        <div className="overflow-hidden rounded-full shadow-md">
          <Image
            src={member.avatarUrl}
            width={200}
            height={200}
            alt={`${member.name} - ${member.department}`}
            className="aspect-square object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        <div className="text-center">
          <h4 className="text-xl font-bold text-gray-900 capitalize">{member.name}</h4>
          <div className="capitalize text-base">
            <p className="text-primary/80 font-light">{member.role}</p>
            <p className="text-primary font-bold">{member.department}</p>
          </div>
          {/* <p>{member.bio}</p> */}
          <p className="text-base">
            With over 20 years of experience in business management and consulting
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <Section containerClassName="relative overflow-hidden bg-white py-0 md:py-0">
          <ScrollReveal direction="down" delay={100} className="relative h-[30vh] w-full">
            <div className="flex items-center justify-center h-full relative">
              <Image
                src="https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg"
                alt="hero-VASTEX-Resources-Limited"
                fill
                priority
                className="rounded-b-xl object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500 size-full"
              />
            </div>
          </ScrollReveal>
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

          <div className="container relative z-10 px-4 md:px-6 pt-8">
            <div className="grid gap-6 grid-col-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left" delay={300} className="md:col-span-2">
                <div className="flex flex-col justify-center space-y-4 md:pb-12">
                  <div className="space-y-2 pb-4">
                    <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">About Us</div>
                    <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                      Our Story and Mission
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl ">
                      VASTEX Resources Limited was founded with a vision to provide comprehensive business solutions
                      that drive growth and efficiency for our clients.
                    </p>
                  </div>
                  <p className="pb-12">
                    VASTEX Resources Limited is a consultancy firm based in Lekki Phase 1, Lagos Nigeria dedicated to assisting FMCG businesses in achieving their commercial objectives and turning around ailing operations for enhanced ROI and profitability.

                    Our services encompass comprehensive consulting in manufacturing, Supply chain management, Brand building and marketing strategies, Route to market design, construction and distribution management and customer experience enhancement. By targeting Manufacturing companies, Marketing and Distribution Firms, Medium and Large Enterprises as well as new businesses especially foreign companies looking to enter Nigerian Markets, we aim to become a pivotal partner in their set up and set out journey.

                    Our billing strategy includes combination of Commitment fee, billable man hours and equity holding, ensuring a sustainable revenue model as we our client base.

                    Currently VASTEX is a nascent venture with a team of 4 Executive directors seeking deserving clients to demonstrate our great capabilities.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={500} className="h-[50vh] md:h-full w-full relative rounded-xl -z-10">
                {/* <div className="flex items-center justify-center size-full clip-path rounded-xl bg-[url('https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg')]">
                  <img
                    src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg"
                    alt="About VASTEX Resources Limited"
                    className="rounded-xl object-cover shadow-lg transition-transform hover:scale-[1.02] duration-500 size-full fixed left-0 top-0"
                  />
                </div> */}
                <div className="flex items-center justify-center size-full rounded-xl bg-[url('https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg')] bg-center bg-cover bg-fixed shadow-lg transition-transform hover:scale-[1.02] duration-500 ">
                  {/* <img
                    src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg"
                    alt="About VASTEX Resources Limited"
                    className="rounded-xl object-cover  size-full fixed left-0 top-0"
                  /> */}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>

        {/* Values Section */}
        <Section className="relative bg-gray-50 py-24 md:py-28" containerClassName="py-0 md:py-0 -mt-28 z-10"
          divider={{ variant: "curve", fill: "fill-gray-50", height: 80, position: "top" }}
          dividerBottom={{ variant: "curveAlt", fill: "fill-gray-50", height: 100, position: "bottom", className: "-mt-4" }}
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
                  <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">Our Values</div>
                  <h2>What Drives Us</h2>
                  <p  >
                    Our core values shape everything we do at VASTEX Resources Limited
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="h-full mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, delivering the highest quality solutions to our clients.",
                  delay: 100,
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Integrity",
                  description:
                    "We conduct our business with the highest level of integrity, honesty, and transparency.",
                  delay: 200,
                },
                {
                  icon: <Globe className="h-6 w-6 text-primary" />,
                  title: "Innovation",
                  description:
                    "We embrace innovation and continuously seek new ways to improve and deliver value to our clients.",
                  delay: 300,
                },
                {
                  icon: <Building className="h-6 w-6 text-primary" />,
                  title: "Partnership",
                  description:
                    "We build strong, collaborative partnerships with our clients, understanding their unique needs and challenges.",
                  delay: 400,
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  title: "Reliability",
                  description:
                    "We are committed to reliability, delivering on our promises and meeting deadlines consistently.",
                  delay: 500,
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Customer Focus",
                  description:
                    "We put our client's at the center of everything we do, ensuring their satisfaction and success.",
                  delay: 600,
                },
              ].map((value, index) => (
                <ScrollReveal key={index} delay={value.delay} direction="up">
                  <div className="flex h-full flex-col items-center space-y-2 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="rounded-full bg-blue-100 p-3">{value.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        {/* Team Section */}
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
                  <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">Our Team</div>
                  <h2>Meet Our Leadership</h2>
                  <p  >
                    Experienced professionals dedicated to your success
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
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
                {
                  name: "Bob Johnson",
                  title: "HR manager",
                  description: "Expert in industrial solutions and manufacturing technologies.",
                  delay: 800,
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
                      <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                      <p className="text-primary">{member.title}</p>
                      <p>{member.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div> */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-3 py-12 md:grid-cols-2 lg:grid-cols-4">
              {partners.map((member, index) => (
                <Person index={index} member={member} key={index + "-" + member.name} />
              ))}
            </div>
          </div>

        </Section>

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
                  <h2 className=" text-white">Join Our Team</h2>
                  <p className="max-w-[900px] text-blue-100">
                    {"We're"} always looking for talented individuals to join our growing team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/careers">
                    <Button className="bg-white text-primary hover:bg-blue-50 transition-transform hover:scale-105">
                      View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </CallToAction>
      </main>

    </div>
  )
}
