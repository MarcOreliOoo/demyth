import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, Query } from "@nestjs/common";
import { CreatureService } from "./creature.service";
import { ResponseCreatureDto } from "./dto/response-creature.dto";
import { log } from "../../utils/debug.utils";
import { ParseObjectIdPipe } from "../../pipe/objectid.pipe";
import { CreateCreatureDto } from "./dto/create-creature.dto";
import { UpdateCreatureDto } from "./dto/update-creature.dto";
import { EUserType } from "../../enums/usertype";
import { UserTypes } from "../../decorators/userTypes.decorators";
import { EClassSubType, EClassType } from "../../enums";

@Controller("v0/roles")
export class CreatureController {
    constructor(private readonly creatureService: CreatureService) {}

    // WIP - to test
    @UserTypes(EUserType.Admin)
    @Post()
    async create(@Body() createCreatureDto: CreateCreatureDto): Promise<ResponseCreatureDto> {
        log("CreatureController > create");
        return await this.creatureService.create(createCreatureDto);
    }

    // WIP - to test
    @UserTypes(EUserType.Admin)
    @Put(":creatureId")
    async update(
        @Param("creatureId", new ParseObjectIdPipe()) creatureId: string,
        @Body() updateCreatureDto: UpdateCreatureDto,
    ): Promise<ResponseCreatureDto> {
        log("CreatureController > update");
        return await this.creatureService.updateById(creatureId, updateCreatureDto);
    }

    // WIP - to test
    @UserTypes(EUserType.Admin)
    // TODO: add control if id used elsewhere?
    @HttpCode(204)
    @Delete(":creatureId")
    async delete(@Param("creatureId", new ParseObjectIdPipe()) creatureId: string): Promise<void> {
        log("CreatureController > delete");
        return await this.creatureService.deleteById(creatureId);
    }

    // WIP - to test
    @Get()
    async getCreatureForParams(
        @Query("creatureId") _id?: string,
        @Query("roleName") name?: string,
        @Query("creatureType") creatureType?: EClassType,
        @Query("creatureSubType") creatureSubType?: EClassSubType,
        @Query("mythId") mythology?: string,
        @Query("godId") god?: string,
    ): Promise<ResponseCreatureDto[]> {
        log("CreatureController > getCreatureForParams");

        const filters = {
            ...(_id && { _id }),
            ...(name && { name }),
            ...(creatureType && { creatureType }),
            ...(creatureSubType && { creatureSubType }),
            ...(mythology && { mythology }),
            ...(god && { god }),
        };
        return await this.creatureService.findAll(filters);
    }
}
