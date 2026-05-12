// Recruitment FAQ — rendered as a visible Q&A block on /recruitment and
// emitted as schema.org/FAQPage JSON-LD. Answers are written as self-contained
// passages (~40-160 words) so AI assistants can quote them without context.
export type Faq = { question: string; answer: string };

export const recruitmentFaqs: Faq[] = [
  {
    question: "When is Sigma Phi Delta rush at Cal Poly San Luis Obispo?",
    answer:
      "Winter Rush 2026 for the Beta-Nu Chapter of Sigma Phi Delta runs Monday, January 12 through Thursday, January 15, 2026 — Week 2 of Winter Quarter — with each open event from 6 to 8 PM: BBQ at NOMO (Mon), Sports Night at Doerr Field (Tue), Game Night at the fraternity house (Wed, meet at the PAC for rides), and Professional Night at The Castle (Thu, meet at the PAC). Invite-only events follow on Friday and Saturday. There is no commitment to attend — show up to any event and decide for yourself.",
  },
  {
    question: "Who can join Sigma Phi Delta? What majors are eligible?",
    answer:
      "Sigma Phi Delta is a professional-social fraternity for engineers, so membership is open to Cal Poly San Luis Obispo students in an ABET-accredited engineering major, plus Computer Science. The chapter lists 16 eligible majors: Aerospace, Architectural, Biomedical, Bioresource and Agricultural, Civil, Computer, Electrical, Environmental, General, Industrial, Manufacturing, and Materials Engineering; Mechanical Engineering; Software Engineering; Liberal Arts and Engineering Studies; and Computer Science.",
  },
  {
    question: "Is Sigma Phi Delta a professional fraternity or a social fraternity?",
    answer:
      "Both. Sigma Phi Delta is a professional-social fraternity: professional in that it admits only students enrolled in, or working toward, an engineering degree, and social in that members live together in chapter houses and the chapter runs social and athletic programs for actives and alumni. Its stated object is to advance the engineering profession and engineering education, build cooperation among engineering students, and foster brotherhood.",
  },
  {
    question: "How do I contact Sigma Phi Delta about rushing?",
    answer:
      "Reach the Beta-Nu Chapter's Recruitment Chairmen, Carlo Delanni and Luke Wade, at recruitment.spd.calpoly@gmail.com, (206) 698-6998, or (707) 227-4535. For general chapter inquiries, email spd.calpoly@gmail.com. The chapter is also on Instagram (@spd_slo) and Facebook (facebook.com/spdslo).",
  },
];
