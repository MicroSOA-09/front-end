export enum DifficultyLevel {
  EASY = 'Easy',
  MODERATE = 'Moderate',
  DIFFICULT = 'Difficult'
}

export interface Preferences {
  id?: number;
  userId: string;
  preferredDifficulty: DifficultyLevel;
  transportationPreferences: number[];
  interestTags: string[];
}
