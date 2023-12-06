import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { God, GodDocument } from "./gods.schema";
import { EGods, EMythologies } from "../../enums";

export interface FindGodParams {
    name?: EGods;
    _id?: string;
    mythology?: string;
    mythologyName?: EMythologies;
}

@Injectable()
export class GodDbService {
    constructor(@InjectModel(God.name) private godModel: Model<GodDocument>) {}

    async save(aGod: GodDocument): Promise<GodDocument> {
        return await aGod.save();
    }

    async delete(id: string) {
        return await this.godModel.findByIdAndDelete(id).exec();
    }

    async findOneByName(god: EGods): Promise<GodDocument | null> {
        return await this.godModel.findOne({ name: god }).exec();
    }

    async findOneById(id: string): Promise<GodDocument | null> {
        return await this.godModel.findById(id).exec();
    }

    async findOne(filter: FindGodParams): Promise<GodDocument | null> {
        return await this.godModel.findOne(filter).exec();
    }

    async findAll(filter: FindGodParams): Promise<GodDocument[]> {
        return await this.godModel.find(filter).exec();
    }

    async findAllAndPopulate(filter: FindGodParams): Promise<GodDocument[]> {
        return await this.godModel.find(filter).populate("mythology").exec();
    }

    async findAllForMythId(mythId: string): Promise<GodDocument[]> {
        return await this.godModel.find({ mythology: mythId }).exec();
    }
}
