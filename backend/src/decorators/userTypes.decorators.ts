import { ExecutionContext, SetMetadata, createParamDecorator } from "@nestjs/common";
import { EUserType } from "../enums/usertype";

export const UserTypes = (...userTypes: EUserType[]) => SetMetadata("userTypes", userTypes);
