import { ExecutionContext, SetMetadata, createParamDecorator } from "@nestjs/common";
import { UserType } from "../features/user/enum";

export const UserTypes = (...userTypes: UserType[]) => SetMetadata("userTypes", userTypes);
