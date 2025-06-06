import { Button } from "@/components/ui/button"
import { Sparkles, Video, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Create Amazing Video Ads with AI
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Transform your ideas into professional video ads using the power of AI.
          No design skills required.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          <Sparkles className="h-5 w-5" />
          Start Creating
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <Video className="h-5 w-5" />
          View Templates
        </Button>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 text-left">
          <Sparkles className="mb-4 h-8 w-8 text-primary" />
          <h3 className="mb-2 text-xl font-semibold">AI-Powered Creation</h3>
          <p className="text-muted-foreground">
            Generate professional video ads with just a text prompt.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-left">
          <Video className="mb-4 h-8 w-8 text-primary" />
          <h3 className="mb-2 text-xl font-semibold">Rich Templates</h3>
          <p className="text-muted-foreground">
            Choose from hundreds of customizable video templates.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-left">
          <MessageSquare className="mb-4 h-8 w-8 text-primary" />
          <h3 className="mb-2 text-xl font-semibold">Smart Editing</h3>
          <p className="text-muted-foreground">
            Edit your videos with AI assistance and real-time preview.
          </p>
        </div>
      </div>
    </div>
  )
} 