import { ISkill } from "../model/Skill.types";

export const SkillBadge: React.FC<{ Skill: ISkill }> = ({ Skill }) => {

    const { name } = Skill;

    return (
        <>
            <span
                className="px-2 py-1 rounded-md bg-primary/10 text-xs text-foreground"
            >
                {name}
            </span>
        </>
    )
}

