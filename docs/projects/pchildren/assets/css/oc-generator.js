console.log("The OC Generator is working!");

const ocTypeInput = document.getElementById("ocType");
const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");
const formContainer = document.querySelector(".form-container");


generateButton.addEventListener("click", function () {
    let ocType = ocTypeInput.value;

    if (ocType === "Surprise Me!") {
        const randomIndex = Math.floor(Math.random() * ocTypes.length);
        ocType = ocTypes[randomIndex];
    }

    const rules = allRules[ocType];

    let outputHTML = "";

    for (const item of rules.output) {

        const label = item[0];
        const ruleName = item[1];

        const rule = rules[ruleName];

        const inputValue = document.getElementById(rule.input).value;

        const generatedValue = rule.values[inputValue];

        outputHTML += `
        <p><strong>${label}:</strong> ${generatedValue}</p>
    `;
    }
    result.innerHTML = `
        <div class="character-card">
    
            <div class="card-header">
                <h2>✦ Your New OC! ✦</h2>
            </div>
    
            <div class="oc-illustration">
                <img src="oc-placeholder.png" alt="${ocType} illustration">
            </div>
    
            <h3 class="oc-type">♡ ${ocType} ♡</h3>
    
            <div class="oc-details">
                ${outputHTML}
            </div>
    
            <button id="backButton" class="back-button">
                ← Make Another OC
            </button>
    
        </div>
`;
    formContainer.classList.add("hide");

    const characterCard = result.querySelector(".character-card");

    requestAnimationFrame(function () {
        characterCard.classList.add("show");
    });
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function () {
        result.innerHTML = "";
        formContainer.classList.remove("hide");
    });
});

const fairyRules = {
    wings: {
        input: "eyeColor",
        values: {
            Blue: "Blue Wings",
            Green: "Green Wings",
            Brown: "Brown Wings",
            Black: "Black Wings",
            Other: "Rainbow Wings"
        }
    },
    sparkles: {
        input: "siblings",
        values: {
            0: "No Sparkles",
            1: "Some Sparkles",
            2: "Lots of Sparkles",
            3: "Maximum Sparkles"
        }
    },
    hairColor: {
        input: "favoriteColor",
        values: {
            Red: "Red Hair",
            Orange: "Orange Hair",
            Yellow: "Yellow Hair",
            Green: "Green Hair",
            Blue: "Blue Hair",
            Purple: "Purple Hair",
            Pink: "Pink Hair",
            Brown: "Brown Hair",
            Gray: "Gray Hair",
            Black: "Black Hair",
            White: "White Hair"
        }
    },
    aesthetic: {
        input: "hairColor",
        values: {
            Red: "Warm/Fiery Aesthetic",
            Brown: "CottageCore Aesthetic",
            Blonde: "High Elf/Preppy Aesthetic",
            Black: "Grungy/Goth/Emo Aesthetic",
            Gray: "Vintage Aesthetic",
            Dyed: "Rainbow Aesthetic"
        }
    },
    hairType: {
        input: "favoriteFood",
        values: {
            Fruits: "Pigtails",
            Veggies: "Straight and Long",
            Grains: "Fluffy and Spiky",
            Dairy: "Half-up Half-down",
            Sweets: "Curly Afro-like",
            Protein: "Wavy Shoulder Length"
        }
    },
    eyeColor: {
        input: "personality",
        values: {
            Calm: "Blue Eyes",
            Chaotic: "Red Eyes",
            Extraverted: "Green Eyes",
            Introverted: "Brown Eyes",
            Normal: "Black Eyes"
        }
    },
    accessory: {
        input: "animal",
        values: {
            None: "No Accessories",
            Dogs: "Bow Accessories",
            Cats: "Wand Accessory",
            Reptiles: "Hat Accessory",
            Birds: "Head Wings Accessory",
            Rodents: "Tail Accessory",
            Other: "Dealer's Choice!!"
        }
    },
    bgColor: {
        input: "season",
        values: {
            Spring: "Pink",
            Summer: "Yellow",
            Fall: "Orange",
            Winter: "Blue"
        }
    },
    output: [
        ["Wings", "wings"],
        ["Sparkles", "sparkles"],
        ["Aesthetic", "aesthetic"],
        ["Hair Type", "hairType"],
        ["Eye Color", "eyeColor"],
        ["Hair Color", "hairColor"],
        ["Accesssory", "accessory"],
        ["BG Color", "bgColor"]
    ]
}

const witchRules = {
    outfitColor: {
        input: "eyeColor",
        values: {
            Blue: "Blue Outfit",
            Green: "Green Outfit",
            Brown: "Brown Outfit",
            Black: "Black Outfit",
            Other: "Pastel Outfit"
        }
    },
    magic: {
        input: "siblings",
        values: {
            0: "Air Magic",
            1: "Fire Magic",
            2: "Earth Magic",
            3: "Water Magic"
        }
    },
    hairColor: {
        input: "hairColor",
        values: {
            Red: "Warmish Tones",
            Brown: "Coolish Tones",
            Blonde: "Platinum Blonde",
            Black: "Dark and Mysterious",
            Gray: "Salt and Pepper",
            Dyed: "Rainbow Hair"
        }
    },
    aesthetic: {
        input: "favoriteFood",
        values: {
            Fruits: "Frutiger Aero",
            Veggies: "Techwear",
            Grains: "Baroque",
            Dairy: "Lolita",
            Sweets: "Cyberpunk",
            Protein: "Grungy Punk"
        }
    },
    hairType: {
        input: "personality",
        values: {
            Calm: "Flat and Long Hair",
            Chaotic: "Curly and Fluffy Afro",
            Extraverted: "Long and Wavy",
            Introverted: "Straight Bob",
            Normal: "Twintails"
        }
    },
    eyeColor: {
        input: "favoriteColor",
        values: {
            Red: "Red Eyes",
            Orange: "Orange Eyes",
            Yellow: "Yellow Eyes",
            Green: "Green Eyes",
            Blue: "Blue Eyes",
            Purple: "Purple Eyes",
            Pink: "Pink Eyes",
            Brown: "Brown Eyes",
            Gray: "Gray Eyes",
            Black: "Black Eyes",
            White: "White Eyes"
        }
    },
    familiar: {
        input: "animal",
        values: {
            None: "No Familiar",
            Dogs: "Dog Familiar",
            Cats: "Cat Familiar",
            Reptiles: "Reptile Familiar",
            Birds: "Bird Familiar",
            Rodents: "Rodent Familiar",
            Other: "Underwater Familiar"
        }
    },
    potion: {
        input: "season",
        values: {
            Spring: "Happiness Potion",
            Summer: "Relaxing Potion",
            Fall: "Love Potion",
            Winter: "Energy Potion"
        }
    },
    output: [
        ["Outfit Color", "outfitColor"],
        ["Magic", "magic"],
        ["Familiar", "familiar"],
        ["Aesthetic", "aesthetic"],
        ["Hair Type", "hairType"],
        ["Eye Color", "eyeColor"],
        ["Hair Color", "hairColor"],
        ["Potion Type", "potion"]
    ]
}

const magicalGirlRules = {
    hairType: {
        input: "eyeColor",
        values: {
            Blue: "Long with Bangs",
            Green: "Twin Tails",
            Brown: "Short and Curly",
            Black: "Ponytail with Bangs",
            Other: "Short Bob"
        }
    },
    magicTool: {
        input: "siblings",
        values: {
            0: "Bow and Arrow",
            1: "Gun",
            2: "Spectral Knife",
            3: "Magical Wand"
        }
    },
    bgColor: {
        input: "hairColor",
        values: {
            Red: "Reds",
            Brown: "Browns",
            Blonde: "Monotone",
            Black: "Black/White",
            Gray: "Pastels",
            Dyed: "Rainbow"
        }
    },
    emotion: {
        input: "favoriteFood",
        values: {
            Fruits: "Happy",
            Veggies: "Sad",
            Grains: "Neutral",
            Dairy: "Excited",
            Sweets: "Depressed",
            Protein: "Angry"
        }
    },
    hairColor: {
        input: "personality",
        values: {
            Calm: "Brown and Black",
            Chaotic: "Rainbow and Fun",
            Extraverted: "Dark and Cools",
            Introverted: "Bright and Pastel",
            Normal: "Salt and Pepper"
        }
    },
    eyeColor: {
        input: "favoriteColor",
        values: {
            Red: "Red Eyes",
            Orange: "Orange Eyes",
            Yellow: "Yellow Eyes",
            Green: "Green Eyes",
            Blue: "Blue Eyes",
            Purple: "Purple Eyes",
            Pink: "Pink Eyes",
            Brown: "Brown Eyes",
            Gray: "Gray Eyes",
            Black: "Black Eyes",
            White: "White Eyes"
        }
    },
    aesthetic: {
        input: "animal",
        values: {
            None: "Aliencore",
            Dogs: "Avantguarde",
            Cats: "Dark Romantic",
            Reptiles: "Horror/Grundgy",
            Birds: "Flower Power",
            Rodents: "Renaissance",
            Other: "Kawaii"
        }
    },
    outfitType: {
        input: "season",
        values: {
            Spring: "Ballgown",
            Summer: "School Girl",
            Fall: "Goth Lolita",
            Winter: "Formal Wear"
        }
    },
    output: [
        ["Hair Type", "hairType"],
        ["Magical Tool", "magicTool"],
        ["BG Color", "bgColor"],
        ["Emotion", "emotion"],
        ["Hair Color", "hairColor"],
        ["Eye Color", "eyeColor"],
        ["Aesthetic", "aesthetic"],
        ["Outfit Type", "outfitType"]
    ]
}

const foodGirlRules = {
    hairColor: {
        input: "eyeColor",
        values: {
            Blue: "Blue Hair",
            Green: "Green Hair",
            Brown: "Brown Hair",
            Black: "Black Hair",
            Other: "No Hair/BALD"
        }
    },
    bgColor: {
        input: "siblings",
        values: {
            0: "Baby Blues",
            1: "Pink and Reds",
            2: "Monotone",
            3: "Yellow and Green"
        }
    },
    eyeColor: {
        input: "hairColor",
        values: {
            Red: "Red Eyes",
            Brown: "Brown Eyes",
            Blonde: "White Eyes",
            Black: "Black Eyes",
            Gray: "Blue Eyes",
            Dyed: "Purple Eyes"
        }
    },
    accessory: {
        input: "favoriteFood",
        values: {
            Fruits: "Handbag",
            Veggies: "Umbrella",
            Grains: "Calculator",
            Dairy: "Pet of Choice",
            Sweets: "Backpack",
            Protein: "Ring"
        }
    },
    cleanliness: {
        input: "personality",
        values: {
            Calm: "Clean and Pristine",
            Chaotic: "Messy and Dripping",
            Extraverted: "A bit Messy",
            Introverted: "Very Tidy",
            Normal: "Not Messy, not Clean"
        }
    },
    aesthetic: {
        input: "favoriteColor",
        values: {
            Red: "KnightCore",
            Orange: "Lolita",
            Yellow: "Medieval Fantasy",
            Green: "Neon Noir",
            Blue: "Oceanpunk",
            Purple: "PrincessCore",
            Pink: "QueenCore",
            Brown: "Romantic Goth",
            Gray: "Steampunk",
            Black: "Trailer Park",
            White: "UrbanCore"
        }
    },
    foodType: {
        input: "animal",
        values: {
            None: "Water",
            Dogs: "Pizza",
            Cats: "Pasta",
            Reptiles: "Tacos",
            Birds: "Sushi",
            Rodents: "Curry",
            Other: "Ice Cream"
        }
    },
    emotion: {
        input: "season",
        values: {
            Spring: "Ballgown",
            Summer: "School Girl",
            Fall: "Goth Lolita",
            Winter: "Formal Wear"
        }
    },
    output: [
        ["Food Type", "foodType"],
        ["Accessory", "accessory"],
        ["BG Color", "bgColor"],
        ["Emotion", "emotion"],
        ["Hair Color", "hairColor"],
        ["Eye Color", "eyeColor"],
        ["Aesthetic", "aesthetic"],
        ["Cleanliness", "cleanliness"]
    ]
}

const mermaidRules = {
    emotion: {
        input: "eyeColor",
        values: {
            Blue: "Sad",
            Green: "Excited",
            Brown: "Neutral",
            Black: "Happy",
            Other: "In-Love"
        }
    },
    tailColor: {
        input: "siblings",
        values: {
            0: "Pink and Reds",
            1: "Blues and Purples",
            2: "Monotone",
            3: "Yellow and Green"
        }
    },
    aesthetic: {
        input: "hairColor",
        values: {
            Red: "VSCO Girl",
            Brown: "BalletCore",
            Blonde: "Y2k Futurism",
            Black: "Art Deco",
            Gray: "Coquette",
            Dyed: "DreamCore"
        }
    },
    eyeColor: {
        input: "favoriteFood",
        values: {
            Fruits: "Red Eyes",
            Veggies: "Green Eyes",
            Grains: "Blue Eyes",
            Dairy: "Brown Eyes",
            Sweets: "Purple Eyes",
            Protein: "Black Eyes"
        }
    },
    mermaidType: {
        input: "personality",
        values: {
            Calm: "Kind Mermaid",
            Chaotic: "Evil Siren",
            Extraverted: "Harpy-Esque",
            Introverted: "Quiet Siren",
            Normal: "Normal Mermaid"
        }
    },
    magic: {
        input: "favoriteColor",
        values: {
            Red: "Fire Magic",
            Orange: "Sunshine Magic",
            Yellow: "Paint Magic",
            Green: "Earth Magic",
            Blue: "Seashell Magic",
            Purple: "Royalty Magic",
            Pink: "Fairy Magic",
            Brown: "Ground Magic",
            Gray: "Rock Magic",
            Black: "Psychic Magic",
            White: "Kindness Magic"
        }
    },
    hairColor: {
        input: "animal",
        values: {
            None: "Bald/No Hair",
            Dogs: "Brown Hair",
            Cats: "Blonde Hair",
            Reptiles: "Black Hair",
            Birds: "Red Hair",
            Rodents: "Gray Hair",
            Other: "Rainbow Hair"
        }
    },
    accessory: {
        input: "season",
        values: {
            Spring: "Seashells",
            Summer: "Sea Creature Friend",
            Fall: "Seaweed",
            Winter: "Ice and Snow"
        }
    },
    output: [
        ["Tail Color", "tailColor"],
        ["Accessory", "accessory"],
        ["Magic", "magic"],
        ["Emotion", "emotion"],
        ["Hair Color", "hairColor"],
        ["Eye Color", "eyeColor"],
        ["Aesthetic", "aesthetic"],
        ["Mermaid Type", "mermaidType"]
    ]
}

const allRules = {
    Fairy: fairyRules,
    Witch: witchRules,
    MagicalGirl: magicalGirlRules,
    FoodGirl: foodGirlRules,
    Mermaid: mermaidRules
}

const ocTypes = [
    "Fairy",
    "Witch",
    "Magical Girl",
    "Food Girl",
    "Mermaid"
]

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {
    result.innerHTML = "";
    formContainer.classList.remove("hide");
});