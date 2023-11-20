import { Init1700513362320 } from 'migrations/1700513362320-Init';
import { Ido } from 'src/ido/entities/ido.entity';
import { Spaceship } from 'src/spaceship/spaceship.entity';
import { User } from 'src/user/user.model';
import { DataSource, DataSourceOptions } from 'typeorm';

const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: true,
  synchronize: false,
  entities: [Spaceship, User, Ido],
  migrations: [Init1700513362320],
  migrationsRun: true,
} as DataSourceOptions);

export default connectionSource;
