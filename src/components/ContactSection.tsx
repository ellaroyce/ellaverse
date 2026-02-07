import { Button } from "@/components/ui/button";
import { Calendar, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-card">
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative p-12 md:p-16 rounded-3xl bg-banner text-center overflow-hidden">
            {/* Decorative diagonal */}
            <div 
              className="absolute top-0 right-0 w-1/3 h-full bg-background/10"
              style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)' }}
            />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-banner-foreground">
                Ready to make AI production-ready?
              </h2>
              <p className="text-xl text-banner-foreground/70 max-w-2xl mx-auto mb-10 text-primary-foreground">
                Start with a 2-week AI Readiness Sprint. If needed, we continue with a Governance Blueprint and Scale & KPI Cockpit to turn pilots into production outcomes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button variant="secondary" size="lg">
                  <Mail className="w-5 h-5" />
                  Book a call
                </Button>
                {/* <Button variant="outline" size="lg" className="border-banner-foreground/30 text-banner-foreground hover:bg-banner-foreground/10" asChild>
                  <a href="https://linkedin.com/in/ella-turumina" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button> */}
              </div>

              {/* Contact options */}
              <div className="grid sm:grid-cols-3 gap-6 pt-10 border-t border-banner-foreground/20">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-banner-foreground/10 mx-auto mb-3 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-banner-foreground" />
                  </div>
                  <h4 className="font-semibold mb-1 text-banner-foreground">Email</h4>
                  <p className="text-sm text-primary-foreground/60">eyatyuryumina@gmail.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-banner-foreground/10 mx-auto mb-3 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-banner-foreground" />
                  </div>
                  <h4 className="font-semibold mb-1 text-banner-foreground">LinkedIn</h4>
                  <p className="text-sm text-primary-foreground/60">linkedin.com/in/ella-turumina</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-banner-foreground/10 mx-auto mb-3 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-1 text-banner-foreground">Location</h4>
                  <p className="text-sm text-primary-foreground/60">Erlangen, Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
