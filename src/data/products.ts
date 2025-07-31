import steamBoiler from '../assets/steam boilers.png';
import hotAirGenerator from '../assets/Hot Air Generators.png';
import electricHotWater from '../assets/3.png';
import steamGenerator from '../assets/Steam Generators.png';
import thermicFluid from '../assets/Thermic Fluid Heaters.png';
import hotWaterGenerator from '../assets/Hot Water Generators.png';

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const products: Product[] = [
  {
    id: 'steam-boilers',
    title: 'Steam Boilers',
    description: 'Advanced steam boilers engineered for safe and efficient steam generation, perfect for industrial applications.',
    image: steamBoiler,
    category: 'Steam Boilers',
    details: [
      'Fully automated operation',
      'High energy efficiency',
      'Low maintenance requirements',
      'Advanced safety features',
      'Remote monitoring capability'
    ],
    faqs: [
      {
        question: "What is the maximum steam output capacity?",
        answer: "Our steam boilers range from 100 kg/hr to 5000 kg/hr steam output capacity."
      },
      {
        question: "What pressure ranges can the boiler operate at?",
        answer: "The boilers can operate at pressures ranging from 3 bar to 10 bar, depending on your requirements."
      },
      {
        question: "What fuel types can be used?",
        answer: "Our boilers are designed to work with various biomass fuels including wood chips, pellets, and briquettes."
      },
      {
        question: "What safety features are included?",
        answer: "Standard features include pressure relief valves, water level controls, flame monitoring, and emergency shutdown systems."
      },
      {
        question: "What is the expected efficiency?",
        answer: "Our steam boilers achieve thermal efficiency rates of up to 85% with advanced heat recovery systems."
      },
      {
        question: "How long does installation take?",
        answer: "Typical installation takes 3-5 days, including setup, testing, and operator training."
      },
      {
        question: "What maintenance is required?",
        answer: "Regular maintenance includes daily checks, weekly cleaning, and annual comprehensive service."
      },
      {
        question: "What control systems are included?",
        answer: "Our boilers feature PLC-based control systems with touchscreen interfaces and remote monitoring capabilities."
      },
      {
        question: "What is the warranty period?",
        answer: "We offer a standard 2-year warranty with options to extend up to 5 years."
      },
      {
        question: "Are spare parts readily available?",
        answer: "Yes, we maintain a comprehensive inventory of spare parts with 24-hour delivery for critical components."
      }
    ]
  },
  {
    id: 'hot-air-generators',
    title: 'Hot Air Generators',
    description: 'Industrial-grade hot air generators for efficient drying and heating processes.',
    image: hotAirGenerator,
    category: 'Hot Air Generators',
    details: [
      'Precise temperature control',
      'Energy-efficient design',
      'Multiple fuel options',
      'Robust construction',
      'Low emissions'
    ],
    faqs: [
      {
        question: "What temperature range can be achieved?",
        answer: "Our hot air generators can produce temperatures from ambient to 200°C with precise control."
      },
      {
        question: "What is the maximum airflow capacity?",
        answer: "Airflow capacities range from 1,000 to 50,000 m³/hr depending on the model."
      },
      {
        question: "What applications are suitable?",
        answer: "Common applications include industrial drying, space heating, and process heating."
      },
      {
        question: "How is temperature controlled?",
        answer: "Temperature is controlled through advanced PLC systems with multiple temperature sensors."
      },
      {
        question: "What fuel types can be used?",
        answer: "Units can operate on biomass fuels including wood chips, pellets, and agricultural waste."
      },
      {
        question: "What are the maintenance requirements?",
        answer: "Monthly filter cleaning, quarterly inspection, and annual comprehensive service are recommended."
      },
      {
        question: "How efficient are the units?",
        answer: "Our hot air generators achieve thermal efficiency up to 85% with heat recovery systems."
      },
      {
        question: "What safety features are included?",
        answer: "Standard features include overtemperature protection, airflow monitoring, and emergency shutdown."
      },
      {
        question: "Can the system be automated?",
        answer: "Yes, full automation is available with programmable schedules and remote monitoring."
      },
      {
        question: "What is the typical lifespan?",
        answer: "With proper maintenance, units typically last 15-20 years or more."
      }
    ]
  },
  {
    id: 'electric-hot-water',
    title: 'Electric Hot Water Systems',
    description: 'High-efficiency electric hot water systems for commercial and industrial applications.',
    image: electricHotWater,
    category: 'Electric Hot Water',
    details: [
      'Smart temperature management',
      'Energy-saving technology',
      'Compact design',
      'Easy maintenance',
      'Long service life'
    ],
    faqs: [
      {
        question: "What is the maximum water temperature?",
        answer: "Systems can heat water up to 85°C with precise temperature control."
      },
      {
        question: "What capacity ranges are available?",
        answer: "We offer systems from 100 to 5000 liters capacity."
      },
      {
        question: "How energy efficient are the systems?",
        answer: "Our systems achieve up to 98% energy efficiency with smart controls."
      },
      {
        question: "What voltage options are available?",
        answer: "Systems are available in 230V single-phase and 400V three-phase options."
      },
      {
        question: "What control features are included?",
        answer: "Standard features include digital temperature control, timer functions, and remote monitoring."
      },
      {
        question: "How long do the systems last?",
        answer: "Expected lifespan is 15-20 years with proper maintenance."
      },
      {
        question: "What maintenance is required?",
        answer: "Annual inspection and periodic descaling based on water quality."
      },
      {
        question: "Are the systems suitable for hard water areas?",
        answer: "Yes, with built-in scale prevention and optional water treatment systems."
      },
      {
        question: "What safety features are included?",
        answer: "Systems include overheat protection, pressure relief, and leak detection."
      },
      {
        question: "Can multiple units be synchronized?",
        answer: "Yes, systems can be cascaded for larger capacity requirements."
      }
    ]
  },
  {
    id: 'steam-generators',
    title: 'Steam Generators',
    description: 'Compact and efficient steam generation solutions for various industrial processes.',
    image: steamGenerator,
    category: 'Steam Generators',
    details: [
      'Rapid steam production',
      'High thermal efficiency',
      'Advanced controls',
      'Minimal maintenance',
      'Space-saving design'
    ],
    faqs: [
      {
        question: "What is the steam output capacity?",
        answer: "Our generators produce from 50 to 1000 kg/hr of steam."
      },
      {
        question: "What pressure ranges are available?",
        answer: "Operating pressures from 3 to 8 bar are standard."
      },
      {
        question: "How quickly can steam be generated?",
        answer: "Full steam production is achieved within 5-10 minutes from cold start."
      },
      {
        question: "What is the steam quality?",
        answer: "99.5% dry saturated steam is standard, with superheated options available."
      },
      {
        question: "What control systems are included?",
        answer: "PLC-based controls with touchscreen interface and remote monitoring."
      },
      {
        question: "What are the maintenance requirements?",
        answer: "Weekly blowdown and annual service are recommended."
      },
      {
        question: "What safety features are standard?",
        answer: "Includes pressure control, water level monitoring, and emergency shutdown."
      },
      {
        question: "How energy efficient are the units?",
        answer: "Thermal efficiency up to 98% with economizer options."
      },
      {
        question: "What is the warranty coverage?",
        answer: "2-year standard warranty with extended options available."
      },
      {
        question: "Are units customizable?",
        answer: "Yes, we offer customization for specific industry requirements."
      }
    ]
  },
  {
    id: 'thermic-fluid',
    title: 'Thermic Fluid Heaters',
    description: 'Advanced heat transfer solutions for precise temperature control in industrial processes.',
    image: thermicFluid,
    category: 'Thermic Fluid',
    details: [
      'Optimal heat transfer',
      'Energy efficient',
      'Precise control',
      'Low maintenance',
      'Long-lasting performance'
    ],
    faqs: [
      {
        question: "What temperature range can be achieved?",
        answer: "Systems operate from 50°C to 350°C with precise control."
      },
      {
        question: "What heating capacity is available?",
        answer: "Units range from 100 kW to 5000 kW heating capacity."
      },
      {
        question: "What types of thermal fluid can be used?",
        answer: "Compatible with mineral and synthetic heat transfer fluids."
      },
      {
        question: "How accurate is temperature control?",
        answer: "Temperature control accuracy of ±1°C is standard."
      },
      {
        question: "What safety features are included?",
        answer: "Features include temperature limiting, flow monitoring, and pressure control."
      },
      {
        question: "What is the system efficiency?",
        answer: "Thermal efficiency up to 90% with heat recovery options."
      },
      {
        question: "What maintenance is required?",
        answer: "Annual fluid analysis and system inspection recommended."
      },
      {
        question: "Can the system be automated?",
        answer: "Full automation with PLC controls and remote monitoring available."
      },
      {
        question: "What is the expected lifespan?",
        answer: "20+ years with proper maintenance and fluid management."
      },
      {
        question: "Are backup systems available?",
        answer: "Redundant systems and backup options can be incorporated."
      }
    ]
  },
  {
    id: 'hot-water-generators',
    title: 'Hot Water Generators',
    description: 'Reliable hot water generation systems for industrial and commercial applications.',
    image: hotWaterGenerator,
    category: 'Hot Water Generators',
    details: [
      'High efficiency',
      'Consistent performance',
      'Smart controls',
      'Durable construction',
      'Easy maintenance'
    ],
    faqs: [
      {
        question: "What is the maximum water temperature?",
        answer: "Systems can produce hot water up to 95°C."
      },
      {
        question: "What capacity ranges are available?",
        answer: "From 100 to 10,000 liters per hour capacity."
      },
      {
        question: "What fuel options are available?",
        answer: "Systems available in biomass, electric, and hybrid configurations."
      },
      {
        question: "How is temperature controlled?",
        answer: "Digital control systems with ±1°C accuracy."
      },
      {
        question: "What efficiency levels are achieved?",
        answer: "Up to 95% thermal efficiency with heat recovery."
      },
      {
        question: "What maintenance is required?",
        answer: "Quarterly inspection and annual comprehensive service."
      },
      {
        question: "What safety features are included?",
        answer: "Temperature limiting, pressure relief, and low water protection."
      },
      {
        question: "Can the system be integrated with existing infrastructure?",
        answer: "Yes, compatible with most existing hot water systems."
      },
      {
        question: "What is the warranty period?",
        answer: "2-year standard warranty with extension options."
      },
      {
        question: "Is remote monitoring available?",
        answer: "Yes, with real-time monitoring and alert systems."
      }
    ]
  }
];