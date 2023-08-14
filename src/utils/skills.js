// { //array index num                   this num for enemy skill use only
//     name: string,                     required
//     description: string,              required
//     decideBy: "atk"/"pow"/"true",     required decideBy type atk pow true
//     target: "opponent"/"self",        required target if opponent means harm, the base damage should be >= 0, if self means heal, the base damage should be >= 0 and value wont be reduce by stats or increase by stats
//     baseHpDamage: num,                required
//     baseMpDamage: num,                required
//     buff: [],                         required
//     debuff: [],                       required
//     costType: "mp"/"hp",              required
//     costValue: num,                   required
//     tags: [string,string]             for easy search
// },
export default [
    { //0 for enemy skill use only
        name: "slash",
        description: "use weapon slash the enemy",
        decideBy: "atk",
        target: "opponent",
        baseHpDamage: 1,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 0,
        tags: ["atk","no-cost"]
    },
    { //1
        name: "fireball",
        description: "burn them",
        decideBy: "pow",
        target: "opponent",
        baseHpDamage: 5,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 5,
        tags: ["pow","fire"]
    },
    { //2
        name: "heal",
        description: "the holy power cure me!",
        decideBy: "pow",
        target: "self",
        baseHpDamage: 30,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 10,
        tags: ["pow","heal"]
    },
    { //3
        name: "holy sword",
        description: "let the holy power clean the way",
        decideBy: "true",
        target: "opponent",
        baseHpDamage: 100,
        baseMpDamage: 0,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 100,
        tags: ["true","holy"]
    },
    { //4
        name: "knife throw",
        description: "throw the knife!!",
        decideBy: "true",
        target: "opponent",
        baseHpDamage: 5,
        baseMpDamage: 0,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 0,
        tags: ["true","no-cost"]
    },
    { //5
        name: "triple slash",
        description: "slash enemy with better skill",
        decideBy: "atk",
        target: "opponent",
        baseHpDamage: 15,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 0,
        tags: ["atk","rare"]
    },
    { //6
        name: "kaze slash",
        description: "slash enemy with wind",
        decideBy: "pow",
        target: "opponent",
        baseHpDamage: 12,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 5,
        tags: ["pow","wind"]
    },
    { //7
        name: "blood sword",
        description: "use own blood to deal plenty damage",
        decideBy: "true",
        target: "opponent",
        baseHpDamage: 50,
        baseMpDamage: 0,
        buff: [],
        debuff: [],
        costType: "hp",
        costValue: 25,
        tags: ["true","blood"]
    },
    { //8
        name: "grand heal",
        description: "the holy power cure me more!",
        decideBy: "pow",
        target: "self",
        baseHpDamage: 60,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 20,
        tags: ["pow","heal"]
    },
    { //9
        name: "anti-magic",
        description: "the mystery slash that destroy magic",
        decideBy: "atk",
        target: "opponent",
        baseHpDamage: 15,
        baseMpDamage: 30,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 0,
        tags: ["atk","anti-mafic"]
    },
    { //10
        name: "lightning-strike",
        description: "call the thunder",
        decideBy: "pow",
        target: "opponent",
        baseHpDamage: 10,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 7,
        tags: ["pow","thunder"]
    },
    { //11
        name: "water-flow",
        description: "flood the enemy",
        decideBy: "pow",
        target: "opponent",
        baseHpDamage: 8,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 6,
        tags: ["pow","water"]
    },
    { //12
        name: "rock spear",
        description: "spear! form!",
        decideBy: "pow",
        target: "opponent",
        baseHpDamage: 12,
        baseMpDamage: NaN,
        buff: [],
        debuff: [],
        costType: "mp",
        costValue: 8,
        tags: ["pow","earth"]
    },
]