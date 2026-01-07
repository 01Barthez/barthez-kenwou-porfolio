import { useLanguageStore } from "@/shared/state/useLanguageStore";
import { IExperience } from "../model/experience.types";


export const CVExperienceCard: React.FC<{ Experience: IExperience }> = ({ Experience }) => {
    const { language } = useLanguageStore();

    const { titleFr, titleEn, period, companyFr, companyEn, descriptionFr, descriptionEn } = Experience;

    return (
        <div className="border-l-2 border-primary/30 pl-4 ml-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-foreground">
                    {language === 'fr' ? titleFr : titleEn}
                </h3>
                <span className="text-sm font-mono text-primary">{period}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
                {language === 'fr' ? companyFr : companyEn}
            </p>

            <ul className="list-disc list-inside space-y-1">
                {(language === 'fr' ? descriptionFr : descriptionEn).map((desc: string, i: number) => (
                    <li key={i} className="text-sm text-muted-foreground">
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    )
}

