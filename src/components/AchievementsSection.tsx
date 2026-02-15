import { Award, BookOpen, Building2, FlaskConical, GraduationCap, Medal, Mic } from "lucide-react";

const achievements = [
  {
    icon: Medal,
    title: "PM@Siemens",
    description: "Selected program for high-impact leaders",
    year: "2025"
  },
  {
    icon: Award,
    title: "Siemens Mobility Global Talent",
    description: "Siemens",
    year: "2023"
  },
  {
    icon: Medal,
    title: "Siemens Mobility Innovation Award",
    description: "Bayern Logistics. Project Track Monitoring Smartphone App (TMSA)",
    year: "2021"
  },
  {
    icon: Award,
    title: "Senior Key Expert in Algorithm and Application Development",
    description: "Siemens",
    year: "2021"
  },
  {
    icon: Building2,
    title: "Enterprise Architect for IT Landscape",
    description: "Leading IT landscape transformation at Siemens Mobility across 10+ countries",
    year: "2024-present"
  },
  {
    icon: Mic,
    title: "Speaker & Educator",
    description: "Senior Lecturer at NRU HSE, Speaker at Open Innovator",
    year: "2018-present"
  },
  {
    icon: BookOpen,
    title: "15+ Publications",
    description: "Published in Q1 journals including PLoS ONE, The Breast, Cancers, and AMIA Symposium",
    year: "2017-2021"
  },
  {
    icon: FlaskConical,
    title: "3 Software Patents",
    description: "iOS apps for predicting breast cancer metastases and survival periods",
    year: "2018-2021"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-card">
      <div className="container relative z-10 px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Achievements</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Recognition & Milestones
          </h3>
          <p className="text-lg text-muted-foreground">
            Selected highlights: PhD track, publications, patents, speaking, Siemens-scale programs

            Artifacts: scorecard template, governance forum map, audit checklist
          </p>

        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-banner flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-6 h-6 text-banner-foreground" />
              </div>
              
              {/* Year badge */}
              <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {achievement.year}
              </span>
              
              {/* Content */}
              <h4 className="text-lg font-semibold font-display mt-3 mb-2 group-hover:text-foreground transition-colors">
                {achievement.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
