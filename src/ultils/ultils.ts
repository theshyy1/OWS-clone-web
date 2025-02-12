export const statusStyles: any = {
  Completed: `text-success bg-success/20 `,
  Delayed: `text-warning bg-warning/20`,
  "At risk": `text-error bg-error/20`,
  "On going": `text-orange bg-orange/20`,
};

export const newStatusStyles: any = {
  ...statusStyles,
  "Total projects": "text-[#E65F2B]",
  Completed: `text-[#1A932E] `,
  Delayed: `text-[#EE201C] `,
  "At risk": `text-[#E65F2B] `,
  "On going": `text-[#E65F2S]`,
};
