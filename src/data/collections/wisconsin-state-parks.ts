import type { Collection } from '../../types';

export const wisconsinStateParks: Collection = {
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
};
