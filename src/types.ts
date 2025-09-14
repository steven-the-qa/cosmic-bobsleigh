export interface Experience {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    // Optional metadata
    designation?: string; // e.g., 'national park', 'national lakeshore', 'park', 'recreation area'
    former?: boolean; // mark former units
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

export type CollectionId = 'darden-restaurants' | 'lighthouses' | 'wisconsin-state-parks' | 'door-county-parks' | 'kewaunee-county-parks' | 'brown-county-parks' | 'starbucks-reserve-roasteries' | 'us-states' | 'canadian-provinces' | 'countries' | 'national-parks';