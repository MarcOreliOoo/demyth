import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("health")
    getHealth(): string {
        try {
            return this.appService.getHealth();
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: error.toString(),
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
                { cause: error },
            );
        }
    }
}
