elements.liquid_cancer = {
    color: ["#57144b","#6c1450","#960d74"],
    behavior: behaviors.LIQUID,
    reactions: {
        "cell": { "elem2":"cancer", "chance":0.005 },
        "frog": { "elem2":"cancer", "chance":0.005 },
        "tadpole": { "elem2":"cancer", "chance":0.005 },
        "fish": { "elem2":"cancer", "chance":0.005 },
        "rat": { "elem2":"cancer", "chance":0.005 },
        "bird": { "elem2":"cancer", "chance":0.005 },
        "sugar": { "elem2":"liquid_cancer", "chance":0.04 },
        "sugar_water": { "elem2":"liquid_cancer", "chance":0.05 },
        "": { "elem1":[null,"dna"], "chance":0.01 },
        "poison": { "elem1":null, "chance":0.01 },
        "proton": { "elem1":null, "chance":0.04 },
    },
    tempHigh: 115,
    stateHigh: "plague",
    state: "liquid",
    density: 1035,
    category: "life",
    breakInto: ["dirty_water","dna","dna","dna","dna"]
};


elements.pool_water.reactions.liquid_cancer = elements.pool_water.reactions.cancer;
elements.meat.reactions.liquid_cancer = elements.meat.reactions.cancer;
elements.body.reactions.liquid_cancer = elements.body.reactions.cancer;
elements.head.reactions.liquid_cancer = elements.head.reactions.cancer;
elements.bleach.reactions.liquid_cancer = elements.bleach.reactions.cancer;
elements.blood.reactions.liquid_cancer = elements.blood.reactions.cancer;
elements.vaccine.reactions.liquid_cancer = elements.vaccine.reactions.cancer;
elements.antibody.reactions.liquid_cancer = elements.antibody.reactions.cancer;
elements.primordial_soup.reactions.liquid_cancer = elements.primordial_soup.reactions.cancer;


elements.radiation.reactions.blood = { "elem2":"liquid_cancer", "chance":0.4 };

elements.cancer.stateHigh = "liquid_cancer";
elements.cancer.reactions.liquid_cancer = {"elem2": "cancer", "chance":0.005};
elements.cancer.breakInto = ["liquid_cancer", "liquid_cancer", "liquid_cancer", "dna"];

elements.cancer.reactions.poison = { "elem1": "liquid_cancer", "chance": 0.04 };
elements.bleach.reactions.cancer = { "elem2": "liquid_cancer", "chance": 0.04 };
elements.vaccine.reactions.cancer = { "elem2":"liquid_cancer", "chance":0.04 };
elements.antibody.reactions.cancer = { "elem2":"liquid_cancer", "chance":0.04 };



elements.virus.ignore = ["fire","smoke","soap","plague","cancer", "liquid_cancer"];