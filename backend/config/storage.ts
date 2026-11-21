import { StorageLibConfig, defaultStorageLibConfig, normalizeS3Endpoint } from '@api-condopack/storage';

const isTest = process.env.NODE_ENV === 'test';
const rawEndpoint = process.env.S3_ENDPOINT || defaultStorageLibConfig.endPoint;

export const storageConfig: StorageLibConfig = {
  endPoint: normalizeS3Endpoint(rawEndpoint),
  port: Number(process.env.S3_PORT) || defaultStorageLibConfig.port,
  useSSL: process.env.S3_USE_SSL === 'true',
  accessKey: process.env.S3_ACCESS_KEY || '',
  secretKey: process.env.S3_SECRET_KEY || '',
  bucketName: process.env.S3_BUCKET_NAME || defaultStorageLibConfig.bucketName,
  publicBaseUrl:
    process.env.VITE_MINIO_URL ||
    process.env.S3_PUBLIC_URL ||
    defaultStorageLibConfig.publicBaseUrl,
  keyPrefix: isTest ? 'tests/kdev' : process.env.TENANT_SLUG || defaultStorageLibConfig.keyPrefix,
};
