import Link from "next/link"
import Image from "next/image"
import CallToAction from "../cta"
import ScrollReveal from "@/components/scroll-reveal"
import Section from "@/components/section"
import { partners } from "../companyDetails"
import { Blob } from "@/components/ui/blob"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FaBullseye, FaPeopleGroup, FaStar, FaListCheck, FaShieldHalved } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { RiFlagLine } from "react-icons/ri";
import { TbContract } from "react-icons/tb";
import PageHeader from "@/components/page-header"

function Person(props: {
  member: {
    name: string;
    role: string;
    department: string;
    bio: string;
    avatarUrl: string;
    experience: string[];
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
            alt={`${member.name}`}
            className="aspect-square object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        <div className="text-center space-y-2">
          <h4 className="text-xl font-bold text-gray-900 capitalize">{member.name}</h4>
          <div className="capitalize text-base">
            <p className="text-primary/80 font-light">{member.role}</p>
            <p className="text-primary font-bold lg:h-[70px]">{member.department}</p>
          </div>
          <p className="text-base text-left lg:h-[650px]">
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
      </div>
    </ScrollReveal >
  )
}

// function AboutUs() {
//   const buttonVariants = [
//     "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//     , {
//       variants: {
//         variant: {
//           default: "bg-primary text-primary-foreground hover:bg-primary/90",
//           destructive:
//             "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//           outline:
//             "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//           secondary:
//             "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//           ghost: "hover:bg-accent hover:text-accent-foreground",
//           link: "text-primary underline-offset-4 hover:underline",
//         },
//         size: {
//           default: "h-10 px-4 py-2",
//           sm: "h-9 rounded-md px-3",
//           lg: "h-11 rounded-md px-8",
//           icon: "h-10 w-10",
//         },
//       },
//       defaultVariants: {
//         variant: "default",
//         size: "default",
//       },
//     },
//   ]

//   return (
//     <p>
//       VASTEX Resources Limited is an integrated service firm dedicated to assisting businesses in achieving their commercial objectives with focus on Operations Consulting,  Company Representation and New Business Set Up,
//       Our services encompass New Product Development & Innovations, Supply chain management, Brand building and marketing strategies, Project Management, Route to market design and construction, Distribution management and Customer experience enhancement.
//       We target Manufacturing companies, Marketing and Distribution Firms, Medium and Large Enterprises as well as new businesses especially foreign companies looking to enter Nigerian Markets.We aim to become a pivotal partner in their set up and set out journey.
//     </p>
//   )
// }
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <Section containerClassName="relative overflow-hidden bg-white py-0 md:py-0">
          <PageHeader
            pageTitle="About"
            imageUrl="https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg"
            breadcrumb={["about"]}
          />
          {/* <ScrollReveal direction="down" delay={100} className="relative h-[60vh] w-full group">
            <div className="relative bg-primary/30 bg-gradient-to-l from-primary/60 via-15%-primary/30 via-70%-primary/10 to-white/5 size-full rounded-xl">
              <div className="flex items-center justify-center h-full relative">
                <Image
                  src="https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg"
                  alt="hero-VASTEX-Resources-Limited"
                  fill
                  priority
                  className="rounded-b-xl object-cover shadow-lg transition-transform group-hover:scale-[1.02] duration-500 size-full opacity-50"
                />
              </div>
              <div className="absolute bg-accent/70 rounded-lg top-10 left-10 pt-12 min-w-lg flex flex-col backdrop-blur-sm">

                <div className="px-6 py-3">
                  <h2 className="text-white">About</h2>
                  <span className="flex flex-nowrap gap-2 font-light text-white capitalize text-sm items-center">
                    <Link className="hover:font-normal cursor-pointer" href={"/"}>Home</Link>
                    <ChevronRight className="size-3" />
                    <Link className="hover:font-normal cursor-pointer" href={"/about"}>about</Link>
                  </span>
                </div>
              </div>
            </div>

          </ScrollReveal> */}
          <Blob
            variant="blob2"
            color="text-blue-400"
            size="xl"
            className="absolute -left-40 -top-20 z-0"
            opacity={0.07}
            animate
          />
          <Blob variant="dots" color="text-gray-400" size="xl" className="absolute right-0 top-0 z-0" opacity={0.3} animate />
          <div className="container relative z-10 px-4 md:px-6 pt-8">
            <div className="grid gap-6 grid-col-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
              <ScrollReveal direction="left" delay={300} className="md:col-span-2">
                <div className="flex flex-col justify-center space-y-4 md:pb-12">
                  <div className="space-y-2 pb-4">
                    <div className="inline-block rounded-xl bg-blue-100 items-center justify-center px-3 py-1 text-sm text-primary">About Us</div>
                    <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                      Our Story
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl ">
                      VASTEX Resources Limited was founded to provide services
                      that drive growth and efficiency for our clients.
                    </p>
                  </div>
                  <p className="pb-24">
                    VASTEX Resources Limited is an integrated service firm dedicated to assisting businesses in achieving their commercial objectives with focus on Operations Consulting, Company Representation and New Business Set Up.
                    Our services encompass New Product Development & Innovations, Supply chain management, Brand building and marketing strategies, Project Management, Route to market design and construction, Distribution management and Customer experience enhancement.
                    We target Manufacturing companies, Marketing and Distribution Firms, Medium and Large Enterprises as well as new businesses especially foreign companies looking to enter Nigerian Markets. We aim to become a pivotal partner in their set up and set out journey.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={500} className="h-[50vh] md:h-[90vh] md:w-full w-[100vw] relative rounded-xl -z-10">
                <div className="flex items-center justify-center size-full rounded-xl bg-[url('https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg')] bg-center bg-cover bg-fixed shadow-lg transition-transform hover:scale-[1.02] duration-500 opacity-80">
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
          divider={{
            variant: "tiltAlt", fill: "fill-white", height: 160, position: "top", className: "mt-[-5px]"
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-8 gap-12 pb-12 size-full">
            <div className="border rounded-xl shadow-sm py-2 group">
              <div className="flex  items-center gap-x-6 border-l-4 border-accent group-hover:border-primary">
                <div className="flex justify-center items-center p-2.5 ml-2.5 size-12 bg-accent text-primary group-hover:bg-primary group-hover:text-accent rounded-full">
                  <RiFlagLine className="size-full" />
                </div>
                <div className="py-2">
                  <h4 className="group-hover:text-primary text-2xl font-bold tracking-tight font-gilroy pb-4">Our Mission</h4>
                  <p className="group-hover:text-primary/60 leading-5">To be a pivotal partner to all our clients</p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl shadow-sm py-2 group">
              <div className="flex  items-center gap-x-6 border-l-4 border-accent group-hover:border-primary">
                <div className="flex justify-center items-center p-2.5 ml-2.5 size-12 bg-accent text-primary group-hover:bg-primary group-hover:text-accent rounded-full">
                  <FaBullseye className="size-full" />
                </div>
                <div className="py-2">
                  <h4 className="group-hover:text-primary text-2xl font-bold tracking-tight font-gilroy pb-4">Our Vision</h4>
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
          {/* <Blob
            variant="dots"
            color="text-blue-500"
            size="lg"
            className="absolute -left-20 bottom-40 z-0"
            opacity={0.1}
          /> */}
          <div className="container relative z-10 px-4 md:px-6 min-h-[50vh]">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-xl bg-blue-100 items-center justify-center px-3 py-1 text-sm text-primary">Our Values</div>
                  <h2>What Drives Us</h2>
                  <p>
                    Our <b>7</b> core values shape everything we do at VASTEX Resources Limited
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="h-full mx-auto max-w-6xl gap-6 md:gap-12 px-6 py-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
              {[
                {
                  icon: <FaStar className="text-primary" />,
                  title: "Market Knowledge",
                  description:
                    "is the strategic foresight that enables us to pinpoint opportunities, navigate competition, and deliver measurable impact.",
                },
                {
                  icon: <FaGlobeAfrica className="text-primary" />,
                  title: "Innovation",
                  description:
                    "Propelling forward ideas, ensuring our solutions consistently redefine industry benchmarks and secure future relevance.",
                },
                {
                  icon: <FaListCheck className="text-primary" />,
                  title: "Competence",
                  description:
                    "Our demonstrable capability and consistent delivery of superior results",
                },
                {
                  icon: <TbContract className="text-primary" />,
                  title: "Partnership",
                  description:
                    "Aligning objectives and amplifying collective strengths for unparalleled success.",
                },
                {
                  icon: <FaShieldHalved className="text-primary" />,
                  title: "Integrity",
                  description:
                    "The unwavering foundation of our brand",
                },
                {
                  icon: <FaStar className="text-primary" />,
                  title: "Trust",
                  description:
                    "The bedrock of all successful engagements",
                },
                {
                  icon: <FaPeopleGroup className="text-primary" />,
                  title: "Relationship",
                  description:
                    "Transforming transactional interactions into invaluable, long-term strategic alliances.",
                },


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

    </div >
  )
}
