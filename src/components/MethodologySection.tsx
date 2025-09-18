import { InteractiveTooltip } from "@/components/ui/interactive-tooltip"
import { Zap, Info } from "lucide-react"

export function MethodologySection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-6 animate-slide-up">
          <h3 className="text-2xl font-semibold text-foreground">
            Strengths Over Weaknesses Approach
          </h3>
          <div className="text-muted-foreground max-w-2xl mx-auto space-y-4">
            <p>
              I build systems around my strengths and create workarounds for my weaknesses by figuring out exactly how I work using{" "}
              <InteractiveTooltip
                trigger={
                  <span className="relative cursor-pointer border-b border-dotted border-primary hover:border-solid transition-colors">
                    Gallup CliftonStrengths
                    <Info className="h-2.5 w-2.5 text-primary absolute -top-0.5 -right-2.5" />
                  </span>
                }
                content={
                  <div className="space-y-3 max-w-md lg:max-w-lg">
                    <p className="font-medium text-sm">What is CliftonStrengths?</p>
                    <p className="text-sm leading-relaxed">
                      A performance-based assessment that identifies your top talents from 34 strength themes.
                      Based on 40+ years of research, it helps you discover and develop your natural patterns
                      of thinking, feeling, and behaving.
                    </p>
                    <p className="text-sm leading-relaxed font-medium text-primary">
                      Why this matters: This framework helps you predict my performance by showing exactly how I approach problems, make decisions, and deliver results.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Used by 26+ million people and<br />467 Fortune 500 companies
                    </p>
                  </div>
                }
                side="bottom"
                sideOffset={8}
              />.
            </p>
          </div>
          <div className="text-center text-primary font-medium">
            <Zap className="inline h-5 w-5" style={{marginRight: '8px'}} />
            <span className="inline">Higher performance with less energy expenditure</span>
          </div>

          {/* Theme Distribution Section */}
          <div className="mt-8 pt-6 p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl">
            <h4 className="text-lg font-semibold text-foreground mb-6 text-center">My CliftonStrengths Theme Distribution</h4>

            {/* Distribution Bars */}
            <div className="space-y-3">
              <div className="flex items-center gap-1 sm:gap-4">
                <div className="w-20 sm:w-32 text-xs sm:text-sm font-medium text-right leading-tight">Strategic Thinking</div>
                <div className="flex-1 bg-border rounded-full h-6 relative overflow-hidden">
                  <div className="bg-strategic-thinking h-full rounded-full flex items-center justify-end pr-1 sm:pr-3 w-[65%] sm:w-[70%]">
                    <span className="text-strategic-thinking-foreground text-xs font-semibold">5 (42%)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-4">
                <div className="w-20 sm:w-32 text-xs sm:text-sm font-medium text-right leading-tight">Influencing</div>
                <div className="flex-1 bg-border rounded-full h-6 relative overflow-hidden">
                  <div className="bg-influencing h-full rounded-full flex items-center justify-end pr-1 sm:pr-3 w-[55%] sm:w-[55%]">
                    <span className="text-influencing-foreground text-xs font-semibold">4 (33%)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-4">
                <div className="w-20 sm:w-32 text-xs sm:text-sm font-medium text-right leading-tight">Executing</div>
                <div className="flex-1 bg-border rounded-full h-6 relative overflow-hidden">
                  <div className="bg-executing h-full rounded-full flex items-center justify-end pr-1 sm:pr-3 w-[40%] sm:w-[35%]">
                    <span className="text-executing-foreground text-xs font-semibold">2 (17%)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-4">
                <div className="w-20 sm:w-32 text-xs sm:text-sm font-medium text-right leading-tight">Relationship Building</div>
                <div className="flex-1 bg-border rounded-full h-6 relative overflow-hidden">
                  <div className="bg-relationship-building h-full rounded-full flex items-center justify-end pr-1 sm:pr-3 w-[30%] sm:w-[20%]">
                    <span className="text-relationship-building-foreground text-xs font-semibold">1 (8%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}