import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { GodController } from "./god.controller";
import { God, GodSchema } from "./gods.schema";
import { GodService } from "./god.service";

@Module({
	imports: [MongooseModule.forFeature([{ name: God.name, schema: GodSchema }])],
  	controllers: [GodController],
  	providers: [GodService],
	exports: [GodService],
})
export class GodModule {}
