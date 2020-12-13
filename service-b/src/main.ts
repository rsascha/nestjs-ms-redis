import { Logger, LoggerService } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import config from 'src/config';

async function bootstrap() {
    const logger = new Logger('bootstrap()');
    const cfg = config();
    const app = await NestFactory.create(AppModule, {
        logger: cfg.logLevel,
    });
    app.listen(cfg.port).then(() => {
        app.getUrl().then(url => {
            logger.log(url);
        });
    });

    const redisUrl = `redis://${cfg.database.host}:${cfg.database.port}`;
    logger.log(`Redis URL: ${redisUrl}`);
    const ms = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.REDIS,
            logger: logger,
            options: {
                url: redisUrl,
            },
        },
    );
    await ms.listen(() => console.log('Microservice is listening'));
}
bootstrap();
