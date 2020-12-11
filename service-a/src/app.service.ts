import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
    private logger = new Logger('AppService');

    constructor(@Inject('CONFIG_SERVICE') private configService: ClientProxy) {}

    private getTitle(): string {
        const names = ['Mad Max', 'Cliff Hanger', 'Rambo', 'Terminator'];
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }

    private getTitleAddon(): string {
        const names = ['Remastered', '1', '2', '3', '4', '5', '6'];
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }

    generateNewConfig(): Observable<boolean> {
        const data = `${this.getTitle()} ${this.getTitleAddon()}`;
        this.logger.log(`Start config update with: ${data}`);
        const result = this.configService.send<boolean>(
            { command: 'update-config' },
            data,
        );
        return result;
    }
}
