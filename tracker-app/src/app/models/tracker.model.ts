export interface Tracker {
    id: number;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'pending';
    createdAt: Date;
    updatedAt: Date;
}