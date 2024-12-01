export interface Experience {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

export interface Collection {
    id: string;
    title: string;
    description: string;
    experiences: Experience[];
} 