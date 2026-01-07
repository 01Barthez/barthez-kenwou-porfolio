import { ISkill } from "../model/Skill.types";

export const SkillCard: React.FC<{ Skill: ISkill }> = ({ Skill }) => {

    const { name, category, level, icon } = Skill;

    return (
        <div
            className="skill-card group"
        >
            <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {name}
                </h3>
            </div>

            <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <div
                    className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-accent rounded-full"
                    style={{ width: `${level}%` }}
                />
            </div>

            <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground capitalize">{category}</span>
                <span className="text-xs font-mono text-primary">{level}%</span>
            </div>
        </div>
    )
}

