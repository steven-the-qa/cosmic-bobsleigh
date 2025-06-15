export interface Experience {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

export interface SubCollection {
    id: string;
    title: string;
    description: string;
    experiences: Experience[];
}

export interface Collection {
    id: string;
    title: string;
    description: string;
    experiences?: Experience[];
    subCollections?: SubCollection[];
} 