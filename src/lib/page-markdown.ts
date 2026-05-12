import { site } from "../data/site";
import { elected, appointed } from "../data/officers";
import { rushEvents, eligibleMajors } from "../data/rush";
import { pledgeClasses } from "../data/pledge-classes";
import { brothers } from "../data/brothers";
import { recruitmentFaqs } from "../data/faq";

const frontmatter = (title: string, description: string, url: string) =>
  // Keys follow the agent-readability spec: canonical_url + last_updated.
  // last_updated is the hand-maintained site.lastUpdated, not the build date.
  `---\ntitle: "${title}"\ndescription: "${description}"\ncanonical_url: "${url}"\nlast_updated: "${site.lastUpdated}"\n---\n\n`;

export const pageMarkdown: Record<string, () => string> = {
  index: () =>
    frontmatter(
      `${site.fullName}`,
      site.description,
      `${site.url}/`,
    ) +
    `# ${site.fullName}\n\n${site.tagline}.\n\nThe ${site.chapter} of Sigma Phi Delta at ${site.shortUniversity}. Founded nationally on ${site.founded} at ${site.foundedAt}; the ${site.chapter} was chartered at Cal Poly in ${site.betaNuChartered}.\n\n**Motto.** *${site.motto}* — ${site.mottoTranslation}.\n\n## What is Sigma Phi Delta?\n\nSigma Phi Delta is the premier international professional-social fraternity for engineers, founded April 11, 1924 at the University of Southern California. It is "professional" in that it admits only students pursuing an engineering degree, and "social" in that members live together in chapter houses and run social and athletic programs. The Beta-Nu Chapter, chartered at Cal Poly San Luis Obispo in 1962, carries that mission locally — advancing the engineering profession and education, building cooperation among engineering students, and fostering brotherhood.\n\n## Why this chapter\n\nSigma Phi Delta is a fraternity of engineers devoted to bettering engineering education and industry, as well as its men in membership. Here in San Luis Obispo, the Beta-Nu Chapter strives to uphold the traditions of its Brotherhood, passed down through the generations.\n\n## Next steps\n\n- [About the chapter](${site.url}/about)\n- [Winter Rush 2026 schedule](${site.url}/recruitment)\n- [Meet our brothers](${site.url}/brothers)\n- [Contact our officers](${site.url}/contact)\n\n## Quick contact\n\n- General: ${site.email}\n- Recruitment: recruitment.spd.calpoly@gmail.com\n- Instagram: ${site.social.instagram}\n- Facebook: ${site.social.facebook}\n`,

  about: () =>
    frontmatter(
      `About — ${site.fullName}`,
      `Principles, national & chapter history, and the Beta-Nu pledge-class timeline.`,
      `${site.url}/about`,
    ) +
    `# About the Beta-Nu Chapter\n\n## Declaration of Principles\n\nFrom time to time the Fraternity, of the Greek system, is called upon to set forth the principles for which it stands. We stand steadfast in our belief that we serve as a necessary adjunct to our Colleges and Universities in the training of young engineers.\n\nOur Constitution states, without equivocation, that the Object of the Fraternity shall be to promote the advancement of the Engineering Profession; to foster the advancement of Engineering Education; to instill a greater spirit of cooperation among Engineering Students; to inculcate in its members the highest ideals of virtuous manhood, good citizenship, and brotherhood; and to encourage excellence in scholarship.\n\nWe are professional in that we admit only students enrolled in, or working toward, a degree in engineering. We are social in that we have houses where many of our members live together, and sponsor social and athletic programs for the active chapter and alumni.\n\n## History of the Fraternity\n\nSigma Phi Delta was founded on **${site.founded}** at the **${site.foundedAt}** in Los Angeles by civil engineering students who recognized the need for a brotherhood devoted to the engineering profession itself. Today, Sigma Phi Delta recognizes 36 chapters internationally.\n\n## Beta-Nu Emphasis\n\nThe Beta-Nu Chapter continues the national mission at Cal Poly San Luis Obispo by promoting the engineering profession, strengthening engineering education, encouraging cooperation among engineering students, and fostering brotherhood.\n\n## Pledge classes\n\n${pledgeClasses.map((p) => `- **${p.letter}** — ${p.name}`).join("\n")}\n`,

  recruitment: () =>
    frontmatter(
      `Winter Rush 2026 — ${site.fullName}`,
      `Winter Rush 2026 schedule, eligibility, and how to join Sigma Phi Delta at Cal Poly San Luis Obispo.`,
      `${site.url}/recruitment`,
    ) +
    `# Winter Rush 2026 — Beta-Nu Chapter\n\nWinter Rush 2026 runs Monday, January 12 through Thursday, January 15, 2026 — Week 2 of Winter Quarter — with each open event from 6 to 8 PM. There's no commitment to attend: show up to any event, meet the brothers, and decide for yourself. Invite-only events follow on Friday and Saturday.\n\n## Schedule\n\n${rushEvents.map((e) => `- **${e.day} ${e.dateLabel}: ${e.title}** — ${e.time} — ${e.location}.\n  ${e.description}`).join("\n")}\n\n## Eligible majors\n\nSigma Phi Delta at Cal Poly is open to students in any ABET-accredited engineering major, plus Computer Science. Eligible majors:\n\n${eligibleMajors.map((m) => `- ${m}`).join("\n")}\n\n## Frequently asked questions\n\n${recruitmentFaqs.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}\n\n## Recruitment contact\n\nCarlo Delanni & Luke Wade — recruitment.spd.calpoly@gmail.com — (206) 698-6998 — (707) 227-4535.\n`,

  brothers: () =>
    frontmatter(
      `The Brotherhood — ${site.fullName}`,
      `The active brotherhood and executive board of the Beta-Nu Chapter of Sigma Phi Delta.`,
      `${site.url}/brothers`,
    ) +
    `# The Brotherhood\n\nThe ${site.chapter} roster, organized by pledge class — ${brothers.length} brothers from the Founding Class to today. For elected and appointed officer contacts see the [Contact page](${site.url}/contact).\n\n${pledgeClasses
      .map((p) => {
        const members = brothers.filter((b) => b.classLetter === p.letter);
        if (!members.length) return null;
        return `## ${p.name} (${p.letter})\n\n${members.map((b) => `- ${b.name}`).join("\n")}`;
      })
      .filter(Boolean)
      .join("\n\n")}\n`,

  contact: () =>
    frontmatter(
      `Contact — ${site.fullName}`,
      `Elected and appointed officer contacts for the Beta-Nu Chapter of Sigma Phi Delta at Cal Poly San Luis Obispo.`,
      `${site.url}/contact`,
    ) +
    `# Contact\n\nGeneral inquiries: **${site.email}**.\n\n## Elected Officials\n\n${elected.map((o) => `- **${o.position}** — ${o.name} — ${o.email}`).join("\n")}\n\n## Appointed Officials\n\n${appointed.map((o) => `- **${o.position}** — ${o.name} — ${o.email}`).join("\n")}\n\n## Follow\n\n- Instagram: ${site.social.instagram}\n- Facebook: ${site.social.facebook}\n`,
};
