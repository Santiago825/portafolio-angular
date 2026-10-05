import { ExperienceEntry } from '../models/portfolio.models';

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    role: 'Consultor Sap',
    // TODO: confirma el nombre de la empresa (el original solo traía el logo "itc.jpg").
    company: 'Inetum',
    period: 'Nov 2024 – Sep 2026',
    logo: 'images/education/inetum.jpg',
    logoAlt: 'Inetum logo',
    highlights: [
      'Developed reports, function modules, and ALVs in ABAP, applying modular programming with internal tables, structures, and subroutines, alongside data modeling using domains, data elements, and transparent tables.',
      'Participated in a client project alongside a senior consultant, resolving incidents and supporting debugging activities across different environments.',
      'Implemented entities and behaviors using the RAP model (CDS Views, validations, actions, and determinations), supporting the design and exposure of OData services via SEGW and RAP with CRUD operations.',
      'Developed and integrated proxies for service consumption, and built SAPUI5/Fiori applications consuming OData services, working with models, controllers, routing, fragments, and components to ensure a consistent user experience.',
      'Designed and modified Adobe Forms, integrating ABAP logic with interface configurations and dynamic layouts.',
    ]
  },
  {
    role: 'Full Stack Web Developer',
    // TODO: confirma el nombre de la empresa (el original solo traía el logo "itc.jpg").
    company: 'ITC',
    period: 'Apr 2023 – Jan 2024',
    logo: 'images/education/itc.webp',
    logoAlt: 'ITC logo',
    highlights: [
      'Built features for several modules in the fiduciary domain: frontend in Angular and backend with Spring Boot and Maven, plus SQL table design, following a REST API architecture.',
      'Helped create and configure the first frontend components in Angular.',
      'Fixed the defects reported by QA: 100% of the issues in the setter, products and allies modules were solved in the first version (MVP).',
      'Kept constant, fluid communication with the consultants, which made it easier to coordinate how features were implemented and improved.',
    ],
  },
];
