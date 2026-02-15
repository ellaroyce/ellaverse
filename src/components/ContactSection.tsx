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

              {/* Contact options */}
              <div className="grid sm:grid-cols-1 gap-6 pt-10 border-t border-banner-foreground/20">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-banner-foreground/10 mx-auto mb-3 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-banner-foreground" />
                  </div>
                  <h4 className="font-semibold mb-1 text-banner-foreground">LinkedIn</h4>
                  <p className="text-sm text-primary-foreground/60">linkedin.com/in/ella-turumina</p>
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
