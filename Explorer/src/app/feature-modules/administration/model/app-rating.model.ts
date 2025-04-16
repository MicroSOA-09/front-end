export interface AppRating {
    id?: number;
    userId: string;
    rating: number;
    description?: string;
    dateCreated: Date;
}