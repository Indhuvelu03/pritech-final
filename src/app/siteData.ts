export const siteInfo = {
  name: "Pritech Engineering",
  shortName: "PRITECH",
  tagline: "Engineering - Special Purpose Machines",
  phone: "+91-7550112337",
  phoneHref: "tel:+917550112337",
  whatsappNumber: "917550112337",
  emails: ["pritechengg@yahoo.com", "pritecheng@gmail.com"],
  address: "140, Tiny Sector, Karatur, Ambattur, Chennai - 600058",
};

export type NavItem = {
  label: string;
  href: string;
};

export type CompanyPage = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
};

export type Product = {
  name: string;
  slug: string;
  cardDescription: string;
  description: string;
  image?: string;
  specs: Array<[label: string, value: string]>;
};

export type ProductCategory = {
  slug: string;
  title: string;
  summary: string;
  products: Product[];
};

export const topUtilityLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/company/about-pritech" },
  { label: "Contact", href: "/contact" },
];

export const companyPages: CompanyPage[] = [
  {
    slug: "about-pritech",
    title: "About Pritech",
    summary: "Practical engineering leadership with deep SPM and tooling experience.",
    intro:
      "Pritech Engineering was established in 2008 under the leadership of B. Kadambaraja, bringing together years of special purpose machine design, precision tooling, and production-oriented execution for automotive manufacturing.",
  },
  {
    slug: "our-facility",
    title: "Our Facility",
    summary: "A focused manufacturing setup for custom builds, fixtures, and machine development.",
    intro:
      "Our facility in Ambattur is organized to support machining, grinding, drilling, welding, assembly, and controlled fabrication workflows for custom industrial projects.",
  },
  {
    slug: "milestones",
    title: "Milestones",
    summary: "Key growth points in the company journey since 2008.",
    intro:
      "From formation and facility expansion to new business lines and supplier recognition, our milestones reflect consistent execution and long-term customer trust.",
  },
/*
  {
    slug: "our-customers",
    title: "Our Customers",
    summary: "Long-standing industrial relationships across automotive and precision manufacturing.",
    intro:
      "We support manufacturers who need reliable machine building, tooling, assembly support, and testing solutions delivered with practical production understanding.",
  },
*/
];

export const productCategories: ProductCategory[] = [
  {
    slug: "testing-machines",
    title: "Testing Machines",
    summary:
      "Air leak, leak, proof, and spring-force systems for brake, hydraulic, and line-side quality validation.",
    products: [
      {
        name: "Air Leak Test Machine",
        slug: "air-leak-test-machine",
        cardDescription:
          "Air leak testing for brake master cylinders, callipers, and hydraulic components.",
        description:
          "Precision air leakage detection machine for brake master cylinders, callipers and hydraulic components. Built to customer specifications using differential pressure method. Zero-defect quality assurance for brake system assemblies.",
        image: "/products/air-leak-test-machine.jpg",
        specs: [
          ["Application", "Brake & hydraulic component testing"],
          ["Method", "Differential pressure / flow"],
          ["Industry", "Automotive"],
          ["Cycle Time", "As per customer requirement"],
          ["Clients", "Mando India, Brakes & Automotive"],
        ],
      },
      {
        name: "Leak Test Machine",
        slug: "leak-test-machine",
        cardDescription:
          "Hydraulic and pneumatic leak testing machine for assembled brake components.",
        description:
          "Hydraulic and pneumatic leak testing machine for assembled brake sub-components. Pressure decay method with pass/fail indication and data logging. Suitable for high-volume production lines.",
        image: "/products/leak-test-machine.jpg",
        specs: [
          ["Application", "Hydraulic assemblies"],
          ["Method", "Pressure decay"],
          ["Industry", "Automotive"],
          ["Output", "Pass / fail indication"],
          ["Clients", "Takata India, Mando India"],
        ],
      },
      {
        name: "Proof Test Machine",
        slug: "proof-test-machine",
        cardDescription:
          "Load and pressure proof testing for brake shoes and structural automotive parts.",
        description:
          "Load and pressure proof testing for brake shoes and structural automotive parts. Consistent force application with digital pass/fail readout. Built for in-line quality inspection.",
        image: "/products/proof-test-machine.png",
        specs: [
          ["Test Type", "Proof load & pressure"],
          ["Application", "Brake shoes, structural parts"],
          ["Industry", "Automotive"],
          ["Readout", "Digital pass / fail"],
          ["Clients", "Brakes & Automotive"],
        ],
      },
      {
        name: "Spring Load Test Rig",
        slug: "spring-load-test-rig",
        cardDescription:
          "Measures spring compression force versus deflection for adjuster springs.",
        description:
          "Measures spring compression force vs deflection for brake adjuster springs and suspension components. Provides force-deflection curve output for quality certification.",
        image: "/products/proof-test-machine.png",
        specs: [
          ["Application", "Spring compression testing"],
          ["Output", "Force-deflection curve"],
          ["Industry", "Automotive"],
          ["Component", "Adjuster springs, suspension springs"],
          ["Usage", "Quality certification"],
        ],
      },
      {
        name: "Master Booster Leak Test Machine",
        slug: "master-booster-leak-test-machine",
        cardDescription:
          "Specialized leak testing for brake master cylinder and booster assemblies.",
        description:
          "Specialised leak test machine for brake master cylinder and vacuum booster assemblies. Built to OEM standards with pneumatic test circuit and rejection marking.",
        image: "/products/leak-test-machine.jpg",
        specs: [
          ["Application", "Brake master cylinder & booster"],
          ["Standard", "OEM specifications"],
          ["Method", "Pneumatic pressure hold"],
          ["Output", "Rejection marking"],
          ["Clients", "Mando India"],
        ],
      },
    ],
  },
  {
    slug: "special-purpose-machines",
    title: "Special Purpose Machines",
    summary:
      "Custom-built SPMs for grinding, drilling, marking, assembly, and controlled press-fit operations.",
    products: [
      {
        name: "Brake Shoe OD Grinding Machine",
        slug: "brake-shoe-od-grinding-machine",
        cardDescription:
          "Outer diameter grinding machine for precise brake shoe arc radius.",
        description:
          "Outer diameter grinding machine for brake shoes ensuring precise arc radius for optimal brake pad-to-drum contact. Consistent grinding with minimal setup time.",
        image: "/products/proof-test-machine.png",
        specs: [
          ["Operation", "OD arc grinding"],
          ["Component", "Brake shoe"],
          ["Accuracy", "+/-0.02 mm"],
          ["Industry", "Automotive"],
          ["Clients", "Brakes & Automotive"],
        ],
      },
      {
        name: "Damper Assembly SPM",
        slug: "damper-assembly-spm",
        cardDescription:
          "Single-cycle assembly solution for shock absorber and damper operations.",
        description:
          "Special purpose machine for shock absorber and damper assembly operations. Automated pressing, rod insertion, locking and torque operations in a single cycle.",
        image: "/products/cam-nut-loosening-machine.png",
        specs: [
          ["Operation", "Assembly & pressing"],
          ["Component", "Shock absorber / damper"],
          ["Industry", "Automotive"],
          ["Cycle", "Single-cycle operation"],
          ["Clients", "Mando India, Myunghwa Automotive"],
        ],
      },
      {
        name: "Tub Drilling SPM",
        slug: "tub-drilling-spm",
        cardDescription:
          "Multi-hole simultaneous drilling for tubular components.",
        description:
          "Multi-hole simultaneous drilling special purpose machine for tubular components. High production rate with consistent hole positioning and drill depth control.",
        image: "/products/chain-link-machine.png",
        specs: [
          ["Operation", "Multi-spindle simultaneous drilling"],
          ["Component", "Tubular parts"],
          ["Industry", "Automotive"],
          ["Production Rate", "High volume"],
          ["Control", "Hole position and depth control"],
        ],
      },
      {
        name: "OD Grinding Machine",
        slug: "od-grinding-machine",
        cardDescription:
          "Precision outer diameter grinding for shafts, pins, and round components.",
        description:
          "Precision outer diameter grinding for round components. High surface finish with tight dimensional tolerance. Suitable for shafts, pins and cylindrical components.",
        image: "/products/air-leak-test-machine.jpg",
        specs: [
          ["Operation", "OD grinding"],
          ["Accuracy", "+/-0.01 mm"],
          ["Finish", "Ra 0.4 - 0.8 um"],
          ["Industry", "General Engineering & Automotive"],
          ["Application", "Shafts, pins, cylindrical parts"],
        ],
      },
      {
        name: "Knuckle Marking Machine",
        slug: "knuckle-marking-machine",
        cardDescription:
          "Dot-peen or stamp marking for steering knuckle traceability.",
        description:
          "Dot-peen or stamp marking machine for steering knuckles providing permanent part identification, serial numbers and production date traceability.",
        image: "/products/knuckle-marking-machine.png",
        specs: [
          ["Operation", "Permanent part marking"],
          ["Component", "Steering knuckle"],
          ["Industry", "Automotive"],
          ["Output", "Serial number, date code"],
          ["Method", "Dot-peen / stamp"],
        ],
      },
      {
        name: "Laser Marking Machine",
        slug: "laser-marking-machine",
        cardDescription:
          "Fiber laser marking for part ID, logos, and date code traceability.",
        description:
          "Fiber laser marking machine for permanent part ID, date codes, logos and traceability marking on metal components. Non-contact, high-speed marking with no consumables.",
        image: "/products/knuckle-marking-machine.png",
        specs: [
          ["Type", "Fiber laser"],
          ["Application", "Metal component marking"],
          ["Speed", "High speed, non-contact"],
          ["Consumables", "None"],
          ["Clients", "Mando India, Omron Automation"],
        ],
      },
      {
        name: "Lid Glass Assembly SPM",
        slug: "lid-glass-assembly-spm",
        cardDescription:
          "Force-controlled assembly machine for lid and glass seating operations.",
        description:
          "Special purpose assembly machine for pressing and seating lid and glass components. Consistent press force with position sensing and reject detection.",
        image: "/products/chain-link-machine.png",
        specs: [
          ["Operation", "Press assembly"],
          ["Component", "Lid & glass sub-assembly"],
          ["Method", "Force-controlled pressing"],
          ["Industry", "Automotive / Electronics"],
          ["Control", "Position sensing and reject detection"],
        ],
      },
      {
        name: "Chain Link Machine",
        slug: "chain-link-machine",
        cardDescription:
          "Automated joining and pressing of chain links with controlled cycle time.",
        description:
          "Chain link assembly machine for automated joining and pressing of chain links. Uniform link formation with controlled press force and cycle time.",
        image: "/products/chain-link-machine.png",
        specs: [
          ["Operation", "Chain link assembly"],
          ["Component", "Chain links"],
          ["Method", "Automated pressing"],
          ["Industry", "Automotive / General"],
          ["Control", "Press force and cycle time"],
        ],
      },
      {
        name: "Cam Nut Loosening Machine",
        slug: "cam-nut-loosening-machine",
        cardDescription:
          "Torque-controlled loosening machine for disassembly operations.",
        description:
          "Torque-controlled cam nut loosening machine for disassembly operations. Consistent torque application with pass/fail feedback.",
        image: "/products/cam-nut-loosening-machine.png",
        specs: [
          ["Operation", "Torque-controlled loosening"],
          ["Component", "Cam nut assembly"],
          ["Method", "Pneumatic / electric drive"],
          ["Industry", "Automotive"],
          ["Feedback", "Pass / fail indication"],
        ],
      },
      {
        name: "Water Tube Bush Pressing",
        slug: "water-tube-bush-pressing",
        cardDescription:
          "Controlled bush press-fit machine for water tube assemblies.",
        description:
          "Bush press-fit machine for water tube assemblies. Controlled press force ensures correct insertion depth and interference fit without component damage.",
        image: "/products/cam-nut-loosening-machine.png",
        specs: [
          ["Operation", "Bush press fit"],
          ["Component", "Water tube + bush"],
          ["Method", "Force-controlled press"],
          ["Industry", "Automotive cooling systems"],
          ["Control", "Insertion depth and interference fit"],
        ],
      },
    ],
  },
  {
    slug: "fixtures-tooling",
    title: "Fixtures & Tooling",
    summary:
      "Precision fixtures, gauges, and tooling components designed for repeatability and faster cycle times.",
    products: [
      {
        name: "VMC Fixtures",
        slug: "vmc-fixtures",
        cardDescription:
          "Fixtures for simultaneous VMC machining of automotive components.",
        description:
          "Vertical Machining Centre fixtures for complex automotive components. Designed for 4-component simultaneous machining, reducing cycle time by 75%. Precision ground locators ensure repeatability.",
        image: "/products/proof-test-machine.png",
        specs: [
          ["Machine", "Vertical Machining Centre"],
          ["Capacity", "4 components simultaneously"],
          ["Component", "Master cylinder, manifolds"],
          ["Repeatability", "+/-0.01 mm"],
          ["Clients", "Redema, Mando India"],
        ],
      },
      {
        name: "Brake Shoe Testing Fixture",
        slug: "brake-shoe-testing-fixture",
        cardDescription:
          "Go / no-go gauging fixture for brake shoe dimensional inspection.",
        description:
          "Go/No-Go gauging fixture for brake shoe dimensional inspection. Quick-load design for high-volume production line use. Hardened and ground reference surfaces for long life.",
        image: "/products/air-leak-test-machine.jpg",
        specs: [
          ["Type", "Go / No-Go gauge fixture"],
          ["Component", "Brake shoe"],
          ["Speed", "Quick-load for high volume"],
          ["Material", "Hardened ground steel"],
          ["Clients", "Brakes & Automotive"],
        ],
      },
      {
        name: "Laser Marking Fixture",
        slug: "laser-marking-fixture",
        cardDescription:
          "Holding and positioning fixture for repeatable laser marking stations.",
        description:
          "Component holding and positioning fixture for laser marking stations. Ensures absolute repeatability of mark location and component orientation through precision locating pins.",
        image: "/products/knuckle-marking-machine.png",
        specs: [
          ["Type", "Holding & positioning fixture"],
          ["Application", "Laser marking station"],
          ["Repeatability", "+/-0.02 mm"],
          ["Material", "Hardened tool steel"],
          ["Positioning", "Precision locating pins"],
        ],
      },
      {
        name: "Front Housing VMC Fixture",
        slug: "front-housing-vmc-fixture",
        cardDescription:
          "VMC fixture for master cylinder front housing machining.",
        description:
          "VMC fixture for Master Cylinder front housing. Designed for simultaneous facing and drilling of 4 components per cycle, reducing machining time significantly.",
        image: "/products/leak-test-machine.jpg",
        specs: [
          ["Component", "Master Cylinder front housing"],
          ["Operation", "Face machining + drilling"],
          ["Capacity", "4 components at a time"],
          ["Notes", "Precision ground datum faces"],
          ["Use", "High-repeatability machining"],
        ],
      },
      {
        name: "Exhaust Manifold Machining Fixture",
        slug: "exhaust-manifold-machining-fixture",
        cardDescription:
          "Fixture for exhaust manifold spot facing and drilling operations.",
        description:
          "Machining fixture for exhaust manifold spot facing and drilling operations. Designed to hold manifold securely during multiple drilling cycles.",
        image: "/products/chain-link-machine.png",
        specs: [
          ["Component", "Exhaust manifold"],
          ["Operation", "Spot facing + drilling"],
          ["Material", "Cast iron base with hardened bush inserts"],
          ["Use", "Multiple drilling cycles"],
          ["Industry", "Automotive"],
        ],
      },
      {
        name: "Press Tool Components",
        slug: "press-tool-components",
        cardDescription:
          "Punches, dies, stripper plates, and guide elements built to drawing.",
        description:
          "Precision press tool components including punches, dies, stripper plates, guide pillars and guide bushes. Manufactured to customer drawing in D2 and H13 tool steel with heat treatment.",
        image: "/products/cam-nut-loosening-machine.png",
        specs: [
          ["Components", "Punch, die, stripper, guide pillars"],
          ["Material", "D2 / H13 tool steel"],
          ["Treatment", "Hardened & ground"],
          ["Industry", "Stamping / press shops"],
          ["Build", "Manufactured to drawing"],
        ],
      },
      {
        name: "Clamp Blocks",
        slug: "clamp-blocks",
        cardDescription:
          "Hardened and ground clamp blocks for machining and assembly work-holding.",
        description:
          "Hardened and ground clamp blocks for work-holding in machining fixtures and assembly jigs. Custom dimensions available. Used in VMC and lathe work-holding systems.",
        image: "/products/air-leak-test-machine.jpg",
        specs: [
          ["Material", "EN31 hardened & ground"],
          ["Tolerance", "+/-0.005 mm"],
          ["Finish", "Ground finish"],
          ["Application", "Work-holding in machining"],
          ["Customization", "Custom dimensions available"],
        ],
      },
    ],
  },
  {
    slug: "handling-assembly",
    title: "Handling & Assembly",
    summary:
      "Ergonomic lifting, transfer, riveting, bonding, and adhesive systems for assembly operations.",
    products: [
      {
        name: "Fly Wheel Lifter",
        slug: "fly-wheel-lifter",
        cardDescription:
          "Pneumatic lifting and positioning device for flywheel assembly.",
        description:
          "Ergonomic pneumatic lifting and positioning device for heavy flywheel components during engine assembly. Reduces operator fatigue and prevents damage to precision faces.",
        image: "/products/chain-link-machine.png",
        specs: [
          ["Capacity", "Up to 50 kg"],
          ["Drive", "Pneumatic"],
          ["Application", "Flywheel assembly"],
          ["Industry", "Automotive engine assembly"],
          ["Benefit", "Reduces operator fatigue"],
        ],
      },
      {
        name: "Conveyor Systems",
        slug: "conveyor-systems",
        cardDescription:
          "Custom belt, roller, and slat conveyors for line-to-line part transfer.",
        description:
          "Custom-designed conveyor systems for production line part transfer between workstations. Belt, roller and slat conveyor configurations available to suit production layout.",
        image: "/products/cam-nut-loosening-machine.png",
        specs: [
          ["Type", "Belt / Roller / Slat conveyor"],
          ["Drive", "Motor-driven"],
          ["Speed", "Variable as per line"],
          ["Application", "Inter-station transfer"],
          ["Layout", "Custom to production line"],
        ],
      },
      {
        name: "Riveting Machine & Assembly Table",
        slug: "riveting-machine-assembly-table",
        cardDescription:
          "Semi-automatic riveting with integrated assembly table for brake shoes.",
        description:
          "Semi-automatic riveting machine with integrated assembly table for brake shoe lining attachment. Consistent rivet setting force with adjustable die sets for different rivet sizes.",
        image: "/products/proof-test-machine.png",
        specs: [
          ["Operation", "Brake shoe riveting"],
          ["Component", "Brake shoe + lining"],
          ["Drive", "Pneumatic / hydraulic"],
          ["Control", "Adjustable die sets"],
          ["Clients", "Brakes & Automotive"],
        ],
      },
      {
        name: "Brake Shoe Bonding Table",
        slug: "brake-shoe-bonding-table",
        cardDescription:
          "Heated bonding station for friction lining adhesive attachment.",
        description:
          "Heated bonding work station for adhesive attachment of brake friction lining to brake shoe. Temperature-controlled platen ensures consistent curing of bonding adhesive under correct pressure.",
        image: "/products/leak-test-machine.jpg",
        specs: [
          ["Operation", "Adhesive bonding"],
          ["Component", "Brake shoe + friction lining"],
          ["Heat", "Temperature-controlled platen"],
          ["Pressure", "Consistent clamping pressure"],
          ["Use", "Controlled adhesive curing"],
        ],
      },
      {
        name: "Glue Applying Machine",
        slug: "glue-applying-machine",
        cardDescription:
          "Automated metered glue dispensing for brake and sealing components.",
        description:
          "Automated adhesive dispensing machine for precise and consistent glue application on brake and automotive sealing components. Metered dispensing eliminates waste and ensures bond quality.",
        image: "/products/knuckle-marking-machine.png",
        specs: [
          ["Operation", "Automated adhesive dispensing"],
          ["Method", "Metered dispensing"],
          ["Application", "Brake & sealing components"],
          ["Industry", "Automotive"],
          ["Benefit", "Reduced waste and consistent bond quality"],
        ],
      },
    ],
  },
];

export const customers = [
  "Mando India Ltd.",
  "Takata India Ltd.",
  "Saint-Gobain Glass India Ltd.",
  "Daesung Automotive India Pvt. Ltd.",
  "Omron Automation (P) Ltd.",
  "Brakes & Automotive Industries",
  "Myunghwa Automotive India (P) Ltd.",
  "Marks Pryor Marking Technology Pvt. Ltd.",
  "Redema Customized Machine Tools",
  "Pyramid Precision Engg (P) Ltd.",
  "Sicame India (P) Ltd.",
  "Agile Electric (P) Ltd.",
  "Satha Auto Parts Ltd.",
  "Precision Automation & Robotics India Ltd.",
];

export const references = [
  ["Mando India Ltd.", "Damper Assembly SPM", "Automotive"],
  ["Brakes & Automotive", "Brake Shoe OD Grinding Machine", "Brake Systems"],
  ["Takata India Ltd.", "Leak Test Machine", "Testing"],
  ["Saint-Gobain", "Conveyor System", "Handling"],
  ["Omron Automation", "Laser Marking Machine", "Traceability"],
  ["Redema", "VMC Fixtures, Press Tool Components", "Tooling"],
  ["Myunghwa Automotive", "Assembly SPM", "Assembly Automation"],
  ["Daesung Automotive", "Testing Fixtures", "Precision Fixture"],
];

export const facilityList = [
  "Vertical Milling Machine - 4 Nos",
  "Turret Lathe - 2 Nos",
  "Centreless Grinding - 1 No",
  "Drilling Machines - 3 Nos",
  "Milling Machine Esteem 1 1/2 - 1 No",
  "Surface Grinding Machine 12 x 24 - 1 No",
  "Welding Machine - 1 No",
  "CNC - 2 Nos",
  "Bench Grinding Machine - 2 Nos",
];

export const milestones = [
  ["2008", "Company established"],
  ["2009", "Manufacturing facility extended"],
  ["2010", "Best Supplier Award from Brakes & Automotive"],
  ["2011", "New facility inaugurated and sleeve adjuster business started"],
  ["2012", "Final stage of TBI adjuster assembly business"],
];

export const siteNavigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/company/about-pritech" },
  { label: "Products", href: "/products/testing-machines" },
  { label: "References", href: "/references" },
  // { label: "Our Customers", href: "/company/our-customers" },
];

export function createWhatsappLink(product?: string) {
  const message = product
    ? `Hello Pritech Engineering, I would like to enquire about ${product}. Please share more details.`
    : "Hello Pritech Engineering, I would like to discuss your engineering requirements.";

  return `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string) {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return null;
  }

  const product = category.products.find((item) => item.slug === productSlug);

  return product ? { category, product } : null;
}

export function getCompanyPageBySlug(slug: string) {
  return companyPages.find((page) => page.slug === slug);
}
