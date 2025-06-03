const mapData = [
    {
        id: 'cap-kingdom', 
        fullName: 'Cap Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is a gloomy, monochromatic kingdom filled with thick fog inhabited by hat-like beings called Bonneters, including Cappy and his sister, Tiara. The resident Bonneters excel at ship-building and can even attach sails to their homes to convert them into airships. This kingdom also serves as the tutorial stage of the game, and is the greater location of Bonneton.",
        image: "/assets/map-pictures/cap-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-yellow.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-yellow.png'], ['Purple Coins','purple-coins','/assets/purple-coins/cascade-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'],['Moon Rocks', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ['The Odyssey', 'odyssey', '/assets/odyssey.png']],
        mapImage: '/assets/maps/cap-map.png'
    },
    {
        id: 'cascade-kingdom', 
        fullName: 'Cascade Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Fossil Falls, which is a prehistoric dinosaur-themed area. The main landmark of this kingdom is the waterfall flowing down from the skeleton of a Triceratops, while its background appears to be inspired from the real-life Iguazu Falls located between Argentina and Brazil.",
        image: "/assets/map-pictures/cascade-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-yellow.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-yellow.png'], ['Purple Coins','purple-coins','/assets/purple-coins/cascade-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'],['Moon Rocks', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ['The Odyssey', 'odyssey', '/assets/odyssey.png']],
        mapImage: '/assets/maps/cascade-map.png'
    },
    {
        id: 'sand-kingdom', 
        fullName: 'Sand Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Tostarena, which is a desert village featuring a small town and a large ruins area. This kingdom's main landmark is the Inverted Pyramid, which is an upside-down pyramid located in the north-east section of the area. When Mario first visits here, the kingdom is covered with large pillars of ice and Bowser is found atop the Inverted Pyramid. The player's first objective in this kingdom is to reach the highest tower. From there, the player must find Moon Shards in the Moe-Eye habitat.",
        image: "/assets/map-pictures/sand-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-green.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-green.png'], ['Purple Coins','purple-coins','/assets/purple-coins/sand-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rocks', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ['The Odyssey', 'odyssey', '/assets/odyssey.png']],
        mapImage: '/assets/maps/sand-map.png'
    },
    {
        id: 'lake-kingdom', 
        fullName: 'Lake Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Lake Lamode, a large lake area with an underwater plaza area. This kingdom is renowned for its fashion designers and clothes, including the prized Lochlady Dress. When Mario first visits here, the Broodals can be found at the Water Plaza in the process of stealing the Lochlady Dress. Mario encounters the Broodals at the Water Plaza Terrace, where he must defeat Rango, which will reward the player with a Multi Moon. Collecting the Multi Moon restores the Water Plaza to its former glory, allowing access to more Power Moons",
        image: "/assets/map-pictures/lake-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-pink.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-pink.png'], ['Purple Coins','purple-coins','/assets/purple-coins/lake-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rocks', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ['The Odyssey', 'odyssey', '/assets/odyssey.png']],
        mapImage: '/assets/maps/lake-map.png'
    },
    {
        id: 'wooded-kingdom', 
        fullName: 'Wooded Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Lake Lamode, a large lake area with an underwater plaza area. This kingdom is renowned for its fashion designers and clothes, including the prized Lochlady Dress. When Mario first visits here, the Broodals can be found at the Water Plaza in the process of stealing the Lochlady Dress. Mario encounters the Broodals at the Water Plaza Terrace, where he must defeat Rango, which will reward the player with a Multi Moon. Collecting the Multi Moon restores the Water Plaza to its former glory, allowing access to more Power Moons",
        image: "/assets/map-pictures/wooded-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-blue.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-blue.png'], ['Purple Coins','purple-coins','/assets/purple-coins/wooded-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rocks', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ['The Odyssey', 'odyssey', '/assets/odyssey.png']],
        mapImage: '/assets/maps/wooded-map.png'
    },
    {
        id: 'deep-woods', 
        fullName: 'Deep Woods', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Lake Lamode, a large lake area with an underwater plaza area. This kingdom is renowned for its fashion designers and clothes, including the prized Lochlady Dress. When Mario first visits here, the Broodals can be found at the Water Plaza in the process of stealing the Lochlady Dress. Mario encounters the Broodals at the Water Plaza Terrace, where he must defeat Rango, which will reward the player with a Multi Moon. Collecting the Multi Moon restores the Water Plaza to its former glory, allowing access to more Power Moons",
        image: "/assets/map-pictures/deep-woods.png",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-blue.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-blue.png'], ['Purple Coins','purple-coins','/assets/purple-coins/wooded-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rocks', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ['The Odyssey', 'odyssey', '/assets/odyssey.png']],
        mapImage: '/assets/maps/deep-map.png'
    },
    {
        id: 'metro-kingdom', 
        fullName: 'Metro Kingdom', 
        game: "Super Mario Odyssey",
        desc: "It is the greater location of Lake Lamode, a large lake area with an underwater plaza area. This kingdom is renowned for its fashion designers and clothes, including the prized Lochlady Dress. When Mario first visits here, the Broodals can be found at the Water Plaza in the process of stealing the Lochlady Dress. Mario encounters the Broodals at the Water Plaza Terrace, where he must defeat Rango, which will reward the player with a Multi Moon. Collecting the Multi Moon restores the Water Plaza to its former glory, allowing access to more Power Moons",
        image: "/assets/map-pictures/metro-kingdom.jpg",
        buttons: [['Checkpoints','checkpoint','/assets/checkpoint.png'], ['Power Moons','power-moon','/assets/power-moons/power-moon-brown.png'], ['Multi-Moons','multimoons','/assets/multimoons/multimoon-brown.png'], ['Purple Coins','purple-coins','/assets/purple-coins/metro-coin.png'], ['Bonus Areas','spec-area','/assets/pipe.png'], ['Moon Rocks', 'moon-rock', '/assets/moon-rock.png'], ['Hint Art', 'hint-art', '/assets/hint-art.png'], ['Painting', 'painting', '/assets/painting.png'], ['Crazy Cap', 'crazy-cap', '/assets/crazy-cap.png'], ['The Odyssey', 'odyssey', '/assets/odyssey.png']],
        mapImage: '/assets/maps/metro-map.png'
    },
    {
        "id": "cloud-kingdom",
        "fullName": "Cloud Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/cloud-map.png"
    },
    {
        "id": "lost-kingdom",
        "fullName": "Lost Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/lost-map.png"
    },
    {
        "id": "snow-kingdom",
        "fullName": "Snow Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/snow-map.png"
    },
    {
        "id": "shiveria",
        "fullName": "Shiveria",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/snow-map.png"
    },
    {
        "id": "seaside-kingdom",
        "fullName": "Seaside Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/seaside-map.png"
    },
    {
        "id": "luncheon-kingdom",
        "fullName": "Luncheon Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/luncheon-map.png"
    },
    {
        "id": "ruined-kingdom",
        "fullName": "Ruined Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/ruined-map.png"
    },
    {
        "id": "bowser-kingdom",
        "fullName": "Bowser's Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/bowser-map.png"
    },
    {
        "id": "moon-kingdom",
        "fullName": "Moon Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/moon-map.png"
    },
    {
        "id": "mushroom-kingdom",
        "fullName": "Mushroom Kingdom",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/mushroom-map.png"
    },
    {
        "id": "dark-side",
        "fullName": "Dark Side",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Purple Coins",
                "purple-coins",
                "/assets/purple-coins/dark-coin.png"
            ],
            [
                "Bonus Areas",
                "spec-area",
                "/assets/pipe.png"
            ],
            [
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/dark-map.png"
    },
    {
        "id": "darker-side",
        "fullName": "Darker Side",
        "game": "Super Mario Odyssey",
        "desc": "",
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
                "Moon Rocks",
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
                "The Odyssey",
                "odyssey",
                "/assets/odyssey.png"
            ]
        ],
        "mapImage": "/assets/maps/darker-map.png"
    }
];

export default mapData

