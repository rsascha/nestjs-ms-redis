import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const logger = new Logger('bootstrap()');

    const app = await NestFactory.create(AppModule);
    app.listen(3000).then(() => {
        app.getUrl().then(url => {
            logger.log(url);
        });
    });

    const ms = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.REDIS,
            options: {
                url: 'redis://localhost:6379',
            },
        },
    );
    await ms.listen(() => console.log('Microservice is listening'));
}
bootstrap();
