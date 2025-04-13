export interface BlogPostComment {
    blogId: string,
    userId: number,
    username: string | null,
    text: string,
    creationTime: Date, 
    lastUpdatedTime: Date
}