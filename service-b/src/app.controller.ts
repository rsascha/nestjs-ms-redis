import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getConfig(): string {
        return `Config Data: ${this.appService.getConfig()}`;
    }

    @MessagePattern({ command: 'update-config-service-b' })
    updateConfig(data: string): boolean {
        return this.appService.updateConfig(data);
    }
}
