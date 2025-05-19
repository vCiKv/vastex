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
  width = 96,
  height = 52,
  className,
}) => {

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div style={{ width, height }}>
        <img
          src={"/logo.png"}
          alt="logo"
          className="size-full object-cover"
        />
      </div>
    </div>
  )
}

export default Logo
