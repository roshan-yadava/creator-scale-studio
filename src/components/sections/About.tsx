import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Trophy } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            <span className="text-accent">By Creators</span>, For <span className="text-accent">Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by Roshan and a specialist team with deep roots in content creation, marketing, and influencer growth. 
            We understand the creator economy because we live it.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="hover-lift bg-card border-border/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg mb-2">Creator-First</h3>
              <p className="text-sm text-muted-foreground">
                We're creators ourselves, so we understand your challenges and ambitions intimately.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-card border-border/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg mb-2">Results-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Every strategy is backed by data and tested on our own channels before client implementation.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-card border-border/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg mb-2">Fast Execution</h3>
              <p className="text-sm text-muted-foreground">
                We move at the speed of social media—quick turnarounds without sacrificing quality.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-card border-border/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg mb-2">Proven Success</h3>
              <p className="text-sm text-muted-foreground">
                From six-figure years to viral content—we've helped creators at every level scale up.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're on a mission to help serious creators crack six and seven-figure years. 
              Not through get-rich-quick schemes or vanity metrics, but through proven strategies, 
              premium partnerships, and relentless execution. Because when creators win, 
              the entire creator economy wins.
            </p>
            
            {/* Team Philosophy */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
              <h4 className="font-display text-xl mb-4 text-accent">Our Philosophy</h4>
              <p className="text-muted-foreground">
                "We don't just manage creators—we partner with them. Every client success story becomes 
                part of our legacy, and every milestone they hit drives us to raise the bar even higher. 
                We're not building an agency; we're building the future of creator success."
              </p>
              <div className="mt-4 text-accent font-medium">— Roshan, Founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;