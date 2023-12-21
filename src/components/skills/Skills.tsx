import { FC, useEffect, useState } from "react"

export type SkillsProps = {
    skills: string[]
}

export const Skills: FC<SkillsProps> = ({ skills }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1001);
    }, [])

    return (
        <>
            <ul>
                {skills.map((skill: string, i: number) => <li key={i}>{skill}</li>)}
                {
                    isLoggedIn ? <button>Start Learning</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>
                }
            </ul>
        </>
    )
}