"use client"

import * as React from "react"
import { Dialog } from "@base-ui/react/dialog"
import { X } from "lucide-react"
import { cn } from "cn"

const Sheet = Dialog.Root
const SheetTrigger = Dialog.Trigger
const SheetClose = Dialog.Close

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof Dialog.Popup> & { side?: "top" | "right" | "bottom" | "left" }) {
  const positions = {
    top: "inset-x-0 top-0 border-b",
    right: "inset-y-0 right-0 h-full w-4/5 max-w-sm border-l",
    bottom: "inset-x-0 bottom-0 border-t",
    left: "inset-y-0 left-0 h-full w-4/5 max-w-sm border-r",
  }

  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] transition-opacity data-ending:opacity-0" />
      <Dialog.Popup
        className={cn(
          "fixed z-50 flex flex-col gap-6 bg-background p-6 shadow-xl outline-none transition-transform duration-300 data-ending:translate-x-full",
          positions[side],
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close
          className="absolute right-4 top-4 rounded-sm p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Close menu"
        >
          <X className="size-5" />
        </Dialog.Close>
      </Dialog.Popup>
    </Dialog.Portal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1.5 text-left", className)} {...props} />
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return <Dialog.Title className={cn("text-lg font-semibold", className)} {...props} />
}

export { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger }
