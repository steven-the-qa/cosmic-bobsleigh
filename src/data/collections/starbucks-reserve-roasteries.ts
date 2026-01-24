import type { Collection } from '../../types';

export const starbucksReserveRoasteries: Collection = {
    id: 'starbucks-reserve-roasteries',
    title: 'Starbucks Reserve Roasteries',
    description: 'Our quest to visit all 6 Starbucks Reserve Roasteries',
    experiences: [
        {
            id: 'chicago',
            title: 'Chicago',
            description: 'Our first Starbucks Reserve Roastery visit! This inspired us to try to hit all 6. Definitely the most impressive one in the US.',
            imageUrl: '/starbucks-reserve-roasteries/chicago.jpg',
            date: 'October 1, 2021'
        },
        {
            id: 'seattle',
            title: 'Seattle',
            description: 'This was our first stop after arriving in Seattle for our honeymoon. We rode Lime scooters in the rain to get there!',
            imageUrl: '/starbucks-reserve-roasteries/seattle.jpg',
            date: 'November 4, 2021'
        },
        {
            id: 'new-york-city',
            title: 'New York City',
            description: 'We went to New York City for our birthdays! Obviously had to stop here too.',
            imageUrl: '/starbucks-reserve-roasteries/new_york_city.jpg',
            date: 'April 2, 2022'
        },
        {
            id: 'milan',
            title: 'Milan',
            description: '',
            imageUrl: '',
            date: ''
        },
        {
            id: 'tokyo',
            title: 'Tokyo',
            description: '',
            imageUrl: '',
            date: ''
        },
        {
            id: 'shanghai',
            title: 'Shanghai',
            description: '',
            imageUrl: '',
            date: ''
        }
    ]
};
