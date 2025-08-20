"use client"
import Link from "next/link"
import Image from "next/image"
import CallToAction from "@/components/cta"
import ScrollReveal from "@/components/scroll-reveal"
import Section from "@/components/section"
import { partners, SocialMediaList } from "../companyDetails"
import { Blob } from "@/components/ui/blob"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Copy, XIcon } from "lucide-react"
import { FaPeopleGroup, FaListCheck, FaShieldHalved, FaMoneyBill1Wave, FaStar } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { RiFlagLine } from "react-icons/ri";
import { TbContract } from "react-icons/tb";
import PageHeader from "@/components/page-header"
import { toast } from "sonner"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SocialMedia from "@/components/social-media"
import React from "react"
import useHotjar from "@/hooks/useHotjar"


function Person(props: {
  member: {
    id: number;
    name: string;
    lastName: string;
    firstName: string;
    role: string;
    title: string;
    isTitleAfter: boolean;
    department: string;
    bio: string;
    avatarUrl: string;
    qualifications: string[];
    experience: string[];
    contact: {
      phones: string[];
      companyEmail: string;
      emails: string[];
      socials?: SocialMediaList
    }
  },
  index: number
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
            alt={`${member.name}`}
            className="aspect-square object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        <div className="text-center space-y-2">
          <h4 className="text-xl font-bold text-gray-900 capitalize h-16">{!member.isTitleAfter && <span className="font-light">{member.title}</span>} {member.firstName}<br />{member.lastName} {member.isTitleAfter && member.title}</h4>
          <div className="capitalize text-base">
            <p className="text-primary/80 font-light">{member.role}</p>
            <p className="text-primary font-bold">{member.department}</p>
          </div>
          {/* {index > 1 && (<div>
            <p className="lowercase font-light text-sm">Qualifications</p>
            <div className="flex flex-row flex-wrap gap-1.5">
              {member.qualifications.map(qualification =>
                <span
                  key={member.name + "-" + qualification}
                  className="bg-primary/80 text-white rounded-lg px-1.5 pb-0.5"
                >
                  {qualification}
                </span>
              )}
            </div>
          </div>
          )} */}
          <Dialog>
            <DialogTrigger>
              <span className="inline-flex flex-row flex-nowrap w-full gap-2 justify-center items-center text-primary cursor-pointer hover:bg-primary/80 hover:text-white py-0.5 px-3 rounded-full">see more <ChevronRight className="size-4" /></span>
            </DialogTrigger>
            <DialogContent className="bg-transparent backdrop-blur-md  h-screen overflow-auto fixed rounded-2xl p-0" showCloseButton={false}>
              <div className="relative size-full w-full md:max-w-[800px]">
                <DialogTitle className="hidden">leader </DialogTitle>
                <DialogClose
                  data-slot="dialog-close"
                  className="focus:ring-ring data-[state=open]:bg-accent  absolute top-4 right-4 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 bg-red-600 text-white rounded-full p-1 shadow-md cursor-pointer"
                >
                  <XIcon />
                  <span className="sr-only">Close</span>
                </DialogClose>
                <DialogHeader className="mx-auto text-center bg-accent/90 w-full pt-6 pb-10">
                  <div className="relative aspect-square size-64 md:size-80 rounded-2xl overflow-hidden mx-auto">
                    <Image
                      src={member.avatarUrl}
                      alt={`${member.name}`}
                      fill
                      className="aspect-square object-cover transition-transform scale-105 size-64 md:size-80 rounded-3xl"
                    />
                  </div>

                  <h2 className="text-xl smd:text-3xl capitalize tracking-wide text-center">
                    {!member.isTitleAfter && <span className="font-light text-base">{member.title}</span>} {member.firstName} {member.lastName} {member.isTitleAfter && member.title}
                  </h2>
                  <div className="flex flex-row flex-wrap gap-1.5 justify-center items-center">
                    {member.qualifications.map(qualification =>
                      <span
                        key={member.name + "-" + qualification}
                        className="bg-primary/80 text-white rounded-lg px-1.5 pb-0.5"
                      >
                        {qualification}
                      </span>
                    )}
                  </div>
                  <div className="capitalize text-base text-center space-y-1">
                    <p className="text-primary/80 font-light">{member.role}</p>
                    <p className="text-primary font-bold">{member.department}</p>
                    <p className="group text-primary inline-flex gap-2 cursor-pointer items-center lowercase text-base" onClick={() => { navigator.clipboard.writeText(member.contact.companyEmail); toast.success("Email copied to clipboard") }}>
                      {member.contact.companyEmail}
                      <span className="flex items-center justify-center p-2 border border-transparent group-hover:bg-primary group-hover:text-white group-hover:border-white group-hover:rounded-full transition-all">
                        <Copy className="size-4" />
                      </span>
                    </p>
                    <SocialMedia socials={member.contact.socials ?? {}} className="px-3.5 py-0.5 w-min text-primary backdrop-blur-2xl bg-primary/10 justify-center mx-auto rounded-md" iconClassName="text-primary size-5" />
                  </div>
                </DialogHeader>
                <div className="space-y-3 px-6 pt-6 pb-10 bg-white">
                  {/* <div>
                    <p className="lowercase font-light text-sm">Qualifications</p>
                  
                  </div> */}
                  {/* <div>
                    <p className="lowercase font-light text-sm">Experiences</p>
                    <div className="flex flex-row flex-wrap gap-1.5 ">
                      {member.experience.map(experience =>
                        <span
                          key={member.name + "-" + experience}
                          className="bg-primary/80 text-white rounded-lg px-1.5 py-0.5"
                        >
                          {experience}
                        </span>
                      )}
                    </div>
                  div> */}
                  <div>
                    <p className="lowercase font-light text-sm">Bio</p>
                    {/* <p className="text-base text-left whitespace-pre-line"> */}
                    <div className="text-base text-left space-y-2">
                      {/* {member.bio} */}
                      {member.bio.split('\n').map((line, index) => (
                        <p className="text-base text-left pb-1" key={index}> {line}</p>
                      ))}
                    </div>
                  </div>

                  {/* <div>
                    <p className="lowercase pt-4 font-light text-sm">Contact</p>
                    <p className="text-primary inline-flex gap-2 cursor-pointer items-center" onClick={() => { navigator.clipboard.writeText(member.contact.companyEmail); toast.success("Email copied to clipboard") }}>
                      {member.contact.companyEmail} <Copy />
                    </p>
                  </div> */}
                </div>
              </div>

            </DialogContent>
          </Dialog>
          {/* <span onClick={toggle} className="inline-flex flex-row flex-nowrap w-full gap-2 justify-center items-center text-primary cursor-pointer">see {!showBio ? <>more <ChevronDown className="size-4" /></> : <>less <ChevronUp className="size-4" /></>}</span> */}
          {/* {showBio && <>
            <p className="text-base text-left">
              {member.bio}
            </p>
            <div>
              <p className="lowercase pt-4 font-light text-sm">Experiences</p>
              <div className="flex flex-row flex-wrap gap-1.5">
                {member.experience.map(experience =>
                  <span
                    key={member.name + "-" + experience}
                    className="bg-primary/80 text-white rounded-lg px-1.5 py-0.5"
                  >
                    {experience}
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className="lowercase pt-4 font-light text-sm">Contact</p>
              <p className="text-primary inline-flex gap-2 cursor-pointer items-center" onClick={() => { navigator.clipboard.writeText(member.contact.companyEmail); toast.success("Email copied to clipboard") }}>
                {member.contact.companyEmail} <Copy />
              </p>
            </div>
            <span onClick={toggle} className="inline-flex flex-row flex-nowrap w-full gap-2 justify-center items-center text-primary cursor-pointer">see {!showBio ? <>more <ChevronDown className="size-4" /></> : <>less <ChevronUp className="size-4" /></>}</span>
          </>} */}
          <div>
            {/* <p className="lowercase pt-4 font-light text-sm">Contact</p>
            <div className="flex flex-row flex-wrap gap-1.5">
              {member.contact.phones.map(number =>
                <span key={number} className="inline-flex gap-1">
                  <Phone />
                  <span>{number}</span>
                </span>
              )}
            </div> */}
          </div>
        </div>
      </div >
    </ScrollReveal >
  )
}
export default function AboutPage() {
  useHotjar()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <Section containerClassName="relative overflow-hidden bg-white py-0 md:py-0">
          <PageHeader
            pageTitle="About"
            imageUrl="/imgs/about-hero.jpeg"
            breadcrumb={["about"]}
          />
          <Blob
            variant="blob3"
            color="text-primary"
            size="md"
            className="absolute -left-30 -top-25 z-0"
            opacity={0.6}
            animate
          />
          <Blob variant="dots" color="text-gray-400" size="xl" className="absolute right-0 top-0 z-0" opacity={0.3} animate />
          <div className="container relative z-10 px-4 md:px-6 pt-8">
            <div className="grid gap-6 grid-col-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left" delay={300} className="md:col-span-2">
                <div className="flex flex-col justify-center space-y-4 md:pb-12">
                  <div className="space-y-2 pb-4">
                    <div className="inline-block rounded-xl bg-blue-100 items-center justify-center px-3 py-1 text-sm text-primary">How We Help You</div>
                    {/* <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                      Our Story
                    </h1> */}
                    <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                      About Us
                    </h1>
                    {/* <p className="max-w-[600px] text-gray-600 md:text-xl ">
                      VASTEX Resources Limited was founded to provide services
                      that drive growth and efficiency for our clients.
                    </p> */}
                  </div>
                  <p className="pb-24 pr-6">
                    VASTEX Resources Limited is an integrated services firm dedicated to assisting businesses in achieving their commercial objectives with focus on Business Turnaround /Operations Advisory, Company Representation and New Business Setup.
                    Our services encompass New Product Development & Innovations, Supply chain management, Brand building and marketing strategies, Project Management, Route to market design and construction, Distribution management and Customer experience enhancement.
                    Our clients include Manufacturing companies, Marketing and Distribution Firms, Medium and Large Enterprises as well as new businesses, especially foreign companies looking to enter Nigerian Market. We aim to become a pivotal partner in their set up and set out journey.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={500} className="relative rounded-xl -z-10">
                <div className="block items-center justify-center h-[50vh] w-[100vw] md:h-[90vh] md:w-full  rounded-xl bg-[url('/imgs/about-building.jpeg')] bg-center bg-cover bg-fixed shadow-lg transition-transform hover:scale-[1.02] duration-500 opacity-80">
                  <div className="bg-primary/30 bg-gradient-to-l from-primary/60 via-15%-primary/30 via-70%-primary/10 to-white/5 size-full rounded-xl">
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>
        {/* Mission and Vision */}
        <Section
          containerClassName="py-0 md:py-0 z-20 mt-[-120px]"
          className="pt-12 z-20"
        // divider={{
        //   variant: "tiltAlt", fill: "fill-white", height: 160, position: "top", className: "mt-[-5px]"
        // }}
        >
          <div className="grid grid-cols-1 px-6 md:px-8 gap-12 pb-12 size-full">
            <div className="border-0 rounded-xl py-2 group">
              <div className="flex  items-center gap-x-6 border-l-4 group-hover:border-primary">
                <div className="flex justify-center items-center p-2.5 ml-2.5 size-12 bg-accent text-primary group-hover:bg-primary group-hover:text-accent rounded-full">
                  <RiFlagLine className="size-full" />
                </div>
                <div className="py-2">
                  <h4 className="group-hover:text-primary text-3xl font-bold tracking-tight font-gilroy pb-4">Our Mission</h4>
                  <p className="group-hover:text-primary/60 leading-5">To be a pivotal partner to all our clients</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* Values Section */}
        <Section className="relative bg-gray-50 py-24 md:py-28" containerClassName="py-0 md:py-0 z-10"
          divider={{ variant: "curve", fill: "fill-gray-50", height: 80, position: "top" }}
          dividerBottom={{ variant: "curveAlt", fill: "fill-gray-50", height: 100, position: "bottom", className: "-mt-4" }}
        >

          <div className="container relative z-10 px-4 md:px-6 min-h-[50vh]">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-xl bg-blue-100 items-center justify-center px-3 py-1 text-sm text-primary">Our Values</div>
                  <h2>What Drives Us</h2>
                  <p>
                    Our core values shape everything we do at VASTEX Resources Limited
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="h-full mx-auto max-w-6xl gap-6 md:gap-12 px-6 py-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
              {[
                {
                  icon: <FaMoneyBill1Wave className="text-primary" />,
                  title: "Market Knowledge",
                  description: "We know the market"
                  // "is the strategic foresight that enables us to pinpoint opportunities, navigate competition, and deliver measurable impact.",
                },
                {
                  // icon: <FaGlobeAfrica className="text-primary" />,
                  icon: <FaPeopleGroup className="text-primary" />,
                  title: "Hands-on",
                  description: "Our strength is in brilliant implementation"
                  // "Propelling forward ideas, ensuring our solutions consistently redefine industry benchmarks and secure future relevance.",
                },
                {
                  icon: <FaListCheck className="text-primary" />,
                  title: "Competence",
                  description: "We are experts at what we do"
                  // "Our demonstrable capability and consistent delivery of superior results",
                },
                {
                  icon: <TbContract className="text-primary" />,
                  title: "Partnership",
                  description: "We execute our briefs as if we are invested in the enterprise"
                  // "Aligning objectives and amplifying collective strengths for unparalleled success.",
                },
                {
                  icon: <FaShieldHalved className="text-primary" />,
                  title: "Trust",
                  description:
                    "We keep our word",
                },
                // {
                //   icon: <FaStar className="text-primary" />,
                //   title: "Passion",
                //   description:
                //     "The bedrock of all successful engagements",
                // },
                // {
                //   icon: <FaPeopleGroup className="text-primary" />,
                //   title: "Relationship",
                //   description:
                //     "Transforming transactional interactions into invaluable, long-term strategic alliances.",
                // },


              ].map((value, index) => (
                <ScrollReveal key={index} delay={100 * (index + 1)} direction="up" className="h-full">
                  <div className="relative h-full">
                    <span className="absolute text-9xl opacity-35 text-primary/70 -top-10 -left-6 -z-10  font-mono font-extralight">{index + 1}</span>
                    <div className="flex h-full flex-col items-center space-y-2 rounded-xl border border-accent bg-white/90 p-6 text-center shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="rounded-full bg-accent p-3">{value.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
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
                  <div className="inline-block rounded-xl bg-blue-100 items-center justify-center px-3 py-1 text-sm text-primary">Our Team</div>
                  <h2>Meet Our Leadership</h2>
                  <p>
                    Experienced professionals dedicated to your success
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-3 py-12 md:grid-cols-2 lg:grid-cols-4">
              {partners.map((member, index) => (
                <Person index={index} member={member} key={index + "-" + member.name} />
              ))}
            </div>
          </div>

        </Section>

        {/* CTA Section */}
        {/* <CallToAction>
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
          </div> */}
        <CallToAction>
          <div className="space-y-4 text-center">
            <h6 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Ready to Grow?
            </h6>
            <p className="mx-auto max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {"Let’s"} discuss your vision and see how VASTEX Resources Limited can help you achieve it.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-blue-50 transition-transform hover:scale-105">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </Link>
              <Link href="/competences">
                <Button
                  variant="outline"
                  className="border-white text-white hover:text-primary hover:bg-accent"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </CallToAction>
      </main>

    </div >
  )
}
