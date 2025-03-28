export interface Fight {
    id: number;
    encounterID: number;
    startTime: number;
    endTime: number;
    phaseTransitions: {
        id: string;
        startTime: number;
    }
}