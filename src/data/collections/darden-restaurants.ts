import type { Collection } from '../../types';

export const dardenRestaurants: Collection = {
    id: 'darden-restaurants',
    title: 'Darden Restaurants',
    description: 'Our quest to dine at every Darden restaurant',
    experiences: [
        {
            id: 'cheddars',
            title: 'Cheddar\'s Scratch Kitchen',
            description: 'Lunch date when we saw the Kenosha North Pier Lighthouse',
            imageUrl: '/darden/cheddars.png',
            date: 'May 26, 2019'
        },
        {
            id: 'bahama-breeze',
            title: 'Bahama Breeze',
            description: 'Lunch date during our visit to Tampa',
            imageUrl: '/darden/bahama_breeze.png',
            date: 'October 3, 2019'
        },
        {
            id: 'yard-house',
            title: 'Yard House',
            description: 'Dinner in Seattle on our honeymoon ❤️',
            imageUrl: '/darden/yard_house.png',
            date: 'November 4, 2021'
        },
        {
            id: 'capital-grille',
            title: 'The Capital Grille',
            description: 'Valentine\'s Day dinner ❤️',
            imageUrl: '/darden/capital_grille.png',
            date: 'February 14, 2023'
        },
        {
            id: 'eddie-v',
            title: 'Eddie V\'s Prime Seafood',
            description: 'Birthday dinner ❤️ Right before she got a Cameo from Hidetoshi Imura ("Hide" from The Office)',
            imageUrl: '/darden/eddie_v.png',
            date: 'April 4, 2023'
        },
        {
            id: 'longhorn-steakhouse',
            title: 'LongHorn Steakhouse',
            description: 'Dinner before we saw Wicked in 3D at the Marcus in Ashwaubenon',
            imageUrl: '/darden/longhorn_steakhouse.png',
            date: 'November 30, 2024'
        },
        {
            id: 'olive-garden',
            title: 'Olive Garden',
            description: 'We\'d gone here so many times but somehow had zero photos to prove it, so we stopped by the nearest Olive Garden to make it official 😂',
            imageUrl: '/darden/olive_garden.jpeg',
            date: 'December 7, 2024'
        },
        {
            id: 'seasons-52',
            title: 'Seasons 52',
            description: 'Our last one! We drove 3 1/2 hours to eat there! Their name is because of their seasonal menu.',
            imageUrl: '/darden/seasons_52.jpg',
            date: 'December 27, 2024'
        }
    ]
};
