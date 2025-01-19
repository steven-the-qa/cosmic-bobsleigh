import type { Collection } from '../types';

export type CollectionId = 'darden' | 'lighthouses' | 'wisconsin-state-parks';

export const collections: Collection[] = [
    {
        id: 'lighthouses',
        title: 'Lighthouses',
        description: 'Our journey to see every lighthouse in Door County and beyond',
        experiences: [
            {
                id: 'kenosha-north-pier',
                title: 'Kenosha North Pier Lighthouse',
                description: 'The first lighthouse we ever saw together ❤️',
                imageUrl: '/lighthouses/kenosha_north_pier.png',
                date: 'May 26, 2019'
            },
            {
                id: 'asylum-point',
                title: 'Asylum Point Lighthouse',
                description: 'We were in Oshkosh to try a local chocolate shop and decided to swing by a lighthouse too!',
                imageUrl: '/lighthouses/asylum_point.jpeg',
                date: 'March 2, 2023'
            },
            {
                id: 'sturgeon-bay-ship-canal',
                title: 'Sturgeon Bay Ship Canal Lighthouse',
                description: 'The 2nd lighthouse we saw after moving to Sturgeon Bay',
                imageUrl: '/lighthouses/sturgen_bay_ship_canal.png',
                date: 'July 4, 2024'
            },
            {
                id: 'sturgeon-bay-coast-guard-station',
                title: 'Sturgeon Bay Coast Guard Station',
                description: 'The 1st lighthouse we saw after moving to Sturgeon Bay',
                imageUrl: '/lighthouses/sturgeon_bay_coast_guard_station.png',
                date: 'July 4, 2024'
            },
            {
                id: 'eagle-bluff',
                title: 'Eagle Bluff Lighthouse',
                description: 'A must-see while we were at Peninsula State Park',
                imageUrl: '/lighthouses/eagle_bluff.png',
                date: 'July 14, 2024'
            },
            {
                id: 'baileys-harbor-range-1',
                title: 'Baileys Harbor Range Light 1',
                description: 'The first of the 2 range lights, near the entrance to the Ridges Sanctuary. It\'s so tiny!',
                imageUrl: '/lighthouses/baileys_harbor_range_1.png',
                date: 'August 31, 2024'
            },
            {
                id: 'baileys-harbor-range-2',
                title: 'Baileys Harbor Range Light 2',
                description: 'This one is much bigger! It\'s the house where the lighthouse keeper lived. We got to view the other range light using an old telescope in the attic.',
                imageUrl: '/lighthouses/baileys_harbor_range_2.png',
                date: 'August 31, 2024'
            },
            {
                id: 'cana-island',
                title: 'Cana Island Lighthouse',
                description: 'We climbed the stairs to the top of this one! Such a beautiful view ❤️',
                imageUrl: '/lighthouses/cana_island.png',
                date: 'August 31, 2024'
            },
            {
                id: 'birdcage',
                title: 'Birdcage Lighthouse',
                description: 'Only accessible by boat, but we got to see it on a Bailey\'s Harbor cruise 🛥️',
                imageUrl: '/lighthouses/birdcage.png',
                date: 'September 8, 2024'
            },
            {
                id: 'lobster-point',
                title: 'Lobster Point Lighthouse',
                description: 'The tiniest little lighthouse in Ogunquit, at the end of a half-mile footpath overlooking the Atlantic Ocean. Barely made it with my knee flaring up.',
                imageUrl: '/lighthouses/lobster_point.png',
                date: 'September 22, 2024'
            },
            {
                id: 'winter-island',
                title: 'Winter Island Lighthouse',
                description: 'Surprise lighthouse visit on our trolley tour around Salem, Massachusetts',
                imageUrl: '/lighthouses/winter_island.png',
                date: 'September 22, 2024'
            },
            {
                id: 'plum-island',
                title: 'Plum Island Lighthouse',
                description: 'Spotted on the ferry ride to Washington Island',
                imageUrl: '/lighthouses/plum_island.png',
                date: 'October 5, 2024'
            },
            {
                id: 'kimberly-point',
                title: 'Kimberly Point Lighthouse',
                description: 'We found out the daughter of Kimberly-Clark\'s cofounder gave this lighthouse to the city of Neenah in 1945!',
                imageUrl: '/lighthouses/kimberly_point.png',
                date: 'October 25, 2024'
            },
            {
                id: 'sheboygan-breakwater',
                title: 'Sheboygan Breakwater Lighthouse',
                description: 'It was freezing and windy, but we got as close as we could! Definitely returning in the summer to get up close and personal.',
                imageUrl: '/lighthouses/sheboygan_breakwater.jpg',
                date: 'January 18, 2025'
            },
            {
                id: 'manitowoc-north-breakwater',
                title: 'Manitowoc North Breakwater Lighthouse',
                description: 'We were on the way back from our trip to the Green House in Sheboygan and decided to stop by this lighthouse! We plan to visit again when it\'s warmer to get closer.',
                imageUrl: '/lighthouses/manitowoc_north_breakwater.jpg',
                date: 'January 18, 2025'
            }
        ]
    },
    {
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
    },
    {
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
    },
    {
        id: 'wisconsin-state-parks',
        title: 'Wisconsin State Parks',
        description: 'Our mission to visit every state park in Wisconsin together',
        experiences: [
            {
                    id: "governor-dodge",
                    title: "Governor Dodge State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/governor_dodge.png",
                    date: "June 3, 2018"
            },
            {
                    id: "devils-lake",
                    title: "Devils Lake State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/devils_lake.png",
                    date: "April 2, 2020"
            },
            {
                    id: "whitefish-dunes",
                    title: "Whitefish Dunes State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/whitefish_dunes.png",
                    date: "October 7, 2020"
            },
            {
                    id: "newport-beach",
                    title: "Newport Beach State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/newport_beach.png",
                    date: "September 25, 2021"
            },
            {
                    id: "mirror-lake",
                    title: "Mirror Lake State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/mirror_lake.png",
                    date: "July 7, 2022"
            },
            {
                    id: "kohler-andre",
                    title: "Kohler Andre State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/kohler_andre.png",
                    date: "June 18, 2023"
            },
            {
                    id: "wyalusing",
                    title: "Wyalusing State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/wyalusing.png",
                    date: "May 1, 2024"
            },
            {
                    id: "blue-mound",
                    title: "Blue Mound State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/blue_mound.png",
                    date: "May 27, 2024"
            },
            {
                    id: "peninsula",
                    title: "Peninsula State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/peninsula.png",
                    date: "July 14, 2024"
            },
            {
                    id: "potawatomi",
                    title: "Potawatomi State Park",
                    description: "",
                    imageUrl: "/wisconsin-state-parks/potawatomi.png",
                    date: "August 18, 2024"
            }
        ]
    }
]; 