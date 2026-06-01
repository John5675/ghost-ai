"use client"

import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * Reusable dialog pattern for the editor.
 *
 * Frames a centered modal with the documented modal styling (rounded-3xl,
 * elevated dark surface) and exposes title, description, and footer-action
 * slots. Concrete dialogs are composed on top of this pattern later — this
 * component intentionally does not encode any specific dialog content.
 */
interface EditorDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title: string
  description?: string
  /** Footer action buttons, rendered right-aligned in the footer bar. */
  footer?: React.ReactNode
  children?: React.ReactNode
}

export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  footer,
  children,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl border border-surface-border bg-elevated text-copy-primary">
        <DialogHeader>
          <DialogTitle className="text-copy-primary">{title}</DialogTitle>
          {description ? (
            <DialogDescription className="text-copy-muted">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>

        {children}

        {footer ? (
          <DialogFooter className="rounded-b-3xl">{footer}</DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
