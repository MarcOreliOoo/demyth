import { Model, ObjectId, Types } from "mongoose";
import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./users.schema";
import { EUserType } from "../../enums/usertype";
import { plainToClass } from "class-transformer";
import { SignUpDto } from "../../auth/dto/auth.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findOneByEmail(email: string): Promise<UserDocument | null> {
        return await this.userModel.findOne({ email: email.toLowerCase() }).lean().exec();
    }

    async findOneByAddress(address: string): Promise<UserDocument | null> {
        return await this.userModel.findOne({ address }).lean().exec();
    }

    async findOneById(id: string): Promise<UserDocument | null> {
        return await this.userModel.findById(id).lean().exec();
    }

    async createUser(signUpDto: SignUpDto): Promise<UserDocument> {
        if (signUpDto.address) {
            delete signUpDto.email;
            delete signUpDto.password;
        }
        const newUser = new this.userModel({ ...signUpDto, userType: EUserType.Player });
        return await newUser.save({ timestamps: true });
    }
}
