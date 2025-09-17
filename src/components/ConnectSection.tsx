import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";

export function ConnectSection() {
  return (
    <section id="connect" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="bg-gradient-accent text-accent-foreground shadow-glow">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl lg:text-4xl font-semibold">Let's Connect!</CardTitle>
            <CardDescription className="text-accent-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto py-[10px]">
              Do you think we could be a good match?{" "}
              <br className="hidden sm:block" />
              Let's discuss how I can drive results for your team.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-8">
            <div className="flex justify-center">
              <Button size="lg" variant="secondary" className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30 px-8 py-4 text-lg font-semibold" asChild>
                <a href="https://www.linkedin.com/in/innadedova/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 mr-3" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}