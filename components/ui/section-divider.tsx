import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  variant?: "wave" | "curve" | "tilt" | "arrow"
  position?: "top" | "bottom"
  fill?: string
  height?: number
}

export function SectionDivider({
  className,
  variant = "wave",
  position = "bottom",
  fill = "fill-white",
  height = 60,
}: SectionDividerProps) {
  const isTop = position === "top"

  const dividers = {
    wave: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(`h-[${height}px] w-full`, isTop && "rotate-180", className)}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className={fill}
        ></path>
      </svg>
    ),
    curve: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(`h-[${height}px] w-full`, isTop && "rotate-180", className)}
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className={fill}
        ></path>
      </svg>
    ),
    tilt: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(`h-[${height}px] w-full`, isTop && "rotate-180", className)}
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={fill}></path>
      </svg>
    ),
    arrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(`h-[${height}px] w-full`, isTop && "rotate-180", className)}
      >
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className={fill}></path>
      </svg>
    ),
  }

  return (
    <div
      className={cn(
        "w-full overflow-hidden line-height-0 z-10", // Negative margin to avoid gaps
      )}
      style={{ height: `${height}px` }}
    >
      {dividers[variant]}
    </div>
  )
}
// className = {
//   cn(
//         "absolute left-0 right-0 w-full overflow-hidden line-height-0 z-10",
//     position === "top" ? "top-0" : "bottom-0",
//   position === "top" ? "-mt-1" : "-mb-1", // Negative margin to avoid gaps
//       )}