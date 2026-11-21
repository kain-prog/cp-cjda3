import { Controller, Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@api-condopack/auth';
import { LotsModule } from '@api-condopack/lots';
import { NotificationModule } from '@api-condopack/notification';
import { PackagesModule } from '@api-condopack/packages';
import { StorageModule } from '@api-condopack/storage';
import { authConfig } from '../config/auth';
import { getDatabaseConfig } from '../config/database';
import { lotsConfig } from '../config/lots';
import { notificationConfig } from '../config/notification';
import { packagesConfig } from '../config/packages';
import { storageConfig } from '../config/storage';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return { status: 'ok' };
  }
}

@Module({
  imports: [
    TypeOrmModule.forRoot(getDatabaseConfig()),
    AuthModule.forRoot(authConfig),
    LotsModule.forRoot(lotsConfig),
    StorageModule.forRoot(storageConfig),
    NotificationModule.forRoot(notificationConfig),
    PackagesModule.forRoot(packagesConfig),
  ],
  controllers: [HealthController],
})
export class AppModule {}
