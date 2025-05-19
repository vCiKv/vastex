import { cn } from "@/lib/utils"

interface BlobProps {
  className?: string
  variant?: "blob1" | "blob2" | "blob3" | "dots"
  color?: string
  size?: "sm" | "md" | "lg" | "xl"
  opacity?: number
  animate?: boolean
}

export function Blob({
  className,
  variant = "blob1",
  color = "text-blue-500",
  size = "md",
  opacity = 0.1,
  animate = false,
}: BlobProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[30rem] h-[30rem]",
  }

  const animationClass = animate ? "animate-blob animation-delay-2000" : ""

  const blobs = {
    blob1: (
      <div
        className={cn(
          "absolute rounded-full mix-blend-multiply filter blur-xl opacity-70",
          sizeClasses[size],
          animationClass,
          className,
        )}
        style={{ opacity }}
      />
    ),
    blob2: (
      <svg viewBox="0 0 200 200" className={cn(sizeClasses[size], animationClass, className)} style={{ opacity }}>
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.5C87,13.4,81.4,26.8,73.6,38.6C65.8,50.5,55.7,60.8,43.3,67.4C30.9,74,15.4,76.9,0.4,76.2C-14.6,75.6,-29.2,71.3,-42.2,64.5C-55.2,57.7,-66.5,48.3,-74.3,36.3C-82.1,24.2,-86.3,9.6,-85.5,-4.8C-84.7,-19.2,-78.9,-33.3,-69.8,-44.2C-60.7,-55.1,-48.3,-62.7,-35.6,-70.5C-22.9,-78.3,-10,-86.3,3.2,-91.2C16.3,-96.1,32.6,-97.9,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    ),
    blob3: (
      <svg viewBox="0 0 200 200" className={cn(sizeClasses[size], animationClass, className)} style={{ opacity }}>
        <path
          fill="currentColor"
          d="M39.9,-65.7C54.3,-60,70.2,-53.3,79.7,-41.3C89.2,-29.2,92.3,-11.7,89.1,4.3C85.8,20.3,76.2,34.9,65.4,47.3C54.7,59.7,42.8,70,29.2,75.8C15.6,81.6,0.3,83,-14.8,80.5C-29.9,78,-44.8,71.7,-57.2,61.5C-69.6,51.3,-79.5,37.2,-83.8,21.6C-88.1,6,-86.8,-11.1,-80.9,-25.9C-75,-40.7,-64.5,-53.2,-51.5,-59.8C-38.5,-66.5,-23,-67.3,-8.5,-74.4C6,-81.5,25.5,-71.4,39.9,-65.7Z"
          transform="translate(100 100)"
        />
      </svg>
    ),
    dots: (
      <div
        className={cn(
          "absolute rounded-full bg-current opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
          sizeClasses[size],
          className,
        )}
        style={{
          backgroundImage: "radial-gradient(currentColor 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          opacity,
        }}
      />
    ),
  }

  return <div id="blob-decoration" className={cn("text-current", color)}>{blobs[variant]}</div>
}
