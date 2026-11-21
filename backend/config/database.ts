import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '@api-condopack/auth';
import { LotEntity } from '@api-condopack/lots';
import { PackageEntity, WithdrawEntity } from '@api-condopack/packages';

export function getDatabaseConfig(): TypeOrmModuleOptions {
  const isTest = process.env.NODE_ENV === 'test';
  const database = isTest
    ? process.env.DB_TEST_NAME || 'condopack_test'
    : process.env.DB_NAME || 'cjda3_db';

  return {
    type: 'postgres',
    host: process.env.DB_HOST || 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'cjda3_user',
    password: process.env.DB_PASSWORD || '',
    database,
    entities: [UserEntity, LotEntity, PackageEntity, WithdrawEntity],
    synchronize: true,
    logging: false,
  };
}
