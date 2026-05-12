// Winter Rush 2026 — source: elements.md
export type RushEvent = {
  day: string;
  dateLabel: string;
  title: string;
  time: string;
  location: string;
  description: string;
  icon: "grill" | "ball" | "cards" | "briefcase" | "lock";
  // ISO 8601 start/end with the Pacific offset (PST = -08:00 in January).
  // Present on the open, scheduled events; omitted on the invite-only block
  // whose time is TBD. Used to emit schema.org/Event JSON-LD.
  startDate?: string;
  endDate?: string;
};

export const rushEvents: RushEvent[] = [
  {
    day: "Monday",
    dateLabel: "1/12",
    title: "BBQ @ NOMO",
    time: "6 - 8pm",
    location: "NOMO",
    description:
      "Free BBQ and a chance to meet brothers and get your questions answered.",
    icon: "grill",
    startDate: "2026-01-12T18:00:00-08:00",
    endDate: "2026-01-12T20:00:00-08:00",
  },
  {
    day: "Tuesday",
    dateLabel: "1/13",
    title: "Sports Night @ DOERR",
    time: "6 - 8pm",
    location: "Doerr Field",
    description:
      "Play games with the brothers and hang out in a relaxed setting.",
    icon: "ball",
    startDate: "2026-01-13T18:00:00-08:00",
    endDate: "2026-01-13T20:00:00-08:00",
  },
  {
    day: "Wednesday",
    dateLabel: "1/14",
    title: "Game Night @ The Island",
    time: "6 - 8pm",
    location: "Meet at PAC for rides",
    description:
      "Meet at the PAC for rides, then play games and spend time at the fraternity house.",
    icon: "cards",
    startDate: "2026-01-14T18:00:00-08:00",
    endDate: "2026-01-14T20:00:00-08:00",
  },
  {
    day: "Thursday",
    dateLabel: "1/15",
    title: "Professional Night @ The Castle",
    time: "6 - 8pm",
    location: "Meet at PAC for rides",
    description:
      "A career-fair-style night with brothers and alumni answering questions about classes, clubs, projects, internships, and full-time roles.",
    icon: "briefcase",
    startDate: "2026-01-15T18:00:00-08:00",
    endDate: "2026-01-15T20:00:00-08:00",
  },
  {
    day: "Friday & Saturday",
    dateLabel: "Friday / Saturday",
    title: "Invite-only",
    time: "TBD",
    location: "Private events",
    description:
      "Invite-only events for the next stage of recruitment.",
    icon: "lock",
  },
];

export const eligibleMajors = [
  "Aerospace Engineering",
  "Architectural Engineering",
  "Biomedical Engineering",
  "Bioresource and Agricultural Engineering",
  "Civil Engineering",
  "Computer Engineering",
  "Computer Science",
  "Electrical Engineering",
  "Environmental Engineering",
  "General Engineering",
  "Industrial Engineering",
  "Liberal Arts and Engineering Studies",
  "Manufacturing Engineering",
  "Materials Engineering",
  "Mechanical Engineering",
  "Software Engineering",
];
