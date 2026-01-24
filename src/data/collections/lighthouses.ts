import type { Collection } from '../../types';

export const lighthouses: Collection = {
    id: 'lighthouses',
    title: 'Lighthouses',
    description: 'Our journey to see every lighthouse in Wisconsin and beyond',
    subCollections: [
        // Wisconsin Lighthouses
        {
            id: 'wisconsin',
            title: 'Wisconsin Lighthouses',
            description: 'Lighthouses we\'ve visited across Wisconsin',
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
                    title: 'Wind Point Light',
                    description: 'We stopped by these lighthouses when we were shopping at the outlet mall in Kenosha! It was super hot that day.',
                    imageUrl: '/lighthouses/other/wind_point.jpg',
                    date: 'August 9, 2020'
                },
                {
                    id: 'asylum-point',
                    title: 'Asylum Point Lighthouse',
                    description: 'We were in Oshkosh to try a local chocolate shop and decided to swing by a lighthouse too!',
                    imageUrl: '/lighthouses/other/asylum_point.jpeg',
                    date: 'March 2, 2024'
                },
                {
                    id: 'sturgeon-bay-canal-north-pierhead',
                    title: 'Sturgeon Bay Canal North Pierhead Light',
                    description: 'The 2nd lighthouse we saw after moving to Sturgeon Bay',
                    imageUrl: '/lighthouses/door-county/sturgen_bay_ship_canal.png',
                    date: 'July 4, 2024'
                },
                {
                    id: 'sturgeon-bay-canal',
                    title: 'Sturgeon Bay Canal Light',
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
                    id: 'plum-island-rear-range-light',
                    title: 'Plum Island Rear Range Light',
                    description: 'Our first sighting was on the ferry ride to Washington Island; this photo is from the day we saw the Pilot Island lighthouse!',
                    imageUrl: '/lighthouses/door-county/plum_island_rear_range.jpeg',
                    date: 'October 5, 2024'
                },
                {
                    id: 'kimberly-point',
                    title: 'Kimberly Point Lighthouse',
                    description: "We found out the daughter of Kimberly-Clark's cofounder gave this lighthouse to the city of Neenah in 1945!",
                    imageUrl: '/lighthouses/other/kimberly_point.png',
                    date: 'October 25, 2024'
                },
                {
                    id: 'sheboygan-breakwater',
                    title: 'Sheboygan Breakwater Lighthouse',
                    description: "It was freezing and windy, but we got as close as we could! Definitely returning in the summer to get up close and personal.",
                    imageUrl: '/lighthouses/other/sheboygan_breakwater.jpg',
                    date: 'January 18, 2025'
                },
                {
                    id: 'manitowoc-breakwater-light',
                    title: 'Manitowoc Breakwater Light',
                    description: "We were on the way back from our trip to the Green House in Sheboygan and decided to stop by this lighthouse! We plan to visit again when it's warmer to get closer.",
                    imageUrl: '/lighthouses/other/manitowoc_north_breakwater.jpg',
                    date: 'January 18, 2025'
                },
                {
                    id: 'algoma-pierhead',
                    title: 'Algoma Pierhead Lighthouse',
                    description: 'I saw this one on my first drive to Algoma. When I told Sam about it, we went together to a local café there on a weekend and took this photo afterward!',
                    imageUrl: '/lighthouses/other/algoma_pierhead.jpg',
                    date: 'April 19, 2025'
                },
                {
                    id: 'sherwood-point',
                    title: 'Sherwood Point Lighthouse',
                    description: 'The last Door County lighthouse to be automated, and the only one made with red bricks! We didn\'t end up going inside because they took forever to get the key 🫠',
                    imageUrl: '/lighthouses/door-county/sherwood_point.png',
                    date: 'June 7, 2025'
                },
                {
                    id: 'raspberry-island-light',
                    title: 'Raspberry Island Light',
                    description: 'This was part of the Apostle Islands tour! The lighthouse that stands today is a much larger building than the one that came before it. It was rebuilt to accommodate the families living there.',
                    imageUrl: '/lighthouses/other/raspberry_island.jpg',
                    date: 'July 12, 2025'
                },
                {
                    id: 'devils-island-light',
                    title: 'Devils Island Light',
                    description: "This one was also part of the Apostle Islands tour! Devil's Island is the northernmost point of Wisconsin, so this lighthouse was also the northernmost lighthouse in Wisconsin!",
                    imageUrl: '/lighthouses/other/devils_island.jpg',
                    date: 'July 12, 2025'
                },
                {
                    id: 'pilot-island',
                    title: 'Pilot Island Lighthouse',
                    description: 'We took a boat out to Plum Island so we could finally glimpse Pilot Island! And the Plum Island lighthouse up close, of course 😏',
                    imageUrl: '/lighthouses/door-county/pilot_island.jpeg',
                    date: 'August 2, 2025'
                },
                {
                    id: 'plum-island-front-range-light',
                    title: 'Plum Island Front Range Light',
                    description: "We got to see this up close when we took a walking tour of Plum Island! Up close, it's easy to see that this range light is a lot farther away from the lighthouse than it looked when we first saw it from the deck of the Washington Island ferry.",
                    imageUrl: '/lighthouses/door-county/plum_island_front_range.jpg',
                    date: 'August 2, 2025'
                },
                {
                    id: 'old-plum-island',
                    title: '**BONUS** Old Plum Island Lighthouse Ruins',
                    description: 'We had no idea the current Plum Island lighthouse was actually a "remake"! The old one was built in the wrong spot and with cheap materials.',
                    imageUrl: '/lighthouses/door-county/old_plum_island.jpeg',
                    date: 'August 2, 2025'
                },
                {
                    id: 'pottawatomie',
                    title: 'Pottawatomie Lighthouse',
                    description: "This one was probably our hardest-won lighthouse passport stamp yet! We hiked 1.25 miles uphill from the dock after driving 1 hour and taking 2 ferries! Once we reached it, we got a tour of the lighthouse and even got to be right up next to the fresnel lens! Nearby, we visited the grave of the lighthouse's 1st keeper (it's also the 1st lighthouse on Lake Michigan!). One more fun fact is that the lighthouse tower is the highest point in Door County. It's also close enough to connect to a cell tower in Michigan, so our phones changed to Eastern Time a few times.",
                    imageUrl: '/lighthouses/door-county/pottawatomie.jpeg',
                    date: 'September 7, 2025'
                },
                {
                    id: 'kewaunee-pierhead-light',
                    title: 'Kewaunee Pierhead Light',
                    description: 'We got to go inside the lighthouse and view the fresnel lens up close! There was a video presentation detailing the history of the lighthouse, and we learned that the fresnel lens was replaced by an LED in 2019 and the fresnel lens was moved to a display case in town at the Kewaunee Historical Society! So we went there to see it afterward and ended up perusing a ton of old newspapers from the 1900s.',
                    imageUrl: '/lighthouses/other/kewaunee_pierhead.jpg',
                    date: 'October 4, 2025'
                },
                {
                    id: 'grassy-island-range-lights',
                    title: 'Grassy Island Range Lights',
                    description: 'The staff here were so friendly! They gave a presentation on the history of the range lights, and a good summary is that the lights have survived in spite of many challenges! They were almost demolished several times, and they exist today because of the community members who fought for them to stay. We got to go inside both of the range lights while we were there. There is not much room but we managed to climb the stairs!',
                    imageUrl: '/lighthouses/other/grassy_island_range.png',
                    date: 'October 4, 2025'
                },
                {
                    id: 'chambers-island',
                    title: 'Chambers Island Lighthouse',
                    description: '',
                    imageUrl: '',
                    date: ''
                },
                { id: 'ashland-harbor-breakwater', title: 'Ashland Harbor Breakwater Light', description: '', imageUrl: '', date: '' },
                { id: 'calumet-light', title: 'Calumet Light', description: '', imageUrl: '', date: '' },
                { id: 'chequamegon-point-light', title: 'Chequamegon Point Light', description: '', imageUrl: '', date: '' },
                { id: 'dunlap-reef-range-lights', title: 'Dunlap Reef Range Lights', description: '', imageUrl: '', date: '' },
                { id: 'fond-du-lac-light', title: 'Fond du Lac Light', description: '', imageUrl: '', date: '' },
                { id: 'green-bay-harbor-entrance', title: 'Green Bay Harbor Entrance Light', description: '', imageUrl: '', date: '' },
                { id: 'green-island-light', title: 'Green Island Light', description: '', imageUrl: '', date: '' },
                { id: 'gull-island-light', title: 'Gull Island Light', description: '', imageUrl: '', date: '' },
                { id: 'kenosha-light', title: 'Kenosha Light', description: '', imageUrl: '', date: '' },
                { id: 'kevich-light', title: 'Kevich Light', description: '', imageUrl: '', date: '' },
                { id: 'la-pointe-light', title: 'La Pointe Light', description: '', imageUrl: '', date: '' },
                { id: 'long-tail-point-light-1', title: 'Long Tail Point Light (First)', description: '', imageUrl: '', date: '' },
                { id: 'long-tail-point-light-2', title: 'Long Tail Point Light (Second)', description: '', imageUrl: '', date: '' },
                { id: 'long-tail-point-light-3', title: 'Long Tail Point Light (Third)', description: '', imageUrl: '', date: '' },
                { id: 'michigan-island-light-new', title: 'Michigan Island Light (New)', description: '', imageUrl: '', date: '' },
                { id: 'michigan-island-light-old', title: 'Michigan Island Light (Old)', description: '', imageUrl: '', date: '' },
                { id: 'milwaukee-breakwater-light', title: 'Milwaukee Breakwater Light', description: '', imageUrl: '', date: '' },
                { id: 'milwaukee-pierhead-light', title: 'Milwaukee Pierhead Light', description: '', imageUrl: '', date: '' },
                { id: 'north-point-light', title: 'North Point Light', description: '', imageUrl: '', date: '' },
                { id: 'outer-island-light', title: 'Outer Island Light', description: '', imageUrl: '', date: '' },
                { id: 'peshtigo-reef-light', title: 'Peshtigo Reef Light', description: '', imageUrl: '', date: '' },
                { id: 'port-washington-light', title: 'Port Washington Light', description: '', imageUrl: '', date: '' },
                { id: 'port-washington-breakwater-light', title: 'Port Washington Breakwater Light', description: '', imageUrl: '', date: '' },
                { id: 'racine-harbor-light', title: 'Racine Harbor Light', description: '', imageUrl: '', date: '' },
                { id: 'racine-north-breakwater-light', title: 'Racine North Breakwater Light', description: '', imageUrl: '', date: '' },
                { id: 'racine-reef-light', title: 'Racine Reef Light', description: '', imageUrl: '', date: '' },
                { id: 'rawley-point-light', title: 'Rawley Point Light', description: '', imageUrl: '', date: '' },
                { id: 'rockwell-light', title: "Rockwell Light (Bray's Point)", description: '', imageUrl: '', date: '' },
                { id: 'sand-island-light', title: 'Sand Island Light', description: '', imageUrl: '', date: '' },
                { id: 'superior-entry-breakwater-light', title: 'Superior Entry Breakwater Light', description: '', imageUrl: '', date: '' },
                { id: 'two-rivers-light', title: 'Two Rivers Light', description: '', imageUrl: '', date: '' },
            ]
        },
        // Other Lighthouses
        {
            id: 'other-lighthouses',
            title: 'Other Lighthouses',
            description: 'Lighthouses we\'ve visited beyond Door County',
            experiences: [
                
                {
                    id: 'race-rocks-light',
                    title: 'Race Rocks Light',
                    description: 'We saw this on a harbor cruise in Victoria, British Columbia, on our 2nd wedding anniversary! So many seals!',
                    imageUrl: '/lighthouses/other/race_rocks.jpg',
                    date: 'October 30, 2023'
                },
                {
                    id: 'winter-island',
                    title: 'Winter Island Lighthouse',
                    description: 'Surprise lighthouse visit on our trolley tour around Salem, Massachusetts',
                    imageUrl: '/lighthouses/other/winter_island.png',
                    date: 'September 20, 2024'
                },
                {
                    id: 'lobster-point',
                    title: 'Lobster Point Lighthouse',
                    description: 'The tiniest little lighthouse in Ogunquit, at the end of a half-mile footpath overlooking the Atlantic Ocean. Barely made it with my knee flaring up.',
                    imageUrl: '/lighthouses/other/lobster_point.png',
                    date: 'September 22, 2024'
                },
                
            ]
        }
    ]
};
