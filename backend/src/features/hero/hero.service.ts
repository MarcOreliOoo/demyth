import { Model, Types } from "mongoose";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Hero, HeroDocument } from "./heroes.schema";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { plainToClass } from "class-transformer";
import { ResponseHeroDto } from "./dto/response-hero.dto";
import { FindHeroParams, HeroDbService } from "./hero.db.service";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { RoleService } from "../role/role.service";
import { ResponsePopulatedRoleDto, ResponseRoleDto } from "../role/dto/response-role.dto";

@Injectable()
export class HeroService {
    constructor(
        @InjectModel(Hero.name) private heroModel: Model<Hero>,
        private readonly heroDbService: HeroDbService,
        private readonly roleService: RoleService,
    ) {}

    getResponseDtoFrom(anHero: HeroDocument): ResponseHeroDto {
        return plainToClass(ResponseHeroDto, anHero.toJSON());
    }

    async create(createHeroDto: CreateHeroDto, userId: string): Promise<ResponseHeroDto> {
        const existingHero = await this.heroModel.findOne({ $or: [{ name: createHeroDto.name }, { user: userId }] });
        if (existingHero) {
            throw new ConflictException(`${existingHero.name} already exists or ${userId} has already an hero`);
        }

        const fullHero = await this.completeHero(createHeroDto, userId);
        console.log("fullHero: ", fullHero);

        const createdHero = await this.heroDbService.save(new this.heroModel(fullHero));
        return this.getResponseDtoFrom(createdHero);
    }

    async completeHero(createHeroDto: CreateHeroDto, userId: string) {
        console.log("createHeroDto.role", createHeroDto.role);
        const roleDocument: ResponsePopulatedRoleDto = await this.roleService.findAndPopulateAll({
            name: createHeroDto.role,
        })[0];

        console.log("roleDocument: ", roleDocument);

        return {
            ...createHeroDto,
            user: userId,
            roleInfo: {
                _id: roleDocument._id,
                name: roleDocument.name,
            },
            mythologyInfo: {
                _id: roleDocument.mythology,
                //name: roleDocument.mythology.name,
            },
            godInfo: {
                _id: roleDocument.god,
                //name: roleDocument.god.name,
            },
            level: 1,
            xp: 0,
            stats: {
                vigor: roleDocument.stats.vigor,
                dexterity: roleDocument.stats.dexterity,
                mind: roleDocument.stats.mind,
                energy: roleDocument.stats.energy,
                initiative: roleDocument.stats.initiative,
            },
        };
    }

    async updateById(heroId: string, updateHero: UpdateHeroDto, userId: string): Promise<ResponseHeroDto> {
        const anHeroDoc = await this.heroDbService.findOne({ user: userId, _Id: heroId });
        if (!anHeroDoc) throw new NotFoundException(`No hero with id ${heroId} found.`);

        Object.assign(anHeroDoc, updateHero);

        const updatedHeroDoc = await this.heroDbService.save(anHeroDoc);
        return this.getResponseDtoFrom(updatedHeroDoc);
    }

    async deleteById(heroId: string, userId: string): Promise<void> {
        const anHeroDoc = await this.heroDbService.findOne({ user: userId, _Id: heroId });
        if (!anHeroDoc) throw new NotFoundException(`No hero with id ${heroId} found.`);
    }

    async findAll(filter: FindHeroParams): Promise<ResponseHeroDto[]> {
        const heroesDoc = await this.heroDbService.findAll(filter);
        if (heroesDoc.length == 0) throw new NotFoundException(`Wrong params provided.`);
        return heroesDoc.map((hero) => this.getResponseDtoFrom(hero));
    }

    async findHeroByUserId(userId: string): Promise<ResponseHeroDto> {
        return this.getResponseDtoFrom(await this.heroDbService.findOne({ user: userId }));
    }
}
