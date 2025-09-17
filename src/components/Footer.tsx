import { Rocket, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/20">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          Built with self-awareness, powered by results
          <Rocket className="h-4 w-4" />
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/i-dedova/inna-operating-manual"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            <Github className="h-4 w-4" />
            View Source Code
          </a>
        </div>
      </div>
    </footer>
  )
}