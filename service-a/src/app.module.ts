import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from 'src/config';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CONFIG_SERVICE',
                transport: Transport.REDIS,
                options: {
                    url: `redis://${config().database.host}:${
                        config().database.port
                    }`,
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
