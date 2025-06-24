'use client'
import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

type AccordionProps = {
  type: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

const AccordionContext = React.createContext<{
  expanded: Record<string, boolean>
  toggle: (value: string) => void
}>({ expanded: {}, toggle: () => {} })

const Accordion = ({ type, collapsible = false, className, children }: AccordionProps) => {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({})

  const toggle = React.useCallback((value: string) => {
    setExpanded((prev) => {
      if (type === "single") {
        if (prev[value] && collapsible) {
          return {}
        }
        return { [value]: true }
      }
      
      return {
        ...prev,
        [value]: !prev[value],
      }
    })
  }, [type, collapsible])

  return (
    <AccordionContext.Provider value={{ expanded, toggle }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

type AccordionItemProps = {
  value: string
  className?: string
  children: React.ReactNode
}

const AccordionItem = ({ value, className, children }: AccordionItemProps) => {
  return (
    <div className={cn("border-b", className)} data-value={value}>
      {children}
    </div>
  )
}

type AccordionTriggerProps = {
  className?: string
  children: React.ReactNode
}

const AccordionTrigger = ({ className, children }: AccordionTriggerProps) => {
  const { expanded, toggle } = React.useContext(AccordionContext)
  const itemValue = React.useContext(ItemContext)
  const isOpen = expanded[itemValue]

  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => toggle(itemValue)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        aria-expanded={isOpen}
      >
        {children}
        <ChevronDown 
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0"
          )} 
        />
      </button>
    </div>
  )
}

type AccordionContentProps = {
  className?: string
  children: React.ReactNode
}

const ItemContext = React.createContext<string>("")

const AccordionContent = ({ className, children }: AccordionContentProps) => {
  const { expanded } = React.useContext(AccordionContext)
  const itemValue = React.useContext(ItemContext)
  const isOpen = expanded[itemValue]

  if (!isOpen) return null

  return (
    <div className="overflow-hidden text-sm">
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  )
}

// Update AccordionItem to provide context for its children
const EnhancedAccordionItem = ({ value, className, children }: AccordionItemProps) => {
  return (
    <ItemContext.Provider value={value}>
      <AccordionItem value={value} className={className}>
        {children}
      </AccordionItem>
    </ItemContext.Provider>
  )
}

AccordionItem.displayName = "AccordionItem"
AccordionTrigger.displayName = "AccordionTrigger"
AccordionContent.displayName = "AccordionContent"

export { 
  Accordion, 
  EnhancedAccordionItem as AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
}
