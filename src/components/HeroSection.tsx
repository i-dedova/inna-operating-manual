export function HeroSection() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background dark:from-accent/12 dark:via-background dark:to-background"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-6 lg:space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight max-w-4xl mx-auto pb-3">
              Inna's Operating Manual
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your handbook for leveraging my strategic superpowers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}