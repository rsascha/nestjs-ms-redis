import { Injectable, Logger } from '@nestjs/common';

let config = '';

@Injectable()
export class AppService {
    private logger = new Logger('AppService');

    getConfig(): string {
        return config;
    }

    updateConfig(data: string): boolean {
        config = data;
        this.logger.log(`Update config with: ${config}`);
        return true;
    }
}
