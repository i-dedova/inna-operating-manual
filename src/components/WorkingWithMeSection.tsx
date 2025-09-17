import { Card } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Brain, Users, Repeat, Award, ArrowRight } from "lucide-react"

export function WorkingWithMeSection() {
  const energizers = [
    {
      icon: CheckCircle,
      title: "Strategic autonomy with clear context",
      description: "Give me the 'why' and let me figure out the 'how'"
    },
    {
      icon: CheckCircle,
      title: "Results-driven culture focus",
      description: "I care about what moves the needle, not busy work"
    },
    {
      icon: CheckCircle,
      title: "Well-defined objectives and reasoning",
      description: "Clear OKRs help me apply my strategic thinking effectively"
    },
    {
      icon: CheckCircle,
      title: "Questions and analysis welcomed",
      description: "My curiosity leads to better solutions for everyone"
    }
  ]

  const drainers = [
    {
      icon: AlertTriangle,
      title: "Micromanagement and excessive oversight",
      description: "This kills my ability to think strategically and execute well"
    },
    {
      icon: AlertTriangle,
      title: "Personal life sharing and 'family' culture",
      description: "I maintain professional boundaries and focus on results"
    },
    {
      icon: AlertTriangle,
      title: "Unexplained top-down decisions",
      description: "Help me understand the reasoning so I can optimize execution"
    },
    {
      icon: AlertTriangle,
      title: "Relationship-over-results cultures",
      description: "I focus on outcomes and data, not keeping everyone happy"
    }
  ]


  const challenges = [
    {
      icon: Users,
      challenge: "Not a people person",
      description: "I use analytical empathy over emotional and need data about people's behavior to adjust effectively.",
      solution: "Study motivations intellectually and partner with relationship building experts."
    },
    {
      icon: Brain,
      challenge: "Analysis paralysis tendency",
      description: "My strategic thinking goes too deep, overwhelming stakeholders with information instead of insights.",
      solution: "Use cognitive switching timers and 'Rule of 3s' to synthesize input into clear formats."
    },
    {
      icon: Award,
      challenge: "Perfectionist tendencies",
      description: "My Competition + Intellection combination wants to analyze every angle before moving forward.",
      solution: "Set analysis deadlines to force action and partner with focus-dominant people."
    },
    {
      icon: Repeat,
      challenge: "Hate routine tasks",
      description: "I procrastinate on repetitive processes and maintenance work, leaving them until the last moment.",
      solution: "Automate everything possible and use execution partners for routine work."
    }
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Working With Me Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding my strengths and working style helps us collaborate more effectively
          </p>
        </div>

        {/* What Energizes Me */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Energizes Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {energizers.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                <div className="flex items-start space-x-4">
                  <item.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* What Drains Me */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Drains Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drainers.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-shadow border-destructive/20">
                <div className="flex items-start space-x-4">
                  <item.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* My Challenges & How I Manage Them */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            My Challenges & How I Manage Them
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-shadow bg-accent/5">
                <div className="flex items-start space-x-4">
                  <item.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.challenge}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    <div className="border-t border-border/30 pt-3">
                      <div className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}