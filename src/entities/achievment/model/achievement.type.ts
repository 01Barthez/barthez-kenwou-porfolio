import { RefAttributes } from "react";

export interface IAchievement {
    icon: RefAttributes<SVGSVGElement>
    value: string;
    labelFr: string;
    labelEn: string;
}