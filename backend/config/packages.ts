import { PackagesLibConfig, defaultPackagesLibConfig } from '@api-condopack/packages';

export const packagesConfig: PackagesLibConfig = {
  pinLength: Number(process.env.PACKAGE_PIN_LENGTH) || defaultPackagesLibConfig.pinLength,
  sequenceName: process.env.PACKAGE_TICKET_SEQUENCE || defaultPackagesLibConfig.sequenceName,
};
