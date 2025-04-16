export interface GuideReview {
    id?: number,
    userId: string,
    guideId: string,
    rating: number,
    comment?: string,
    submissionDate: Date
}