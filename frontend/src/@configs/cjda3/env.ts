export const appEnv = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  minioUrl: import.meta.env.VITE_MINIO_URL as string,
  s3Bucket: import.meta.env.VITE_S3_BUCKET as string,
  swEnabled: import.meta.env.VITE_SW_ENABLED === 'true',
};