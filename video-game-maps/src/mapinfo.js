const mapData = [
    {
        id: 'cap-kingdom', 
        fullName: 'Cap Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is a gloomy, monochromatic kingdom filled with thick fog inhabited by hat-like beings called Bonneters, including Cappy and his sister, Tiara. The resident Bonneters excel at ship-building and can even attach sails to their homes to convert them into airships. This kingdom also serves as the tutorial stage of the game, and is the greater location of Bonneton.",
        image: "/assets/map-pictures/cap-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-yellow.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-yellow.png'], ['Purple Coins','purple-coins','/assets/purple-coins/cascade-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'],['Moon Rock', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ["Moon Rock Moons", "moon-rock-moon", "/assets/power-moons/power-moon-gray.png"]],
        mapImage: '/assets/maps/cap-map.png'
    },
    {
        id: 'cascade-kingdom', 
        fullName: 'Cascade Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Fossil Falls, which is a prehistoric dinosaur-themed area. The main landmark of this kingdom is the waterfall flowing down from the skeleton of a Triceratops, while its background appears to be inspired from the real-life Iguazu Falls located between Argentina and Brazil.",
        image: "/assets/map-pictures/cascade-kingdom.jpg",
        buttons: [
            ['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-yellow.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-yellow.png'], ['Purple Coins','purple-coins','/assets/purple-coins/cascade-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'],['Moon Rock', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ["Moon Rock Moons", "moon-rock-moon", "/assets/power-moons/power-moon-gray.png"]],
        mapImage: '/assets/maps/cascade-map.png'
    },
    {
        id: 'sand-kingdom', 
        fullName: 'Sand Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Tostarena, which is a desert village featuring a small town and a large ruins area. This kingdom's main landmark is the Inverted Pyramid, which is an upside-down pyramid located in the north-east section of the area. When Mario first visits here, the kingdom is covered with large pillars of ice and Bowser is found atop the Inverted Pyramid. The player's first objective in this kingdom is to reach the highest tower. From there, the player must find Moon Shards in the Moe-Eye habitat.",
        image: "/assets/map-pictures/sand-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-green.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-green.png'], ['Purple Coins','purple-coins','/assets/purple-coins/sand-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rock', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ["Moon Rock Moons", "moon-rock-moon", "/assets/power-moons/power-moon-gray.png"]],
        mapImage: '/assets/maps/sand-map.png'
    },
    {
        id: 'lake-kingdom', 
        fullName: 'Lake Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Lake Lamode, a large lake area with an underwater plaza area. This kingdom is renowned for its fashion designers and clothes, including the prized Lochlady Dress. When Mario first visits here, the Broodals can be found at the Water Plaza in the process of stealing the Lochlady Dress. Mario encounters the Broodals at the Water Plaza Terrace, where he must defeat Rango, which will reward the player with a Multi Moon. Collecting the Multi Moon restores the Water Plaza to its former glory, allowing access to more Power Moons",
        image: "/assets/map-pictures/lake-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-pink.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-pink.png'], ['Purple Coins','purple-coins','/assets/purple-coins/lake-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rock', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ["Moon Rock Moons", "moon-rock-moon", "/assets/power-moons/power-moon-gray.png"]],
        mapImage: '/assets/maps/lake-map.png'
    },
    {
        id: 'wooded-kingdom', 
        fullName: 'Wooded Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Lake Lamode, a large lake area with an underwater plaza area. This kingdom is renowned for its fashion designers and clothes, including the prized Lochlady Dress. When Mario first visits here, the Broodals can be found at the Water Plaza in the process of stealing the Lochlady Dress. Mario encounters the Broodals at the Water Plaza Terrace, where he must defeat Rango, which will reward the player with a Multi Moon. Collecting the Multi Moon restores the Water Plaza to its former glory, allowing access to more Power Moons",
        image: "/assets/map-pictures/wooded-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-blue.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-blue.png'], ['Purple Coins','purple-coins','/assets/purple-coins/wooded-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rock', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ["Moon Rock Moons", "moon-rock-moon", "/assets/power-moons/power-moon-gray.png"]],
        mapImage: '/assets/maps/wooded-map.png'
    },
    {
        id: 'deep-woods', 
        fullName: 'Deep Woods', 
        game: "Super Mario Odyssey",
        desc: "a mysterious area located within the Wooded Kingdom of Super Mario Odyssey. If Mario falls off the edge of the Iron Road, he will plummet to this area. The greatest hazard he will encounter in the area is a T-Rex. The only possible escape from the area (without saving and quitting) is to plant a seed granted to Mario by a Steam Gardener into one of four pots in the area and climb a beanstalk back to the kingdom's mainland. There are nine Power Moons to collect in the area in total, and nine regional coins as well",
        image: "/assets/map-pictures/deep-woods.png",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-blue.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-blue.png'], ['Purple Coins','purple-coins','/assets/purple-coins/wooded-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rock', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ["Moon Rock Moons", "moon-rock-moon", "/assets/power-moons/power-moon-gray.png"]],
        mapImage: '/assets/maps/deep-map.png'
    },
    {
        id: 'metro-kingdom', 
        fullName: 'Metro Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Lake Lamode, a large lake area with an underwater plaza area. This kingdom is renowned for its fashion designers and clothes, including the prized Lochlady Dress. When Mario first visits here, the Broodals can be found at the Water Plaza in the process of stealing the Lochlady Dress. Mario encounters the Broodals at the Water Plaza Terrace, where he must defeat Rango, which will reward the player with a Multi Moon. Collecting the Multi Moon restores the Water Plaza to its former glory, allowing access to more Power Moons",
        image: "/assets/map-pictures/metro-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-brown.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-brown.png'], ['Purple Coins','purple-coins','/assets/purple-coins/metro-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rock', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ["Moon Rock Moons", "moon-rock-moon", "/assets/power-moons/power-moon-gray.png"]],
        mapImage: '/assets/maps/metro-map.png'
    },
    {
        "id": "cloud-kingdom",
        "fullName": "Cloud Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "It is a mysterious realm made up entirely of clouds, and is the greater location of Nimbus Arena. During the events of the story, while en route to the Metro Kingdom, Mario and Cappy hear a strange laugh outside their ship, which causes them to investigate. They discover that Bowser is also en route to the Metro Kingdom, and thus encounter him whilst in the sky",
        "image": "/assets/map-pictures/cloud-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-yellow.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/cloud-map.png"
    },
    {
        "id": "lost-kingdom",
        "fullName": "Lost Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "After defeating Bowser in the Cloud Kingdom, he orders his airship to shoot cannonballs at Mario. Mario gets hit by one of these, causing both him and the Odyssey to crash-land in this kingdom. The Odyssey becomes damaged, forcing Mario and Cappy to explore the island and collect at least 10 Power Moons. They can use these Power Moons to repair the Odyssey and continue their journey to the next kingdom. Once Mario collects enough Power Moons, he can access the next kingdom - either the Seaside Kingdom (if the player has not visited it yet) or the Luncheon Kingdom (if both the Seaside and Snow Kingdoms have been visited). The Snow Kingdom is also full of freezing water, and while Mario can swim in it, he will lose health if he stays in it for too long.",
        "image": "/assets/map-pictures/lost-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-yellow.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/lost-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/lost-map.png"
    },
    {
        "id": "snow-kingdom",
        "fullName": "Snow Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "When Mario first visits this kingdom, there is a blizzard occurring outside the town area, and the entrance to the Bound Bowl Grand Prix race area is blocked off by four barriers. Mario must help the Shiverians open the entrance to the race area by collecting the four Power Moons located in the rooms around the race area's entrance. Once Mario collects all four of these Power Moons, the race area opens up, allowing Mario and the Shiverians to enter.",
        "image": "/assets/map-pictures/snow-kingdom.png",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-orange.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-orange.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/snow-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/snow-map.png"
    },
    {
        "id": "shiveria",
        "fullName": "Shiveria",
        "game": "Super Mario Odyssey",
        "desc": "Shiveria Town is a location in the Snow Kingdom in Super Mario Odyssey. To enter Shiveria Town, Mario must locate the chute in the middle of the outside of Shiveria, Above the Ice Well. He may need to clear away some of the snow hiding the top of the chute to find it. Mario can then drop down to find himself in a much warmer setting inhabited by Shiverians. In the middle of Shiveria Town is a Crazy Cap shop run by Shiverians. Just outside of the shop is a Shiverian who awards Mario with a Power Moon if he speaks to him while wearing boxers. Talkatoo is near here. On the south end of Shiveria Town are stacked boxes with a Power Moon above them. Next to the boxes is a Warp Pipe that takes Mario back to the outside world. A piece of Hint Art can be found in the corner, hinting at the location of a Power Moon in the Lost Kingdom. On the north end of Shiveria Town is the chute leading to the Snowline Circuit, which is initially blocked off by several barricades. Mario must head to the four surrounding areas (namely Wind-Chill Cavern, Hollow Crevasse, Icicle Cavern and Snowy Mountain) and acquire a specific Power Moons in each section to open up the chute. ",
        "image": "/assets/map-pictures/shiveria.png",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-orange.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-orange.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/snow-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/snow-map.png"
    },
    {
        "id": "seaside-kingdom",
        "fullName": "Seaside Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "The Seaside Kingdom is a beach kingdom that appears in Super Mario Odyssey, being either the ninth or tenth kingdom visited, depending on whether the player chooses to go here or to the Snow Kingdom after leaving the Metro Kingdom. It is the greater location of Bubblaine, a cliffside beach resort area. As evidenced by the local inhabitants being beret-clad snails, the boss having a French name, and two of the missions having a French title, the location is inspired by France, most likely the Côte d'Azur, also known as the French Riviera. When Mario first arrives, Mollusque-Lanceur is sitting on top of the Glass Tower drinking all of the Sparkle Water, and the fountains are corked. To restore peace to the kingdom, Mario must uncork the fountains and defeat Mollusque-Lanceur.",
        "image": "/assets/map-pictures/seaside-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-purple.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-purple.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/seaside-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/seaside-map.png"
    },
    {
        "id": "luncheon-kingdom",
        "fullName": "Luncheon Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "a combination of lava/volcano and food themes. It is the greater location of Mount Volbono, the volcano, and is inhabited by Volbonans. It is visited after both the Snow and Seaside Kingdoms have been visited. When Mario and Cappy first visit this kingdom, Bowser and the Broodals have stolen the Stupendous Stew as food for the wedding reception, and Spewart must be fought; after his defeat, Mario and Cappy must make their way to the remaining Stupendous Stew atop the volcano to pursue Cookatiel. However, they are blown off after the volcano erupts. Therefore, they must reach the pot a different way. After defeating Cookatiel, Mario and Cappy attempt to visit Bowser's Kingdom, but their journey is interrupted by Bowser and the Ruined Dragon, sending them crash-landing into the Ruined Kingdom.",
        "image": "/assets/map-pictures/luncheon-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-cyan.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-cyan.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/luncheon-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/luncheon-map.png"
    },
    {
        "id": "ruined-kingdom",
        "fullName": "Ruined Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "During the events of the game, Mario and Cappy crash land the Odyssey in this location after Bowser and the Ruined Dragon attack them. The crash leaves the Odyssey damaged, requiring three Power Moons to restore back to working condition. Mario fights and defeats the Ruined Dragon in this kingdom, enabling him to use the Odyssey again to leave and continue his journey to Bowser's Kingdom.",
        "image": "/assets/map-pictures/ruined-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-yellow.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-yellow.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/ruined-map.png"
    },
    {
        "id": "bowser-kingdom",
        "fullName": "Bowser's Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "It is the home of Bowser and the greater location of Bowser's Castle. Unlike most games, which feature a Western-European design for his castle, Bowser has constructed a new castle for his wedding with Princess Peach,[1]:263 resulting in a lush, flowering traditional Japanese castle, with a concentric series of walls and baileys, a traditional garden and tea house, and a central keep. Instead of the usual lava, its moats are filled with poison.",
        "image": "/assets/map-pictures/bowser-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-red.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-red.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/bowser-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/bowser-map.png"
    },
    {
        "id": "moon-kingdom",
        "fullName": "Moon Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "It is the greater location of Honeylune Ridge, and the fourteenth and final story kingdom accessed in the game. As its name suggests, it is located on the Moon; because of this, the gravity in the kingdom outdoors is much lighter than in previous kingdoms, enabling Mario to jump higher and farther and remain in the air for a longer period of time. Honeylune Ridge (a portmanteau of \"honeymoon\" and \"lune\") is the place set to hold Bowser and Princess Peach's wedding, therefore being Mario and Cappy's final destination in the main game.",
        "image": "/assets/map-pictures/moon-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-yellow.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/moon-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
            [
                "Moon Rock Moons",
                "moon-rock-moon",
                "/assets/power-moons/power-moon-gray.png"
            ]
        ],
        "mapImage": "/assets/maps/moon-map.png"
    },
    {
        "id": "mushroom-kingdom",
        "fullName": "Mushroom Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "The Mushroom Kingdom is the fifteenth kingdom visited in Super Mario Odyssey. It is the greater location of Peach's Castle, which is based on its design from Super Mario 64, sharing a similar layout (including the castle grounds, first floor interior, and courtyard), with the music of the interior being rearranged as well. The kingdom itself contains multiple references to Super Mario 64, with many of them taking the form of Power Moon requirements. The Mushroom Kingdom can be first seen by traveling through a painting in the Luncheon Kingdom, which leads to Yoshi's House on a floating platform away from the main area. The rest of the area cannot be explored until after rescuing Princess Peach from Bowser in the Moon Kingdom, after which the Odyssey can fly to the kingdom. Power Moons have a much different appearance in this kingdom, resembling Power Stars. However, when they are loaded into the Odyssey, they appear as Power Moons.",
        "image": "/assets/map-pictures/mushroom-kingdom.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-star.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-yellow.png"
            ],
            [
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/mushroom-coin.svg"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
[
    "Moon Rock Moons",
    "moon-rock-moon",
    "/assets/power-moons/power-moon-gray.png"
]
        ],
        "mapImage": "/assets/maps/mushroom-map.png"
    },
    {
        "id": "dark-side",
        "fullName": "Dark Side",
        "game": "Super Mario Odyssey",
        "desc": "The Dark Side of the Moon is a secret kingdom in Super Mario Odyssey, and is the greater location of Rabbit Ridge. It is served as the sixteenth kingdom overall in the game. It is reachable once the main game is completed and 250 Power Moons have been obtained. Rabbit Ridge is the home of the Broodals, and is ruled over by Madame Broode. Due to her love of vegetables, many statues of vegetables can be found scattered around the kingdom, primarily turnips. The largest one, however, is a carrot building named Rabbit Ridge Tower.",
        "image": "/assets/map-pictures/dark-side.png",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Power Moons",
                "power-moon",
                "/assets/power-moons/power-moon-yellow.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
[
    "Moon Rock Moons",
    "moon-rock-moon",
    "/assets/power-moons/power-moon-gray.png"
]
        ],
        "mapImage": "/assets/maps/dark-map.png"
    },
    {
        "id": "darker-side",
        "fullName": "Darker Side",
        "game": "Super Mario Odyssey",
        "desc": "The Darker Side of the Moon is a secret kingdom in Super Mario Odyssey, and is the greater location of Culmina Crater. This is also served as the seventeenth and final kingdom overall in the game. It is accessible once the main game is completed and 500 Power Moons have been obtained. In a similar vein to Grandmaster Galaxy from Super Mario Galaxy 2, Special 8-Crown from Super Mario 3D Land, Champion's Road from Super Mario 3D World, and The Final-Final Test Badge Marathon in Super Mario Bros. Wonder, being the final level, this kingdom is the biggest challenge found in the game, with the only Power Moon being found at the end of a gauntlet of challenges based off ones previously found within the game. Completing this challenge rewards Mario with the Invisibility Hat, a hat similar to the Vanish Cap, and connects the Odyssey's route from Darker Side to the Mushroom Kingdom, forming a complete loop on the map. The name \"Culmina\" appears to stem from the word \"culminate\".",
        "image": "/assets/map-pictures/darker-side.jpg",
        "buttons": [
            [
                "Checkpoints",
                "checkpoint",
                "/assets/checkpoint.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Multi-Moons",
                "multimoons",
                "/assets/multimoons/multimoon-yellow.png"
            ],
            [
                "Moon Rock",
                "moon-rock",
                "/assets/moon-rock.png"
            ],
            [
                "Hint Art",
                "hint-art",
                "/assets/hint-art.png"
            ],
            [
                "Painting",
                "painting",
                "/assets/painting.png"
            ],
            [
                "Crazy Cap",
                "crazy-cap",
                "/assets/crazy-cap.png"
            ],
[
    "Moon Rock Moons",
    "moon-rock-moon",
    "/assets/power-moons/power-moon-gray.png"
]
        ],
        "mapImage": "/assets/maps/darker-map.png"
    }
];

export default mapData

