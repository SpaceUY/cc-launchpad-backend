import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from './config/config.module';
import { MiddlewareModule } from './common/middleware/middleware.module';
import { TemplateModule } from './template/template.module';
import { EmailModule } from './email/email.module';
import { SpaceshipModule } from './spaceship/spaceship.module';
import { Controller } from './ido/.controller';
import { IdoController } from './ido/ido/ido.controller';
import { IdoModule } from './ido/ido.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    AuthModule,
    MiddlewareModule,
    TemplateModule,
    EmailModule,
    SpaceshipModule,
    IdoModule,
  ],
  controllers: [AppController, Controller, IdoController],
  providers: [AppService],
})
export class AppModule {}
