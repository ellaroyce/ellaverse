import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Bot, Cpu, Database, Network, Shield } from "lucide-react";


const services = [
  {
    icon: Bot,
    title: "AI Readiness Sprint (2 weeks)",
    description: "Deliverables: readiness scorecard, red flags, board-ready recommendations",
    features: ["Readiness scorecard (risk / data / controls / ops)", "Red flags & “stop/go” recommendation", "Board-ready one-pager + next-step roadmap"]
  },
  {
    icon: Shield,
    title: "Governance Blueprint (4–6 weeks)",
    description: "Deliverables: decision forums + RACI, compliance gates, documentation templates",
    features: ["Decision forums + RACI (who approves what)", "Compliance gates (EU AI Act-friendly), evidence pack", "Templates: model card, data lineage, incident response"]
  },
  {
    icon: BarChart3,
    title: "Scale & KPI Cockpit (6–12 weeks)",
    description: "Deliverables: operating model, KPI dashboard, rollout playbook, enablement",
    features: ["KPI system (value / risk / quality / coverage)", "Operating model for rollout (roles, cadence, controls)", "Adoption + enablement plan for teams"]
  }
  // {
  //   icon: Network,
  //   title: "Digital Transformation",
  //   description: "Lead end-to-end digital transformation initiatives with hands-on implementation across global teams.",
  //   features: ["Change Management", "Process Optimization", "Cross-functional Teams", "Global Rollouts"]
  // },
  // {
  //   icon: Shield,
  //   title: "Research & Innovation",
  //   description: "Apply scientific rigor to business problems with research-grade methodologies and peer-reviewed approaches.",
  //   features: ["Mathematical Modeling", "Research Design", "Academic Publications", "Patent Development"]
  // },
  // {
  //   icon: BarChart3,
  //   title: "KPI & Performance",
  //   description: "Develop and implement key performance indicators to measure effectiveness and drive continuous improvement.",
  //   features: ["KPI Development", "Performance Dashboards", "Root Cause Analysis", "Trend Analysis"]
  // }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container relative z-10 px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display mb-6">
            How I Can Help You
          </h3>
          <p className="text-lg text-muted-foreground">
            End-to-end consulting services combining deep technical expertise with strategic business vision.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-banner transition-all duration-300">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-banner-foreground transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-semibold font-display mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
