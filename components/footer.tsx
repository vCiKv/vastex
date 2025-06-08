import Link from "next/link"
// import { Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { Mail, MapPin } from "lucide-react"

import Logo from "@/components/logo"
import ScrollReveal from "@/components/scroll-reveal"
import { companyAddress, companyEmail, getServicesList } from "@/app/companyDetails"
import { CompanyNumbers } from "./company-detail"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal direction="up" delay={100}>
            <div className="space-y-4">
              <Link href="/">
                <Logo variant="white" width={176} height={100} textClassName="text-gray-300" />
              </Link>
              <p className="text-gray-400 pt-4">
                Providing  business solutions including, operational consulting, industrial solutions, logistics, procurement,
                and manufacturing services to businesses worldwide.
              </p>
              {/* <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-gray-400 transition-all duration-300 hover:text-white hover:scale-110"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div> */}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Contact", path: "/contact" },
                  { name: "Careers", path: "/careers" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-gray-400 transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Services</h4>
              <ul className="space-y-2">
                {getServicesList().map(
                  (service, index) => (
                    <li key={index}>
                      <Link
                        href={`/services#${service.toLowerCase()}`}
                        className="text-gray-400 transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                      >
                        {service}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact Us</h4>
              <ul className="space-y-8">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-400 w-4/5">
                    {companyAddress}
                  </span>
                </li>
                <CompanyNumbers />
                {/* <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-400 w-4/5">+1 (555) 123-4567</span>
                </li> */}
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-400 w-4/5">
                    <a href={"mailto:" + companyEmail} target="_blank">
                      {companyEmail}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} VASTEX Resources Limited. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy, index) => (
                <Link key={index} href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {policy}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
