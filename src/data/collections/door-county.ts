import type { Collection } from '../../types';
import { wisconsinStateParks } from './wisconsin-state-parks';
import { lighthouses } from './lighthouses';
import { doorCountyParks } from './door-county-parks';
import { doorCountyLibraries } from './door-county-libraries';
import { doorCountyLandTrustNaturePreserves } from './door-county-land-trust-nature-preserves';

function requireSubCollection(collection: Collection, id: string) {
    const sub = collection.subCollections?.find(sc => sc.id === id);
    if (!sub) throw new Error(`Missing subcollection "${id}" in ${collection.id}`);
    return sub;
}

const doorCountyStateParks = requireSubCollection(wisconsinStateParks, 'door-county');
const wisconsinLighthouses = requireSubCollection(lighthouses, 'wisconsin');

/** Door County lights live in the Wisconsin lighthouses list — keep this in sync when adding new ones. */
const doorCountyLighthouseIds = new Set([
    'sturgeon-bay-canal-north-pierhead',
    'sturgeon-bay-canal',
    'eagle-bluff',
    'baileys-harbor-range-1',
    'baileys-harbor-range-2',
    'cana-island',
    'birdcage',
    'plum-island-rear-range-light',
    'sherwood-point',
    'plum-island-front-range-light',
    'pilot-island',
    'old-plum-island',
    'pottawatomie',
    'chambers-island',
]);

export const doorCounty: Collection = {
    id: 'door-county',
    title: 'Door County',
    description: 'All our Door County adventures in one place',
    subCollections: [
        {
            id: 'door-county-state-parks',
            title: doorCountyStateParks.title,
            description: doorCountyStateParks.description,
            experiences: doorCountyStateParks.experiences,
        },
        {
            id: 'door-county-lighthouses',
            title: 'Door County Lighthouses',
            description: 'All the lighthouses in Door County',
            experiences: wisconsinLighthouses.experiences.filter(e =>
                doorCountyLighthouseIds.has(e.id)
            ),
        },
        {
            id: 'door-county-parks',
            title: doorCountyParks.title,
            description: 'County parks across Door County',
            experiences: doorCountyParks.experiences ?? [],
        },
        {
            id: 'door-county-libraries',
            title: doorCountyLibraries.title,
            description: 'Libraries across Door County',
            experiences: doorCountyLibraries.experiences ?? [],
        },
        {
            id: 'door-county-land-trust-nature-preserves',
            title: doorCountyLandTrustNaturePreserves.title,
            description: 'Nature preserves protected by the Door County Land Trust',
            experiences: doorCountyLandTrustNaturePreserves.experiences ?? [],
        },
    ],
};
