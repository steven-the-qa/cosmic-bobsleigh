import type { Collection, Experience } from '../../types';
import { wisconsinStateParks } from './wisconsin-state-parks';

function requireWiPark(id: string): Experience {
    for (const sub of wisconsinStateParks.subCollections ?? []) {
        const experience = sub.experiences.find(e => e.id === id);
        if (experience) return experience;
    }
    throw new Error(`Missing Wisconsin State Parks experience "${id}"`);
}

export const iceAgeNationalScientificReserve: Collection = {
    id: 'ice-age-national-scientific-reserve',
    title: 'Ice Age National Scientific Reserve',
    description: 'Our quest to visit every unit of Wisconsin\'s Ice Age National Scientific Reserve',
    experiences: [
        // Dual-listed with Wisconsin State Parks / Recreation Areas
        requireWiPark('interstate'),
        requireWiPark('chippewa-moraine'),
        requireWiPark('mill-bluff'),
        requireWiPark('devils-lake'),
        requireWiPark('cross-plains'),
        // Reserve-only units
        {
            id: 'horicon',
            title: 'Horicon State Wildlife Area and National Wildlife Refuge',
            description: '',
            imageUrl: '',
            date: ''
        },
        {
            id: 'campbellsport-drumlins',
            title: 'Campbellsport Drumlins',
            description: '',
            imageUrl: '',
            date: ''
        },
        {
            id: 'kettle-moraine-northern-unit',
            title: 'Kettle Moraine State Forest - Northern Unit',
            description: '',
            imageUrl: '',
            date: ''
        },
        {
            id: 'two-creeks-buried-forest',
            title: 'Two Creeks Buried Forest',
            description: '',
            imageUrl: '',
            date: ''
        },
    ]
};
