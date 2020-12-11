import { Injectable, Logger } from '@nestjs/common';

let config = '';

@Injectable()
export class AppService {
    private logger = new Logger('AppService');

    getHello(): string {
        return `Configuration Data: ${config}`;
    }

    updateConfig(data: string): boolean {
        config = data;
        this.logger.log(`Update Config with: ${config}`);
        return true;
    }
}
