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
        image: "/testing machine/Air Leak Testing Machine.jpeg",
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
        image: "/testing machine/proof test machine.jpeg",
        specs: [
          ["Test Type", "Proof load & pressure"],
          ["Application", "Brake shoes, structural parts"],
          ["Industry", "Automotive"],
          ["Readout", "Digital pass / fail"],
          ["Clients", "Brakes & Automotive"],
        ],
      },
      {
        name: "Valve Testing Machine",
        slug: "valve-testing-machine",
        cardDescription:
          "Dedicated testing machine for valve performance and leakage validation.",
        description:
          "Valve testing machine designed for production-side validation of valve assemblies with controlled test conditions, repeatable measurement, and reliable pass/fail output.",
        image: "/testing machine/valve testing machine.png",
        specs: [
          ["Application", "Valve testing"],
          ["Method", "Controlled inspection cycle"],
          ["Industry", "Automotive / Industrial"],
          ["Output", "Repeatable test result"],
          ["Use", "Production quality validation"],
        ],
      },
      {
        name: "Spring Load Test Rig",
        slug: "spring-load-test-rig",
        cardDescription:
          "Measures spring compression force versus deflection for adjuster springs.",
        description:
          "Measures spring compression force vs deflection for brake adjuster springs and suspension components. Provides force-deflection curve output for quality certification.",
        image: "/testing machine/spring load test rig.jpeg",
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
        image: "/testing machine/master booster leak test machine.jpeg",
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
        image: "/general machine/brake shoe od grinding machine.jpeg",
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
        image: "/general machine/damper assembly SPM.jpeg",
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
        image: "/general machine/tub drilling machine.jpeg",
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
        image: "/general machine/OD Grinding Machine.jpeg",
        specs: [
          ["Operation", "OD grinding"],
          ["Accuracy", "+/-0.01 mm"],
          ["Finish", "Ra 0.4 - 0.8 um"],
          ["Industry", "General Engineering & Automotive"],
          ["Application", "Shafts, pins, cylindrical parts"],
        ],
      },
      {
        name: "Lid Glass Assembly SPM",
        slug: "lid-glass-assembly-spm",
        cardDescription:
          "Force-controlled assembly machine for lid and glass seating operations.",
        description:
          "Special purpose assembly machine for pressing and seating lid and glass components. Consistent press force with position sensing and reject detection.",
        image: "/general machine/Lid Glass Assembly SPM.jpeg",
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
        image: "/general machine/Chain Link Machine.jpeg",
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
        image: "/general machine/Cam Nut Loosening Machine.jpeg",
        specs: [
          ["Operation", "Torque-controlled loosening"],
          ["Component", "Cam nut assembly"],
          ["Method", "Pneumatic / electric drive"],
          ["Industry", "Automotive"],
          ["Feedback", "Pass / fail indication"],
        ],
      },
      {
        name: "Fly Wheel Lifter",
        slug: "fly-wheel-lifter",
        cardDescription:
          "Pneumatic lifting and positioning device for flywheel assembly.",
        description:
          "Ergonomic pneumatic lifting and positioning device for heavy flywheel components during engine assembly. Reduces operator fatigue and prevents damage to precision faces.",
        image: "/products/fly-wheel-lifter.png",
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
        image: "/products/conveyor-systems.png",
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
        image: "/general machine/Riveting Machine & Assembly Table.jpeg",
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
        image: "/general machine/Brake Shoe Bonding Table.jpeg",
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
        image: "/general machine/Glue Applying Machine.jpeg",
        specs: [
          ["Operation", "Automated adhesive dispensing"],
          ["Method", "Metered dispensing"],
          ["Application", "Brake & sealing components"],
          ["Industry", "Automotive"],
          ["Benefit", "Reduced waste and consistent bond quality"],
        ],
      },
      {
        name: "Water Tube Bush Pressing",
        slug: "water-tube-bush-pressing",
        cardDescription:
          "Controlled bush press-fit machine for water tube assemblies.",
        description:
          "Bush press-fit machine for water tube assemblies. Controlled press force ensures correct insertion depth and interference fit without component damage.",
        image: "/products/water-tube-bush-pressing.jpg",
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
        name: "Brake Shoe Testing Fixture",
        slug: "brake-shoe-testing-fixture",
        cardDescription:
          "Go / no-go gauging fixture for brake shoe dimensional inspection.",
        description:
          "Go/No-Go gauging fixture for brake shoe dimensional inspection. Quick-load design for high-volume production line use. Hardened and ground reference surfaces for long life.",
        image: "/products/brake-shoe-testing-fixture.jpg",
        specs: [
          ["Type", "Go / No-Go gauge fixture"],
          ["Component", "Brake shoe"],
          ["Speed", "Quick-load for high volume"],
          ["Material", "Hardened ground steel"],
          ["Clients", "Brakes & Automotive"],
        ],
      },
      {
        name: "Brake Shoe Milling Fixture",
        slug: "brake-shoe-milling-fixture",
        cardDescription:
          "Fixture for stable and repeatable brake shoe milling operations.",
        description:
          "Brake shoe milling fixture built to support consistent work-holding, positional accuracy, and repeatable machining during brake shoe milling processes.",
        image: "/products/brake-shoe-milling-fixture.jpg",
        specs: [
          ["Type", "Milling fixture"],
          ["Component", "Brake shoe"],
          ["Use", "Repeatable machining support"],
          ["Material", "Industrial fixture build"],
          ["Industry", "Automotive"],
        ],
      },
      {
        name: "Bush Pressing Fixture",
        slug: "bush-pressing-fixture",
        cardDescription:
          "Fixture designed for controlled and aligned bush pressing.",
        description:
          "Bush pressing fixture engineered for accurate alignment and stable support during insertion operations to improve consistency and reduce setup variation.",
        image: "/products/bush-pressing-fixture.jpg",
        specs: [
          ["Type", "Pressing fixture"],
          ["Component", "Bush"],
          ["Function", "Alignment and support"],
          ["Use", "Controlled press operation"],
          ["Industry", "Automotive / General"],
        ],
      },
      {
        name: "Testing Fixture",
        slug: "testing-fixture",
        cardDescription:
          "General-purpose testing fixture for production inspection setups.",
        description:
          "Testing fixture used to position and hold components consistently during inspection and functional validation operations on the shop floor.",
        image: "/products/testing-fixture.jpg",
        specs: [
          ["Type", "Testing fixture"],
          ["Application", "Inspection setup"],
          ["Function", "Repeatable positioning"],
          ["Use", "Quality validation"],
          ["Industry", "Automotive / Industrial"],
        ],
      },
      /* Laser Marking Fixture removed */
      {
        name: "CNC Lathe Fixture",
        slug: "cnc-lathe-fixture",
        cardDescription:
          "Lathe fixture for secure and repeatable CNC turning operations.",
        description:
          "CNC lathe fixture developed to improve component holding stability, repeatability, and setup reliability during precision turning operations.",
        image: "/products/cnc-lathe-fixture.png",
        specs: [
          ["Type", "Lathe fixture"],
          ["Machine", "CNC lathe"],
          ["Function", "Secure work-holding"],
          ["Use", "Turning operations"],
          ["Industry", "Precision machining"],
        ],
      },
      {
        name: "Front Housing VMC Fixture",
        slug: "front-housing-vmc-fixture",
        cardDescription:
          "VMC fixture for master cylinder front housing machining.",
        description:
          "VMC fixture for Master Cylinder front housing. Designed for simultaneous facing and drilling of 4 components per cycle, reducing machining time significantly.",
        image: "/products/front-housing-vmc-fixture.jpg",
        specs: [
          ["Component", "Master Cylinder front housing"],
          ["Operation", "Face machining + drilling"],
          ["Capacity", "4 components at a time"],
          ["Notes", "Precision ground datum faces"],
          ["Use", "High-repeatability machining"],
        ],
      },
      {
        name: "Shaft Milling VMC Fixture",
        slug: "shaft-milling-vmc-fixture",
        cardDescription:
          "VMC fixture built for shaft milling with secure alignment.",
        description:
          "Shaft milling VMC fixture designed to improve rigidity, datum control, and repeatable positioning for shaft machining operations on vertical machining centres.",
        image: "/products/shaft-milling-vmc-fixture.jpg",
        specs: [
          ["Type", "VMC milling fixture"],
          ["Component", "Shaft"],
          ["Machine", "Vertical Machining Centre"],
          ["Function", "Accurate clamping"],
          ["Industry", "Precision machining"],
        ],
      },
      {
        name: "VMC 4th Axis Fixture",
        slug: "vmc-4th-axis-fixture",
        cardDescription:
          "Fixture optimized for indexed machining on VMC 4th-axis setups.",
        description:
          "VMC 4th axis fixture developed for indexed machining applications that require stable rotation support, repeatable location, and better cycle control.",
        image: "/products/vmc-4th-axis-fixture.jpg",
        specs: [
          ["Type", "4th axis fixture"],
          ["Machine", "VMC"],
          ["Function", "Indexed machining support"],
          ["Use", "Rotary setup applications"],
          ["Industry", "Automotive / Engineering"],
        ],
      },
      {
        name: "VMC Milling Fixture",
        slug: "vmc-milling-fixture",
        cardDescription:
          "General VMC fixture for precision milling operations.",
        description:
          "VMC milling fixture created for dependable work-holding, positional accuracy, and repeatable milling performance across production machining tasks.",
        image: "/products/vmc-milling-fixture.jpg",
        specs: [
          ["Type", "Milling fixture"],
          ["Machine", "VMC"],
          ["Function", "Precision work-holding"],
          ["Use", "Repeatable milling"],
          ["Industry", "General engineering"],
        ],
      },
      {
        name: "VMC Self Centering Fixture",
        slug: "vmc-self-centering-fixture",
        cardDescription:
          "Self-centering VMC fixture for quick and accurate positioning.",
        description:
          "VMC self-centering fixture designed to reduce setup time and improve alignment consistency by automatically centering the workpiece during clamping.",
        image: "/products/vmc-self-centering-fixture.png",
        specs: [
          ["Type", "Self-centering fixture"],
          ["Machine", "VMC"],
          ["Function", "Automatic workpiece centering"],
          ["Benefit", "Reduced setup time"],
          ["Industry", "Automotive / Precision machining"],
        ],
      },
      {
        name: "Exhaust Manifold Machining Fixture",
        slug: "exhaust-manifold-machining-fixture",
        cardDescription:
          "Fixture for exhaust manifold spot facing and drilling operations.",
        description:
          "Machining fixture for exhaust manifold spot facing and drilling operations. Designed to hold manifold securely during multiple drilling cycles.",
        image: "/fixtures/exhaust.jpeg",
        specs: [
          ["Component", "Exhaust manifold"],
          ["Operation", "Spot facing + drilling"],
          ["Material", "Cast iron base with hardened bush inserts"],
          ["Use", "Multiple drilling cycles"],
          ["Industry", "Automotive"],
        ],
      },
      {
        name: "Clamp Blocks",
        slug: "clamp-blocks",
        cardDescription:
          "Hardened and ground clamp blocks for machining and assembly work-holding.",
        description:
          "Hardened and ground clamp blocks for work-holding in machining fixtures and assembly jigs. Custom dimensions available. Used in VMC and lathe work-holding systems.",
        image: "/fixtures/clamp.jpeg",
        specs: [
          ["Material", "EN31 hardened & ground"],
          ["Tolerance", "+/-0.005 mm"],
          ["Finish", "Ground finish"],
          ["Application", "Work-holding in machining"],
          ["Customization", "Custom dimensions available"],
        ],
      },
      {
        name: "Press Tool Components",
        slug: "press-tool-components",
        cardDescription:
          "Punches, dies, stripper plates, and guide elements built to drawing.",
        description:
          "Precision press tool components including punches, dies, stripper plates, guide pillars and guide bushes. Manufactured to customer drawing in D2 and H13 tool steel with heat treatment.",
        image: "/fixtures/press-tool.jpeg",
        specs: [
          ["Components", "Punch, die, stripper, guide pillars"],
          ["Material", "D2 / H13 tool steel"],
          ["Treatment", "Hardened & ground"],
          ["Industry", "Stamping / press shops"],
          ["Build", "Manufactured to drawing"],
        ],
      },
      {
        name: "Bush Pressing Machine",
        slug: "bush-pressing-machine",
        cardDescription:
          "Pressing machine for bush fitting and insertion operations.",
        description:
          "Bush pressing machine built for controlled bush insertion with consistent force application, positioning support, and production-friendly operation.",
        image: "/products/bush-pressing-machine.jpg",
        specs: [
          ["Type", "Pressing machine"],
          ["Component", "Bush"],
          ["Function", "Insertion operation"],
          ["Use", "Production pressing"],
          ["Industry", "Automotive / General"],
        ],
      },
      {
        name: "Rubber Bush Pressing Machine",
        slug: "rubber-bush-pressing-machine",
        cardDescription:
          "Machine for controlled rubber bush pressing applications.",
        description:
          "Rubber bush pressing machine designed for stable fixture support and reliable insertion performance during rubber bush assembly operations.",
        image: "/products/rubber-bush-pressing-machine.png",
        specs: [
          ["Type", "Pressing machine"],
          ["Component", "Rubber bush"],
          ["Function", "Controlled insertion"],
          ["Use", "Assembly support"],
          ["Industry", "Automotive"],
        ],
      },
    ],
  },
  {
    slug: "marking-machines",
    title: "Marking Machines",
    summary:
      "Laser and dot-peen marking systems for traceability, serial coding, and permanent component identification.",
    products: [
      {
        name: "Knuckle Marking Machine",
        slug: "knuckle-marking-machine",
        cardDescription:
          "Dot-peen or stamp marking for steering knuckle traceability.",
        description:
          "Dot-peen or stamp marking machine for steering knuckles providing permanent part identification, serial numbers and production date traceability.",
        image: "/marking machine (laser & DOT pin marking)/knuckle marking machine.jpeg",
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
        image: "/products/laser-marking-machine.png",
        specs: [
          ["Type", "Fiber laser"],
          ["Application", "Metal component marking"],
          ["Speed", "High speed, non-contact"],
          ["Consumables", "None"],
          ["Clients", "Mando India, Omron Automation"],
        ],
      },
      {
        name: "Dot Pin Marking Machine",
        slug: "dot-pin-marking-machine",
        cardDescription:
          "Dot pin marking machine for permanent traceability markings.",
        description:
          "Dot pin marking machine used for durable part identification, serial number application, and traceability marking across production components.",
        image: "/marking machine (laser & DOT pin marking)/Dot Pin Marking.jpeg",
        specs: [
          ["Type", "Dot pin marking"],
          ["Application", "Permanent traceability marking"],
          ["Output", "Serial / code marking"],
          ["Method", "Mechanical pin marking"],
          ["Industry", "Automotive / Industrial"],
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
  ["Hitech Aria", "Fixture", "Tooling"],
  ["Ramakrishna Forging", "Fixture", "Tooling"],
  ["Mktron", "Fixture Testing Machine", "Testing"],
  ["Masu Brakes", "OD Grinding Machine", "Brake Systems"],
  ["Renault Nissan", "Conrod Tightening", "Assembly Automation"],
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
  ["2016", "Brake adjuster development"],
  ["2020", "Manufacturing of new concept machine: Brake Shoe OD Grinding"],
  ["2024", "New concept conrod tightening machine for automotive company"],
];

export const siteNavigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/company" },
  { label: "Products", href: "/products" },
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
