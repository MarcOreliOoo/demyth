import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Mythology } from "../mythology/mythologies.schema";
import { God } from "../god/gods.schema";
import { EClassSubType, EClassType, EHeroGender } from "../../enums";

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true, type: String, enum: EClassType, default: EClassType.Melee })
    roleType: EClassType;

    @Prop({ required: true, type: String, enum: EClassSubType, default: EClassSubType.HeavyMelee })
    roleSubType: EClassSubType;

    @Prop()
    shortDesc: string;

    @Prop()
    longDesc: string;

    @Prop([
        raw({
            main: { type: String },
            sex: { type: String, enum: EHeroGender, default: EHeroGender.M },
        }),
    ])
    images: [Record<string, any>];

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

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Mythology" })
    mythology: Mythology;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "God" })
    god: God;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
