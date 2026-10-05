import { Skill, SkillGroup } from '../models/portfolio.models';

// Las imágenes ahora son locales (public/images/skills): el original las pedía a raw.githubusercontent.com.
const skill = (name: string, file: string, width: number, height: number): Skill => ({
  name,
  image: `images/skills/${file}.webp`,
  width,
  height,
});

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Hard skills',
    skills: [
      skill('HTML', 'html', 192, 192),
      skill('CSS', 'css', 192, 192),
      skill('Angular', 'angular', 192, 192),
      skill('React', 'react', 192, 192),
      skill('Java', 'java', 192, 192),
      skill('JavaScript', 'javascript', 192, 192),
      skill('MongoDB', 'mongodb', 192, 192),
      skill('MySQL', 'mysql', 192, 192),
    ],
  },
  {
    title: 'Sap skills',
    skills: [
      skill('ABAP', 'abap', 185, 192),
      skill('Fiori', 'fiori', 192, 153),
      skill('Rap', 'rap', 192, 144),
      skill('SapUI5', 'sapui5', 192, 192),
    ],
  },
  {
    title: 'Other skills',
    skills: [
      skill('REST API', 'rest-api', 185, 192),
      skill('Bootstrap', 'bootstrap', 192, 153),
      skill('Git', 'git', 192, 144),
      skill('JWT', 'jwt', 192, 192),
      skill('Postman', 'postman', 192, 173),
      skill('Tailwind CSS', 'tailwind', 192, 175),
      skill('Tomcat', 'tomcat', 192, 192),
      skill('Trello', 'trello', 192, 108),
      skill('VS Code', 'vscode', 192, 192),
    ],
  },
];
