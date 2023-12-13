import { EGods, EMythologies, EHeroGender, EClassSubType, EClassType } from "../enums";
import { CreateRoleDto } from "../features/role/dto/create-role.dto";

const greekZeusRoleList: CreateRoleDto[] = [
    {
        name: "Spartan Hoplites",
        roleType: EClassType.Melee,
        roleSubType: EClassSubType.HeavyMelee,
        shortDesc:
            "Elite warriors of ancient Sparta, known for their exceptional combat skills and unwavering discipline.",
        longDesc:
            "Spartan Hoplites were the backbone of the Spartan army, wielding spears and shields, and were feared for their fierce combat tactics.",
        images: [
            {
                main: "ipfs://a-man-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://a-woman-main-image.png",
                sex: EHeroGender.W,
            },
            {
                main: "ipfs://a-nonbinary-main-image.png",
                sex: EHeroGender.N,
            },
        ],
        strength: 7,
        dexterity: 3,
        intelligence: 0,
        constitution: 5,
        luck: 0,
        armor: 50,
        mythology: EMythologies.Greek,
        god: EGods.Zeus,
    },
    {
        name: "Athenian Archers",
        roleType: EClassType.Ranged,
        roleSubType: EClassSubType.Archers,
        shortDesc: "Expert marksmen from ancient Athens, skilled in long-range combat and precision shooting.",
        longDesc:
            "Athenian Archers were crucial in battles, providing ranged support with their bows and arrows. They were revered for their accuracy and agility.",
        images: [
            {
                main: "ipfs://a-man-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://a-woman-main-image.png",
                sex: EHeroGender.W,
            },
            {
                main: "ipfs://a-nonbinary-main-image.png",
                sex: EHeroGender.N,
            },
        ],
        strength: 0,
        dexterity: 8,
        intelligence: 5,
        constitution: 2,
        luck: 0,
        armor: 20,
        mythology: EMythologies.Greek,
        god: EGods.Zeus,
    },
    {
        name: "Delphic Oracles",
        roleType: EClassType.Mage,
        roleSubType: EClassSubType.Diviners,
        shortDesc: "Mystical seers of Delphi, possessing the gift of prophecy and deep insight into the future.",
        longDesc:
            "Delphic Oracles were revered as intermediaries between gods and mortals, providing prophetic guidance during significant events.",
        images: [
            {
                main: "ipfs://a-man-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://a-woman-main-image.png",
                sex: EHeroGender.W,
            },
            {
                main: "ipfs://a-nonbinary-main-image.png",
                sex: EHeroGender.N,
            },
        ],
        strength: 1,
        dexterity: 1,
        intelligence: 10,
        constitution: 3,
        luck: 8,
        armor: 10,
        mythology: EMythologies.Greek,
        god: EGods.Zeus,
    },
];

const greekPoseidonUnitList = [
    {
        name: "Nereid Guardians",
        roleType: EClassType.Melee,
        roleSubType: EClassSubType.LightMelee,
        shortDesc: "Loyal sea nymphs devoted to the protection of the ocean realm.",
        longDesc:
            "Nereid Guardians are graceful and swift, skilled in both land and sea combat. They are entrusted with safeguarding the secrets and creatures of the deep.",
        images: [
            {
                main: "ipfs://n-nereid-guardians-main-image.png",
                sex: EHeroGender.N,
            },
            {
                main: "ipfs://m-nereid-guardians-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://w-nereid-guardians-main-image.png",
                sex: EHeroGender.W,
            },
        ],
        strength: 6,
        dexterity: 8,
        intelligence: 4,
        constitution: 6,
        luck: 0,
        armor: 40,
        mythology: EMythologies.Greek,
        god: EGods.Poseidon,
    },
    {
        name: "Trident Warriors",
        roleType: EClassType.Melee,
        roleSubType: EClassSubType.SpecializedMelee,
        shortDesc: "Elite warriors chosen by Poseidon, wielding tridents with unmatched precision.",
        longDesc:
            "Trident Warriors are handpicked by Poseidon himself, trained to be formidable warriors on both land and sea. Their mastery of the trident makes them a formidable force.",
        images: [
            {
                main: "ipfs://trident-warriors-main-image.png",
                sex: EHeroGender.M,
            },
        ],
        strength: 8,
        dexterity: 7,
        intelligence: 2,
        constitution: 7,
        luck: 0,
        armor: 55,
        mythology: EMythologies.Greek,
        god: EGods.Poseidon,
    },
    {
        name: "Oceanic Mystics",
        roleType: EClassType.Mage,
        roleSubType: EClassSubType.Elementalists,
        shortDesc: "Mystics attuned to the elemental forces of the ocean, wielding powerful water-based magic.",
        longDesc:
            "Oceanic Mystics draw their power from the depths of the ocean, manipulating water and unleashing devastating magical attacks. They serve as formidable spellcasters in battles.",
        images: [
            {
                main: "ipfs://w-oceanic-mystics-main-image.png",
                sex: EHeroGender.W,
            },
            {
                main: "ipfs://m-oceanic-mystics-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://n-oceanic-mystics-main-image.png",
                sex: EHeroGender.N,
            },
        ],
        strength: 3,
        dexterity: 5,
        intelligence: 9,
        constitution: 4,
        luck: 7,
        armor: 30,
        mythology: EMythologies.Greek,
        god: EGods.Poseidon,
    },
];

const greekAthenaUnitList = [
    {
        name: "Argive Protectors",
        roleType: EClassType.Melee,
        roleSubType: EClassSubType.HeavyMelee,
        shortDesc: "Elite guardians chosen by Athena to defend the city of Argos with unwavering strength and valor.",
        longDesc:
            "Argive Protectors are renowned for their unyielding defense and exceptional combat skills. They stand as a formidable force in the front lines of battle.",
        images: [
            {
                main: "ipfs://m-argive-protectors-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://n-argive-protectors-main-image.png",
                sex: EHeroGender.N,
            },
            {
                main: "ipfs://w-argive-protectors-main-image.png",
                sex: EHeroGender.W,
            },
        ],
        strength: 9,
        dexterity: 4,
        intelligence: 2,
        constitution: 8,
        luck: 0,
        armor: 60,
        mythology: EMythologies.Greek,
        god: EGods.Athena,
    },
    {
        name: "Olympian Archers",
        roleType: EClassType.Ranged,
        roleSubType: EClassSubType.Archers,
        shortDesc: "Expert marksmen chosen by Athena, known for their precision and deadly accuracy with bows.",
        longDesc:
            "Olympian Archers are highly skilled in ranged combat, delivering deadly accurate shots from a distance. They are invaluable assets in both offense and defense.",
        images: [
            {
                main: "ipfs://m-olympian-archers-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://w-olympian-archers-main-image.png",
                sex: EHeroGender.W,
            },
            {
                main: "ipfs://n-olympian-archers-main-image.png",
                sex: EHeroGender.N,
            },
        ],
        strength: 1,
        dexterity: 8,
        intelligence: 4,
        constitution: 3,
        luck: 0,
        armor: 20,
        mythology: EMythologies.Greek,
        god: EGods.Athena,
    },
    {
        name: "Divine Oracles",
        roleType: EClassType.Mage,
        roleSubType: EClassSubType.Diviners,
        shortDesc: "Oracles blessed by Athena, possessing the gift of prophecy and deep insight into the future.",
        longDesc:
            "Divine Oracles serve as conduits of divine wisdom, providing invaluable guidance and insights. They are revered for their ability to foresee significant events.",
        images: [
            {
                main: "ipfs://w-divine-oracles-main-image.png",
                sex: EHeroGender.W,
            },
            {
                main: "ipfs://m-divine-oracles-m-main-image.png",
                sex: EHeroGender.M,
            },
            {
                main: "ipfs://n-divine-oracles-m-main-image.png",
                sex: EHeroGender.N,
            },
        ],
        strength: 2,
        dexterity: 3,
        intelligence: 10,
        constitution: 5,
        luck: 8,
        armor: 10,
        mythology: EMythologies.Greek,
        god: EGods.Athena,
    },
];

export const greekUnitsList = greekZeusRoleList.concat(greekPoseidonUnitList).concat(greekAthenaUnitList);
