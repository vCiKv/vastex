import { cn } from "@/lib/utils";
import { SectionDivider, SectionDividerProps } from "./ui/section-divider";

export default function Section(props: {
  divider?: SectionDividerProps;
  dividerBottom?: SectionDividerProps;
  children: React.ReactNode;
  className?: string
}) {
  const { divider, dividerBottom } = props
  const defaultSectionClassName = "relative py-16 md:py-24"
  if (!divider) {
    return (
      <section className={cn(defaultSectionClassName, props.className)}>
        <div>
          {props.children}
        </div>
      </section>
    )
  } else {

    return (
      // <section className={cn(defaultSectionClassName, props.className)}>
      <section>
        {
          (divider.position === "top" || divider.position === "both") &&
          <SectionDivider {...divider} position="top" />
        }
        <div className={cn(defaultSectionClassName, props.className)}>
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