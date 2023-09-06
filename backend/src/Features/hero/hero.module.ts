import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { HeroController } from "./hero.controller";
import { Hero, HeroSchema } from "./heros.schema";
import { HeroService } from "./hero.service";

@Module({
	imports: [MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }])],
  	controllers: [HeroController],
  	providers: [HeroService],
	exports: [HeroService],
})
export class HeroModule {}

