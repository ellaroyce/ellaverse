import { Brain, Building2, GraduationCap, Lightbulb, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const traits = [
    { icon: Brain, label: "Systems Thinker" },
    { icon: Lightbulb, label: "Innovation Leader" },
    { icon: Target, label: "Results Driven" },
    { icon: Zap, label: "EU AI Act-ready" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-banner rounded-3xl rotate-3" />
              
              {/* Content card */}
              <div className="absolute inset-4 rounded-2xl bg-card border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-transparent to-muted" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-banner mx-auto mb-4 flex items-center justify-center">
                      <Brain className="w-16 h-16 text-banner-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm">Enterprise Architect & Researcher</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-full shadow-lg animate-float">
                <span className="text-sm font-medium flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" /> PhD Candidate
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-full shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-sm font-medium flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> Siemens Mobility
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-6">
              From Mathematical Models to Enterprise Architecture
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Ten years ago, stepping from ballet into mathematical modelling and enterprise systems wasn’t obvious—but it taught me the same principle: execution beats theory.
              </p>
              <p>
                Today, I work with leaders in complex, regulated environments where safety, uptime, and compliance are non-negotiable. My focus is simple: turn “AI theater” into production outcomes by aligning initiatives with enterprise architecture, governance, and risk.
              </p>
              <p>
                I’m currently an AI Readiness Architect at Siemens Mobility, designing operating models and governance structures for large-scale systems.  
              </p>
              <p>            
                In practice, I start with risk ownership and auditability, then design the decision forums and controls that make scaling possible — and I measure it with a KPI cockpit (value, risk, quality, coverage).
              </p>
            </div>

            {/* Trait badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {traits.map((trait) => (
                <div 
                  key={trait.label}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border"
                >
                  <trait.icon className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium">{trait.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
