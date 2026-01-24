import type { Collection } from '../../types';

export const countries: Collection = {
    id: 'countries',
    title: 'Countries',
    description: 'Our international adventures',
    experiences: [
        {
            id: 'spain',
            title: 'Spain',
            description: 'We were gonna take this trip 6 months earlier, but I lost my passport 😂 While in Sevilla, we got to witness Semana Santa processions from a balcony! In Granada, we visited the Alhambra and our AirBnB was a cave!',
            imageUrl: '/countries/spain.jpg',
            date: 'April 13, 2022'
        },
        {
            id: 'canada',
            title: 'Canada',
            description: 'This was our first trip to Canada to celebrate our 2nd wedding anniversary. Originally we decided on Victoria, BC, because of a gift card we accidentally bought to one of their coffee shops. And yes, we DID get a drink there (and some merch). We also saw the beautiful Butchart Gardens!',
            imageUrl: '/countries/canada.jpg',
            date: 'October 28, 2023'
        },
        {
            id: 'mexico',
            title: 'Mexico',
            description: 'This was our first time in Mexico. We went bungee jumping and snorkeling, and we saw the famous arch!',
            imageUrl: '/countries/mexico.png',
            date: 'April 5, 2024'
        }
    ]
};
