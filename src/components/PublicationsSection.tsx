import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "A Mathematical Model to Predict Diagnostic Periods for Secondary Distant Metastases in Patients with ER/PR/HER2/Ki-67 Subtypes of Breast Cancer",
    journal: "MDPI. Cancers (Q1)",
    year: "2020",
    type: "Journal Article",
    // award: "Main Paper",
    doi: "https://doi.org/10.3390/cancers12092344",
  },
  {
    title: "Consolidated mathematical growth model of the primary tumor and secondary distant metastases of breast cancer (CoMPaS)",
    journal: "PLoS ONE (Q1)",
    year: "2018",
    type: "Journal Article",
    // award: "Main Paper",
    doi: "https://doi.org/10.1371/journal.pone.0200148",
  },
  // {
  //   title: "The CoMPaS exponential growth model: predicting tumor growth and recurrence",
  //   journal: "VJOncology",
  //   year: "2021",
  //   type: "Video Interview",
  //   doi: "https://www.youtube.com/watch?app=desktop&v=KjIbkJXJWV0",
  // },
  {
    title: "Mathematical modelling to predict recurrence periods for secondary metastases in breast cancer",
    journal: "VJOncology",
    year: "2021",
    type: "Video Interview",
    doi: "https://www.youtube.com/watch?app=desktop&v=6ERABw_CfDI",
  },
  {
    title: "Predictive mathematical modelling of recurrence periods for the secondary distant metastases in patients with ER/PR/HER2/Ki-67 subtypes of breast cancer",
    journal: "Elsevier. The Breast (Q1). St. Gallen Breast Cancer Conference (SGBCC 2021)",
    year: "2021",
    type: "Abstract",
    doi: "https://doi.org/10.1016/S0960-9776(21)00196-X",
  },
  {
    title: "A mathematical model to predict the diagnostics periods for the secondary distant metastases in patients with ER/PR/HER2/Ki-67 subtypes of breast cancer",
    journal: "30th American Medical Informatics Association (AMIA 2020), Annual Symposium. – S68: Oral Presentations: Pattern Discovery and Classification (CORE A)",
    year: "2020",
    type: "Abstract",
    doi: "https://knowledge.amia.org/72332-amia-1.4602255/t004-1.4605866/t004-1.4605867/3402942-1.4605898/3402942-1.4605899?timeStamp=1608190904469&qr=1",
  },
  {
    title: "The mathematical model for predicting the earliest diagnostics period of the secondary distant metastases growth process of breast cancer",
    journal: "Elsevier. The Breast (Q1). St. Gallen Breast Cancer Conference (SGBCC 2019)",
    year: "2019",
    type: "Abstract",
    doi: "https://www.thebreastonline.com/article/S0960-9776(19)30047-5/abstract",
  },
  {
    title: "Consolidated mathematical growth Model of Breast Cancer CoMBreC",
    journal: "Kalpa Publications in Computing. Workshop on Data Analysis in Medicine (WDAM-2017)",
    year: "2017",
    type: "Journal Article",
    doi: "https://doi.org/10.29007/q9gz",
  },
  {
    title: "On consolidated predictive model of the natural history of breast cancer considering primary tumor and primary distant metastases growth",
    journal: "IEEE Computer Society. IEEE International Conference on Healthcare Informatics (ICHI 2017)",
    year: "2017",
    type: "Abstract",
    doi: "https://ieeexplore.ieee.org/document/8031198",
  },
  {
    title: "On consolidated predictive model of the natural history of breast cancer: primary tumor and secondary metastases in patients with lymph nodes metastases",
    journal: "ACM Computer Science. ACM International Conference Proceeding Series (ACM 2017)",
    year: "2017",
    type: "Abstract",
    award: "Best Student Paper",
    doi: "https://dl.acm.org/doi/proceedings/10.1145/3079452",
  },
  {
    title: "On consolidated mathematical growth model considering primary tumor and secondary metastases",
    journal: "Elsevier. The Breast (Q1). St. Gallen Breast Cancer Conference (SGBCC 2017)",
    year: "2017",
    type: "Abstract",
    doi: "https://sgbcc2017.elsevierdigitaledition.com/#120",
  }
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Research & Writing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-4">
              Publications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              15+ peer-reviewed articles in journals and conferences spanning mathematical oncology, 
              machine learning, and enterprise digital transformation.
            </p>
          </div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <article
                key={index}
                className="group p-6 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                        {pub.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{pub.year}</span>
                      {pub.award && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/20 text-accent">
                          {pub.award}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold font-display text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{pub.journal}</p>
                  </div>
                  <a
                    href={pub.doi}
                    className="shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="View publication"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <a
              href="https://scholar.google.com/citations?user=GgxfAPUAAAAJ&hl=en&oi=sra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all publications on Google Scholar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
