import { NotificationLibConfig, defaultNotificationLibConfig } from '@api-condopack/notification';

const isTest = process.env.NODE_ENV === 'test';
const parsedBatchWindowMs = Number(process.env.NOTIFICATION_BATCH_WINDOW_MS);
const parsedRateLimitMs = Number(process.env.NOTIFICATION_RATE_LIMIT_MS);

export const notificationConfig: NotificationLibConfig = {
  redisHost: process.env.REDIS_HOST || defaultNotificationLibConfig.redisHost,
  redisPort: Number(process.env.REDIS_PORT) || defaultNotificationLibConfig.redisPort,
  redisPassword: process.env.REDIS_PASSWORD || undefined,
  queueName:
    process.env.NOTIFICATION_QUEUE_NAME ||
    (isTest
      ? `${defaultNotificationLibConfig.queueName}-test`
      : defaultNotificationLibConfig.queueName),
  evolutionApiUrl: process.env.EVOLUTION_API_URL || '',
  evolutionApiToken: process.env.EVOLUTION_API_TOKEN_AUTH || '',
  evolutionInstance: process.env.EVOLUTION_INSTANCE || '',
  dryRun: isTest || process.env.EVOLUTION_DRY_RUN !== 'false',
  batchWindowMs: isTest
    ? Number(process.env.NOTIFICATION_BATCH_WINDOW_TEST_MS) || 300
    : Number.isFinite(parsedBatchWindowMs) && parsedBatchWindowMs >= 0
      ? parsedBatchWindowMs
      : defaultNotificationLibConfig.batchWindowMs,
  rateLimitMs: isTest
    ? Number(process.env.NOTIFICATION_RATE_LIMIT_TEST_MS) || 25
    : Number.isFinite(parsedRateLimitMs) && parsedRateLimitMs > 0
      ? parsedRateLimitMs
      : defaultNotificationLibConfig.rateLimitMs,
};
