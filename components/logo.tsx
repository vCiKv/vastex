import type React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
  width?: number | string
  height?: number | string
  className?: string
  textClassName?: string
  showText?: boolean
  variant?: "default" | "white"
}

const Logo: React.FC<LogoProps> = ({
  width = 40,
  height = 40,
  className,
  textClassName,
  showText = true,
  variant = "default",
}) => {
  const textColor = variant === "white" ? "text-white" : "text-gray-600"
  const logoColor = variant === "white" ? "#FFFFFF" : "#1d4ed8" // blue-700 in hex
  const secondaryColor = variant === "white" ? "#E5E7EB" : "#4B5563" // gray-600 in hex

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div style={{ width, height }}>
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 30L20 5L35 30H5Z"
            fill={logoColor}
            stroke={logoColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20L20 10L28 20H12Z"
            fill="white"
            stroke={logoColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 30L20 22L25 30H15Z"
            fill={secondaryColor}
            stroke={logoColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-blue-700">VASTEX</span>
          <span className={cn("ml-1 text-xl font-medium", textColor, textClassName)}>Resources</span>
        </div>
      )}
    </div>
  )
}

export default Logo
