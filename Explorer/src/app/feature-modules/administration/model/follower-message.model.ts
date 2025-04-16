export interface FollowerMessage {
    id: number;
    userId: string;
    followerId: number;
    followerUsername: string;
    message: string;
    isRead: boolean;
}