import { EGods } from "../enums";
import { EMythologies } from "../enums";
import { CreateCreatureDto } from "../features/creature/dto/create-creature.dto";
import { EClassSubType, EClassType } from "../enums";

const greekZeusCreatureList: CreateCreatureDto[] = [
    {
        name: "blabla name",
        unitType: EClassType.Melee,
        subUnitType: EClassSubType.HeavyMelee,
        shortDesc: "blabla short",
        longDesc: "blabla long",
        image: "ipfs://main-image.png",
        strength: 7,
        dexterity: 3,
        intelligence: 0,
        constitution: 5,
        luck: 0,
        armor: 50,
        fatigue: 2,
        mythology: EMythologies.Greek,
        god: EGods.Zeus,
    },
];

const greekPoseidonCreatureList: CreateCreatureDto[] = [];
const greekAthenaCreatureList: CreateCreatureDto[] = [];

export const greekUnitsList = greekZeusCreatureList.concat(greekPoseidonCreatureList).concat(greekAthenaCreatureList);
