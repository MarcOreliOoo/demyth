import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mythology, MythologySchema } from "../features/mythology/mythologies.schema";
import { InitDbService } from "./init.service";
import { God, GodSchema } from "../features/god/gods.schema";
import { Role, RoleSchema } from "../features/role/roles.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Mythology.name, schema: MythologySchema },
            { name: God.name, schema: GodSchema },
            { name: Role.name, schema: RoleSchema },
        ]),
    ],
    providers: [InitDbService],
    exports: [InitDbService],
})
export class InitModule {}
