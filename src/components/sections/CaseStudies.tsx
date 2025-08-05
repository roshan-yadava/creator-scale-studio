import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp, Users, Eye } from "lucide-react";

const caseStudies = [
  {
    name: "Chirag Sharma",
    title: "Makeup Artist",
    image: "/lovable-uploads/185b692a-63b5-4d1f-a121-6f49ef43b6cb.png",
    instagramLink: "https://instagram.com/chiragsharma",
    results: {
      instagram: "486K → 830K+",
      tiktok: "250K → 950K+",
      monthlyViews: "189M+ IG, 150M+ TikTok, 50M+ FB"
    },
    testimonial: "Roshan is not just a manager—he's the reason my content is seen by millions. The growth has been incredible.",
    highlights: ["Multiple brand collaborations", "Mars Cosmetics partnership", "300% engagement increase"]
  },
  {
    name: "Davneet Kaur",
    title: "DaveeMUA - Elite Educator",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    instagramLink: "https://instagram.com/daveemua",
    results: {
      instagram: "Structured growth strategy",
      positioning: "Elite makeup educator",
      deals: "Multiple premium brand deals"
    },
    testimonial: "Roshan understands makeup creators like no one else. I finally feel like I have a real team behind me.",
    highlights: ["Brand positioning strategy", "Content calendar structure", "Premium collaboration rates"]
  },
  {
    name: "MovieByte",
    title: "YouTube Automation Channel",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop&crop=center",
    youtubeLink: "https://youtube.com/moviebyte",
    results: {
      channel: "Built from scratch",
      automation: "Scalable workflow systems",
      proof: "In-house case study"
    },
    testimonial: "MovieByte is our in-house testing ground. We don't just offer services—we prove they work on our own brands.",
    highlights: ["Viral storytelling system", "Automated workflows", "Proven scalability"]
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            Real <span className="text-accent">Creators</span>. Real <span className="text-accent">Results</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how we've transformed the careers of creators just like you.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover-lift bg-card border-border/50 hover:border-accent/30 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Creator Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-xl text-foreground">{study.name}</h3>
                    <p className="text-accent text-sm">{study.title}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Results */}
                  <div className="space-y-3 mb-6">
                    {Object.entries(study.results).map(([key, value], idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                          {key.includes('instagram') && <Users className="w-4 h-4 text-accent" />}
                          {key.includes('tiktok') && <TrendingUp className="w-4 h-4 text-accent" />}
                          {key.includes('views') && <Eye className="w-4 h-4 text-accent" />}
                          {!key.includes('instagram') && !key.includes('tiktok') && !key.includes('views') && 
                            <TrendingUp className="w-4 h-4 text-accent" />}
                        </div>
                        <span className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-sm font-medium text-accent">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-sm text-muted-foreground italic mb-4 border-l-2 border-accent/30 pl-4">
                    "{study.testimonial}"
                  </blockquote>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {study.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        <span className="text-xs text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <Button 
                    variant="ghost-gold" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(study.instagramLink || study.youtubeLink, '_blank')}
                  >
                    View Profile
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-display text-accent">189M+</div>
            <div className="text-muted-foreground">Monthly Views Generated</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-display text-accent">950K+</div>
            <div className="text-muted-foreground">Followers Gained</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-display text-accent">50+</div>
            <div className="text-muted-foreground">Brand Partnerships</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-display text-accent">95%</div>
            <div className="text-muted-foreground">Client Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;