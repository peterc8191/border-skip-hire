// All business details live here so they are easy to update in one place.

export const phones = [
  { label: "07761 659816", href: "tel:+447761659816", primary: true },
  { label: "07576 048044", href: "tel:+447576048044" },
];

// WhatsApp number used by the quote form (international format, no + or spaces).
export const whatsappNumber = "447761659816";

export const navLinks = [
  { id: "sizes", label: "Skip Sizes" },
  { id: "how", label: "How It Works" },
  { id: "areas", label: "Areas" },
  { id: "about", label: "About" },
  { id: "waste", label: "What Goes In" },
  { id: "quote", label: "Get a Quote" },
];

// TODO: confirm the exact sizes with Border Skip Hire. These match the four
// skips in the yard photo, largest to smallest.
export const skipSizes = [
  {
    name: "Mini Skip",
    yards: 2,
    bags: "20 to 25",
    fit: "Garden tidy-ups, small bathroom refits, clearing out a shed.",
  },
  {
    name: "Midi Skip",
    yards: 4,
    bags: "35 to 45",
    fit: "Kitchen or bathroom strip-outs, house clear-outs, small landscaping jobs.",
  },
  {
    name: "Builders Skip",
    yards: 6,
    bags: "55 to 65",
    fit: "Building and renovation waste, rubble, soil and heavier loads.",
    popular: true,
  },
  {
    name: "Maxi Skip",
    yards: 8,
    bags: "70 to 80",
    fit: "Large renovations, farm clear-outs and bulky, lighter waste.",
  },
];

export const steps = [
  {
    title: "Call or message us",
    text: "Tell us what you're clearing, where you are and when you need the skip. We'll recommend a size and give you a price.",
  },
  {
    title: "We drop it off",
    text: "Our skip lorry delivers to your driveway, yard or site on the agreed day. Need it on the road? We'll talk you through the permit.",
  },
  {
    title: "Fill it, we lift it",
    text: "Keep it as long as you need. When you're done, give us a ring and we'll collect it and take the waste away for recycling.",
  },
];

export const areas = {
  "South Armagh": [
    "Crossmaglen", "Newtownhamilton", "Bessbrook", "Camlough", "Forkhill",
    "Mullaghbawn", "Jonesborough", "Cullyhanna", "Silverbridge", "Whitecross",
    "Belleeks", "Cullaville", "Creggan", "Meigh", "Drumintee", "Killeen",
    "Keady", "Markethill",
  ],
  "South Down": [
    "Newry", "Warrenpoint", "Rostrevor", "Kilkeel", "Annalong", "Attical",
    "Mayobridge", "Burren", "Hilltown", "Rathfriland",
    "Castlewellan", "Newcastle", "Dundrum", "Kilcoo", "Ballyward",
    "Bryansford", "Mullartown",
  ],
};

export const accepted = [
  "General household waste",
  "Garden waste: grass, branches, hedge cuttings",
  "Wood, timber and old furniture",
  "Bricks, rubble, concrete and soil",
  "Metal and scrap",
  "Packaging, cardboard and plastics",
];

export const notAccepted = [
  "Asbestos",
  "Plasterboard (ask us, it must be kept separate)",
  "Tyres",
  "Fridges, freezers and TVs",
  "Paint, oils, solvents and chemicals",
  "Gas bottles and batteries",
];
