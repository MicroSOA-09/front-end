export interface TourSale {
    id?: number;
    AuthorId: number;
    startDate: Date;
    endDate: Date;
    salePercentage: number;
    tourIds: number[];
}