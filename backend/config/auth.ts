import { AuthLibConfig, defaultAuthLibConfig } from '@api-condopack/auth';

function parseJwtExpiration(raw: string | undefined, fallbackSeconds: number): number {
  if (!raw) {
    return fallbackSeconds;
  }

  const trimmed = raw.trim();
  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed);
  }

  const match = /^(\d+)([smhd])$/i.exec(trimmed);
  if (!match) {
    return fallbackSeconds;
  }

  const value = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multipliers: Record<string, number> = {
    s: 1,
    m: 60,
    h: 3600,
    d: 86400,
  };

  return value * (multipliers[unit] ?? 1);
}

export const authConfig: AuthLibConfig = {
  jwtSecret: process.env.JWT_SECRET || defaultAuthLibConfig.jwtSecret,
  jwtExpirationSeconds: parseJwtExpiration(
    process.env.JWT_EXPIRATION,
    defaultAuthLibConfig.jwtExpirationSeconds,
  ),
  seedUsers: true,
};
