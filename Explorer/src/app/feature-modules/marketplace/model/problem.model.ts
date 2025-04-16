import { Time } from "@angular/common";
import { ProblemMessage } from "./problem-message.model";

export interface Problem {
    id?: number;
    category: string;
    priority: string;
    description: string;
    time: Time;
    idTourist: string;
    idGuide: string;
    isSolved: boolean;
    deadline: Date;
    idTour: number;
    problemMessages: ProblemMessage[];
}