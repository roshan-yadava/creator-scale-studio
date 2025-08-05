import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Palette, 
  TrendingUp, 
  Handshake, 
  User, 
  Calendar, 
  Globe, 
  Megaphone 
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Content Creation",
    problem: "You hate spending hours creating content that barely gets views",
    outcome: "We'll create viral-worthy reels, shorts, and YouTube videos that multiply your reach and engagement",
    features: ["Viral content strategy", "Platform-specific optimization", "Trending format adaptation"]
  },
  {
    icon: Palette,
    title: "Video Editing",
    problem: "You're losing time editing when you should be creating and growing",
    outcome: "Professional, scroll-stopping edits that keep viewers hooked from start to finish",
    features: ["Advanced editing techniques", "Trending effects & transitions", "Quick turnaround"]
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    problem: "You're posting consistently but your growth has plateaued",
    outcome: "Data-driven strategies that break through plateaus and accelerate follower growth",
    features: ["Algorithm optimization", "Competitor analysis", "Growth hacking techniques"]
  },
  {
    icon: Handshake,
    title: "Paid Collaborations",
    problem: "You want premium brand deals but don't know how to find and secure them",
    outcome: "We'll help you land high-paying collaborations with brands that align with your audience",
    features: ["Brand outreach", "Rate negotiation", "Contract management"]
  },
  {
    icon: User,
    title: "Profile Optimization",
    problem: "Your profile doesn't convert visitors into followers and customers",
    outcome: "A magnetic profile that instantly communicates your value and converts viewers into fans",
    features: ["Bio optimization", "Highlight strategy", "Visual branding"]
  },
  {
    icon: Calendar,
    title: "Social Media Management",
    problem: "You're overwhelmed managing multiple platforms while trying to create quality content",
    outcome: "Full-service management that keeps your accounts active, engaging, and growing",
    features: ["Content calendars", "Daily posting", "Community engagement"]
  },
  {
    icon: Globe,
    title: "Website & Funnels",
    problem: "You're losing potential customers because you don't have a professional online presence",
    outcome: "Converting websites and funnels that turn your social media traffic into paying customers",
    features: ["Professional websites", "Sales funnels", "Lead magnets"]
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    problem: "You want to collaborate with other creators but don't know how to approach them",
    outcome: "Strategic partnerships and collaborations that expand your reach exponentially",
    features: ["Creator networking", "Collaboration strategy", "Cross-promotion campaigns"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            Stop <span className="text-accent">Struggling</span>. Start <span className="text-accent">Scaling</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We handle everything so you can focus on what you do best—creating amazing content and building your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift bg-card border-border/50 hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl mb-3">{service.title}</h3>
                
                {/* Problem */}
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {service.problem}
                </p>
                
                {/* Outcome */}
                <p className="text-accent font-medium text-sm mb-4 leading-relaxed">
                  {service.outcome}
                </p>
                
                {/* Features */}
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="premium" size="lg" className="text-lg px-8 py-6">
            Get Your Custom Strategy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;