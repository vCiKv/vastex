import { SocialMediaList } from "@/app/companyDetails";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { RxLinkedinLogo } from "react-icons/rx";


export default function SocialMedia(props: {
  className?: string,
  socials: SocialMediaList;
  iconClassName?: string
}) {
  const { className, socials } = props
  const defaultIconClass = props.iconClassName ?? "size-6"
  const iconDetails: { [key in keyof SocialMediaList]: { icon: React.ReactElement, label: string } } = {
    facebook: { icon: (<Facebook className={(defaultIconClass)} />), label: "Facebook" },
    twitter: { icon: (<Twitter className={(defaultIconClass)} />), label: "Twitter" },
    instagram: { icon: (<Instagram className={(defaultIconClass)} />), label: "Instagram" },
    linkedIn: { icon: (<RxLinkedinLogo className={(defaultIconClass)} />), label: "LinkedIn" },
  }
  const socialKeys = Object.keys(socials) as [keyof SocialMediaList]
  return (
    <div className={cn("flex space-x-4", className)}>
      {socialKeys.map((social, index) => (
        <Link
          key={index}
          href={socials[social] ?? "#"}
          className="transition-all duration-300"
        >
          {iconDetails[social]?.icon}
          <span className="sr-only">{social}</span>
        </Link>
      ))}
    </div>
  )
}