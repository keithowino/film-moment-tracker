import Components from "./components";

const parentCompanyBrand = "Pick Axe & Shovel";
const brand = "film tracker";
const homeTabTitle = brand + " | " + parentCompanyBrand;
const animeTabTitle = brand + " | " + "Anime";
const trackerTabTitle = brand + " | " + "Tracker";
const updatesTabTitle = brand + " | " + "Updates";
const otherTabTitle = brand + " | " + "Other";

const mainTrackerLinkStyles = () => {
    return (
        "hover:border-r-2 hover:border-l-2 hover:border-blue-700 w-[25px] px-0.5"
    )
}

const NewVolCellDisplay = (newVolStat) => {
    let output;
    if (newVolStat === "true") {
        output = "bg-blue-700 text-white";
    } else if (newVolStat === "unknown") {
        output = "bg-red-600 text-white";
    } else if (newVolStat === "complete") {
        output = "bg-neutral-300 text-neutral-100";
    }
    return output;
};

const treasureCellDisplay = (treasureStat, newVolStat) => {
    let output;
    if (treasureStat === "yes") {
        output = "bg-pink-500";
    } else if (newVolStat === "no interest") {
        output = "";
    } else {
        output = "bg-pink-400";
    }
    return output;
};

const commentCelDisplay = (newVolStat, commentStat) => {
    let output;
    if (newVolStat === "no interest") {
        output = "";
    } else if (commentStat === "nill") {
        output = "bg-pink-400";
    } else {
        output = "bg-pink-500";
    }
    return output;
};

const films = [
    {
        title: "my instant death ability is overpowered",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "98",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "the overly cautious hero",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "btooom",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "begining",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "seven seasons",
        treasure: "no",
        'last stream': 's02',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "queentesalin queentuplets",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "higehiro",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "danganropa",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "assassination classroom",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "dota dragon blood",
        treasure: "yes",
        'last stream': 's01',
        completed: "no",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "kakegurui",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "elfen lied",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "the worlds most skillful assassin get reincarnated as an aristrocrat",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "bear, bear, bear",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "reincarnated as a spider so what",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "reincarnated as a vending machine",
        treasure: "no",
        'last stream': 's02',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "atom",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "sasaki & peeps",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "parasite the maxim",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "atack on titan",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "hero x",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "my home hero",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "don't toy with me miss nagatoro",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "rent a girlfriend",
        treasure: "no",
        'last stream': 's02',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "ghost in a shell",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "black clover",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "the unwanted undead adventurer",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "death note",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "sword art online",
        treasure: "yes",
        'last stream': 's04',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "death parade",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "demon slayer",
        treasure: "yes",
        'last stream': 's05',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "why raeliana ended up at the dukes mansion",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "knight's & magic",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "failure frame",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "overloard",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "prison school",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "hero academia",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "demon lord 2099",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "overflow",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "uzaki chan want's to go out",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "tomo chan want's to be a real girl",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "how not to summon a demon lord",
        treasure: "no",
        'last stream': 's02',
        completed: "no",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "sweet reincarnation",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "Watch again",
        genre: "anime"
    }, 
    {
        title: "blue lock",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "the brilliant healer's new life in the shadows",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "monster",
        treasure: "yes",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "(w) e69",
        genre: "anime"
    }, 
    {
        title: "eminence in shadow",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "hokaido girls are super adorable",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "dr. stone",
        treasure: "yes",
        'last stream': 's03',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "spice and wolf",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "tomodachi ( friends game )",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "twilight of the gods",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "ended at e08",
        genre: "anime"
    },
    {
        title: "a gatherers adventure in isekai",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "no interest",
        comment: "e02",
        genre: "anime"
    }, 
    {
        title: "i am sorry mom",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "the angel next door spoils me roten",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "kaiju no. 8",
        treasure: "yes",
        'last stream': 's02',
        completed: "no",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "the girl downstairs",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "my tiny senpai",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "dangers of my heart",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "silo",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "other"
    },
    {
        title: "solo leveling",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "nill",
        comment: "(d) dubbed",
        genre: "anime"
    },
    {
        title: "mushoku tensei ( jobless reincarnation )",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "(d) dubbed",
        genre: "anime"
    },
    {
        title: "gosick",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "(w) e22",
        genre: "anime"
    },
    {
        title: "bullet bullet",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "no interest",
        comment: "e04",
        genre: "anime"
    },
    {
        title: "for mankind",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "other"
    },
    {
        title: "aesthetica of a rogue hero",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "zoom 100",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "your honor",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "other"
    }, 
    {
        title: "the strongest sage with the weakest crest",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "kanchigai no atelier meister",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "delicious in dungeon",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "arifureta",
        treasure: "yes",
        'last stream': 's03',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "the rising of the shield hero",
        treasure: "no",
        'last stream': 's04',
        completed: "no",
        'new volume': "unknown",
        comment: "e07",
        genre: "anime"
    },
    {
        title: "clevates",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "freiren",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "fate",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "no interest",
        comment: "e13",
        genre: "anime"
    },
    {
        title: "quantico",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "(w) e09",
        genre: "other"
    }, 
    {
        title: "reincarnated as a sword",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "kuromokuro",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "(w) e11",
        genre: "anime"
    },
    {
        title: "dan da dan",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "wistoria's wand and sword",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "tsukimichi - moonlight fantasy -",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "spy x family",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "spy classroom",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "spirit chronicals",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "alya sometimes hides her feelings in russian",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "berserk of gluttony",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "can i ask you for one last thing",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "e04",
        genre: "anime"
    },
    {
        title: "chillin' in another world with level 2 super cheat powers",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "liar liar",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "cells at work",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "highschool of the dead",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "days with my step-sister",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "love flops",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "deadman wonderland",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "gachiakuta",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "e11",
        genre: "anime"
    },
    {
        title: "gamers!",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "giji harem",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "lookism",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "star",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "guimi zhi zhu xiaochou pian ( land of mysteries ' clown arc ' )",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "the misfit of demon king academy",
        treasure: "no",
        'last stream': 's02',
        completed: "no",
        'new volume': "true",
        comment: "(w) s02a08",
        genre: "anime"
    },
    {
        title: "the most notorious talker creates the worlds greatest clan",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "farming life in another world",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "in-spectre",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "summond to another world for the second time",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "skeleton knight",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "to your eternal",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "psycho-pass",
        treasure: "yes",
        'last stream': 's03',
        completed: "no",
        'new volume': "unknown",
        comment: "(w) e05",
        genre: "anime"
    },
    {
        title: "tower of god",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "that time i got reincarnated as a slime",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "black summoner",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "bofuri",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "scissor seven",
        treasure: "yes",
        'last stream': 's03',
        completed: "yes",
        'new volume': "true",
        comment: "movie expexted",
        genre: "anime"
    },
    {
        title: "c the money of soul and possibility control",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "death march",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "log horizon",
        treasure: "no",
        'last stream': 's03',
        completed: "no",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "monster musume no iru nichijou",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "the apothecary diaries",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "the beginning after the end",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "jijutsu kaisen",
        treasure: "yes",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "saitama ( one punch man )",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "the duke of death and his maid",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "(w) e10",
        genre: "anime"
    }, 
    {
        title: "re: born",
        treasure: "yes",
        'last stream': 's01',
        completed: "no",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "toilet bound",
        treasure: "yes",
        'last stream': 's01',
        completed: "no",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "classroom of the elite",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    }, 
    {
        title: "horimiya",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "true",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "my dress - up darling",
        treasure: "yes",
        'last stream': 's02',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "my first girlfriend is a gal",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "complete",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "our last crusade or the rise of A new world",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "ragna crimson",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "renai boukun",
        treasure: "yes",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "secrets of the silent witch",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "shikimori is not just a cutie",
        treasure: "no",
        'last stream': 's01',
        completed: "no",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "the elusive samurai",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "nill",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "the king's avatar",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "no interest",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "nieR automata",
        treasure: "no",
        'last stream': 'ver1.1a part 2 1',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "anime"
    },
    {
        title: "gen v",
        treasure: "no",
        'last stream': 's01',
        completed: "yes",
        'new volume': "unknown",
        comment: "nill",
        genre: "other"
    },
];

let filmTitleArr = [];

for (let i = 0; i < films.length; i++) {
    filmTitleArr.push(films[i].title);
}

let sortedFilmTitleArr = filmTitleArr.sort();

export default {
    films, parentCompanyBrand, brand, homeTabTitle,
    mainTrackerLinkStyles, filmTitleArr, sortedFilmTitleArr, NewVolCellDisplay,
    treasureCellDisplay, commentCelDisplay, animeTabTitle, trackerTabTitle,
    updatesTabTitle, otherTabTitle
}