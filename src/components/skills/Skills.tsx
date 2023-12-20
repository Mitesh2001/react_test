import { FC } from "react"

export type SkillsProps = {
    skills: string[]
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
    return (
        <>
            <ul>
                {skills.map((skill: string, i: number) => <li key={i}>{skill}</li>)}
            </ul>
        </>
    )
}