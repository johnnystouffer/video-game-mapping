const checkpoint_markers = [
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        type: 'checkpoint',
        position: [400, 350],
        name: 'The Odyessey',
        popupInfo: {
            link: "",
            description: "Where you spawn and leave in the game"
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        position: [720, 582],
        type: 'checkpoint',
        name: 'Central Plaza',
        popupInfo: {
            link: "",
            description: "It is the central hub of the kingdom, specifically its residential district. Central Plaza is the first location that Mario visits alongside Cappy, where it is still ravaged from Bowser's attack on the kingdom. When Mario eventually revisits the Cap Kingdom, the Central Plaza is fully rebuilt, and a Crazy Cap shop and a Checkpoint Flag are present at the center of the area",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        position: [800, 910],
        name: 'Top-Hat Tower',
        type: 'checkpoint',
        popupInfo: {
            link: "",
            description: "Found in Bonneton. Inside it is the first platforming segment in the game, culminating in the game's first boss fight (against Topper) at the top.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [290, 470],
        name: 'Frog Jumping Above the Fog',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "In the far south of the map in Quadrant D2 you can find two tap hats in the fog. If you are a frog you can go to the second hat and use the frog jump to reach it.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [680, 600],
        name: 'Frog Jumping Above the Fog',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "In the far south of the map in Quadrant D2 you can find two tap hats in the fog. If you are a frog you can go to the second hat and use the frog jump to reach it.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [705, 515],
        name: 'Frog Jumping The Top Deck',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "On the top hat left of the entry gate there is a moon on top that can be accessed using a frog.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [680, 600],
        name: 'Frog Jumping The Top Deck',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "On the top hat left of the entry gate there is a moon on top that can be accessed using a frog.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [750, 530],
        name: 'Shopping in Bonneton',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "You can purchase this one when visiting The Crazy Hat Store in Bonneton",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [735, 612],
        name: 'Forgotten Treasure',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "Talk to the Cappy on top of the eastern Top Hat and he will take you on a journey to find your next moon!",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [840, 490],
        name: 'Searching the Frog Pond & Secrets of the Frog Pond',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "2X MOON Both are found in the secret area in the north west CLICK THE LINK to try look at a tutorial",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [810, 490],
        name: 'Taxi Flying through Bonneton',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "This Power Moon can be found in Quadrant B2, to the North of the Main Plaza of Bonneton. Note that this Power Moon may only appear after completing the main story. ",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [810, 490],
        name: 'Taxi Flying through Bonneton',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "This Power Moon can be found in Quadrant B2, to the North of the Main Plaza of Bonneton. Note that this Power Moon may only appear after completing the main story. ",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [810, 850],
        name: 'Cap Kingdom Timer Challenge 1',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "This Power Moon can be found in Quadrant B2, to the North of the Main Plaza of Bonneton. Note that this Power Moon may only appear after completing the main story. ",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [810, 960],
        name: 'Good Evening, Captain Toad!',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "After completing the main quest you can find Toad here and he will give you a moon if you talk to him.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [860, 960],
        name: 'Push Block Peril & Hidden Among the Push-Blocks',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "2X MOON in this SPECIAL AREA click the video link if you want to find it.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [845, 990],
        name: 'Cap Kingdom Regular Cup',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: "After completing the main story you can come up and complete in the Cap Kingdom Regular Cup.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [815, 1005],
        name: 'Skimming the Poison Tide & Slipping Through the Poison Tide',
        type: 'power-moon',
        popupInfo: {
            link: "",
            description: " 2X MOONS in the SPECIAL AREA There is a hidden door located on the opposite side of Top Hat Tower. Get to it by jumping off the top of the tower or take control of the Paragoomba on the second bridge and fly behind Top-Hat Tower to find a Cappy door.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [540, 340],
        name: 'COINS 1-3',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [445, 535],
        name: 'COINS 4-6',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [663, 565],
        name: 'COINS 7-9',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [770, 545],
        name: 'COINS 10-12',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [810, 475],
        name: 'COINS 13-15',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [825, 490],
        name: 'COINS 16-19',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "4x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [910, 488],
        name: 'COINS 20-23',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [853, 580],
        name: 'COINS 24-27',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "4x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [722, 635],
        name: 'COINS 47-50',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "4x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [814, 690],
        name: 'COINS 28-31',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "4x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [814, 920],
        name: 'COINS 35-39',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "5x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [814, 940],
        name: 'COINS 40-43',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "4x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [805, 1010],
        name: 'COINS 32-34',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [862, 950],
        name: 'COINS 32-34',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [862, 950],
        name: 'COINS 32-34',
        type: 'purple-coins',
        popupInfo: {
            link: "",
            description: "3x Coins",
        }
    },
]
export default checkpoint_markers