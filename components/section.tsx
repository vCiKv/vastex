import { cn } from "@/lib/utils";
import { SectionDivider, SectionDividerProps } from "./ui/section-divider";
import { CSSProperties } from "react";

export default function Section(props: {
  divider?: SectionDividerProps;
  dividerBottom?: SectionDividerProps;
  children: React.ReactNode;
  className?: string
  containerClassName?: string
  style?: CSSProperties

}) {
  const { divider, dividerBottom } = props
  const defaultSectionClassName = "relative py-16 md:py-24"
  if (!divider) {
    return (
      <section className={cn(defaultSectionClassName, props.containerClassName)} style={props.style}>
        <div className={cn(props.className)}>
          {props.children}
        </div>
      </section>
    )
  } else {

    return (
      // <section className={cn(defaultSectionClassName, props.className)}>
      <section className={cn(defaultSectionClassName, props.containerClassName)} style={props.style}>
        {
          (divider.position === "top" || divider.position === "both") &&
          <SectionDivider {...divider} position="top" />
        }
        <div className={cn(props.className)}>
          {props.children}
        </div>
        {
          (divider.position === "bottom" || divider.position === "both" || dividerBottom) &&
          <>{
            dividerBottom ?
              <SectionDivider {...dividerBottom} position="bottom" />
              :
              <SectionDivider {...divider} position="bottom" />
          }</>
        }
      </section>
    )
  }
}