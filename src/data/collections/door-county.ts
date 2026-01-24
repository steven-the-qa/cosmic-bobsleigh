import type { Collection } from '../../types';

export const doorCounty: Collection = {
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
                    description: "We got to see this up close when we took a walking tour of Plum Island! Up close, it's easy to see that this range light is a lot farther away from the lighthouse than it looked when we first saw it from the deck of the Washington Island ferry.",
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
};
