import { SkillsCard, TagColor } from "../common/types";

export const skills: SkillsCard[] = [
  {
    heading: "Technologie",
    skillsList: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "NextJS",
      "CSS libraries & frameworks",
      "UX/UI principles",
    ],
    color: TagColor.Purple,
  },
  {
    heading: "Co mě baví",
    skillsList: [
      "Efektivní učení programování",
      "Vedení projektů",
      "Design systémy",
      "Scrum",
      "Pokročilé DevTools",
      "Web Accessibilty",
    ],
    color: TagColor.Blue,
  },
  {
    heading: "Soft skills",
    skillsList: [
      "Imposter syndrom management",
      "Osobní značka",
      "Networking",
      "Kariérní vize",
      "Příprava na pohovor",
      "Feedback v IT",
    ],
    color: TagColor.Teal,
  },
];
