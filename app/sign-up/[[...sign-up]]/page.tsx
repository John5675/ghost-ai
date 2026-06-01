import { SignUp } from "@clerk/nextjs"
import { BrainCircuit, Share2, FileCode, Ghost } from "lucide-react"

const features = [
  {
    icon: BrainCircuit,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileCode,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export default function SignUpPage() {
  return (
    <div className="flex h-screen">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col bg-surface border-r border-surface-border px-16 py-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand">
            <Ghost className="h-4 w-4" style={{ color: "var(--bg-base)" }} />
          </div>
          <span className="font-semibold tracking-tight text-copy-primary">
            Ghost AI
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-copy-primary">
            Design systems at the speed of thought.
          </h1>
          <p className="mt-5 leading-relaxed text-copy-secondary">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-dim">
                  <feature.icon className="h-4 w-4 text-brand" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-copy-primary">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-sm text-copy-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-copy-faint">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-base px-4 py-12">
        <SignUp />
      </div>
    </div>
  )
}
