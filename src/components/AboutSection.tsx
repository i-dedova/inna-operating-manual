import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartHandshake, Users, FlaskConical, UserMinus } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="bg-card/50 border-border/50 animate-slide-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lg:text-3xl font-semibold flex items-center justify-center gap-3">
              Hello, I'm Inna Dedova <HeartHandshake className="h-6 w-6 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                10+ years driving product success across ecommerce, B2B SaaS, EdTech, and FinTech in EU, US, and CIS markets. I solve problems others overthink by quickly learning what matters, then executing solutions that balance user needs with business results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-12 max-w-3xl mx-auto">
                <div className="flex items-start gap-3 text-sm text-primary font-medium">
                  <Users className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>15pp upper funnel boost<br />through segmentation</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-accent font-medium">
                  <FlaskConical className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>10pp funnel optimization<br />via A/B experimentation</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-highlight-foreground font-medium">
                  <UserMinus className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>16% churn reduction<br />through retention initiatives</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}