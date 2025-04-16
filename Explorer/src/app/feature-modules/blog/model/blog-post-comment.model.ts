export interface BlogPostComment {
    blogId: string,
    userId: string,
    username: string | null,
    text: string,
    creationTime: Date, 
    lastUpdatedTime: Date
}