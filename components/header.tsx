"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

function HeaderLink(props: { url: string, text?: string, className?: string }) {
  const { className, url, text } = props
  const pathname = usePathname()
  return (
    <Link
      href={url}
      className={cn("capitalize md:px-0 md:text-sm text-lg w-fit md:w-auto font-medium text-gray-700 transition-all duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
        className,
        pathname.toLowerCase() === "/" + url.toLowerCase() && "text-base font-bold text-primary",
        pathname.toLowerCase() === "/" && url.toLowerCase() === "home" && "text-base font-bold text-primary"
      )}
    >
      {text ?? url}
    </Link>
  )
}
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
      className={`sticky top-0 z-50 w-full  bg-white transition-all duration-300 ${scrolled ? "shadow-md py-1.5 border-b border-gray-200" : "py-3"
        }`}
    >
      <div className="container flex items-center px-4 md:px-6 h-16 box-border">
        <Link href="/" className="mr-6">
          <Logo width={96} height={52} />
        </Link>
        <nav className="hidden flex-1 items-center justify-center space-x-6 md:flex">
          {["Home", "About", "Competences", "Contact"].map((item, index) => (
            <HeaderLink url={item === "Home" ? "./" : item.toLowerCase()} text={item === "/" ? "Home" : item} key={"nav-item-" + index} />
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/70 transition-all duration-300 hover:scale-105">
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
              <SheetTitle className="hidden">Navigation Bar</SheetTitle>
              <div className="my-6 ml-4">
                <Logo width={96} height={52} />
              </div>

              <div className="flex flex-col space-y-4 p-6">
                {["Home", "About", "Competences", "Contact"].map((item, index) => (
                  <span onClick={() => setIsMenuOpen(false)} key={"nav-item-" + index} >
                    <HeaderLink url={item === "Home" ? "/" : item.toLowerCase()} text={item === "/" ? "Home" : item} />
                  </span>
                ))}
                <Link href="/contact" onClick={toggleMenu}>
                  <Button className="mt-4 w-full bg-primary hover:bg-primary/70">Get in Touch</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
