export enum EClassType {
    Melee = "Melee",
    Ranged = "Ranged",
    Mage = "Mage",
}

export enum EClassSubType {
    LightMelee = "Light Melee",
    HeavyMelee = "Heavy Melee",
    SpecializedMelee = "Specialized Melee",

    Archers = "Archers",
    Throwers = "Throwers",
    Marksmen = "Marksmen",

    Elementalists = "Elementalists",
    Enchanters = "Enchanters",
    Diviners = "Diviners",
}

export type TClassTypeMap = {
    [EClassType.Melee]: EClassSubType.HeavyMelee | EClassSubType.LightMelee | EClassSubType.SpecializedMelee;
    [EClassType.Ranged]: EClassSubType.Archers | EClassSubType.Throwers | EClassSubType.Marksmen;
    [EClassType.Mage]: EClassSubType.Elementalists | EClassSubType.Enchanters | EClassSubType.Diviners;
};
