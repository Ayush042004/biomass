export interface Fuel {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  calorificValue: string;
  advantages: string[];
  applications: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const fuels: Fuel[] = [
  {
    id: 'briquettes',
    name: 'Biomass Briquettes',
    type: 'Briquettes',
    description: 'Densified blocks made from agricultural waste—ideal for replacing coal in boilers and kilns.',
    image: 'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg',
    calorificValue: '4800',
    advantages: [
      'High density and consistent quality',
      'Low moisture content',
      'Reduced storage space requirement',
      'Easy handling and transportation',
      'Lower emissions compared to coal'
    ],
    applications: [
      'Industrial boilers',
      'Brick kilns',
      'Food processing industries',
      'Textile industries'
    ],
    faqs: [
      {
        question: "What is the calorific value of your briquettes?",
        answer: "Our briquettes provide 4800 kcal/kg calorific value."
      },
      {
        question: "What raw materials are used?",
        answer: "We use agricultural waste, sawdust, and other biomass residues."
      },
      {
        question: "What is the moisture content?",
        answer: "Moisture content is maintained below 10% for optimal burning."
      },
      {
        question: "How long do briquettes burn?",
        answer: "Burn time varies by size, typically 2-4 hours per briquette."
      },
      {
        question: "What is the ash content?",
        answer: "Ash content is typically less than 5%."
      },
      {
        question: "Are they suitable for automated feeding systems?",
        answer: "Yes, our briquettes are designed for both manual and automated feeding."
      },
      {
        question: "What is the standard size?",
        answer: "Standard sizes are 90mm diameter with varying lengths."
      },
      {
        question: "How should briquettes be stored?",
        answer: "Store in a dry, covered area away from direct moisture."
      },
      {
        question: "What is the minimum order quantity?",
        answer: "MOQ starts at 10 tons with flexible delivery options."
      },
      {
        question: "Are they environmentally certified?",
        answer: "Yes, our briquettes meet international environmental standards."
      }
    ]
  },
  {
    id: 'pellets',
    name: 'Wood Pellets',
    type: 'Pellets',
    description: 'Premium-grade wood pellets for efficient and clean energy production.',
    image: 'https://images.pexels.com/photos/6594085/pexels-photo-6594085.jpeg',
    calorificValue: '4500',
    advantages: [
      'High energy density',
      'Uniform size and quality',
      'Automated feeding systems',
      'Clean burning',
      'Sustainable source'
    ],
    applications: [
      'Residential heating',
      'Commercial buildings',
      'District heating',
      'Power plants'
    ],
    faqs: [
      {
        question: "What is the pellet diameter?",
        answer: "Our pellets are 6mm or 8mm in diameter."
      },
      {
        question: "What wood species are used?",
        answer: "We use a mix of softwood and hardwood from sustainable sources."
      },
      {
        question: "What is the moisture content?",
        answer: "Moisture content is maintained below 10%."
      },
      {
        question: "Are they ENplus certified?",
        answer: "Yes, our pellets meet ENplus A1 quality standards."
      },
      {
        question: "What is the ash content?",
        answer: "Ash content is less than 0.7%."
      },
      {
        question: "How should pellets be stored?",
        answer: "Store in dry conditions, ideally in a dedicated pellet storage room or silo."
      },
      {
        question: "What is the bulk density?",
        answer: "Bulk density is >650 kg/m³."
      },
      {
        question: "Are they suitable for all pellet stoves?",
        answer: "Yes, compatible with all standard pellet heating systems."
      },
      {
        question: "What packaging options are available?",
        answer: "Available in 15kg bags, big bags, and bulk delivery."
      },
      {
        question: "What is the minimum order quantity?",
        answer: "MOQ varies by packaging type, starting at 1 pallet for bagged pellets."
      }
    ]
  },
  {
    id: 'wood-chips',
    name: 'Wood Chips',
    type: 'Wood Chips',
    description: 'Sustainable biomass fuel for large-scale industrial applications.',
    image: 'https://images.pexels.com/photos/6594263/pexels-photo-6594263.jpeg',
    calorificValue: '3500',
    advantages: [
      'Cost-effective',
      'Local availability',
      'Renewable resource',
      'Suitable for large systems',
      'Flexible sourcing options'
    ],
    applications: [
      'District heating',
      'Power generation',
      'Process heat',
      'Large boiler systems'
    ],
    faqs: [
      {
        question: "What chip sizes are available?",
        answer: "We offer P16-P45 sizes per ISO 17225-4 standards."
      },
      {
        question: "What is the moisture content range?",
        answer: "Moisture content ranges from 25% to 35%."
      },
      {
        question: "What wood species are used?",
        answer: "Mix of softwood and hardwood from sustainable forestry."
      },
      {
        question: "How is quality consistency maintained?",
        answer: "Regular testing and screening processes ensure consistent quality."
      },
      {
        question: "What is the delivery lead time?",
        answer: "Typical delivery within 3-5 working days."
      },
      {
        question: "What is the minimum order quantity?",
        answer: "Minimum order of 20 cubic meters."
      },
      {
        question: "How should wood chips be stored?",
        answer: "Store in well-ventilated, covered area with proper drainage."
      },
      {
        question: "What is the bulk density?",
        answer: "Bulk density ranges from 250-350 kg/m³."
      },
      {
        question: "Are the sources sustainable?",
        answer: "Yes, all sources are FSC or PEFC certified."
      },
      {
        question: "What analysis certificates are provided?",
        answer: "Moisture content, particle size, and calorific value certificates available."
      }
    ]
  },
  {
    id: 'cns',
    name: 'CNS Biomass',
    type: 'CNS',
    description: 'Premium coconut shell biomass for superior energy generation.',
    image: 'https://images.pexels.com/photos/4440173/pexels-photo-4440173.jpeg',
    calorificValue: '4800',
    advantages: [
      'High calorific value',
      'Low ash content',
      'Consistent quality',
      'Sustainable source',
      'Clean burning'
    ],
    applications: [
      'Industrial boilers',
      'Power plants',
      'Process industries',
      'Gasification systems'
    ],
    faqs: [
      {
        question: "What is the calorific value of CNS?",
        answer: "CNS provides 4800 kcal/kg calorific value."
      },
      {
        question: "What is the moisture content?",
        answer: "Moisture content is maintained below 12%."
      },
      {
        question: "What is the ash content?",
        answer: "Ash content is typically less than 4%."
      },
      {
        question: "What sizes are available?",
        answer: "Available in 10-30mm pieces."
      },
      {
        question: "How is quality assured?",
        answer: "Regular testing and sorting ensure consistent quality."
      },
      {
        question: "What is the bulk density?",
        answer: "Bulk density ranges from 550-650 kg/m³."
      },
      {
        question: "What packaging options are available?",
        answer: "Available in bulk bags or loose bulk loading."
      },
      {
        question: "What is the minimum order quantity?",
        answer: "MOQ starts at 18-20 metric tons."
      },
      {
        question: "How sustainable is the source?",
        answer: "100% renewable, from coconut processing waste."
      },
      {
        question: "What certifications are available?",
        answer: "Quality and sustainability certifications provided."
      }
    ]
  }
];