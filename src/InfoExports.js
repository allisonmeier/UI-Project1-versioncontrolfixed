
export const dietaryRestrictions = [
    "Vegan",
    "Vegetarian",
    "Dairy-Free",
    "Gluten-Free",
]


export const basicTemperatures = [
    {
        value: 0,
        label: '0°F'
    },
    {
        value: 32,
        label: '32°F'
    },
    {
        value: 100,
        label: '100°F'
    },
    {
        value: 200,
        label: '200°F'
    },
    {
        value: 300,
        label: '300°F'
    },
    {
        value: 400,
        label: '400°F'
    },
    {
        value: 500,
        label: '500°F'
    }
]


export const userProfiles = {
    user1: {
        name: "Luke Bristoll",
        dietaryRestrictions: [],
        ingredients: [],
        skillLevel: 'Easy',
    },
    user2: {
        name: "Robbie Schad",
        dietaryRestrictions: ["Dairy-free"],
        ingredients: [],
        skillLevel: 'Moderate',
    },
    user3: {
        name: "Robin Heft",
        dietaryRestrictions: ["Vegan", "Vegetarian"],
        ingredients: [],
        skillLevel: 'Moderate',
    },
    user4: {
        name: "Steven Kraine",
        dietaryRestrictions: ["Gluten-Free"],
        ingredients: [],
        skillLevel: 'Difficult',
    },
}

export const allPossibleIngredients = [
    "baking powder",
    "baking soda",
    "bay leaf",
    "beef stock",
    "black pepper",
    "brown lentils",
    "butter",
    "canned tomatoes",
    "carrots",
    "celery",
    "chickpeas",
    "chicken thighs",
    "chocolate chips",
    "cumin",
    "dried oregano",
    "garlic",
    "garlic powder",
    "ginger",
    "gruyere cheese",
    "ground beef",
    "ice water",
    "italian seasoning",
    "kale",
    "lemon juice",
    "milk",
    "olive oil",
    "onion",
    "onion powder",
    "paprika",
    "parsley",
    "plant-based milk",
    "red wine",
    "rice",
    "ripe bananas",
    "salt",
    "sesame oil",
    "sesame seeds",
    "sourdough",
    "spaghetti",
    "sugar",
    "thyme",
    "tomato paste",
    "vanilla extract",
    "vegetable broth",
    "vegetable oil",
    "vegetables (bell peppers, broccoli, carrots, etc.)",
    "worcestershire sauce"
]

export const dummyRecipes = [
    /* French Onion Soup */
    {
        title: "French Onion Soup",
        description: "A rich and savory soup featuring caramelized onions, beef stock, and melted gruyere cheese.",
        difficulty: "Difficult",
        dietaryDescriptors: ["Dairy-Free"],
        durationInMinutes: 110,
        ingredientsNeeded: [
            {
                ingredient: "butter",
                amount: 75,
                measurement: "g",
                details: ""
            },
            {
                ingredient: "vegetable oil",
                amount: 1,
                measurement: "tbsp",
                details: ""
            },
            {
                ingredient: "onion",
                amount: 1,
                measurement: "kg",
                details: "thinly sliced"
            },
            {
                ingredient: "thyme",
                amount: 10,
                measurement: "sprigs",
                details: "leaves picked"
            },
            {
                ingredient: "garlic",
                amount: 4,
                measurement: "cloves",
                details: "thinly sliced"               
            },
            {
                ingredient: "sugar",
                amount: 1,
                measurement: "tsp",
                details: ""               
            },
            {
                ingredient: "beef stock",
                amount: 1.5,
                measurement: "liters",
                details: ""               
            },
            {
                ingredient: "sourdough",
                amount: 4,
                measurement: "slices",
                details: ""               
            },
            {
                ingredient: "gruyere cheese",
                amount: 200,
                measurement: "g",
                details: "grated"               
            },
            {
                ingredient: "worcestershire sauce",
                amount: 10,
                measurement: "dashes",
                details: ""               
            },
            {
                ingredient: "salt",
                amount: 1,
                measurement: "pinch",
                details: "as needed"               
            }
        ],
        suppliesNeeded: [
            "large pot", 
            "oven-safe bowls/containers",
            "oven",
            "stovetop"
        ],
        steps: [
            "Melt butter and vegetable oil in large pot, then add onions, 3/4 of the thyme, and salt. Cook for 1 hour, stirring regularly, until caramelized. Add garlic and sugar for final 15 minutes.",
            "Pour in beef stock and bring to a boil. Simmer 30 minutes until somewhat reduced and onions have melded with stock.",
            "Toast sourdough, cover with gruyere, place on top of soup (divided between oven-safe containers), and heat in oven until cheese is bubbling."
        ],
        notes: []
    },
    /* Hummus */
    {
        title: "Hummus",
        description: "Creamy and flavorful chickpea dip with hints of garlic, lemon, and tahini.",
        difficulty: "Moderate",
        durationInMinutes: 40,
        dietaryDescriptors: ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free"],
        ingredientsNeeded: [
            {
                ingredient: "chickpeas",
                amount: 1,
                measurement: "can",
                details: "rinsed and drained"
            },
            {
                ingredient: "baking soda",
                amount: 1,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "lemon juice",
                amount: 0.25,
                measurement: "cups",
                details: ""
            },
            {
                ingredient: "garlic",
                amount: 1,
                measurement: "clove",
                details: "roughly chopped"
            },
            {
                ingredient: "salt",
                amount: 1,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "tahini",
                amount: 0.5,
                measurement: "cups",
                details: ""
            },
            {
                ingredient: "ice water",
                amount: 0.5,
                measurement: "cups",
                details: ""
            },
            {
                ingredient: "cumin",
                amount: 1,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "paprika",
                amount: 1,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "parsley",
                amount: 1,
                measurement: "sprinkle",
                details: "freshly chopped"
            },
            {
                ingredient: "olive oil",
                amount: 1,
                measurement: "tbsp",
                details: ""
            }
        ],
        suppliesNeeded: [
            "medium saucepan",
            "stovetop",
            "food processor",
            "bowl"
        ],
        steps: [
            "Add chickpeas and baking soda to saucepan, cover with a few inches of water, bring to a boil, and let simmer until chickpea skins are falling off (about 20 minutes). Reduce heat if needed to avoid overflowing.",
            "Drain chickpeas, rinse with cold water, and set aside.",
            "Add lemon juice, garlic, and salt to food processor and blend until garlic is very finely chopped.",
            "Add tahini to food processor and blend until thick and creamy.",
            "Continue blending while adding ice water, until smooth.",
            "Add chickpeas, cumin, and olive oil. Blend until smooth.",
            "Sprinkle with paprika and parsley."
        ],
        notes: []
    },
    /* Baked Chicken Thighs */
    {
        title: "Baked Chicken Thighs",
        description: "Tender and juicy chicken thighs seasoned with garlic, onion, and Italian seasoning, baked to perfection.",
        difficulty: "Easy",
        durationInMinutes: 60,
        dietaryDescriptors: [],
        ingredientsNeeded: [
            {
                ingredient: "chicken thighs",
                amount: 3,
                measurement: "lbs",
                details: "skin-on"
            },
            {
                ingredient: "olive oil",
                amount: 2,
                measurement: "tbsp",
                details: ""
            },
            {
                ingredient: "salt",
                amount: 2,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "garlic powder",
                amount: 2,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "onion powder",
                amount: 2,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "italian seasoning",
                amount: 2,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "black pepper",
                amount: 1,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "paprika",
                amount: 1,
                measurement: "tsp",
                details: ""
            }
        ],
        suppliesNeeded: [
            "baking sheet",
            "small bowl",
            "foil",
            "paper towel",
            "oven"
        ],
        steps: [
            "Preheat oven to 400 degrees (F) and line baking sheet with foil.",
            "Pat chicken thighs dry with paper towel, place on baking sheet, and drizzle with olive oil.",
            "In small bowl, mix together all seasonings, then sprinkle over chicken evenly.",
            "Bake chicken in preheated oven for 35-45 minutes, until baked evenly."
        ]
    },
    /* Chocolate Chip Kale Cookies */
    {
        title: "Chocolate Chip Kale Cookies",
        description: "Irresistibly chewy cookies infused with chocolate chips and nutritious kale for a surprising twist.",
        difficulty: "Easy",
        durationInMinutes: 22,
        dietaryDescriptors: ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free"],
        ingredientsNeeded: [
            {
                ingredient: "flour",
                amount: 1,
                measurement: "cup",
                details: "loosely packed"
            },
            {
                ingredient: "baking soda",
                amount: 0.5,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "salt",
                amount: 0.25,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "sugar",
                amount: 0.5,
                measurement: "cup",
                details: ""
            },
            {
                ingredient: "chocolate chips",
                amount: 0.5,
                measurement: "cup",
                details: ""
            },
            {
                ingredient: "milk",
                amount: 2,
                measurement: "tbsp",
                details: ""
            },
            {
                ingredient: "butter",
                amount: 2,
                measurement: "tbsp",
                details: "melted"
            },
            {
                ingredient: "vanilla extract",
                amount: 0.25,
                measurement: "tsp",
                details: ""
            },
            {
                ingredient: "kale",
                amount: 1,
                measurement: "cup",
                details: "stems removed"
            }
        ],
        suppliesNeeded: [
            "knife",
            "cutting board",
            "medium bowl",
            "oven",
            "cookie tray"
        ],
        steps: [
            "Preheat oven to 325 degrees (F).",
            "Chop kale as finely as possible.",
            "In medium bowl, combine all dry ingredients except for the kale.",
            "Stir in remaining ingredients until a dough is formed.",
            "Roll into balls, and place onto cookie tray.",
            "Bake for 12 minutes, and let cool for 10 minutes to firm up texture."
        ]
    },
    /* Spag Bol */
    {
        title: "Spaghetti Bolognese",
        description: "Classic Italian pasta dish with savory tomato sauce and ground beef.",
        difficulty: "Moderate",
        durationInMinutes: 60,
        dietaryDescriptors: [],
        ingredientsNeeded: [
            {
                ingredient: "spaghetti",
                amount: 1,
                measurement: "pound",
                details: ""
            },
            {
                ingredient: "ground beef",
                amount: 1,
                measurement: "pound",
                details: ""
            },
            {
                ingredient: "onion",
                amount: 1,
                measurement: "large",
                details: "diced"
            },
            {
                ingredient: "garlic",
                amount: 3,
                measurement: "cloves",
                details: "minced"
            },
            {
                ingredient: "canned tomatoes",
                amount: 2,
                measurement: "cups",
                details: "crushed"
            },
            {
                ingredient: "tomato paste",
                amount: 2,
                measurement: "tablespoons",
                details: ""
            },
            {
                ingredient: "red wine",
                amount: 0.5,
                measurement: "cup",
                details: ""
            },
            {
                ingredient: "olive oil",
                amount: 2,
                measurement: "tablespoons",
                details: ""
            },
            {
                ingredient: "dried oregano",
                amount: 1,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "salt",
                amount: 1,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "black pepper",
                amount: 0.5,
                measurement: "teaspoon",
                details: ""
            }
        ],
        suppliesNeeded: [
            "large pot",
            "skillet",
            "wooden spoon",
            "colander"
        ],
        steps: [
            "Cook spaghetti according to package instructions until al dente. Drain and set aside.",
            "In a skillet, heat olive oil over medium heat. Add onion and garlic, and cook until softened.",
            "Add ground beef to the skillet and cook until browned. Drain excess fat if needed.",
            "Stir in crushed tomatoes, tomato paste, red wine, oregano, salt, and pepper. Simmer for 20-30 minutes.",
            "Serve sauce over cooked spaghetti. Enjoy!"
        ],
        notes: []
    },
    /* Chicken Stir Fry */
    {
        title: "Chicken Stir-Fry",
        description: "Quick and easy Asian-inspired dish with tender chicken and colorful vegetables.",
        difficulty: "Easy",
        durationInMinutes: 30,
        dietaryDescriptors: [],
        ingredientsNeeded: [
            {
                ingredient: "chicken breast",
                amount: 2,
                measurement: "pieces",
                details: "boneless, skinless, thinly sliced"
            },
            {
                ingredient: "soy sauce",
                amount: 3,
                measurement: "tablespoons",
                details: ""
            },
            {
                ingredient: "sesame oil",
                amount: 2,
                measurement: "teaspoons",
                details: ""
            },
            {
                ingredient: "garlic",
                amount: 2,
                measurement: "cloves",
                details: "minced"
            },
            {
                ingredient: "ginger",
                amount: 1,
                measurement: "tablespoon",
                details: "minced"
            },
            {
                ingredient: "vegetables (bell peppers, broccoli, carrots, etc.)",
                amount: 4,
                measurement: "cups",
                details: "sliced"
            },
            {
                ingredient: "vegetable oil",
                amount: 2,
                measurement: "tablespoons",
                details: ""
            },
            {
                ingredient: "rice",
                amount: 2,
                measurement: "cups",
                details: "cooked"
            },
            {
                ingredient: "green onions",
                amount: 2,
                measurement: "stalks",
                details: "sliced"
            },
            {
                ingredient: "sesame seeds",
                amount: 1,
                measurement: "tablespoon",
                details: ""
            }
        ],
        suppliesNeeded: [
            "wok or large skillet",
            "spatula",
            "cutting board",
            "knife"
        ],
        steps: [
            "In a bowl, marinate chicken slices with soy sauce and sesame oil. Let it sit for 15 minutes.",
            "Heat vegetable oil in a wok or large skillet over medium-high heat. Add garlic and ginger, and cook until fragrant.",
            "Add marinated chicken to the wok and stir-fry until cooked through. Remove chicken from the wok and set aside.",
            "In the same wok, add more oil if needed and stir-fry vegetables until crisp-tender.",
            "Return chicken to the wok and toss with vegetables. Cook for an additional 2-3 minutes.",
            "Serve stir-fry over cooked rice. Garnish with sliced green onions and sesame seeds. Enjoy!"
        ],
        notes: []
    },
    /* Lentil Soup */
    {
        title: "Lentil Soup",
        description: "Hearty and nutritious soup made with lentils, vegetables, and flavorful spices.",
        difficulty: "Easy",
        durationInMinutes: 45,
        dietaryDescriptors: ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free"],
        ingredientsNeeded: [
            {
                ingredient: "brown lentils",
                amount: 1,
                measurement: "cup",
                details: "rinsed"
            },
            {
                ingredient: "carrots",
                amount: 2,
                measurement: "medium",
                details: "diced"
            },
            {
                ingredient: "celery",
                amount: 2,
                measurement: "stalks",
                details: "diced"
            },
            {
                ingredient: "onion",
                amount: 1,
                measurement: "large",
                details: "diced"
            },
            {
                ingredient: "garlic",
                amount: 3,
                measurement: "cloves",
                details: "minced"
            },
            {
                ingredient: "vegetable broth",
                amount: 4,
                measurement: "cups",
                details: ""
            },
            {
                ingredient: "canned tomatoes",
                amount: 1,
                measurement: "can",
                details: ""
            },
            {
                ingredient: "cumin",
                amount: 1,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "paprika",
                amount: 1,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "bay leaf",
                amount: 1,
                measurement: "piece",
                details: ""
            },
            {
                ingredient: "salt",
                amount: 1,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "black pepper",
                amount: 0.5,
                measurement: "teaspoon",
                details: ""
            }
        ],
        suppliesNeeded: [
            "large pot",
            "wooden spoon",
            "ladle",
            "knife",
            "cutting board"
        ],
        steps: [
            "In a large pot, heat some olive oil over medium heat. Add onions, carrots, and celery. Cook until softened, about 5 minutes.",
            "Add minced garlic, cumin, and paprika. Stir for another minute until fragrant.",
            "Add lentils, diced tomatoes, vegetable broth, bay leaf, salt, and pepper. Bring to a boil, then reduce heat and simmer for 30 minutes or until lentils are tender.",
            "Adjust seasoning to taste and remove bay leaf before serving."
        ],
        notes: []
    },
    /* Dairy-free Banana Bread */
    {
        title: "Dairy-Free Banana Bread",
        description: "Moist and flavorful banana bread made without dairy products, perfect for a delicious breakfast or snack.",
        difficulty: "Easy",
        durationInMinutes: 60,
        dietaryDescriptors: ["Vegan", "Dairy-Free"],
        ingredientsNeeded: [
            {
                ingredient: "ripe bananas",
                amount: 3,
                measurement: "large",
                details: "mashed"
            },
            {
                ingredient: "flour",
                amount: 2,
                measurement: "cups",
                details: ""
            },
            {
                ingredient: "granulated sugar",
                amount: 0.75,
                measurement: "cup",
                details: ""
            },
            {
                ingredient: "vegetable oil",
                amount: 0.5,
                measurement: "cup",
                details: ""
            },
            {
                ingredient: "plant-based milk",
                amount: 0.5,
                measurement: "cup",
                details: ""
            },
            {
                ingredient: "vanilla extract",
                amount: 1,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "baking powder",
                amount: 1,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "baking soda",
                amount: 0.5,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "salt",
                amount: 0.5,
                measurement: "teaspoon",
                details: ""
            },
            {
                ingredient: "chocolate chips",
                amount: null,
                measurement: "",
                details: ""
            }
        ],
        suppliesNeeded: [
            "mixing bowl",
            "whisk",
            "loaf pan",
            "oven"
        ],
        steps: [
            "Preheat oven to 350°F (175°C). Grease and flour a 9x5-inch loaf pan.",
            "In a large mixing bowl, combine mashed bananas, sugar, oil, plant-based milk, and vanilla extract. Mix until well combined.",
            "Add flour, baking powder, baking soda, and salt to the wet ingredients. Stir until just combined. Do not overmix.",
            "Fold in chopped nuts or chocolate chips if desired.",
            "Pour the batter into the prepared loaf pan and smooth the top with a spatula.",
            "Bake in the preheated oven for 50-60 minutes, or until a toothpick inserted into the center comes out clean.",
            "Allow the banana bread to cool in the pan for 10 minutes before transferring it to a wire rack to cool completely."
        ],
        notes: []
    }

]
