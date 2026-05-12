export type Officer = {
  position: string;
  name: string;
  email: string;
  short?: string;
};

// Elected positions (national-mandated titles).
export const elected: Officer[] = [
  { position: "Chief Engineer", name: "Nicholas Ruybal", email: "chief.spd.calpoly@gmail.com", short: "chief" },
  { position: "Vice Chief Engineer", name: "Finn McSherry", email: "vicechief.spd.calpoly@gmail.com", short: "vicechief" },
  { position: "Diversity & Inclusion Chairman", name: "Nick Carboni", email: "business.spd.calpoly@gmail.com" },
  { position: "Business Manager", name: "Sammy Paykel", email: "business.spd.calpoly@gmail.com" },
  { position: "Secretary", name: "Eric Dat Nguyen", email: "secretary.spd.calpoly@gmail.com" },
  { position: "Guide", name: "Nicolas Galzote", email: "guide.spd.calpoly@gmail.com" },
  { position: "Recruitment Chairman", name: "Carlo Delanni & Luke Wade", email: "recruitment.spd.calpoly@gmail.com" },
  { position: "Sergeant-At-Arms", name: "Ethan Rezentes", email: "sergeant.spd.calpoly@gmail.com" },
];

// Appointed positions.
export const appointed: Officer[] = [
  { position: "Pledge Board Chairman", name: "Ethan Tekawa-Pon", email: "pbc.spd.calpoly@gmail.com" },
  { position: "Social Chairman", name: "Luke Corson", email: "social.spd.calpoly@gmail.com" },
  { position: "Athletic Chairman", name: "Giovanni Ocegueda", email: "athletic.spd.calpoly@gmail.com" },
  { position: "Outreach Chairman", name: "Karsten Sarmiento", email: "expansion.spd.calpoly@gmail.com" },
  { position: "Academic Chairman", name: "Zohair Ahmed", email: "academic.spd.calpoly@gmail.com" },
  { position: "Brotherhood Chairman", name: "Sriram Raghu", email: "brotherhood.spd.calpoly@gmail.com" },
  { position: "Philanthropy Chairman", name: "Caleb Travers", email: "philanthropy.spd.calpoly@gmail.com" },
  { position: "Professional Chairman", name: "Eduardo Dominguez & Adrian Sanchez", email: "professional.spd.calpoly@gmail.com" },
  { position: "Webmaster", name: "Luis Garcia", email: "webmaster.spd.calpoly@gmail.com" },
];

export const execHighlights = elected.slice(0, 4).map((officer) => ({
  title: officer.position,
  name: officer.name,
  detail: officer.email,
}));
