"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-200 bg-white transition-all duration-300 ${scrolled ? "shadow-md py-2" : "py-4"
        }`}
    >
      <div className="container flex items-center px-4 md:px-6">
        <Link href="/" className="mr-6">
          <Logo width={96} height={52} />
        </Link>
        <nav className="hidden flex-1 items-center justify-center space-x-6 md:flex">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 transition-all duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-primary hover:bg-blue-800 transition-all duration-300 hover:scale-105">
              Get in Touch
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mb-6">
                <Logo width={96} height={52} />
              </div>
              <div className="flex flex-col space-y-4 py-6">
                {["Home", "About", "Services", "Contact"].map((item, index) => (
                  <Link
                    key={index}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-lg font-medium text-gray-700 transition-all duration-200 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                ))}
                <Link href="/contact" onClick={toggleMenu}>
                  <Button className="mt-4 w-full bg-primary hover:bg-blue-800">Get in Touch</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
