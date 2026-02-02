import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const HeroSection = () => {
  // Put your photo in: /public/profile.jpg
  const profilePhotoUrl = `${import.meta.env.BASE_URL}profile.jpg`;

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="container relative z-10 px-4 sm:px-6 py-10 sm:py-12">
        {/* Main Hero Card */}
        <div className="relative max-w-6xl mx-auto">
          {/* Black Banner with Diagonal Cut */}
          <div className="relative bg-banner rounded-3xl overflow-hidden">
            {/* Diagonal cut overlay */}
            <div
              className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(0_0%_20%)]"
              style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />

            <div className="relative z-10 flex items-center min-h-[360px] sm:min-h-[420px] md:min-h-[500px] p-6 sm:p-8 md:p-12">
              {/* Left side - Crystal Shape */}
              <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2">
                <div className="relative w-96 h-96 animate-float">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="crystalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(280 45% 70%)" />
                        <stop offset="100%" stopColor="hsl(169 50% 65%)" />
                      </linearGradient>
                      <linearGradient id="crystalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(330 40% 75%)" />
                        <stop offset="100%" stopColor="hsl(280 45% 60%)" />
                      </linearGradient>
                      <linearGradient id="crystalGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="hsl(169 50% 75%)" />
                        <stop offset="100%" stopColor="hsl(280 45% 65%)" />
                      </linearGradient>
                      <linearGradient id="crystalGrad4" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="hsl(190 30% 75%)" />
                        <stop offset="100%" stopColor="hsl(270 25% 80%)" />
                      </linearGradient>
                    </defs>

                    <polygon points="100,5 115,70 100,85 85,70" fill="url(#crystalGrad1)" opacity="0.9" />
                    <polygon points="100,5 85,70 75,55" fill="url(#crystalGrad2)" opacity="0.85" />
                    <polygon points="100,5 115,70 125,55" fill="url(#crystalGrad3)" opacity="0.8" />

                    <polygon points="175,35 120,75 100,85 115,70" fill="url(#crystalGrad2)" opacity="0.85" />
                    <polygon points="175,35 130,60 120,75" fill="url(#crystalGrad4)" opacity="0.75" />

                    <polygon points="195,100 130,95 115,100 130,105" fill="url(#crystalGrad1)" opacity="0.9" />
                    <polygon points="195,100 130,105 125,120" fill="url(#crystalGrad3)" opacity="0.8" />

                    <polygon points="175,165 120,125 100,115 115,130" fill="url(#crystalGrad4)" opacity="0.85" />
                    <polygon points="175,165 130,140 120,125" fill="url(#crystalGrad1)" opacity="0.75" />

                    <polygon points="100,195 115,130 100,115 85,130" fill="url(#crystalGrad2)" opacity="0.9" />
                    <polygon points="100,195 85,130 75,145" fill="url(#crystalGrad3)" opacity="0.85" />
                    <polygon points="100,195 115,130 125,145" fill="url(#crystalGrad1)" opacity="0.8" />

                    <polygon points="25,165 80,125 100,115 85,130" fill="url(#crystalGrad3)" opacity="0.85" />
                    <polygon points="25,165 70,140 80,125" fill="url(#crystalGrad2)" opacity="0.75" />

                    <polygon points="5,100 70,95 85,100 70,105" fill="url(#crystalGrad4)" opacity="0.9" />
                    <polygon points="5,100 70,105 75,120" fill="url(#crystalGrad1)" opacity="0.8" />

                    <polygon points="25,35 80,75 100,85 85,70" fill="url(#crystalGrad1)" opacity="0.85" />
                    <polygon points="25,35 70,60 80,75" fill="url(#crystalGrad3)" opacity="0.75" />

                    <polygon points="100,85 115,100 100,115 85,100" fill="url(#crystalGrad2)" opacity="0.95" />
                    <polygon points="85,70 100,85 85,100 70,85" fill="url(#crystalGrad4)" opacity="0.85" />
                    <polygon points="115,70 130,85 115,100 100,85" fill="url(#crystalGrad1)" opacity="0.85" />
                    <polygon points="115,100 130,115 115,130 100,115" fill="url(#crystalGrad3)" opacity="0.85" />
                    <polygon points="85,100 100,115 85,130 70,115" fill="url(#crystalGrad2)" opacity="0.85" />

                    <polygon points="100,20 160,60 140,100 100,80" fill="url(#crystalGrad1)" opacity="0.9" />
                    <polygon points="100,20 40,60 60,100 100,80" fill="url(#crystalGrad2)" opacity="0.85" />
                    <polygon points="100,80 140,100 130,150 100,180" fill="url(#crystalGrad3)" opacity="0.8" />
                    <polygon points="100,80 60,100 70,150 100,180" fill="url(#crystalGrad1)" opacity="0.75" />
                    <polygon points="140,100 160,60 170,120 130,150" fill="url(#crystalGrad2)" opacity="0.7" />
                    <polygon points="60,100 40,60 30,120 70,150" fill="url(#crystalGrad3)" opacity="0.65" />
                    <polygon points="100,20 120,50 100,80 80,50" fill="hsl(280 45% 80%)" opacity="0.5" />
                    <polygon points="170,120 130,150 150,170 180,140" fill="hsl(169 50% 55%)" opacity="0.6" />
                    <polygon points="30,120 70,150 50,170 20,140" fill="hsl(330 40% 65%)" opacity="0.55" />
                  </svg>
                </div>
              </div>

              {/* Right side - Text Content */}
              <div className="ml-auto md:w-2/3 lg:w-1/2 text-right">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display text-banner-foreground mb-5 sm:mb-6 leading-tight">
                  <span className="glitch-text inline-block" data-text="Enterprise AI">
                    Enterprise AI
                  </span>
                  <br />
                  <span className="glitch-text inline-block" data-text="Readiness">
                    Readiness
                  </span>
                </h1>

                <div className="space-y-1 text-base sm:text-lg md:text-2xl font-medium text-muted-foreground/80">
                  <p>Governance</p>
                  <p>Scale</p>
                  <p>ROI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo - Overlapping */}
          <div className="absolute left-5 sm:left-8 md:left-16 -bottom-14 sm:-bottom-16 md:-bottom-20 z-20">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full border-4 border-background bg-muted overflow-hidden shadow-2xl">
              <img
                src={profilePhotoUrl}
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content below banner (MOBILE FIXED) */}
        <div className="max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left - Bio */}
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-3">
              Ella Türümina
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
              I help regulated enterprises ship AI safely — with clear accountability, compliant data lineage, and measurable ROI.
            </p>

            <ul className="space-y-3 text-base sm:text-lg text-muted-foreground mb-7">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0" />
                <span>
                  <span className="font-medium text-foreground">Risk ownership & decision rights</span>{" "}
                  (who answers when AI is wrong)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0" />
                <span>
                  <span className="font-medium text-foreground">Auditability</span>{" "}
                  (lineage, reproducibility, documentation)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0" />
                <span>
                  <span className="font-medium text-foreground">Operating model</span>{" "}
                  (forums, controls, KPI cockpit)
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto" variant="default" size="lg">
                Book a 15-min Readiness Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button className="w-full sm:w-auto" variant="outline" size="lg">
                Download: 30-min AI Readiness Checklist
              </Button>
            </div>
          </div>

          {/* Right - Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {[
              { value: "10+", label: "Years" },
              { value: "10+", label: "Countries" },
              { value: "15+", label: "Publications" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3 sm:p-4 rounded-xl bg-card border border-border"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold font-display">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
