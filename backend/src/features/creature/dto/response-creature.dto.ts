import { Transform } from "class-transformer";
import { EClassSubType, EClassType } from "../../../enums";
import { ObjectId } from "mongoose";

export class ResponseCreatureDto {
    @Transform((value) => value.obj._id.toString())
    _id: ObjectId;
    name: string;
    creatureType: EClassType;
    creatureSubType: EClassSubType;
    shortDesc: string;
    longDesc: string;
    image: string;
    strength: number;
    dexterity: number;
    intelligence: number;
    constitution: number;
    luck: number;
    armor: number;
    @Transform((value) => value.obj.mythology.toString())
    mythology: ObjectId;
    @Transform((value) => value.obj.god.toString())
    god: ObjectId;
}
