import type { Collection } from '../types';
import { doorCounty } from './collections/door-county';
import { doorCountyParks } from './collections/door-county-parks';
import { doorCountyLibraries } from './collections/door-county-libraries';
import { wisconsinBookstores } from './collections/wisconsin-bookstores';
import { kewauneeCountyParks } from './collections/kewaunee-county-parks';
import { brownCountyParks } from './collections/brown-county-parks';
import { lighthouses } from './collections/lighthouses';
import { dardenRestaurants } from './collections/darden-restaurants';
import { starbucksReserveRoasteries } from './collections/starbucks-reserve-roasteries';
import { wisconsinStateParks } from './collections/wisconsin-state-parks';
import { usStates } from './collections/us-states';
import { canadianProvinces } from './collections/canadian-provinces';
import { countries } from './collections/countries';
import { nationalParks } from './collections/national-parks';

export type CollectionId = 
    | 'door-county'
    | 'door-county-parks'
    | 'door-county-libraries'
    | 'wisconsin-bookstores'
    | 'kewaunee-county-parks'
    | 'brown-county-parks'
    | 'lighthouses'
    | 'darden-restaurants'
    | 'starbucks-reserve-roasteries'
    | 'wisconsin-state-parks'
    | 'us-states'
    | 'canadian-provinces'
    | 'countries'
    | 'national-parks';

export const collections: Collection[] = [
    doorCounty,
    doorCountyParks,
    doorCountyLibraries,
    wisconsinBookstores,
    kewauneeCountyParks,
    brownCountyParks,
    lighthouses,
    dardenRestaurants,
    starbucksReserveRoasteries,
    wisconsinStateParks,
    usStates,
    canadianProvinces,
    countries,
    nationalParks,
];
