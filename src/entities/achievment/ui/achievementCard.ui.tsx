import { useLanguageStore } from "@/shared/state/useLanguageStore";
import { IAchievement } from "../model/achievement.type";

export const AchievmentCard: React.FC<{ Achievment: IAchievement }> = ({ Achievment }) => {
    const { language } = useLanguageStore();

    const { icon, value, labelFr, labelEn } = Achievment;
    const Icon = icon;

    return (
        <div
            className="text-center p-4 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors"
        >
            <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            <span className="block text-2xl font-bold gradient-text mb-1">
                {value}
            </span>
            <span className="text-xs text-muted-foreground">
                {language === 'fr' ? labelFr : labelEn}
            </span>
        </div>
    )
}

