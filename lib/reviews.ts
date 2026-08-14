export type Review = {
  name: string;
  role: string;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Dana Whitfield",
    role: "Lincoln Park homeowner",
    text: "A garden-unit backup at 11 p.m. — they were on Carroll and then at the house inside the hour. Extracted, metered, and told us straight what the plaster would do. No scare pitch.",
  },
  {
    name: "Marcus Hale",
    role: "West Loop property manager",
    text: "We run restaurants on a combined sewer. When a floor drain failed after a cell, Shield kept the dining room from becoming a two-week shutdown. Equipment stayed until the readings, not the calendar.",
  },
  {
    name: "Priya Shah",
    role: "Lakeview three-flat owner",
    text: "An upstairs tub overflowed through two ceilings. They contained each unit, dried both, and gave us one moisture map the insurer could actually read.",
  },
  {
    name: "James Okafor",
    role: "Hyde Park co-op board",
    text: "Stack leak in a pre-war building. They worked around freight hours, documented the plaster, and rebuilt the plane so you cannot see the cut. That is the standard we wanted.",
  },
  {
    name: "Elena Ruiz",
    role: "Pilsen storefront",
    text: "Slab seepage after a hard rain. Honest about what a coating would not do, then dried the stockroom and detailed the interior so we could open Monday.",
  },
  {
    name: "Tom Brennan",
    role: "Loop building engineer",
    text: "Sprinkler dump on an office floor after hours. They coordinated with us on the freight, pulled the water, and had air movers running before morning tenants showed.",
  },
];
