export interface EncounterExecution {
    id: number,
    userId: string,
    encounterId: number,
    completionTime?: Date,
    isCompleted: boolean,
}