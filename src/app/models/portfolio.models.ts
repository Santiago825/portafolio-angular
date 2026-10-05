/** Tipos del contenido del portafolio. Los componentes solo pintan; los datos viven en /data. */

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly tagline: string;
  readonly bio: string;
  readonly cvUrl: string;
  readonly socials: readonly SocialLink[];
}

export interface SocialLink {
  readonly label: string;
  readonly url: string;
  /** Nombre del icono de @ng-icons/remixicon (registrado en Sidebar) */
  readonly icon: 'remixLinkedinBoxFill' | 'remixGithubFill' | 'remixWhatsappFill';
}

export interface Project {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageSize: { readonly width: number; readonly height: number };
  readonly stack: readonly string[];
  readonly demoUrl?: string;
  readonly repos: readonly { readonly label: string; readonly url: string }[];
}

export interface EducationEntry {
  readonly title: string;
  readonly institution: string;
  readonly place: string;
  readonly year: number;
  readonly logo: string;
  readonly logoAlt: string;
}

export interface ExperienceEntry {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly logo: string;
  readonly logoAlt: string;
  readonly highlights: readonly string[];
}

export interface CertificateImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface ComplementaryItem {
  readonly title: string;
  readonly place: string;
  readonly url: string;
}

export interface ComplementaryGroup {
  readonly year: number;
  readonly items: readonly ComplementaryItem[];
}

export interface Skill {
  readonly name: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
}

export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly Skill[];
}
