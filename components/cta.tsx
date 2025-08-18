import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { Blob } from "@/components/ui/blob"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction(props: { children?: React.ReactNode }) {
  if (props.children) {
    return (
      <>
        <div className="relative rotate-180 -mb-1">
          <SectionDivider variant="waveAlt" fill="fill-primary" height={70} />
        </div>
        <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
          {props.children}
        </section>
      </>
    )
  } else {

    return (
      <>
        <div className="relative rotate-180 -mb-1">
          <SectionDivider variant="wave" fill="fill-primary" height={70} />
        </div>
        <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
          <Blob
            variant="blob2"
            color="text-white"
            size="xl"
            className="absolute -left-40 top-0 z-0"
            opacity={0.07}
            animate />
          <Blob variant="dots" color="text-white" size="lg" className="absolute right-0 bottom-0 z-0" opacity={0.1} />
          <div className="container relative z-10 px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  {/* <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl"> */}
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact us today to discuss how VASTEX Resources Limited can help your business thrive.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
            </ScrollReveal>
          </div>
        </section>
      </>
    )
  }
}