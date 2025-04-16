export interface Coupon{
    id: number,
    code: string,
    discount: number,
    expirationDate: Date,
    tourId: number,
    touristId: string,
    AuthorId: string
}