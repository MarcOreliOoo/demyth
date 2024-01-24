import { IsString, IsMongoId } from "class-validator";

export class RoleInfoDto {
    @IsMongoId()
    _id: string;

    @IsString()
    name: string;
}
