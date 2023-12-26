import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { EHeroGender } from "../../enums";
import { User } from "../user/users.schema";

export type HeroDocument = HydratedDocument<Hero>;

@Schema({ collection: "heroes" })
export class Hero {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    user: User;

    @Prop({ required: true, unique: true, trim: true })
    name: string;

    @Prop({ required: true, type: String, enum: EHeroGender, default: EHeroGender.N })
    sex: EHeroGender;

    @Prop(
        raw({
            main: { type: String },
            active: { type: Boolean },
        }),
    )
    images: [Record<string, any>];

    @Prop({ type: Object, required: true })
    mythologyInfo: {
        _id: { type: mongoose.Schema.Types.ObjectId; ref: "Mythology" };
        name: string;
    };

    @Prop({ type: Object, required: true })
    godInfo: {
        _id: { type: mongoose.Schema.Types.ObjectId; ref: "God" };
        name: string;
    };

    @Prop({ type: Object, required: true })
    roleInfo: {
        _id: { type: mongoose.Schema.Types.ObjectId; ref: "Role" };
        name: string;
    };

    @Prop({ type: Object })
    stats: {
        vigor: number;
        dexterity: number;
        mind: number;
        energy: number;
        initiative: number;
    };

    @Prop()
    level: number;

    @Prop()
    xp: number;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
