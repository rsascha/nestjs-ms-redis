import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @MessagePattern({ command: 'update-config' })
    updateConfig(data: string): boolean {
        return this.appService.updateConfig(data);
    }
}
