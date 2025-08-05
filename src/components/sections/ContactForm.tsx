import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    followers: "",
    monthlyIncome: "",
    goals: "",
    challenges: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
    
    setIsSubmitted(true);
    
    // Redirect to booking page after 2 seconds
    setTimeout(() => {
      window.open("https://calendly.com/hustlersconnect/growth-call", "_blank");
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-accent/30">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="font-display text-3xl mb-4">Application Submitted!</h3>
                <p className="text-muted-foreground mb-6">
                  We're reviewing your application and will get back to you within 24 hours.
                </p>
                <Button variant="premium" onClick={() => window.open("https://calendly.com/hustlersconnect/growth-call", "_blank")}>
                  <Calendar className="mr-2" />
                  Book Your Growth Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            Ready to <span className="text-accent">Scale</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your creator journey and goals. We'll create a custom growth strategy 
            and show you exactly how we can help you reach the next level.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-center">
                Get Your Custom Growth Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Platform & Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="platform">Primary Platform *</Label>
                    <Select onValueChange={(value) => handleInputChange("platform", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your main platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="onlyfans">OnlyFans</SelectItem>
                        <SelectItem value="multiple">Multiple Platforms</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="followers">Current Followers *</Label>
                    <Select onValueChange={(value) => handleInputChange("followers", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select follower range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k-50k">10K - 50K</SelectItem>
                        <SelectItem value="50k-100k">50K - 100K</SelectItem>
                        <SelectItem value="100k-500k">100K - 500K</SelectItem>
                        <SelectItem value="500k-1m">500K - 1M</SelectItem>
                        <SelectItem value="1m+">1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Income */}
                <div className="space-y-2">
                  <Label htmlFor="monthlyIncome">Current Monthly Income *</Label>
                  <Select onValueChange={(value) => handleInputChange("monthlyIncome", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <Label htmlFor="goals">What are your main goals? *</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    placeholder="e.g., Hit 1M followers, land premium brand deals, scale to $50K/month..."
                    rows={3}
                    required
                  />
                </div>

                {/* Challenges */}
                <div className="space-y-2">
                  <Label htmlFor="challenges">What's your biggest challenge right now? *</Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => handleInputChange("challenges", e.target.value)}
                    placeholder="e.g., Stuck at current follower count, not getting brand deals, content not going viral..."
                    rows={3}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button type="submit" variant="premium" size="lg" className="text-lg px-8 py-6">
                    Get My Custom Strategy
                    <ArrowRight className="ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll review your application and book a strategy call within 24 hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <div className="flex justify-center items-center gap-8 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                No spam, ever
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                24-hour response
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Free consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;