import { Profile } from '../models/portfolio.models';

export const PROFILE: Profile = {
  name: 'Santiago Orjuela',
  role: 'Web Developer',
  tagline: 'Systems engineer · Full stack, specialised in frontend',
  bio: 'Software developer with three years of combined experience in Full Stack development and the SAP ecosystem. In web development, I implemented applications using Angular and Spring Boot within a REST API architecture, including an administrative portal for the fiduciary sector. As an SAP consultant, I developed and maintained ABAP programs (reports, BAPIs, and BADIs)—adding functionality and resolving issues through debugging—and built solutions using RAP, OData, and SAPUI5/Fiori. I collaborate effectively with consultants, developers, and other technical professionals to translate business requirements into robust, secure solutions. Analytical, committed, and passionate about continuous learning, I seek to grow in environments where I can contribute technical value and work as part of a team toward clear objectives.',
  cvUrl: 'https://drive.google.com/file/d/1Bt_0jrWyBvB88hPUFwzI91WeFgICUFxa/view?usp=drive_link',
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/santiago-orjuela-sierra/',
      icon: 'remixLinkedinBoxFill',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Santiago825?tab=repositories',
      icon: 'remixGithubFill',
    },
    {
      label: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=573016337950',
      icon: 'remixWhatsappFill',
    },
  ],
};
