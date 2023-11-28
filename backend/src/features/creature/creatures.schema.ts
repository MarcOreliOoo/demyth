import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Mythology } from "../mythology/mythologies.schema";
import { God } from "../god/gods.schema";
import { EClassSubType, EClassType } from "../../enums";

export type CreatureDocument = HydratedDocument<Creature>;

@Schema()
export class Creature {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true, type: String, enum: EClassType, default: EClassType.Melee })
    creatureType: EClassType;

    @Prop({ required: true, type: String, enum: EClassSubType, default: EClassSubType.HeavyMelee })
    creatureSubType: EClassSubType;

    @Prop()
    shortDesc: string;

    @Prop()
    longDesc: string;

    @Prop()
    image: string;

    @Prop()
    strength: number;

    @Prop()
    dexterity: number;

    @Prop()
    intelligence: number;

    @Prop()
    constitution: number;

    @Prop()
    luck: number;

    @Prop()
    armor: number;

    @Prop()
    fatigue: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Mythology" })
    mythology: Mythology;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "God" })
    god: God;
}

export const CreatureSchema = SchemaFactory.createForClass(Creature);
