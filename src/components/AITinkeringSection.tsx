import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function AITinkeringSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 p-6 lg:p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              AI Tinkering & Automation
            </h2>

            <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>
                <span className="inline sm:block">I'm curious, I like tinkering, and I hate routine tasks.</span>
                <span className="inline sm:block"> So I automate them to focus on strategic work and support my team.</span>
              </p>
            </div>

            {/* Key Metrics */}
            <div className="flex justify-center items-center gap-6 sm:gap-8 text-sm font-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">faster context setup</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">400%</div>
                <div className="text-muted-foreground">better commitment follow-through</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">90%</div>
                <div className="text-muted-foreground">faster technical answers</div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity shadow-glow px-8 py-3 font-semibold" asChild>
                <a href="https://lazy-pm-ai-workbook.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Explore My AI Workbook
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}