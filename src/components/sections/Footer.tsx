import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="font-display text-2xl text-accent mb-4">HustlersConnect</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              We help ambitious content creators scale, grow, and multiply their income. 
              By creators, for creators.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#services" className="block text-muted-foreground hover:text-accent transition-colors">
                Services
              </a>
              <a href="#results" className="block text-muted-foreground hover:text-accent transition-colors">
                Case Studies
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-accent transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@hustlersconnect.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Book a call to connect</span>
              </div>
            </div>
            <Button variant="premium" size="sm" className="mt-4">
              Book Your Growth Call
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 HustlersConnect. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;