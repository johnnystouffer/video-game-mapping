import { map } from "leaflet"

const checkpoint_markers = [
    // ========================================================================
    // !                                                                      !
    // !                             CAP  KINGDOM                             !
    // !                                                                      !
    // ========================================================================
    
    // ----------------------------- CHECKPOINTS ------------------------------
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/crazy-cap.png',
        type: 'crazy-cap',
        position: [750, 550],
        name: 'Crazy Cap Store',
        popupInfo: {
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=103",
            description: "Buy clothes, stickers, and decorations for your Odyssey! Spend regular or purple coins (limited to local currency for purple coins)"
        }
    },
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=2",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=34",
            description: "Found in Bonneton. Inside it is the first platforming segment in the game, culminating in the game's first boss fight (against Topper) at the top.",
        }
    },
    // ----------------------------- BONUS  AREAS -----------------------------
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/pipe.png',
        type: 'spec-area',
        position: [865, 965],
        name: 'Push-Block Area',
        popupInfo: {
            link: "",
            description: "A platforming area featuring Push-Blocks and spark pylons. Accessed via a red Cappy door behind the base of the Top-Hat Tower.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/pipe.png',
        type: 'spec-area',
        position: [815, 1010],
        name: 'Poison Tide Room',
        popupInfo: {
            link: "",
            description: "A narrow tunnel-like area filled with poison. You will need a Paragoomba to get to this red Cappy door.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/pipe.png',
        position: [845, 500],
        name: 'The Frog Pond',
        type: 'spec-area',
        popupInfo: {
            link: "",
            description: "A large, flooded room featuring various suspended platforms and many frogs. Accessed via a red Cappy door.",
        }
    },
    // ----------------------------- POWER  MOONS -----------------------------
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [290, 470],
        name: 'Frog Jumping Above the Fog',
        type: 'power-moon',
        popupInfo: {
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=2",
            description: "In the far south of the map in Quadrant D2 you can find two tap hats in the fog. If you are a frog you can go to the second hat and use the frog jump to reach it.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/power-moons/power-moon-yellow.png',
        position: [680, 600],
        name: 'Bonneter Blockade',
        type: 'power-moon',
        popupInfo: {
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=471",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=34",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=103",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=359",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=261",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=429",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=59",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=80",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=188",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=496",
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
            link: "https://youtu.be/iFPYxRRJQNk?feature=shared&t=118",
            description: " 2X MOONS in the SPECIAL AREA There is a hidden door located on the opposite side of Top Hat Tower. Get to it by jumping off the top of the tower or take control of the Paragoomba on the second bridge and fly behind Top-Hat Tower to find a Cappy door.",
        }
    },
    // ----------------------------- PURPLE COINS -----------------------------
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [540, 340],
        name: 'COINS 1-3',
        type: 'purple-coins',
        popupInfo: {
            link: "https://www.youtube.com/watch?v=b7sAg57D93c",
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
            link: "https://www.youtube.com/watch?v=b7sAg57D93c",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=31",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=52",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=52",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=82",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=125",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=125",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=31",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=125",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=247",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=247",
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
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=161",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/purple-coins/cap-coin.png',
        position: [862, 950],
        name: 'COINS 44-46',
        type: 'purple-coins',
        popupInfo: {
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=313",
            description: "3x Coins",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/pipe.png',
        type: 'spec-area',
        position: [865, 965],
        name: 'Push-Block Area',
        popupInfo: {
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=310",
            description: "A platforming area featuring Push-Blocks and spark pylons. Accessed via a red Cappy door behind the base of the Top-Hat Tower.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/pipe.png',
        type: 'spec-area',
        position: [815, 1010],
        name: 'Poison Tide Room',
        popupInfo: {
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=163",
            description: "A narrow tunnel-like area filled with poison. You will need a Paragoomba to get to this red Cappy door.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/pipe.png',
        position: [845, 500],
        name: 'The Frog Pond',
        type: 'spec-area',
        popupInfo: {
            link: "https://youtu.be/b7sAg57D93c?feature=shared&t=63",
            description: "A large, flooded room featuring various suspended platforms and many frogs. Accessed via a red Cappy door.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/moon-rock.png',
        position: [465, 737],
        name: 'Cap Kingdom Moon Rock',
        type: 'moon-rock',
        popupInfo: {
            link: "https://www.youtube.com/watch?v=0o8n-rnK4Js",
            description: "You will need to be far in the game for these to be able to work, click tutorial to see when you can use them.",
        }
    },
    {
        map: 'cap-kingdom',
        iconUrl: '/src/assets/hint-art.png',
        position: [370, 480],
        name: 'Cap Kingdom Hint Art',
        type: 'hint-art',
        popupInfo: {
            link: "https://www.youtube.com/watch?v=oj2ka9SG7KI",
            description: "Watch our tutorial to find where to go!",
        }
    },
    // ========================================================================
    // !                                                                      !
    // !                           CASCADE  KINGDOM                           !
    // !                                                                      !
    // ========================================================================
    
    // ----------------------------- CHECKPOINTS ------------------------------
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        type: 'checkpoint',
        position: [275, 900],
        name: 'The Odyssey',
        popupInfo: {
            link: "",
            description: "This is where your ship is located. Isn't the Waterfall Basin beautiful?"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        type: 'checkpoint',
        position: [825, 675],
        name: 'Stone Bridge',
        popupInfo: {
            link: "",
            description: "This stone bridge hosts a horde of colorful Burrbos."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        type: 'checkpoint',
        position: [720, 770],
        name: 'Fossil Falls Heights',
        popupInfo: {
            link: "",
            description: "This checkpoint flag is found at the summit of Fossil Falls next to two Chain Chomps and a suspicious-looking pole."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        type: 'checkpoint',
        position: [460, 650],
        name: 'Top of the Big Stump',
        popupInfo: {
            link: "",
            description: "This checkpoint is on top of a high ledge. You may need to destroy some rocks to access it!"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/checkpoint.png',
        type: 'checkpoint',
        position: [380, 600],
        name: 'Island in the Sky',
        popupInfo: {
            link: "",
            description: "You will need to find a painting in the Snow Kingdom or the Seaside Kingdom to reach this checkpoint."
        }
    },
    // ----------------------------- BONUS  AREAS -----------------------------
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/pipe.png',
        type: 'spec-area',
        position: [425, 625],
        name: 'Dinosaur Nest',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=239",
            description: "A spacious underground area home to a mighty T-Rex. Accessed via a red Cappy door."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/pipe.png',
        type: 'spec-area',
        position: [1000, 450],
        name: 'Chain Chomp Cave',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=282",
            description: "A cavernous area consisting of partitioned rooms full of Chain Chomps and poision. Accessed via a warp pipe."
        }
    },
    // ----------------------------- POWER  MOONS -----------------------------
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/pipe.png',
        type: 'spec-area',
        position: [800, 680],
        name: 'Chasm Lifts Area',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=320",
            description: "An 8-bit platformer with moving lifts situated over a large chasm. Accessed via a red Cappy door on the side of the Stone Bridge."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [565, 822],
        name: 'Our First Power Moon',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=68",
            description: "You will have to break through some rocks with a Chain Chomp to get to this Power Moon."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [480, 810],
        name: 'Cascade Kingdom Timer Challenge 1',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=192",
            description: "Capture the scarecrow at the base of the waterfall and reach the Power Moon before time runs out!"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [605, 890],
        name: 'Shopping in Fossil Falls',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=576",
            description: "Head over to the Crazy Cap Shop and buy the Power Moon for 100 Gold Coins."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [470, 1010],
        name: 'On Top of the Rubble',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=137",
            description: "This Power Moon is on a pile of rubble guarded by three enemies."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [350, 920],
        name: 'A Tourist in the Cascade Kingdom',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=457",
            description: "This Power Moon will be available after you speak to the Tostarean in the Sand Kingdom and Metro Kingdom."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [315, 935],
        name: 'Cascade Kingdom Regular Cup',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=526",
            description: "A Koopa will challenge you to a freerunning course here after you complete the main story."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [240, 840],
        name: 'Sphynx Traveling to the Waterfall',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=584",
            description: "After completing the main story, capture the binoculars here and zoom in to the distant Bonneter airship. Then, move diagonally upwards and to the right and zoom in to the sphinx."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [665, 765],
        name: 'Behind the Waterfall',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=121",
            description: "In the 8-bit platformer, go to the far left where there is a gap in the stone wall to find an area that wraps around behind the waterfall."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [800, 800],
        name: 'Past the Chasm Lifts',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=320",
            description: "Enter through the Cappy door against the cliff wall to find an 8-bit platforming area. Pass through the lifts without falling to get to a Warp Pipe that takes you to this Power Moon."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [785, 800],
        name: 'Hidden Chasm Passage',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=320",
            description: "Pass through the first area of the 8-bit platformer, then instead of going into the second, jump over the rocks on the edge of the cliff and enter the 2D area. Use the Koopa Troopa to destroy the brick on the right wall that blocks the passage to the Power Moon."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [850, 560],
        name: 'Caveman Cave-Fan',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=550",
            description: "This Power Moon will be available after completing the main story. Impress the Bonneter here by wearing the Caveman Outfit."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [910, 540],
        name: 'Cascade Kingdom Timer Challenge 2',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=207",
            description: "After fighting Madam Broode, you can go back up to the arena to capture the scarescrow, then reach the Power Moon before time runs out!"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [810, 470],
        name: 'Good Morning, Captain Toad',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=224",
            description: "Find Captain Toad on a ledge by the arena!"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [845, 430],
        name: 'Chomp Through the Rocks',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=104",
            description: "This Power Moon is behind a small breakable wall. Capture a Chain Chomp to smash through it.Watch the video for full explanation."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [1000, 490],
        name: 'Nice Shot with the Chain Chomp',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=280",
            description: "Use the Warp Pipe by the Stone Bridge to enter the Chain Chomp Cave. For each room, capture the nearest Chain Chomp, and angle it to send the next one into the hole."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [1000, 505],
        name: 'Very Nice Shot with the Chain Chomp',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=280",
            description: "From where the other Power Moon in the Chain Chomp Cave is, walk into the hidden room on the far right and send the furthest Chain Chomp into the hole."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [1090, 300],
        name: 'Across the Floating Isles',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=177",
            description: "After fighting Madam Broode, cross the platforms at the edge of the arena to retrieve this Power Moon."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [640, 605],
        name: 'Rolling Rock by the Falls',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=492",
            description: "One of the stones in the dirt clearing here contains a Power Moon. Hit it a few times until it breaks."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [530, 675],
        name: 'Treasure of Waterfall Basin',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=150",
            description: "This Power Moon is in a treasure chest. You will need to go for a dip to find it!On the middle west side of the lake, there is a small cave that contains this power moon"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [400, 640],
        name: 'Dinosaur Nest: Big Cleanup',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=239",
            description: "Defeat all the Burrbos in the Dinosaur Nest to collect this Power Moon."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [415, 650],
        name: 'Dinosaur Nest: Running Wild',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=239",
            description: "Destroy all the rocks on the lower platform in the Dinosaur Nest to collect this Power Moon."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [405, 575],
        name: 'Above a High Cliff',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=164",
            description: "This Power Moon sits atop a cliff."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/power-moons/power-moon-yellow.png',
        type: 'power-moon',
        position: [367, 583],
        name: 'Secret Path to Fossil Falls',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=370",
            description: "You need to find a painting in the Snow kingdom to reach this Power Moon! Watch video for full description"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/multimoons/multimoon-yellow.webp',
        type: 'multimoons',
        position: [955, 490],
        name: 'Multi Moon Atop The Falls',
        popupInfo: {
            link: "https://youtu.be/SOAcjrxHeRo?feature=shared&t=84",
            description: "Fight Madam Broode to retrieve this Multi Moon! Capture her pet Chain Chomp to defeat her."
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: '/src/assets/moon-rock.png',
        position: [835, 362],
        name: 'Cascade Kingdom Moon Rock',
        type: 'moon-rock',
        popupInfo: {
            link: "https://www.youtube.com/watch?v=0o8n-rnK4Js",
            description: "You will need to be far in the game for these to be able to work, click tutorial to see when you can use them.",
        }
    },

    // ----------------------------- PURPLE COINS -----------------------------
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [215, 930],
        name: 'Coins 1-3',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [435, 838],
        name: 'Coins 4-6',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [577, 967],
        name: 'Coins 7-9',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=19",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [564, 802],
        name: 'Coins 10-12',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=35",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [415, 440],
        name: 'Coins 13-15',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=96",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [555, 530],
        name: 'Coins 16-18',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=106",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [695, 405],
        name: 'Coins 19-21',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=118",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [1000, 485],
        name: 'Coins 22-24',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=130",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [783, 770],
        name: 'Coins 25-27',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=152",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [890, 865],
        name: 'Coins 28-30',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=278",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [628, 850],
        name: 'Coins 31-33',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=253",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [345, 600],
        name: 'Coins 34-37',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=67",
            description: "4x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [640, 750],
        name: 'Coins 38-40',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=252",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [1090, 360],
        name: 'Coins 41-43',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=294",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [660, 750],
        name: 'Coins 44-46',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=49",
            description: "3x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/purple-coins/cascade-coin.png',
        type: 'purple-coins',
        position: [755, 809],
        name: 'Coins 47-50',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=175",
            description: "4x coins"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/painting.png',
        type: 'painting',
        position: [660, 760],
        name: 'Painting to Bowsers Kingdom',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=49",
            description: "Will need to be further in the game (at or past Bowsers Kingdom) to work"
        }
    },
    {
        map: 'cascade-kingdom',
        iconUrl: 'src/assets/painting.png',
        type: 'painting',
        position: [380, 610],
        name: 'Painting From Snow / Seaside Kingdom',
        popupInfo: {
            link: "https://youtu.be/hP1kCqtm6LQ?feature=shared&t=49",
            description: "Will need to be further in the game (at or past Snow / Seaside Kingdom) to work"
        }
    },
    // ========================================================================
    // !                                                                      !
    // !                             SAND KINGDOM                             !
    // !                                                                      !
    // ========================================================================
    
    // ----------------------------- CHECKPOINTS ------------------------------
    // ----------------------------- BONUS  AREAS -----------------------------
    // ----------------------------- POWER  MOONS -----------------------------
    // ----------------------------- PURPLE COINS -----------------------------
]
export default checkpoint_markers