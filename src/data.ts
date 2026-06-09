import { Product } from './types';

export const CATEGORIES = [
  "Power Generation",
  "Power Tools",
  "Agricultural Equipment",
  "Safety Equipment",
  "Welding Machines",
  "Hardware & Industrial Supplies"
];

export const PRODUCTS: Product[] = [
  {
    id: "gen-25",
    name: "Diesel Genset 25 kVA",
    description: "Heavy-duty industrial generator. Fuel-efficient engine, low maintenance. Suitable for shops, offices & factories.",
    price: 285000,
    category: "Power Generation",
    image: "https://images.unsplash.com/photo-1542125555-5c1cfb385bf5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "gen-62",
    name: "Diesel Genset 62.5 kVA",
    description: "Silent enclosure, industrial-grade performance, reliable backup power.",
    price: 575000,
    category: "Power Generation",
    image: "https://images.unsplash.com/photo-1542125555-5c1cfb385bf5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "gen-5",
    name: "Portable Generator 5 kVA",
    description: "Easy to transport, ideal for outdoor use.",
    price: 58000,
    category: "Power Generation",
    image: "https://images.unsplash.com/photo-1542125555-5c1cfb385bf5?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "pt-rhd",
    name: "Bosch Rotary Hammer Drill",
    description: "1200W Motor, Concrete & masonry drilling.",
    price: 6500,
    category: "Power Tools",
    image: "/src/assets/images/bosch_hammer_1781043462104.png"
  },
  {
    id: "pt-ag",
    name: "DeWalt Angle Grinder",
    description: "1000W Motor, Metal cutting & grinding.",
    price: 3200,
    category: "Power Tools",
    image: "/src/assets/images/dewalt_grinder_1781043450797.png"
  },
  {
    id: "pt-cdd",
    name: "Bosch Cordless Drill Machine",
    description: "20V Battery, Portable & powerful.",
    price: 5800,
    category: "Power Tools",
    image: "/src/assets/images/bosch_drill_1781043435174.png"
  },
  {
    id: "pt-dh",
    name: "DeWalt Demolition Hammer",
    description: "Heavy-duty construction tool.",
    price: 18500,
    category: "Power Tools",
    image: "/src/assets/images/dewalt_demolition_1781043476804.png"
  },
  {
    id: "ag-pt",
    name: "Power Tiller 7 HP",
    description: "Agricultural preparation equipment.",
    price: 68000,
    category: "Agricultural Equipment",
    image: "https://images.unsplash.com/photo-1592982537447-6f23340f1eb2?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "ag-bc",
    name: "Brush Cutter",
    description: "Efficiently clear tall grass and bushes.",
    price: 12500,
    category: "Agricultural Equipment",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "se-sh",
    name: "Safety Helmet",
    description: "Industrial safety helmet.",
    price: 65,
    category: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1590425330310-a2bdad1d9893?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "se-ss",
    name: "Karam Safety Shoes",
    description: "Standard industrial safety shoes in black. Steel toe, durable, and comfortable.",
    price: 950,
    category: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "se-rj",
    name: "Reflective Jacket",
    description: "High visibility jacket.",
    price: 55,
    category: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1582213782179-8db33cf37887?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "se-sg",
    name: "Safety Gloves",
    description: "Heavy-duty work gloves.",
    price: 120,
    category: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "se-sgo",
    name: "Safety Goggles",
    description: "Eye protection equipment.",
    price: 180,
    category: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1622288079555-520e5c9b4e13?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "se-fbh",
    name: "Full Body Harness",
    description: "Fall protection harness.",
    price: 2500,
    category: "Safety Equipment",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "we-arc",
    name: "ARC Welding Machine",
    description: "ARC Welder for general purpose welding.",
    price: 8500,
    category: "Welding Machines",
    image: "https://images.unsplash.com/photo-1507676184212-d0330a156f95?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "we-mig",
    name: "MIG Welding Machine",
    description: "Industrial MIG Welder.",
    price: 28000,
    category: "Welding Machines",
    image: "https://images.unsplash.com/photo-1507676184212-d0330a156f95?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "we-pc",
    name: "Plasma Cutter",
    description: "Precision metal cutting.",
    price: 38000,
    category: "Welding Machines",
    image: "https://images.unsplash.com/photo-1507676184212-d0330a156f95?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    id: "we-electra",
    name: "Electra Welding Machine",
    description: "Professional grade welding machine. Comes with full service and support.",
    price: 15500,
    category: "Welding Machines",
    image: "/src/assets/images/electra_welding_1_1781044869558.png"
  },
  {
    id: "we-gb",
    name: "GB Welding Machine",
    description: "Heavy duty manufacturing welding machine. Includes full service and post-sale support.",
    price: 24000,
    category: "Welding Machines",
    image: "/src/assets/images/gb_welding_1_1781044881398.png"
  }
];

export const BRANDS = [
  "Bosch",
  "Makita",
  "DeWalt",
  "Stanley",
  "Cummins",
  "Honda",
  "Mahindra",
  "Karam",
  "Electra",
  "GB",
  "Weldnation",
  "Spear",
  "Xtra Power",
  "Divs",
  "Cliptech",
  "Tiger"
];

export const HARDWARE_SUPPLIES = [
  "Nuts & Bolts",
  "Bearings",
  "Fasteners",
  "Industrial Lubricants",
  "Hand Tools",
  "Cutting Tools",
  "Abrasives",
  "Wire Ropes",
  "Chains",
  "Pipes & Fittings"
];
