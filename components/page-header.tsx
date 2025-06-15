import { ChevronRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import Link from "next/link";
import Image from "next/image"
import React from "react";

export default function PageHeader(
  props: {
    imageUrl: string;
    pageTitle: string;
    breadcrumb: ({ href: string, title: string } | string)[]
  }
) {
  const { imageUrl, pageTitle, breadcrumb } = props
  return (
    <ScrollReveal direction="down" delay={100} className="relative h-[60vh] w-full group overflow-hidden">
      <div className="relative bg-primary/30 bg-gradient-to-l from-primary/60 via-15%-primary/30 via-70%-primary/10 to-white/5 size-full rounded-xl">
        <div className="flex items-center justify-center h-full relative">
          <Image
            src={imageUrl}
            alt="main-page-image"
            fill
            priority
            className="rounded-b-xl object-cover shadow-lg transition-transform group-hover:scale-[1.02] duration-500 size-full opacity-50"
          />
        </div>
        <div className="absolute bg-primary/70 rounded-lg top-10 left-10 pt-12 w-4/5 md:w-auto md:min-w-md flex flex-col backdrop-blur-sm">
          <div className="px-6 py-3 z-20">
            <h2 className="text-white">{pageTitle}</h2>
            <span className="flex flex-nowrap gap-2 font-light text-white capitalize text-sm items-center">
              <Link className="hover:font-normal cursor-pointer hover:underline transition-all" href={"/"}>Home</Link>
              {breadcrumb.map((bread, index) => (
                <React.Fragment key={pageTitle + "-breadcrumb-" + index}>
                  {typeof (bread) === "string" && <>
                    <ChevronRight className="size-3" />
                    <Link className="hover:font-normal cursor-pointer hover:underline transition-all" href={"/" + bread}>{bread}</Link>
                  </>}
                  {typeof (bread) === "object" && <>
                    <ChevronRight className="size-3" key={pageTitle + "-" + bread.href + "-" + bread.title} />
                    <Link className="hover:font-normal cursor-pointer hover:underline transition-all" href={bread.title}>{bread.title}</Link>
                  </>}
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>

    </ScrollReveal>
  )
}