export interface BlogPostComment {
    blogId: string,
    AuthorId: string,
    authorUsername: string | null,
    text: string,
    creationTime: Date, 
    lastUpdatedTime: Date
}