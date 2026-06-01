"use client"

import * as React from "react"
import { FolderOpen, Plus, Users, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface EmptyStateProps {
  icon: React.ReactNode
  message: string
}

function EmptyState({ icon, message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
      <div className="text-copy-faint">{icon}</div>
      <p className="text-sm text-copy-muted">{message}</p>
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "absolute top-0 left-0 z-40 flex h-full w-80 flex-col border-r border-surface-border bg-surface/95 backdrop-blur-sm transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"
      )}
    >
      {/* Header */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border px-4">
        <h2 className="font-heading text-sm font-medium text-copy-primary">
          Projects
        </h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close projects sidebar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs */}
      <Tabs
        defaultValue="my-projects"
        className="flex min-h-0 flex-1 flex-col gap-0 p-3"
      >
        <TabsList className="w-full">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="mt-3">
          <EmptyState
            icon={<FolderOpen className="h-8 w-8" />}
            message="No projects yet"
          />
        </TabsContent>
        <TabsContent value="shared" className="mt-3">
          <EmptyState
            icon={<Users className="h-8 w-8" />}
            message="No shared projects"
          />
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="shrink-0 border-t border-surface-border p-3">
        <Button className="w-full">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
