import type { Collection } from '../types';

export type CollectionId = 'darden' | 'lighthouses' | 'wisconsin-state-parks' | 'door-county-parks' | 'starbucks-reserve-roasteries' | 'states' | 'provinces' | 'countries' | 'national-parks' | 'door-county';

export const collections: Collection[] = [
    // Door County
    {
        id: 'door-county',
        title: 'Door County',
        description: 'All our Door County adventures in one place',
        subCollections: [
            {
                id: 'door-county-state-parks',
                title: 'Door County State Parks',
                description: 'The 5 state parks in Door County',
                experiences: [
                    // from Wisconsin State Parks → Door County
                    { id: 'whitefish-dunes', title: 'Whitefish Dunes State Park', description: "We went here during COVID and most of the cool stuff was closed off, and haven't been back since. We're usually at Cave Point next door to it.", imageUrl: '/wisconsin-state-parks/whitefish_dunes.png', date: 'October 7, 2020' },
                    { id: 'newport', title: 'Newport State Park', description: "We didn't come back here again til 2025 but by then the branch structure behind us had been removed. We love walking along the shore and the nature trail parallel to it.", imageUrl: '/wisconsin-state-parks/newport.png', date: 'September 25, 2021' },
                    { id: 'peninsula', title: 'Peninsula State Park', description: "We didn't visit this one until after we moved to Door County! There's a lot to see here, including the lighthouse and the lookout tower.", imageUrl: '/wisconsin-state-parks/peninsula.png', date: 'July 14, 2024' },
                    { id: 'potawatomi', title: 'Potawatomi State Park', description: "Our favorite part of this park is the lookout tower because it's the tallest one in Wisconsin! It was closed for 7 years for repairs and we couldn't see it the first time we visited. When we moved to Sturgeon Bay in 2025, it finally opened again and we got to climb it!", imageUrl: '/wisconsin-state-parks/potawatomi.png', date: 'August 18, 2024' },
                    { id: 'rock-island', title: 'Rock Island State Park', description: "The boat ride here was the like the log ride at an amusement park (lots of splashing 🤣 🌊)! We came here to see the Pottawatomie Lighthouse, but we also played checkers in the boathouse/museum, found a geocache on the trails, and spotted tons of monarch butterflies and even a woodpecker!", imageUrl: '/wisconsin-state-parks/rock_island.jpeg', date: 'September 7, 2025' },
                ]
            },
            {
                id: 'door-county-lighthouses',
                title: 'Door County Lighthouses',
                description: 'All the lighthouses in Door County',
                experiences: [
                    // from Lighthouses → Door County
                    {
                        id: 'sturgeon-bay-coast-guard-station',
                        title: 'Sturgeon Bay Coast Guard Station',
                        description: 'The 1st lighthouse we saw after moving to Sturgeon Bay',
                        imageUrl: '/lighthouses/door-county/sturgeon_bay_coast_guard_station.png',
                        date: 'July 4, 2024'
                    },
                    {
                        id: 'sturgeon-bay-ship-canal',
                        title: 'Sturgeon Bay Ship Canal Lighthouse',
                        description: 'The 2nd lighthouse we saw after moving to Sturgeon Bay',
                        imageUrl: '/lighthouses/door-county/sturgen_bay_ship_canal.png',
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
                        description: "The first of the 2 range lights, near the entrance to the Ridges Sanctuary. It's so tiny!",
                        imageUrl: '/lighthouses/door-county/baileys_harbor_range_1.png',
                        date: 'August 31, 2024'
                    },
                    {
                        id: 'baileys-harbor-range-2',
                        title: 'Baileys Harbor Range Light 2',
                        description: "This one is much bigger! It's the house where the lighthouse keeper lived. We got to view the other range light using an old telescope in the attic.",
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
                        description: "Only accessible by boat, but we got to see it on a Bailey's Harbor cruise 🛥️",
                        imageUrl: '/lighthouses/door-county/birdcage.png',
                        date: 'September 8, 2024'
                    },
                    {
                        id: 'plum-island-range-rear-light',
                        title: 'Plum Island Rear Range Light',
                        description: 'Our first sighting was on the ferry ride to Washington Island; this photo is from the day we saw the Pilot Island lighthouse!',
                        imageUrl: '/lighthouses/door-county/plum_island_rear_range.jpeg',
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
                        id: 'plum-island-range-front-light',
                        title: 'Plum Island Front Range Light',
                        description: '',
                        imageUrl: '/lighthouses/door-county/plum_island_front_range.jpg',
                        date: 'August 2, 2025'
                    },
                    {
                        id: 'pilot-island',
                        title: 'Pilot Island Lighthouse',
                        description: 'We took a boat out to Plum Island so we could finally glimpse Pilot Island! And the Plum Island lighthouse up close, of course 😏',
                        imageUrl: '/lighthouses/door-county/pilot_island.jpeg',
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
                        id: 'chambers-island',
                        title: 'Chambers Island Lighthouse',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                ]
            },
            {
                id: 'door-county-parks',
                title: 'Door County Parks',
                description: 'County parks across Door County',
                experiences: [
                    // from Door County Parks collection
                    { id: 'cave-point', title: 'Cave Point', description: 'We got married here on October 31, 2021! Our first visit was a litle over a year prior and we totally fell in love with the place. It continues to be our favorite park in Door County.', imageUrl: '/door-county-parks/cave_point.jpg', date: 'October 7, 2020' },
                    { id: 'cana-island-lighthouse', title: 'Cana Island Lighthouse', description: 'We climbed the stairs to the top of this one! Such a beautiful view ❤️', imageUrl: '/door-county-parks/cana_island_lighthouse.png', date: 'August 31, 2024' },
                    { id: 'ellison-bluff', title: 'Ellison Bluff', description: 'This one actually has a fenced-in walkway that let us get a better view of the forest below! The heights kinda freaked me out, though.', imageUrl: '/door-county-parks/ellison_bluff.jpg', date: 'May 31, 2025' },
                    { id: 'door-bluff-headlands', title: 'Door Bluff Headlands', description: 'This place got W I L D lol. We descended the steep hill off the trail to get to the rocky beach below. Had to go super slow to avoid tumbling down.', imageUrl: '/door-county-parks/door_bluff_headlands.jpg', date: 'May 31, 2025' },
                    { id: 'george-k-pinney', title: 'George K. Pinney', description: 'This one used to be an old quarry. We could see Sherwood Point Lighthouse from here!', imageUrl: '/door-county-parks/george_k_pinney.jpg', date: 'June 1, 2025' },
                    { id: 'robert-lasalle', title: 'Robert LaSalle', description: 'We watched seagulls on the beach and found a small ravine at the end of a trail on the upper half of the park. We had to climb like 20 stairs to get up there, though.', imageUrl: '/door-county-parks/robert_lasalle.jpg', date: 'June 8, 2025' },
                    { id: 'frank-e-murphy', title: 'Frank E. Murphy', description: 'This is where we learned from a plaque that George K. Pinney used to be the Door County Parks Director!', imageUrl: '/door-county-parks/frank_e_murphy.jpg', date: 'June 14, 2025' },
                    { id: 'robert-m-carmody', title: 'Robert M. Carmody', description: 'This park is basically a big boat launch! Lots of jet skis and pontoon boats were out on the water in Little Sturgeon Bay when we stopped by.', imageUrl: '/door-county-parks/robert_m_carmody.png', date: 'July 5, 2025' },
                    { id: 'tornado-memorial', title: 'Tornado Memorial', description: 'We learned that this park has a tragic history! A fire tornado decimated a small town named Williamsonville in 1871, leaving few survivors. The park sits on the land that used to be Williamsonville.', imageUrl: '/door-county-parks/tornado_memorial.png', date: 'July 5, 2025' },
                    { id: 'sugar-creek', title: 'Sugar Creek', description: "This park has a beach that's not easy to spot from the parking lot. We found lots of shiny seashells and an amazing view of the peninsula coast!", imageUrl: '/door-county-parks/sugar_creek.png', date: 'July 5, 2025' },
                    { id: 'chaudoirs-dock', title: "Chaudoir's Dock", description: 'This county park has a local bar up the hill from the boat launch -- and yeah, this park is a boat launch. We shared some onion rings and ate burgers before taking this photo!', imageUrl: '/door-county-parks/chaudoirs_dock.png', date: 'July 5, 2025' },
                    { id: 'forestville-dam', title: 'Forestville Dam', description: "This was a nice fishing spot with a playground and trail access to Ahnapee State Trail. The view of the dam was pretty! Too bad the dam walkway is government property or we would've walked on it.", imageUrl: '/door-county-parks/forestville_dam.png', date: 'July 5, 2025' },
                    { id: 'ahnapee-state-trail', title: 'Ahnapee State Trail', description: 'We made sure to get a photo at the trail access point before leaving Forestville Dam County Park. It was a nice way to end the day!', imageUrl: '/door-county-parks/ahnapee_state_trail.png', date: 'July 5, 2025' },
                    { id: 'baileys-harbor-ridges', title: 'Baileys Harbor Ridges', description: "We technically went here when we saw the Range Lights a year ago, but we never went across the street to see the beach or the boardwalk leading to it, so we didn't get the full experience.", imageUrl: '/door-county-parks/baileys_harbor_ridges.jpeg', date: 'July 19, 2025' },
                    { id: 'john-miles', title: 'John Miles', description: "This county park is where the Door County Fair is hosted every year. This year was our first visit! We saw lots of cute animals: pigs, cows, bunnies, roosters, and even the Clydesdales! Obviously we got some fair food, but I also got some tacos from the Osorio's food truck. Sam got some \"hot butter sweet corn\" (the vendor was announcing it like this lol).", imageUrl: '/door-county-parks/john_miles.jpeg', date: 'August 16, 2025' },
                    { id: 'lily-bay', title: 'Lily Bay', description: "This one had the wrong address on the website, so we had to guess our way to the boat launch 😂 We did find it, though, and there's a whole public beach over there! 🏖️", imageUrl: '/door-county-parks/lily_bay.jpg', date: 'August 30, 2025' },
                    { id: 'plum-bottom', title: 'Plum Bottom', description: "This was where we found our first geocache together! We'd been meaning to try geocaching for years but kept forgetting to go do it. We swapped a fun Wisconsin sticker for a cool owl craft (we named it Owlberta 🦉).", imageUrl: '/door-county-parks/plum_bottom.jpg', date: 'August 30, 2025' },
                    { id: 'meridian', title: 'Meridian', description: "This one was tricky to find because it's adjacent to Lyle-Harter-Matter Sanctuary County Park. It's the part with the visitor sign and the picnic tables.", imageUrl: '/door-county-parks/meridian.jpg', date: 'August 30, 2025' },
                    { id: 'lyle-harter-matter-sanctuary', title: 'Lyle-Harter-Matter Sanctuary', description: "This is the trail leading away from Meridian County Park, but we only found that out after exploring a bit on said trail. The woods here have such beautiful rock formations and it doesn't take more than a few minutes of walking before you stop hearing car traffic ❤️", imageUrl: '/door-county-parks/lyle_harter_matter_sanctuary.jpg', date: 'August 30, 2025' },
                    { id: 'percy-johnson-memorial', title: 'Percy Johnson Memorial', description: 'This one was our last Door County Park! We had the joy of seeing a woolly bear caterpillar on our way back to the car 🐛', imageUrl: '/door-county-parks/percy_johnson.jpeg', date: 'September 7, 2025' },
                ]
            },
            {
                id: 'door-county-libraries',
                title: 'Door County Libraries',
                description: 'Libraries across Door County',
                experiences: [
                    {
                        id: 'sturgeon-bay-library',
                        title: 'Sturgeon Bay Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'baileys-harbor-library',
                        title: 'Baileys Harbor Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'egg-harbor-library',
                        title: 'Egg Harbor Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'ephraim-library',
                        title: 'Ephraim Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'fish-creek-library',
                        title: 'Fish Creek Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'forestville-library',
                        title: 'Forestville Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'sister-bay-liberty-grove-library',
                        title: 'Sister Bay/Liberty Grove Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                    {
                        id: 'washington-island-library',
                        title: 'Washington Island Library',
                        description: '',
                        imageUrl: '',
                        date: ''
                    },
                ]
            },
        ]
    },
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
                imageUrl: '/door-county-parks/door_bluff_headlands.jpg',
                date: 'May 31, 2025'
            },
            {
                id: 'george-k-pinney',
                title: 'George K. Pinney',
                description: 'This one used to be an old quarry. We could see Sherwood Point Lighthouse from here!',
                imageUrl: '/door-county-parks/george_k_pinney.jpg',
                date: 'June 1, 2025'
            },
            {
                id: 'robert-lasalle',
                title: 'Robert LaSalle',
                description: 'We watched seagulls on the beach and found a small ravine at the end of a trail on the upper half of the park. We had to climb like 20 stairs to get up there, though.',
                imageUrl: '/door-county-parks/robert_lasalle.jpg',
                date: 'June 8, 2025'
            },
            {
                id: 'frank-e-murphy',
                title: 'Frank E. Murphy',
                description: 'This is where we learned from a plaque that George K. Pinney used to be the Door County Parks Director!',
                imageUrl: '/door-county-parks/frank_e_murphy.jpg',
                date: 'June 14, 2025'
            },
            {
                id: 'robert-m-carmody',
                title: 'Robert M. Carmody',
                description: 'This park is basically a big boat launch! Lots of jet skis and pontoon boats were out on the water in Little Sturgeon Bay when we stopped by.',
                imageUrl: '/door-county-parks/robert_m_carmody.png',
                date: 'July 5, 2025'
            },
            {
                id: 'tornado-memorial',
                title: 'Tornado Memorial',
                description: 'We learned that this park has a tragic history! A fire tornado decimated a small town named Williamsonville in 1871, leaving few survivors. The park sits on the land that used to be Williamsonville.',
                imageUrl: '/door-county-parks/tornado_memorial.png',
                date: 'July 5, 2025'
            },
            {
                id: 'sugar-creek',
                title: 'Sugar Creek',
                description: 'This park has a beach that\'s not easy to spot from the parking lot. We found lots of shiny seashells and an amazing view of the peninsula coast!',
                imageUrl: '/door-county-parks/sugar_creek.png',
                date: 'July 5, 2025'
            },
            {
                id: 'chaudoirs-dock',
                title: 'Chaudoir\'s Dock',
                description: 'This county park has a local bar up the hill from the boat launch -- and yeah, this park is a boat launch. We shared some onion rings and ate burgers before taking this photo!',
                imageUrl: '/door-county-parks/chaudoirs_dock.png',
                date: 'July 5, 2025'
            },
            {
                id: 'forestville-dam',
                title: 'Forestville Dam',
                description: 'This was a nice fishing spot with a playground and trail access to Ahnapee State Trail. The view of the dam was pretty! Too bad the dam walkway is government property or we would\'ve walked on it.',
                imageUrl: '/door-county-parks/forestville_dam.png',
                date: 'July 5, 2025'
            },
            {
                id: 'ahnapee-state-trail',
                title: 'Ahnapee State Trail',
                description: 'We made sure to get a photo at the trail access point before leaving Forestville Dam County Park. It was a nice way to end the day!',
                imageUrl: '/door-county-parks/ahnapee_state_trail.png',
                date: 'July 5, 2025'
            },
            {
                id: 'baileys-harbor-ridges',
                title: 'Baileys Harbor Ridges',
                description: 'We technically went here when we saw the Range Lights a year ago, but we never went across the street to see the beach or the boardwalk leading to it, so we didn\'t get the full experience.',
                imageUrl: '/door-county-parks/baileys_harbor_ridges.jpeg',
                date: 'July 19, 2025'
            },
            {
                id: 'john-miles',
                title: 'John Miles',
                description: 'This county park is where the Door County Fair is hosted every year. This year was our first visit! We saw lots of cute animals: pigs, cows, bunnies, roosters, and even the Clydesdales! Obviously we got some fair food, but I also got some tacos from the Osorio\'s food truck. Sam got some "hot butter sweet corn" (the vendor was announcing it like this lol).',
                imageUrl: '/door-county-parks/john_miles.jpeg',
                date: 'August 16, 2025'
            },
            {
                id: 'lily-bay',
                title: 'Lily Bay',
                description: "This one had the wrong address on the website, so we had to guess our way to the boat launch 😂 We did find it, though, and there's a whole public beach over there! 🏖️",
                imageUrl: '/door-county-parks/lily_bay.jpg',
                date: 'August 30, 2025'
            },
            {
                id: 'plum-bottom',
                title: 'Plum Bottom',
                description: "This was where we found our first geocache together! We'd been meaning to try geocaching for years but kept forgetting to go do it. We swapped a fun Wisconsin sticker for a cool owl craft (we named it Owlberta 🦉).",
                imageUrl: '/door-county-parks/plum_bottom.jpg',
                date: 'August 30, 2025'
            },
            {
                id: 'meridian',
                title: 'Meridian',
                description: "This one was tricky to find because it's adjacent to Lyle-Harter-Matter Sanctuary County Park. It's the part with the visitor sign and the picnic tables.",
                imageUrl: '/door-county-parks/meridian.jpg',
                date: 'August 30, 2025'
            },
            {
                id: 'lyle-harter-matter-sanctuary',
                title: 'Lyle-Harter-Matter Sanctuary',
                description: "This is the trail leading away from Meridian County Park, but we only found that out after exploring a bit on said trail. The woods here have such beautiful rock formations and it doesn't take more than a few minutes of walking before you stop hearing car traffic ❤️",
                imageUrl: '/door-county-parks/lyle_harter_matter_sanctuary.jpg',
                date: 'August 30, 2025'
            },
            {
                id: 'percy-johnson-memorial',
                title: 'Percy Johnson Memorial',
                description: "This one was our last Door County Park! We had the joy of seeing a woolly bear caterpillar on our way back to the car 🐛",
                imageUrl: '/door-county-parks/percy_johnson.jpeg',
                date: 'September 7, 2025'
            },
        ]
    },
    // Kewaunee County Parks
    {
        id: 'kewaunee-county-parks',
        title: 'Kewaunee County Parks',
        description: 'Our adventures exploring the parks of Kewaunee County',
        experiences: [
            {
                id: 'blahnik-park',
                title: 'Blahnik Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'bruemmer-park-zoo',
                title: 'Bruemmer Park & Zoo',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'bruemmerville-park',
                title: 'Bruemmerville Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'reckelberg-park',
                title: 'Reckelberg Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'red-river-park',
                title: 'Red River Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'riverview-atv-park',
                title: 'Riverview ATV Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'ryan-park',
                title: 'Ryan Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'winter-park',
                title: 'Winter Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'dana-farm',
                title: 'Dana Farm (at Winter Park)',
                description: '',
                imageUrl: '',
                date: ''
            },
        ]
    },
    // Brown County Parks
    {
        id: 'brown-county-parks',
        title: 'Brown County Parks',
        description: 'Our adventures exploring the parks of Brown County',
        experiences: [
            {
                id: 'wequiock-falls',
                title: 'Wequiock Falls',
                description: "We stopped here on the way to see Copper Culture State Park! We drive by this park all the time and never knew it was a few seconds away after turning off the highway. You can't see it from the road, but there's a big staircase that leads down to the falls. There wasn't any water flowing down when we went, but it was still an impressively high rock wall to see from the ground! And there's a tunnel that locals walk through that leads into the woods. Such a strange little place.",
                imageUrl: '/brown-county-parks/wequiock_falls.jpeg',
                date: 'September 13, 2025'
            },
            {
                id: 'barkhausen-waterfowl-preserve',
                title: 'Barkhausen Waterfowl Preserve',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'bay-shore-park',
                title: 'Bay Shore Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'brown-county-fairgrounds',
                title: 'Brown County Fairgrounds',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'brown-county-dog-park',
                title: 'Brown County Dog Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'brown-county-rifle-range',
                title: 'Brown County Rifle Range',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'devils-river-state-recreational-trail',
                title: 'Devils River State Recreational Trail',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'eagles-nest-park-and-boat-launch',
                title: 'Eagles Nest Park and Boat Launch',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'fonfereks-glen',
                title: "Fonferek's Glen",
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'fox-river-state-recreational-trail',
                title: 'Fox River State Recreational Trail',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'lily-lake-park',
                title: 'Lily Lake Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'mountain-bay-state-recreational-trail',
                title: 'Mountain-Bay State Recreational Trail',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'neshota-park',
                title: 'Neshota Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'pamperin-park',
                title: 'Pamperin Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'reforestation-camp',
                title: 'Reforestation Camp',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'st-francis-park',
                title: 'St. Francis Park',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'suamico-boat-landing',
                title: 'Suamico Boat Landing',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'vande-hei-property',
                title: 'Vande Hei Property',
                description: '',
                imageUrl: '',
                date: ''
            },
            {
                id: 'way-morr-park',
                title: 'Way-Morr Park',
                description: '',
                imageUrl: '',
                date: ''
            },
        ]
    },
    // Lighthouses
    {
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
                        date: 'March 2, 2023'
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
                        description: '',
                        imageUrl: '/lighthouses/other/raspberry_island.jpg',
                        date: 'July 12, 2025'
                    },
                    {
                        id: 'devils-island-light',
                        title: 'Devils Island Light',
                        description: '',
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
                        description: '',
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
                    { id: 'grassy-island-range-lights', title: 'Grassy Island Range Lights', description: '', imageUrl: '', date: '' },
                    { id: 'green-bay-harbor-entrance', title: 'Green Bay Harbor Entrance Light', description: '', imageUrl: '', date: '' },
                    { id: 'green-island-light', title: 'Green Island Light', description: '', imageUrl: '', date: '' },
                    { id: 'gull-island-light', title: 'Gull Island Light', description: '', imageUrl: '', date: '' },
                    { id: 'kenosha-light', title: 'Kenosha Light', description: '', imageUrl: '', date: '' },
                    { id: 'kevich-light', title: 'Kevich Light', description: '', imageUrl: '', date: '' },
                    { id: 'kewaunee-pierhead-light', title: 'Kewaunee Pierhead Light', description: '', imageUrl: '', date: '' },
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
        subCollections: [
            // Door County State Parks
            {
                id: 'door-county',
                title: 'Door County State Parks',
                description: 'The 5 state parks in Door County',
                experiences: [
                    {
                        id: "whitefish-dunes",
                        title: "Whitefish Dunes State Park",
                        description: "We went here during COVID and most of the cool stuff was closed off, and haven't been back since. We're usually at Cave Point next door to it.",
                        imageUrl: "/wisconsin-state-parks/whitefish_dunes.png",
                        date: "October 7, 2020",
                        designation: 'park'
                    },
                    {
                        id: "newport",
                        title: "Newport State Park",
                        description: "We didn't come back here again til 2025 but by then the branch structure behind us had been removed. We love walking along the shore and the nature trail parallel to it.",
                        imageUrl: "/wisconsin-state-parks/newport.png",
                        date: "September 25, 2021",
                        designation: 'park'
                    },
                    {
                        id: "peninsula",
                        title: "Peninsula State Park",
                        description: "We didn't visit this one until after we moved to Door County! There's a lot to see here, including the lighthouse and the lookout tower.",
                        imageUrl: "/wisconsin-state-parks/peninsula.png",
                        date: "July 14, 2024",
                        designation: 'park'
                    },
                    {
                        id: "potawatomi",
                        title: "Potawatomi State Park",
                        description: "Our favorite part of this park is the lookout tower because it's the tallest one in Wisconsin! It was closed for 7 years for repairs and we couldn't see it the first time we visited. When we moved to Sturgeon Bay in 2025, it finally opened again and we got to climb it!",
                        imageUrl: "/wisconsin-state-parks/potawatomi.png",
                        date: "August 18, 2024",
                        designation: 'park'
                    },
                    {
                        id: "rock-island",
                        title: "Rock Island State Park",
                        description: "The boat ride here was the like the log ride at an amusement park (lots of splashing 🤣 🌊)! We came here to see the Pottawatomie Lighthouse, but we also played checkers in the boathouse/museum, found a geocache on the trails, and spotted tons of monarch butterflies and even a woodpecker!",
                        imageUrl: "/wisconsin-state-parks/rock_island.jpeg",
                        date: "September 7, 2025",
                        designation: 'park'
                    },
                ]
            },
            // Other Wisconsin State Parks
            {
                id: 'other-wisconsin',
                title: 'Other Wisconsin State Parks',
                description: 'The state parks outside of Door County',
                experiences: [
                    {
                        id: "governor-dodge",
                        title: "Governor Dodge State Park",
                        description: "The first waterfall we ever saw together was here!",
                        imageUrl: "/wisconsin-state-parks/governor_dodge.png",
                        date: "June 3, 2018",
                        designation: 'park'
                    },
                    {
                        id: "devils-lake",
                        title: "Devil's Lake State Park",
                        description: "One of my favorite state parks because of the parkour events I attended here, but now we have our own memories, some of them traumatic 😂",
                        imageUrl: "/wisconsin-state-parks/devils_lake.jpg",
                        date: "April 2, 2020",
                        designation: 'park'
                    },
                    {
                        id: "mirror-lake",
                        title: "Mirror Lake State Park",
                        description: "We had our first state park picnic here! It was a gorgeous day and we sat up the hill with a nice view of the lake.",
                        imageUrl: "/wisconsin-state-parks/mirror_lake.png",
                        date: "July 7, 2022",
                        designation: 'park'
                    },
                    {
                        id: "kohler-andrae",
                        title: "Kohler-Andrae State Park",
                        description: "This was the first time we played badminton together! The wind was awful for it, though, and we had more fun looking for cool rocks and shells.",
                        imageUrl: "/wisconsin-state-parks/kohler_andre.png",
                        date: "June 18, 2023",
                        designation: 'park'
                    },
                    {
                        id: "wyalusing",
                        title: "Wyalusing State Park",
                        description: "This park had a lovely overlook, but we also carefully traversed a trail that led to a hidden waterfall.",
                        imageUrl: "/wisconsin-state-parks/wyalusing.png",
                        date: "May 1, 2024",
                        designation: 'park'
                    },
                    {
                        id: "blue-mound",
                        title: "Blue Mound State Park",
                        description: "This was where we found out about the lookout towers at Wisconsin state parks. It's not one of the tallest, but it had a beautiful view.",
                        imageUrl: "/wisconsin-state-parks/blue_mound.png",
                        date: "May 27, 2024",
                        designation: 'park'
                    },
                    {
                        id: "high-cliff",
                        title: "High Cliff State Park",
                        description: "This is maybe the most underrated Wisconsin state park! They had cute gophers hanging out near the trail, one of the tallest observation towers in the Wisconsin State Park system, a mysterious gulch where you could find the occasional rock climber, and a variety of different ways to experience the park! On a hiking trail we saw a deer a few feet from our faces!",
                        imageUrl: "/wisconsin-state-parks/high_cliff.jpg",
                        date: "May 24, 2025",
                        designation: 'park'
                    },
                    {
                        id: "copper-falls",
                        title: "Copper Falls State Park",
                        description: "These were the most impressive waterfalls we'd seen in the state of Wisconsin! Apparently the bridge connecting both halves of the park got restored after the original was destroyed in a 1946 flood.",
                        imageUrl: "/wisconsin-state-parks/copper_falls.jpeg",
                        date: "July 11, 2025",
                        designation: 'park'
                    },
                    {
                        id: "council-grounds",
                        title: "Council Grounds State Park",
                        description: "They had a dam here! And a tight hiking trail skirting the Wisconsin River riverbank downstream of the dam where we did a little bit of exploring.",
                        imageUrl: "/wisconsin-state-parks/council_grounds.jpg",
                        date: "July 13, 2025",
                        designation: 'park'
                    },
                    {
                        id: "governor-nelson",
                        title: "Governor Nelson State Park",
                        description: "We had a little bit of time before meeting Kate Flannery at the Madison Mallards game, so we checked another state park off the list! This one is mostly a boat launch but there are some trails to explore. Lake Mendota is behind us, and we could see the capital from here!",
                        imageUrl: "/wisconsin-state-parks/governor_nelson.jpeg",
                        date: "July 20, 2025",
                        designation: 'park'
                    },
                    {
                        id: "cross-plains",
                        title: "Cross Plains State Park",
                        description: "Definitely hard to find! We ended up parking at the National Park Service employee lot before a staff member pointed us to the correct parking lot down the road. Even in the rain -- perhaps especially -- the forest on the entry trail has a magical way of making you feel like you're lost in the woods (maybe somewhere in Jurassic Park)!",
                        imageUrl: "/wisconsin-state-parks/cross_plains.jpeg",
                        date: "July 30, 2025",
                        designation: 'park'
                    },
                                {
                        id: "lake-kegonsa",
                        title: "Lake Kegonsa State Park",
                        description: "It was still raining by the time we got here, but there wasn't a whole lot to see, either. We found a cute swing by the water and relaxed on it until we decided we didn't want to get rained on anymore. Next time we'll rent out the horseshoes -- we saw a place to play some if you put down a $5 deposit 🐴 😉",
                        imageUrl: "/wisconsin-state-parks/lake_kegonsa.jpeg",
                        date: "July 30, 2025",
                        designation: 'park'
                    },
                    {
                        id: "rib-mountain",
                        title: "Rib Mountain State Park",
                        description: "This park had the 3rd-highest point in Wisconsin! I climbed the Queen's and King's Chair rock formations, and we both climbed the stairs of the observation tower! What a view! 🔭 Here you can see us posing in front of the #TravelWisconsin sign 😏",
                        imageUrl: "/wisconsin-state-parks/rib_mountain.jpg",
                        date: "August 23, 2025",
                        designation: 'park'
                    },
                    {
                        id: "copper-culture",
                        title: "Copper Culture State Park",
                        description: "Our favorite part of the visit was seeing a bunch of tadpoles and frogs down by the river! We saw a lot of beautiful flora and fauna, and there was a tree with a big sign warning visitors of the resident snake! It's cool that they let it live in the tree.",
                        imageUrl: "/wisconsin-state-parks/copper_culture.jpeg",
                        date: "September 13, 2025",
                        designation: 'park'
                    },
                    {
                        id: "governor-thompson",
                        title: "Governor Thompson State Park",
                        description: "We got to take a pic at the Travel Wisconsin selfie station here! It's a great park for kayaking and barbecues, but we were just here to see the view of the lake. We also got to pet some dogs when we first got there!",
                        imageUrl: "/wisconsin-state-parks/governor_thompson.jpg",
                        date: "September 13, 2025",
                        designation: 'park'
                    },
                    {
                        id: "harrington-beach",
                        title: "Harrington Beach State Park",
                        description: "There was a nice pond on the way to the beach, so we stopped there to walk on the trail around it for a bit. The beachfront trail had a lot of gorgeous trees and chipmunks between us and the sand. The way the trees and beach were positioned felt like a very different side of Wisconsin than we'd seen before!",
                        imageUrl: "/wisconsin-state-parks/harrington_beach.jpg",
                        date: "September 27, 2025",
                        designation: 'park'
                    },
                    {
                        id: "lizard-mound",
                        title: "Lizard Mound State Park",
                        description: "We walked all the prairie trails and saw tons of mounds! More than 10 for sure. It was so peaceful and quiet and the forest trail was our favorite!",
                        imageUrl: "/wisconsin-state-parks/lizard_mound.jpg",
                        date: "September 27, 2025",
                        designation: 'park'
                    },
                    {
                        id: "lost-dauphin",
                        title: "Lost Dauphin State Park",
                        description: "This one used to be a state park! In the 2025 Wisconsin State Park Adventure Journal, it's still included as a state park! We posed on the cool sign they had there, and then hiked up the super steep paved path to the playground where we swung on the swings for a bit. The swings have a wonderful view of the city from the hilltop. Nearby we saw a couple of people filming a video or a news story or something, it was odd haha.",
                        imageUrl: "/wisconsin-state-parks/lost_dauphin.jpg",
                        date: "September 27, 2025",
                        designation: 'park',
                        former: true
                    },
                    {
                        id: "straight-lake",
                        title: "Straight Lake State Park",
                        description: "We stopped by Rainbow Lake first, but then hiked a short ways to where the trail from the parking lot joins with the Ice Age Trail, and then we took that to Straight Lake! We accidentally found a geocache here, and we saw a new kind of woodpecker! There were some stepping stones to cross the water to continue on the Ice Age Trail but we didn't want to risk getting wet when we still had 3 more parks to see that day.",
                        imageUrl: "/wisconsin-state-parks/straight_lake.jpeg",
                        date: "November 1, 2025",
                        designation: 'park'
                    },
                    {
                        id: "interstate",
                        title: "Interstate State Park",
                        description: "We hiked the Potholes Trail! And lo and behold, we saw many potholes (and stood inside some of them). And we saw Minnesota! It was crazy to see people across the river knowing they were in a different state! The views here are breathtaking.",
                        imageUrl: "/wisconsin-state-parks/interstate.jpeg",
                        date: "November 1, 2025",
                        designation: 'park'
                    },
                    {
                        id: "willow-river",
                        title: "Willow River State Park",
                        description: "The descent to Willow Falls was STEEP! And the climb back up was no walk in the park (though technically it was hehe). The falls are so beautiful! And huge! I remember feeling so tiny in their presence. We found a little cave near the falls and could swear we saw like 4 bats in there looking back at us! We could only see their eyes, though, since our phone flashlights only reached so far.",
                        imageUrl: "/wisconsin-state-parks/willow_river.png",
                        date: "November 1, 2025",
                        designation: 'park'
                    },
                    {
                        id: "kinnickinnic",
                        title: "Kinnickinnic State Park",
                        description: "This one had an observation deck with an incredible view of the St. Croix River! Same coast as Interstate State Park, different vantage point. We got an up-close view of the floodplains. By the time we got to this one, we were exhausted! It was the 4th state park we saw that day.",
                        imageUrl: "/wisconsin-state-parks/kinnickinnic.jpg",
                        date: "November 1, 2025",
                        designation: 'park'
                    },
                    {
                        id: "lake-wissota",
                        title: "Lake Wissota State Park",
                        description: "We were here earlier than we usually go to state parks! At 8am, we were the only ones there to enjoy the lake overlook. From the overlook, we could see Pine Harbor Island!",
                        imageUrl: "/wisconsin-state-parks/lake_wissota.jpeg",
                        date: "November 2, 2025",
                        designation: 'park'
                    },
                    {
                        id: "brunet-island",
                        title: "Brunet Island State Park",
                        description: "This was the last park we stopped at on the way back from our 4-year anniversary weekend! We saw 3 deer on the drive out!! There's also a dam nearby, and a lot of cozy picnic areas in the park.",
                        imageUrl: "/wisconsin-state-parks/brunet_island.jpeg",
                        date: "November 2, 2025",
                        designation: 'park'
                    },
                    {
                        id: "amnicon-falls",
                        title: "Amnicon Falls State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "aztalan",
                        title: "Aztalan State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "belmont-mound",
                        title: "Belmont Mound State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "big-bay",
                        title: "Big Bay State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "big-foot-beach",
                        title: "Big Foot Beach State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "buckhorn",
                        title: "Buckhorn State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "hartman-creek",
                        title: "Hartman Creek State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "lakeshore",
                        title: "Lakeshore State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "merrick",
                        title: "Merrick State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "mill-bluff",
                        title: "Mill Bluff State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "natural-bridge",
                        title: "Natural Bridge State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "nelson-dewey",
                        title: "Nelson Dewey State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "new-glarus-woods",
                        title: "New Glarus Woods State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "pattison",
                        title: "Pattison State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "perrot",
                        title: "Perrot State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "roche-a-cri",
                        title: "Roche-a-Cri State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "rocky-arbor",
                        title: "Rocky Arbor State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "tower-hill",
                        title: "Tower Hill State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "wildcat-mountain",
                        title: "Wildcat Mountain State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    {
                        id: "yellowstone-lake",
                        title: "Yellowstone Lake State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    // Historical Parks
                    {
                        id: "heritage-hill",
                        title: "Heritage Hill State Historical Park",
                        description: "We accidentally visited this park during a family-friendly event, so the education center was closed and so were a lot of the historical buildings! We made the best of a weird situation by exploring as much as we could, including an old blacksmith shop and military jail. We also got some tasty birria tacos from a food truck there. We'll likely come back next year during the summer to get the full tour.",
                        imageUrl: "/wisconsin-state-parks/heritage_hill.png",
                        date: "September 20, 2025",
                        designation: 'historical park'
                    },
                    // Recreation Areas
                    {
                        id: "richard-bong",
                        title: "Richard Bong State Recreation Area",
                        description: "We stopped here on the way back from visiting my grandparents in Illinois. It's an old haunt for me since I grew up in Burlington, but I hadn't been here for almost a decade. The best was seeing a monarch butterfly ❤️ 🦋",
                        imageUrl: "/wisconsin-state-parks/richard_bong.jpg",
                        date: "August 9, 2025",
                        designation: 'recreation area'
                    },
                    {
                        id: "capital-springs",
                        title: "Capital Springs State Recreation Area",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'recreation area'
                    },
                    {
                        id: "chippewa-moraine",
                        title: "Chippewa Moraine State Recreation Area",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'recreation area'
                    },
                    {
                        id: "fischer-creek",
                        title: "Fischer Creek State Recreation Area",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'recreation area'
                    },
                    {
                        id: "hoffman-hills",
                        title: "Hoffman Hills State Recreation Area",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'recreation area'
                    },
                    {
                        id: "menominee-river",
                        title: "Menominee River State Park and Recreation Area",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'recreation area'
                    },
                    // Additional park units
                    {
                        id: "campbellsport-drumlins",
                        title: "Campbellsport Drumlins State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park'
                    },
                    // Former parks
                    {
                        id: "old-wade-house",
                        title: "Old Wade House State Park",
                        description: "",
                        imageUrl: "",
                        date: "",
                        designation: 'park',
                        former: true
                    },
                ]
            }
        ]
    },
    // US States
    {
        id: 'us-states',
        title: 'US States',
        description: 'Our adventures exploring all 50 United States',
        experiences: [
            {
                id: 'indiana',
                title: 'Indiana',
                description: 'We went to Indiana for my brother\'s wedding!',
                imageUrl: '/us-states/indiana.jpg',
                date: 'July 27, 2019'
            },
            {
                id: 'tennessee',
                title: 'Tennessee',
                description: 'Stayed overnight in Chattanooga on the way to Florida! Wasn\'t her first Waffle House, but it was mine!',
                imageUrl: '/us-states/tennessee.png',
                date: 'October 1, 2019'
            },
            {
                id: 'georgia',
                title: 'Georgia',
                description: 'Stopped in Georgia for some peach merch on the way to Florida! Still need to go back for a proper visit.',
                imageUrl: '/us-states/georgia.png',
                date: 'October 2, 2019'
            },
            {
                id: 'kentucky',
                title: 'Kentucky',
                description: 'We drove through Kentucky on our way to & from Florida! Still need to go back for a proper visit.',
                imageUrl: '/us-states/kentucky.png',
                date: 'October 6, 2019'
            },
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
        id: 'canadian-provinces',
        title: 'Canadian Provinces',
        description: 'Our adventures exploring the provinces and territories of Canada',
        experiences: [
            {
                id: 'british-columbia',
                title: 'British Columbia',
                description: 'We went to Victoria for our 2nd wedding anniversary. Originally we decided on Victoria, BC, because of a gift card we accidentally bought to one of their coffee shops. And yes, we DID get a drink there (and some merch).',
                imageUrl: '/canadian-provinces/british_columbia.jpg',
                date: 'October 28, 2023'
            },
            {
                id: 'alberta',
                title: 'Alberta',
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
    },
    // National Parks
    {
        id: 'national-parks',
        title: 'National Parks',
        description: 'Our adventures exploring America\'s beautiful national parks',
        experiences: [
            {
                id: 'grand-canyon-national-park',
                title: 'Grand Canyon National Park',
                description: 'This was a double "first" for us: first time at the Grand Canyon and first helicopter ride!',
                imageUrl: '/national-parks/grand_canyon.jpeg',
                date: 'November 10, 2021',
                designation: 'national park'
            },
            {
                id: 'pictured-rocks-national-lakeshore',
                title: 'Pictured Rocks National Lakeshore',
                description: 'Our first trip up to the UP! We got to see Munising Falls along the way ❤️',
                imageUrl: '/national-parks/pictured_rocks_national_lakeshore.jpg',
                date: 'October 19, 2024',
                designation: 'national lakeshore'
            },
            {
                id: 'apostle-islands-national-lakeshore',
                title: 'Apostle Islands National Lakeshore',
                description: 'We got to see Devil\'s Island, the highest point in Wisconsin!',
                imageUrl: '/national-parks/apostle_islands_national_lakeshore.jpg',
                date: 'July 12, 2025',
                designation: 'national lakeshore'
            },
            {
                id: 'sleeping-bear-dunes-national-lakeshore',
                title: 'Sleeping Bear Dunes National Lakeshore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national lakeshore'
            },
            {
                id: 'assateague-island-national-seashore',
                title: 'Assateague Island National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'canaveral-national-seashore',
                title: 'Canaveral National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'cape-cod-national-seashore',
                title: 'Cape Cod National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'cape-hatteras-national-seashore',
                title: 'Cape Hatteras National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'cape-lookout-national-seashore',
                title: 'Cape Lookout National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'cumberland-island-national-seashore',
                title: 'Cumberland Island National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'fire-island-national-seashore',
                title: 'Fire Island National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'gulf-islands-national-seashore',
                title: 'Gulf Islands National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'padre-island-national-seashore',
                title: 'Padre Island National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            {
                id: 'point-reyes-national-seashore',
                title: 'Point Reyes National Seashore',
                description: '',
                imageUrl: '',
                date: '',
                designation: 'national seashore'
            },
            // National Parks (placeholders)
            { id: 'acadia-national-park', title: 'Acadia National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'american-samoa-national-park', title: 'National Park of American Samoa', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'arches-national-park', title: 'Arches National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'badlands-national-park', title: 'Badlands National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'big-bend-national-park', title: 'Big Bend National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'biscayne-national-park', title: 'Biscayne National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'black-canyon-of-the-gunnison-national-park', title: 'Black Canyon of the Gunnison National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'bryce-canyon-national-park', title: 'Bryce Canyon National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'canyonlands-national-park', title: 'Canyonlands National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'capitol-reef-national-park', title: 'Capitol Reef National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'carlsbad-caverns-national-park', title: 'Carlsbad Caverns National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'channel-islands-national-park', title: 'Channel Islands National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'congaree-national-park', title: 'Congaree National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'crater-lake-national-park', title: 'Crater Lake National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'cuyahoga-valley-national-park', title: 'Cuyahoga Valley National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'death-valley-national-park', title: 'Death Valley National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'denali-national-park', title: 'Denali National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'dry-tortugas-national-park', title: 'Dry Tortugas National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'everglades-national-park', title: 'Everglades National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'gates-of-the-arctic-national-park', title: 'Gates of the Arctic National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'gateway-arch-national-park', title: 'Gateway Arch National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'glacier-national-park', title: 'Glacier National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'glacier-bay-national-park', title: 'Glacier Bay National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'grand-teton-national-park', title: 'Grand Teton National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'great-basin-national-park', title: 'Great Basin National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'great-sand-dunes-national-park', title: 'Great Sand Dunes National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'great-smoky-mountains-national-park', title: 'Great Smoky Mountains National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'guadalupe-mountains-national-park', title: 'Guadalupe Mountains National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'haleakala-national-park', title: 'Haleakala National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'hawaii-volcanoes-national-park', title: 'HawaiBi Volcanoes National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'hot-springs-national-park', title: 'Hot Springs National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'indiana-dunes-national-park', title: 'Indiana Dunes National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'isle-royale-national-park', title: 'Isle Royale National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'joshua-tree-national-park', title: 'Joshua Tree National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'katmai-national-park', title: 'Katmai National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'kenai-fjords-national-park', title: 'Kenai Fjords National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'kings-canyon-national-park', title: 'Kings Canyon National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'kobuk-valley-national-park', title: 'Kobuk Valley National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'lake-clark-national-park', title: 'Lake Clark National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'lassen-volcanic-national-park', title: 'Lassen Volcanic National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'mammoth-cave-national-park', title: 'Mammoth Cave National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'mesa-verde-national-park', title: 'Mesa Verde National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'mount-rainier-national-park', title: 'Mount Rainier National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'new-river-gorge-national-park', title: 'New River Gorge National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'north-cascades-national-park', title: 'North Cascades National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'olympic-national-park', title: 'Olympic National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'petrified-forest-national-park', title: 'Petrified Forest National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'pinnacles-national-park', title: 'Pinnacles National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'redwood-national-park', title: 'Redwood National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'rocky-mountain-national-park', title: 'Rocky Mountain National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'saguaro-national-park', title: 'Saguaro National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'sequoia-national-park', title: 'Sequoia National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'shenandoah-national-park', title: 'Shenandoah National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'theodore-roosevelt-national-park', title: 'Theodore Roosevelt National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'virgin-islands-national-park', title: 'Virgin Islands National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'voyageurs-national-park', title: 'Voyageurs National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'white-sands-national-park', title: 'White Sands National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'wind-cave-national-park', title: 'Wind Cave National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'wrangell-st-elias-national-park', title: 'Wrangell–St. Elias National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'yellowstone-national-park', title: 'Yellowstone National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'yosemite-national-park', title: 'Yosemite National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
            { id: 'zion-national-park', title: 'Zion National Park', description: '', imageUrl: '', date: '', designation: 'national park' },
        ]
    }
]; 