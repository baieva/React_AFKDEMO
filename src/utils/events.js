// Model of event
// {
//     head: {                              required
//         id: num,
//         header: string,
//         triggerable: bool,
//     },
//     contents: {                          require
//         content1: string,
//     },
//     buttons: {                          at least one require
//         button1: {
//             tags: [
//                 "xxx_increase/decrease", need value  if multiple, need to follow the order in array
//                 "add_skill",             need skills
//                 "battle",                need enemy
//                 "next_choice"/"end"      next_choice need nextId     must place at last      only one of them can be in the tags
//             ],
//             text: string,                button text
//             value: [     ?
//                 num,num
//             ],
//             skills: [    ?
//                 string,string
//             ,]
//             nextId: ? num,
//             enemy: {     ?
//                 name: string,
//                 portrait: string,
//                 stats: {
//                 hp:  num,
//                 mp: num,
//                 atk: num,
//                 def: num,
//                 pow: num,
//                 res: num,
//                 spd: num,
//                 luk: num,
//                 },
//                 skill: [ ?
//                     num,num
//                 ]
//             }
//         },
// },
export default [
    {
        head: {
            id: 0,
            header: "Goblin here!",
            triggerable: true,
        },
        contents: {
            content1: "A goblin jump out. And it's ready to fight!",
        },
        buttons: {
            button1: {
                tags: [
                    "battle",
                    "next_choice",
                ],
                text: "Fight!",
                nextId: 1,
                enemy: {
                    name: "goblin",
                    portrait: "( 8 V 8 )",
                    stats: {
                    hp: 20,
                    mp: 0,
                    atk: 9,
                    def: 1,
                    pow: 0,
                    res: 1,
                    spd: 3,
                    luk: 1,
                    },
                    skill: [
                        0
                    ]
                }
            },
            button2: {
                tags: [
                    "end",
                ],
                text: "Retreat!",
            }
        },
    },
    {
        head: {
            id: 1,
            header: "You Win",
            triggerable: false,
        },
        contents: {
            content1: "You beat the goblin. It's easy, isnt it?",
        },
        buttons: {
            button1: {
                tags: [
                    "agility_increase",
                    "end",
                ],
                text: "Loot and leave.",
                value: [
                    1
                ],
            }
        },
    },
    {
        head: {
            id: 2,
            header: "A cat",
            triggerable: true,
        },
        contents: {
            content1: "A cat sits on the bench and enjoys the good afternoon. You touch it with your bloody hands.",
        },
        buttons: {
            button1: {
                tags: [
                    "wisdom_increase",
                    "end",
                ],
                text: "What a wonderful day!",
                value: [
                    1
                ],
            },
            button2: {
                tags: [
                    "strength_increase",
                    "end",
                ],
                text: "Now I need to be better!",
                value: [
                    1
                ],
            },
            button3: {
                tags: [
                    "agility_increase",
                    "end",
                ],
                text: "I gonna play with this cutie!",
                value: [
                    1
                ],
            }
        },
    },
    {
        head: {
            id: 3,
            header: "A dragon!",
            triggerable: true,
        },
        contents: {
            content1: "A fire dragon is sitting in front of you. Dare to accept the challenge?",
        },
        buttons: {
            button1: {
                tags: [
                    "battle",
                    "next_choice",
                ],
                text: "Fight!",
                value: [
                    20
                ],
                nextId: 4,
                enemy: {
                    name: "dragon",
                    portrait: ">--/(  )\\---",
                    stats: {
                    hp: 2000,
                    mp: 1000,
                    atk: 90,
                    def: 120,
                    pow: 80,
                    res: 180,
                    spd: 80,
                    luk: 50,
                    },
                    skill: [
                        0,
                        1
                    ]
                }
            },
            button2: {
                tags: [
                    "end",
                ],
                text: "Retreat!",
            }
        },
    },
    {
        head: {
            id: 4,
            header: "You Win",
            triggerable: false,
        },
        contents: {
            content1: "You beat the dragon. What a bloody fight, isnt it?",
        },
        buttons: {
            button1: {
                tags: [
                    "agility_increase",
                    "strength_increase",
                    "wisdom_increase",
                    "end",
                ],
                text: "Loot and leave.",
                value: [
                    20,
                    20,
                    20
                ],
            }
        },
    },
    {
        head: {
            id: 5,
            header: "A vilage",
            triggerable: true,
        },
        contents: {
            content1: "There's a village, and u can have a rest!",
        },
        buttons: {
            button1: {
                tags: [
                    "hp_increase",
                    "mp_increase",
                    "end",
                ],
                text: "Good night!",
                value: [
                    200,
                    200
                ],
            }
        },
    },
    {
        head: {
            id: 6,
            header: "A mystic church",
            triggerable: true,
        },
        contents: {
            content1: "U find a church. There's a sword sits at the table in the middle",
        },
        buttons: {
            button1: {
                tags: [
                    "add_skill",
                    "end",
                ],
                text: "You touched sword. And grant a new power.",
                skills: [
                    3
                ,]
            }
        },
    },
]
/* copy model

*/