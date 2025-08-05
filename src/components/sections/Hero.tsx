import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-tight">
            <span className="text-foreground">Scale.</span>{" "}
            <span className="text-accent">Grow.</span>{" "}
            <span className="text-foreground">Multiply.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto">
            We help ambitious content creators earning $3K+ per month 
            <span className="text-accent font-medium"> scale to six and seven figures</span>
          </p>
          
          {/* Social Proof Numbers */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display text-accent">189M+</div>
              <div className="text-muted-foreground">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display text-accent">830K+</div>
              <div className="text-muted-foreground">Followers Grown</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display text-accent">95%</div>
              <div className="text-muted-foreground">Client Success Rate</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Book Your Growth Call
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="ghost-gold" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2" />
              See Our Results
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-muted-foreground mb-4">Trusted by creators on:</p>
            <div className="flex justify-center items-center gap-8 text-accent/60">
              <span className="text-xl font-medium">Instagram</span>
              <span className="text-xl font-medium">TikTok</span>
              <span className="text-xl font-medium">YouTube</span>
              <span className="text-xl font-medium">OnlyFans</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;