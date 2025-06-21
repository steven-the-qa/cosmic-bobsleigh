import type { Collection } from '../types';

export type CollectionId = 'darden' | 'lighthouses' | 'wisconsin-state-parks' | 'door-county-parks' | 'starbucks-reserve-roasteries' | 'states' | 'provinces' | 'countries';

export const collections: Collection[] = [
    // Door County Parks
    {
        id: 'door-county-parks',
        title: 'Door County Parks',
        description: 'Our adventures exploring the beautiful parks of Door County',
        experiences: [
            {
                id: 'cave-point',
                title: 'Cave Point',
                description: 'We got married here on October 31, 2021! Our first visit was a litle over a year prior and we totally fell in love with the place. It continues to be our favorite park in Door County.',
                imageUrl: '/door-county-parks/cave_point.jpg',
                date: 'October 7, 2020'
            },
            {
                id: 'cana-island-lighthouse',
                title: 'Cana Island Lighthouse',
                description: 'We climbed the stairs to the top of this one! Such a beautiful view ❤️',
                imageUrl: '/door-county-parks/cana_island_lighthouse.png',
                date: 'August 31, 2024'
            },
            {
                id: 'ellison-bluff',
                title: 'Ellison Bluff',
                description: 'This one actually has a fenced-in walkway that let us get a better view of the forest below! The heights kinda freaked me out, though.',
                imageUrl: '/door-county-parks/ellison_bluff.jpg',
                date: 'May 31, 2025'
            },
            {
                id: 'door-bluff-headlands',
                title: 'Door Bluff Headlands',
                description: 'This place got W I L D lol. We descended the steep hill off the trail to get to the rocky beach below. Had to go super slow to avoid tumbling down.',
                imageUrl: '',
                date: 'May 31, 2025'
            },
            {
                id: 'robert-lasalle',
                title: 'Robert LaSalle',
                description: 'We watched seagulls on the beach and found a small ravine at the end of a trail on the upper half of the park. We had to climb like 20 stairs to get up there, though.',
                imageUrl: '',
                date: 'June 8, 2025'
            },
            {
                id: 'frank-e-murphy',
                title: 'Frank E. Murphy',
                description: 'This is where we learned from a plaque that George K. Pinney used to be the Door County Parks Director! .',
                imageUrl: '/door-county-parks/frank_e_murphy.jpg',
                date: 'June 14, 2025'
            },
            {
                id: 'george-k-pinney',
                title: 'George K. Pinney',
                description: 'This one used to be an old quarry. We could see Sherwood Point Lighthouse from here!',
                imageUrl: '/door-county-parks/george_k_pinney.jpg',
                date: 'June 1, 2025'
            },
            {
                id: 'ahnapee-state-trail',
                title: 'Ahnapee State Trail',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'baileys-harbor-ridges',
                title: 'Baileys Harbor Ridges',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'chaudoirs-dock',
                title: 'Chaudoir\'s Dock',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'forestville-dam',
                title: 'Forestville Dam',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'john-miles',
                title: 'John Miles',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'lily-bay',
                title: 'Lily Bay',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'lyle-harter-matter-sanctuary',
                title: 'Lyle-Harter-Matter Sanctuary',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'meridian',
                title: 'Meridian',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'percy-johnson-memorial',
                title: 'Percy Johnson Memorial',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'plum-bottom',
                title: 'Plum Bottom',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'robert-m-carmody',
                title: 'Robert M. Carmody',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'sugar-creek',
                title: 'Sugar Creek',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'tornado-memorial',
                title: 'Tornado Memorial',
                description: '',
                imageUrl: '',
                date: ''
            }
        ]
    },
    // Lighthouses
    {
        id: 'lighthouses',
        title: 'Lighthouses',
        description: 'Our journey to see every lighthouse in Door County and beyond',
        subCollections: [
            // Door County Lighthouses
            {
                id: 'door-county',
                title: 'Door County Lighthouses',
                description: 'The historic lighthouses of Door County, Wisconsin',
                experiences: [
                    {
                        id: 'sturgeon-bay-ship-canal',
                        title: 'Sturgeon Bay Ship Canal Lighthouse',
                        description: 'The 2nd lighthouse we saw after moving to Sturgeon Bay',
                        imageUrl: '/lighthouses/door-county/sturgen_bay_ship_canal.png',
                        date: 'July 4, 2024'
                    },
                    {
                        id: 'sturgeon-bay-coast-guard-station',
                        title: 'Sturgeon Bay Coast Guard Station',
                        description: 'The 1st lighthouse we saw after moving to Sturgeon Bay',
                        imageUrl: '/lighthouses/door-county/sturgeon_bay_coast_guard_station.png',
                        date: 'July 4, 2024'
                    },
                    {
                        id: 'eagle-bluff',
                        title: 'Eagle Bluff Lighthouse',
                        description: 'A must-see while we were at Peninsula State Park',
                        imageUrl: '/lighthouses/door-county/eagle_bluff.png',
                        date: 'July 14, 2024'
                    },
                    {
                        id: 'baileys-harbor-range-1',
                        title: 'Baileys Harbor Range Light 1',
                        description: 'The first of the 2 range lights, near the entrance to the Ridges Sanctuary. It\'s so tiny!',
                        imageUrl: '/lighthouses/door-county/baileys_harbor_range_1.png',
                        date: 'August 31, 2024'
                    },
                    {
                        id: 'baileys-harbor-range-2',
                        title: 'Baileys Harbor Range Light 2',
                        description: 'This one is much bigger! It\'s the house where the lighthouse keeper lived. We got to view the other range light using an old telescope in the attic.',
                        imageUrl: '/lighthouses/door-county/baileys_harbor_range_2.png',
                        date: 'August 31, 2024'
                    },
                    {
                        id: 'cana-island',
                        title: 'Cana Island Lighthouse',
                        description: 'We climbed the stairs to the top of this one! Such a beautiful view ❤️',
                        imageUrl: '/lighthouses/door-county/cana_island.png',
                        date: 'August 31, 2024'
                    },
                    {
                        id: 'birdcage',
                        title: 'Old Baileys Harbor Lighthouse (Bird Cage)',
                        description: 'Only accessible by boat, but we got to see it on a Bailey\'s Harbor cruise 🛥️',
                        imageUrl: '/lighthouses/door-county/birdcage.png',
                        date: 'September 8, 2024'
                    },
                    {
                        id: 'plum-island',
                        title: 'Plum Island Lighthouse',
                        description: 'Spotted on the ferry ride to Washington Island',
                        imageUrl: '/lighthouses/door-county/plum_island.png',
                        date: 'October 5, 2024'
                    },
                    {
                        id: 'sherwood-point',
                        title: 'Sherwood Point Lighthouse',
                        description: 'The last Door County lighthouse to be automated, and the only one made with red bricks! We didn\'t end up going inside because they took forever to get the key 🫠',
                        imageUrl: '/lighthouses/door-county/sherwood_point.png',
                        date: 'June 7, 2025'
                    },
                    {
                        id: 'chambers-island',
                        title: 'Chambers Island Lighthouse',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'pilot-island',
                        title: 'Pilot Island Lighthouse',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'pottawatomie',
                        title: 'Pottawatomie Lighthouse',
                        description: '',
                        imageUrl: '',
                        date: ''
                    }
                ]
            },
            // Other Lighthouses
            {
                id: 'other-lighthouses',
                title: 'Other Lighthouses',
                description: 'Lighthouses we\'ve visited beyond Door County',
                experiences: [
                    {
                        id: 'kenosha-north-pier',
                        title: 'Kenosha North Pier Lighthouse',
                        description: 'The first lighthouse we ever saw together ❤️',
                        imageUrl: '/lighthouses/other/kenosha_north_pier.png',
                        date: 'May 26, 2019'
                    },
                    {
                        id: 'wind-point',
                        title: 'Wind Point Lighthouse',
                        description: 'We stopped by these lighthouses when we were shopping at the outlet mall in Kenosha! It was super hot that day.',
                        imageUrl: '/lighthouses/other/wind_point.jpg',
                        date: 'August 9, 2020'
                    },
                    {
                        id: 'asylum-point',
                        title: 'Asylum Point Lighthouse',
                        description: 'We were in Oshkosh to try a local chocolate shop and decided to swing by a lighthouse too!',
                        imageUrl: '/lighthouses/other/asylum_point.jpeg',
                        date: 'March 2, 2023'
                    },
                    {
                        id: 'race-rocks-light',
                        title: 'Race Rocks Light',
                        description: 'We saw this on a harbor cruise in Victoria, British Columbia, on our 2nd wedding anniversary! So many seals!',
                        imageUrl: '/lighthouses/other/race_rocks.jpg',
                        date: 'October 30, 2023'
                    },
                    {
                        id: 'lobster-point',
                        title: 'Lobster Point Lighthouse',
                        description: 'The tiniest little lighthouse in Ogunquit, at the end of a half-mile footpath overlooking the Atlantic Ocean. Barely made it with my knee flaring up.',
                        imageUrl: '/lighthouses/other/lobster_point.png',
                        date: 'September 22, 2024'
                    },
                    {
                        id: 'winter-island',
                        title: 'Winter Island Lighthouse',
                        description: 'Surprise lighthouse visit on our trolley tour around Salem, Massachusetts',
                        imageUrl: '/lighthouses/other/winter_island.png',
                        date: 'September 22, 2024'
                    },
                    {
                        id: 'kimberly-point',
                        title: 'Kimberly Point Lighthouse',
                        description: 'We found out the daughter of Kimberly-Clark\'s cofounder gave this lighthouse to the city of Neenah in 1945!',
                        imageUrl: '/lighthouses/other/kimberly_point.png',
                        date: 'October 25, 2024'
                    },
                    {
                        id: 'sheboygan-breakwater',
                        title: 'Sheboygan Breakwater Lighthouse',
                        description: 'It was freezing and windy, but we got as close as we could! Definitely returning in the summer to get up close and personal.',
                        imageUrl: '/lighthouses/other/sheboygan_breakwater.jpg',
                        date: 'January 18, 2025'
                    },
                    {
                        id: 'manitowoc-north-breakwater',
                        title: 'Manitowoc North Breakwater Lighthouse',
                        description: 'We were on the way back from our trip to the Green House in Sheboygan and decided to stop by this lighthouse! We plan to visit again when it\'s warmer to get closer.',
                        imageUrl: '/lighthouses/other/manitowoc_north_breakwater.jpg',
                        date: 'January 18, 2025'
                    },
                    {
                        id: 'algoma-pierhead',
                        title: 'Algoma Pierhead Lighthouse',
                        description: 'I saw this one on my first drive to Algoma. When I told Sam about it, we went together to a local café there on a weekend and took this photo afterward!',
                        imageUrl: '/lighthouses/other/algoma_pierhead.jpg',
                        date: 'April 19, 2025'
                    }
                ]
            }
        ]
    },
    // Darden Restaurants
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
    // Starbucks Reserve Roasteries
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
    // Wisconsin State Parks
    {
        id: 'wisconsin-state-parks',
        title: 'Wisconsin State Parks',
        description: 'Our mission to visit every state park in Wisconsin together',
        experiences: [
            {
                id: "governor-dodge",
                title: "Governor Dodge State Park",
                description: "The first waterfall we ever saw together was here!",
                imageUrl: "/wisconsin-state-parks/governor_dodge.png",
                date: "June 3, 2018"
            },
            {
                id: "devils-lake",
                title: "Devil's Lake State Park",
                description: "One of my favorite state parks because of the parkour events I attended here, but now we have our own memories, some of them traumatic 😂",
                imageUrl: "/wisconsin-state-parks/devils_lake.png",
                date: "April 2, 2020"
            },
            {
                id: "whitefish-dunes",
                title: "Whitefish Dunes State Park",
                description: "We went here during COVID and most of the cool stuff was closed off, and haven't been back since. We're usually at Cave Point next door to it.",
                imageUrl: "/wisconsin-state-parks/whitefish_dunes.png",
                date: "October 7, 2020"
            },
            {
                id: "newport",
                title: "Newport State Park",
                description: "We didn't come back here again til 2025 but by then the branch structure behind us had been removed. We love walking along the shore and the nature trail parallel to it.",
                imageUrl: "/wisconsin-state-parks/newport.png",
                date: "September 25, 2021"
            },
            {
                id: "mirror-lake",
                title: "Mirror Lake State Park",
                description: "We had our first state park picnic here! It was a gorgeous day and we sat up the hill with a nice view of the lake.",
                imageUrl: "/wisconsin-state-parks/mirror_lake.png",
                date: "July 7, 2022"
            },
            {
                id: "kohler-andrae",
                title: "Kohler-Andrae State Park",
                description: "This was the first time we played badminton together! The wind was awful for it, though, and we had more fun looking for cool rocks and shells.",
                imageUrl: "/wisconsin-state-parks/kohler_andre.png",
                date: "June 18, 2023"
            },
            {
                id: "wyalusing",
                title: "Wyalusing State Park",
                description: "This park had a lovely overlook, but we also carefully traversed a trail that led to a hidden waterfall.",
                imageUrl: "/wisconsin-state-parks/wyalusing.png",
                date: "May 1, 2024"
            },
            {
                id: "blue-mound",
                title: "Blue Mound State Park",
                description: "This was where we found out about the lookout towers at Wisconsin state parks. It's not one of the tallest, but it had a beautiful view.",
                imageUrl: "/wisconsin-state-parks/blue_mound.png",
                date: "May 27, 2024"
            },
            {
                id: "peninsula",
                title: "Peninsula State Park",
                description: "We didn't visit this one until after we moved to Door County! There's a lot to see here, including the lighthouse and the lookout tower.",
                imageUrl: "/wisconsin-state-parks/peninsula.png",
                date: "July 14, 2024"
            },
            {
                id: "potawatomi",
                title: "Potawatomi State Park",
                description: "Our favorite part of this park is the lookout tower because it's the tallest one in Wisconsin! It was closed for 7 years for repairs and we couldn't see it the first time we visited. When we moved to Sturgeon Bay in 2025, it finally opened again and we got to climb it!",
                imageUrl: "/wisconsin-state-parks/potawatomi.png",
                date: "August 18, 2024"
            },
            {
                id: "amnicon-falls",
                title: "Amnicon Falls State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "aztalan",
                title: "Aztalan State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "belmont-mound",
                title: "Belmont Mound State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "big-bay",
                title: "Big Bay State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "big-foot-beach",
                title: "Big Foot Beach State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "brunet-island",
                title: "Brunet Island State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "buckhorn",
                title: "Buckhorn State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "copper-culture",
                title: "Copper Culture State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "copper-falls",
                title: "Copper Falls State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "council-grounds",
                title: "Council Grounds State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "governor-nelson",
                title: "Governor Nelson State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "governor-thompson",
                title: "Governor Thompson State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "grand-traverse-island",
                title: "Grand Traverse Island State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "harrington-beach",
                title: "Harrington Beach State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "hartman-creek",
                title: "Hartman Creek State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "high-cliff",
                title: "High Cliff State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "interstate",
                title: "Interstate State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "kinnickinnic",
                title: "Kinnickinnic State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "lake-kegonsa",
                title: "Lake Kegonsa State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "lake-wissota",
                title: "Lake Wissota State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "lakeshore",
                title: "Lakeshore State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "lizard-mound",
                title: "Lizard Mound State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "merrick",
                title: "Merrick State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "mill-bluff",
                title: "Mill Bluff State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "natural-bridge",
                title: "Natural Bridge State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "nelson-dewey",
                title: "Nelson Dewey State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "new-glarus-woods",
                title: "New Glarus Woods State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "pattison",
                title: "Pattison State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "perrot",
                title: "Perrot State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "rib-mountain",
                title: "Rib Mountain State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "roche-a-cri",
                title: "Roche-a-Cri State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "rock-island",
                title: "Rock Island State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "rocky-arbor",
                title: "Rocky Arbor State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "straight-lake",
                title: "Straight Lake State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "tower-hill",
                title: "Tower Hill State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "wildcat-mountain",
                title: "Wildcat Mountain State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "willow-river",
                title: "Willow River State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "yellowstone-lake",
                title: "Yellowstone Lake State Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "heritage-hill",
                title: "Heritage Hill State Historical Park",
                description: "",
                imageUrl: "",
                date: ""
            },
            {
                id: "cross-plains",
                title: "Cross Plains State Park",
                description: "",
                imageUrl: "",
                date: ""
            }
        ]
    },
    // US States
    {
        id: 'states',
        title: 'US States',
        description: 'Our adventures exploring all 50 United States',
        experiences: [
            {
                id: 'alabama',
                title: 'Alabama',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'alaska',
                title: 'Alaska',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'arizona',
                title: 'Arizona',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'arkansas',
                title: 'Arkansas',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'california',
                title: 'California',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'colorado',
                title: 'Colorado',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'connecticut',
                title: 'Connecticut',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'delaware',
                title: 'Delaware',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'florida',
                title: 'Florida',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'georgia',
                title: 'Georgia',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'hawaii',
                title: 'Hawaii',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'idaho',
                title: 'Idaho',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'illinois',
                title: 'Illinois',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'indiana',
                title: 'Indiana',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'iowa',
                title: 'Iowa',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'kansas',
                title: 'Kansas',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'kentucky',
                title: 'Kentucky',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'louisiana',
                title: 'Louisiana',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'maine',
                title: 'Maine',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'maryland',
                title: 'Maryland',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'massachusetts',
                title: 'Massachusetts',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'michigan',
                title: 'Michigan',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'minnesota',
                title: 'Minnesota',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'mississippi',
                title: 'Mississippi',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'missouri',
                title: 'Missouri',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'montana',
                title: 'Montana',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'nebraska',
                title: 'Nebraska',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'nevada',
                title: 'Nevada',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'new-hampshire',
                title: 'New Hampshire',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'new-jersey',
                title: 'New Jersey',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'new-mexico',
                title: 'New Mexico',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'new-york',
                title: 'New York',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'north-carolina',
                title: 'North Carolina',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'north-dakota',
                title: 'North Dakota',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'ohio',
                title: 'Ohio',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'oklahoma',
                title: 'Oklahoma',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'oregon',
                title: 'Oregon',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'pennsylvania',
                title: 'Pennsylvania',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'rhode-island',
                title: 'Rhode Island',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'south-carolina',
                title: 'South Carolina',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'south-dakota',
                title: 'South Dakota',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'tennessee',
                title: 'Tennessee',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'texas',
                title: 'Texas',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'utah',
                title: 'Utah',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'vermont',
                title: 'Vermont',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'virginia',
                title: 'Virginia',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'washington',
                title: 'Washington',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'west-virginia',
                title: 'West Virginia',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'wisconsin',
                title: 'Wisconsin',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'wyoming',
                title: 'Wyoming',
                description: '',
                imageUrl: '',
                date: ''
            }
        ]
    },
    // Canadian Provinces
    {
        id: 'provinces',
        title: 'Canadian Provinces',
        description: 'Our adventures exploring the provinces and territories of Canada',
        experiences: [
            {
                id: 'alberta',
                title: 'Alberta',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'british-columbia',
                title: 'British Columbia',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'manitoba',
                title: 'Manitoba',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'new-brunswick',
                title: 'New Brunswick',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'newfoundland-and-labrador',
                title: 'Newfoundland and Labrador',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'northwest-territories',
                title: 'Northwest Territories',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'nova-scotia',
                title: 'Nova Scotia',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'nunavut',
                title: 'Nunavut',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'ontario',
                title: 'Ontario',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'prince-edward-island',
                title: 'Prince Edward Island',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'quebec',
                title: 'Quebec',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'saskatchewan',
                title: 'Saskatchewan',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'yukon',
                title: 'Yukon',
                description: '',
                imageUrl: '',
                date: ''
            }
        ]
    },
    // Countries
    {
        id: 'countries',
        title: 'Countries',
        description: 'Our international adventures around the world',
        experiences: [
            {
                id: 'spain',
                title: 'Spain',
                description: 'Mostly stayed in Sevilla and Granada, got to witness Semana Santa processions from a balcony! We had as many adventures as misadventures lol',
                imageUrl: '/countries/spain.jpg',
                date: 'April 13, 2022'
            },
            {
                id: 'canada',
                title: 'Canada',
                description: 'We went to Canada for our 2nd wedding anniversary. Originally we decided on Victoria, BC, because of a gift card we accidentally bought to one of their coffee shops. And yes, we DID get a drink there (and some merch).',
                imageUrl: '/countries/canada.jpg',
                date: 'October 28, 2023'
            },
            {
                id: 'mexico',
                title: 'Mexico',
                description: 'This was our birthday trip to Cabo San Lucas, our first time in Mexico. We went bungee jumping and snorkeling, and we saw the famous arch!',
                imageUrl: '/countries/mexico.png',
                date: 'April 5, 2024'
            }
        ]
    }
]; 