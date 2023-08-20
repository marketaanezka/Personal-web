import { SkillsCard, TagColor } from "../common/types";

export const skills: SkillsCard[] = [
    {
        heading: "Technologie",
        skillsList: ["HTML", "CSS", 'JavaScript', 'TypeScript', 'React', 'NextJS', 'REST API', 'GraphQL', "Cypress"],
        color: TagColor.Purple,
    },
    {
        heading: "Nástroje & platformy",
        skillsList: ["Github", "Gitlab", "MS Azure", "Jira", "ClickUp", "Postman", "Storybook", "DevTools", "Web Accessibilty"],
        color: TagColor.Blue,
    },
    {
        heading: "Soft skills",
        skillsList: ["Mentoring", "Prezentační dovednosti", "Aktivní naslouchání", "Kariérní tipy", "Imposter syndrom management"],
        color: TagColor.Teal,
    },
]