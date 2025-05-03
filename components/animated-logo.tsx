"use client"

import { useEffect, useState } from "react"
import Logo from "@/components/logo"
import { cn } from "@/lib/utils"

interface AnimatedLogoProps {
  width?: number | string
  height?: number | string
  className?: string
  textClassName?: string
  showText?: boolean
  variant?: "default" | "white"
  animationDelay?: number
}

export default function AnimatedLogo({
  width = 40,
  height = 40,
  className,
  textClassName,
  showText = true,
  variant = "default",
  animationDelay = 0,
}: AnimatedLogoProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, animationDelay)

    return () => clearTimeout(timer)
  }, [animationDelay])

  return (
    <div
      className={cn(
        "transition-all duration-1000 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      <Logo width={width} height={height} showText={showText} variant={variant} textClassName={textClassName} />
    </div>
  )
}
