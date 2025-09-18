import { Rocket, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/20">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Built with self-awareness, powered by results
        </p>
        <p className="text-sm text-muted-foreground">
          <a
            href="https://github.com/i-dedova/inna-operating-manual"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            Source Code
          </a>
        </p>
      </div>
    </footer>
  )
}