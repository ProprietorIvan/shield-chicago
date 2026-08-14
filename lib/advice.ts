export type Article = {
  slug: string;
  title: string;
  dek: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "basement-after-the-cell",
    title: "The basement after a sitting thunderstorm",
    dek: "Chicago does not need a river to wreck a lower level. Here is the order of operations when the yard drain loses.",
    body: [
      "A cell that parks over the West or South Side will beat a combined sewer in minutes. Water comes up the floor drain, the laundry tub, or the yard. It is not ‘a little seepage.’ It is the city system using your basement as extra pipe.",
      "First: if the water is from the sewer, treat it as contaminated. Keep kids and pets off it. Do not shop-vac it into a utility sink. Photograph the line on the wall before anyone disturbs it.",
      "Second: get extraction on the floor while the drywall is still only wicked at the bottom. Every hour of standing water is another inch of cut later.",
      "Third: drying is a system, not a fan in the doorway. Closed rooms, right-sized dehumidifiers, and daily meters. Open the house to August humidity and you grow a second problem.",
      "If this has happened more than once, the restoration visit should end with a straight conversation about valves, overhead sewers, and what the building can actually take. That is a separate job. We will not bury it in the invoice.",
    ],
  },
  {
    slug: "pipe-in-a-two-flat",
    title: "A burst line in a two-flat",
    dek: "One failed supply in the upper unit travels. Containment is the job before demolition is the job.",
    body: [
      "Chicago two-flats share stacks, joists, and often a single water main. A split in a kitchen supply at 4 a.m. will show as a bedroom ceiling downstairs by 4:20.",
      "Shut the main if you cannot find the local valve. Call the other household. Water does not care whose name is on the lease.",
      "We contain the downstairs, extract the upstairs, and meter both units. Insurance files that treat this as one room always come back around. Two addresses, one event, one moisture map.",
      "Plaster ceilings can hold a surprising amount of water. We do not punch a random hole and leave. We open what the meter says is wet, then close it when it is not.",
    ],
  },
  {
    slug: "before-the-truck",
    title: "What to do in the twenty minutes before the truck",
    dek: "A short list that actually changes the bill.",
    body: [
      "If the floor is live electrically, stay out and wait. If it is not: power down the wet room at the breaker, not by unplugging with wet hands.",
      "Stop the source. Toilet supply, washing-machine hose, ice-maker line — these have valves. A sewer backup does not. Do not keep flushing.",
      "Move what you can onto blocks or upstairs. Photograph serial numbers on furnaces and water heaters before they sit in water. That picture is the claim.",
      "Open interior doors for airflow only if the water is clean. Sewage rooms stay closed until we set containment.",
      "Have the alarm code, parking notes, and the insurer’s claim number if you have one. The faster we are working, the less we are standing in the alley on the phone.",
    ],
  },
  {
    slug: "what-carriers-ask",
    title: "What a Chicago water claim actually needs",
    dek: "Carriers pay documented drying. They argue with stories.",
    body: [
      "You will be asked when you found the water, what you did, and whether the loss is sudden. ‘The basement is always a little damp’ is a different file from ‘the floor drain erupted at 6:12.’",
      "We give you a moisture map, equipment logs, and photos tied to rooms. That is not theater. It is how a sudden-and-accidental claim stays a restoration file instead of a maintenance argument.",
      "Sewer backup endorsements are not automatic on a Chicago homeowners policy. If you do not have one, say so early. We still dry the building. The check may be a different conversation.",
      "We are not your lawyer and not your public adjuster. We are the crew that makes the building dry and the file complete.",
    ],
  },
];

export function articleBySlug(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}
