import { Injectable, Logger } from '@nestjs/common';

let config = '';

@Injectable()
export class AppService {
    private logger = new Logger('AppService - Service B');

    getConfig(): string {
        return config;
    }

    updateConfig(data: string): boolean {
        this.logger.log(`Update config from: ${config} to: ${data}`);
        config = data;
        return true;
    }
}
