import { SkillsCard, TagColor } from "../common/types";

export const skills: SkillsCard[] = [
    {
        heading: "Technologie",
        skillsList: ["HTML", "CSS", 'JavaScript', 'TypeScript', 'React', 'NextJS', 'REST API', 'GraphQL', "Storybook", "Cypress", "Gherkin"],
        color: TagColor.Purple,
    },
    // {
    //     heading: "Knihovny",
    //     skillsList: ["Bootstrap", "Material UI", 'ChakraUI', 'Tailwinds', 'CSS-in-JS',  'Formik', 'React-hook-forms', 'Apollo GraphQL client', "Nodemailer"],
    //     color: "cyan",
    // },
    {
        heading: "Nástroje",
        skillsList: ["Github", "Gitlab", "MS Azure", "Jira", "ClickUp", "Postman", "EsLint, Prettier", "Netlify", "Vercel", "Docker", "DevTools", "Web Accessibilty"],
        color: TagColor.Blue,
    },
    {
        heading: "Soft skills",
        skillsList: ["Mentoring, lektorování", "Aktivní naslouchání", "Prezentační dovednosti", "Proaktivita"],
        color: TagColor.Teal,
    },
]