import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { merge, Observable } from 'rxjs';

let config = '';

@Injectable()
export class AppService {
    private logger = new Logger('AppService - Service A');

    constructor(@Inject('MessagingClient') private msgClient: ClientProxy) {}

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
        config = `${this.getTitle()} ${this.getTitleAddon()}`;
        this.logger.log(`Start config update with: ${config}`);
        const resultA = this.msgClient.send<boolean>(
            { command: 'update-config-service-a' },
            config,
        );
        const resultB = this.msgClient.send<boolean>(
            { command: 'update-config-service-b' },
            config,
        );
        return merge(resultA, resultB);
    }

    updateConfig(data: string): boolean {
        if (data != config) {
            this.logger.log(`Update config from: ${config} to: ${data}`);
            config = data;
            return true;
        }
        this.logger.log(`Config is up-to-date: ${config}`);
        return false;
    }
}
