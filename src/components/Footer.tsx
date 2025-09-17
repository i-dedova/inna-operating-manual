import { Rocket } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          Built with self-awareness, powered by results
          <Rocket className="h-4 w-4" />
        </p>
      </div>
    </footer>
  )
}