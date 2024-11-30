import type { Collection } from '../types';

export const collections: Collection[] = [
    {
        id: 'lighthouses',
        title: 'Door County Lighthouses',
        description: 'Our journey to see every lighthouse in Door County',
        experiences: [
            {
                id: 'cana-island',
                title: 'Cana Island Lighthouse',
                description: 'Historic lighthouse built in 1869, located on Lake Michigan',
                imageUrl: '/images/cana-island.jpg',
                date: '2023-06-15'
            },
            // Add more lighthouses...
        ]
    },
    {
        id: 'darden-restaurants',
        title: 'Darden Restaurant Tour',
        description: 'Our quest to dine at every Darden restaurant',
        experiences: [
            {
                id: 'olive-garden',
                title: 'Olive Garden',
                description: 'First stop on our Darden restaurants tour',
                imageUrl: '/images/olive-garden.jpg',
                date: '2023-07-01'
            },
            // Add more restaurants...
        ]
    }
]; 