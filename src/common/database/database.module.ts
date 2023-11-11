import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from 'src/config/database.config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (dbConf: ConfigType<typeof databaseConfig>) =>
        ({
          type: 'postgres', // Directly specifying the type as 'postgres'
          host: dbConf.host,
          port: dbConf.port,
          username: dbConf.username,
          password: dbConf.password,
          database: dbConf.database,
          entities: ['dist/**/*.{model,entity}{.ts,.js}'],
          synchronize: false, // Be careful with this in production
        } as PostgresConnectionOptions),
      inject: [databaseConfig.KEY],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
