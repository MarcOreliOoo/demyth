import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Role, RoleDocument } from "./roles.schema";
import { EClassSubType, EClassType } from "../../enums";

export interface FindRoleParams {
    _Id?: string;
    name?: string;
    roleType?: EClassType;
    roleSubType?: EClassSubType;
    mythology?: string;
    god?: string;
}

@Injectable()
export class RoleDbService {
    constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

    async save(aRole: RoleDocument): Promise<RoleDocument> {
        return await aRole.save();
    }

    async delete(id: string) {
        return await this.roleModel.findByIdAndDelete(id).exec();
    }

    async findOneByName(role: string): Promise<RoleDocument | null> {
        return await this.roleModel.findOne({ name: role }).exec();
    }

    async findOneById(id: string): Promise<RoleDocument | null> {
        return await this.roleModel.findById(id).exec();
    }

    async findOne(filter: FindRoleParams): Promise<RoleDocument | null> {
        return await this.roleModel.findOne(filter).exec();
    }

    async findAll(filter: FindRoleParams): Promise<RoleDocument[]> {
        return await this.roleModel.find(filter).exec();
    }

    async findAndPopulateAll(filter: FindRoleParams): Promise<RoleDocument[]> {
        return await this.roleModel.find(filter).populate("mythology").populate("god").exec();
    }
}
