import * as React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveTooltipProps {
  trigger: React.ReactNode
  content: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
  className?: string
}

export function InteractiveTooltip({
  trigger,
  content,
  side = "bottom",
  sideOffset = 8,
  className
}: InteractiveTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleTriggerClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const getPositionClasses = () => {
    const base = "absolute z-50"
    switch (side) {
      case "top":
        return `${base} bottom-full left-1/2 transform -translate-x-1/2 mb-${sideOffset}`
      case "bottom":
        return `${base} top-full left-1/2 transform -translate-x-1/2 mt-${sideOffset}`
      case "left":
        return `${base} right-full top-1/2 transform -translate-y-1/2 mr-${sideOffset}`
      case "right":
        return `${base} left-full top-1/2 transform -translate-y-1/2 ml-${sideOffset}`
      default:
        return `${base} top-full left-1/2 transform -translate-x-1/2 mt-2`
    }
  }

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onClick={handleTriggerClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}
      </div>

      {isOpen && (
        <>
          {/* Mobile/tablet overlay */}
          {isMobile && (
            <div
              className="fixed inset-0 bg-black/20 z-40"
              onClick={handleClose}
            />
          )}

          {/* Tooltip content */}
          <div
            className={cn(
              isMobile
                ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-sm w-[90vw]"
                : `${getPositionClasses()} w-80 max-w-md`,
              "bg-popover border rounded-md shadow-lg px-8 py-4 text-sm text-popover-foreground",
              "animate-in fade-in-0 zoom-in-95",
              className
            )}
          >
            {/* Close button for mobile */}
            {isMobile && (
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 p-1 hover:bg-accent rounded-sm"
                aria-label="Close"
              >
                <X className="h-3 w-3" />
              </button>
            )}

            {/* Content */}
            <div className={isMobile ? "pr-6 pl-4" : ""}>
              {content}
            </div>
          </div>
        </>
      )}
    </div>
  )
}