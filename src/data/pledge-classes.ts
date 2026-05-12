// Beta-Nu's internal pledge-class roster. `letter` is the actual Greek capital
// for the class (Latin look-alikes are intentionally avoided); the Founding
// Class predates the Greek-letter naming and uses a castle glyph.
export type PledgeClass = {
  letter: string;        // Glyph displayed on the timeline / badge
  name: string;          // "Alpha Class", etc.
};

export const pledgeClasses: PledgeClass[] = [
  { letter: "🏛️", name: "Founding Class" },
  { letter: "Α", name: "Alpha Class" },
  { letter: "Β", name: "Beta Class" },
  { letter: "Γ", name: "Gamma Class" },
  { letter: "Δ", name: "Delta Class" },
  { letter: "Ε", name: "Epsilon Class" },
  { letter: "Ζ", name: "Zeta Class" },
  { letter: "Η", name: "Eta Class" },
  { letter: "Θ", name: "Theta Class" },
  { letter: "Ι", name: "Iota Class" },
  { letter: "Κ", name: "Kappa Class" },
  { letter: "Λ", name: "Lambda Class" },
  { letter: "Μ", name: "Mu Class" },
  { letter: "Ν", name: "Nu Class" },
  { letter: "Ξ", name: "Xi Class" },
  { letter: "Ο", name: "Omicron Class" },
  { letter: "Π", name: "Pi Class" },
  { letter: "Ρ", name: "Rho Class" },
  { letter: "Σ", name: "Sigma Class" },
  { letter: "Τ", name: "Tau Class" },
  { letter: "Υ", name: "Upsilon Class" },
  { letter: "Φ", name: "Phi Class" },
  { letter: "Χ", name: "Chi Class" },
  { letter: "Ψ", name: "Psi Class" },
  { letter: "Ω", name: "Omega Class" },
];
