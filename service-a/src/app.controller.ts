import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    generateNewConfig(): Observable<boolean> {
        return this.appService.generateNewConfig();
    }

    @MessagePattern({ command: 'update-config-service-a' })
    updateConfig(data: string): boolean {
        return this.appService.updateConfig(data);
    }
}
