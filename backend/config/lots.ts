import { LotsLibConfig, defaultLotsLibConfig } from '@api-condopack/lots';

export const lotsConfig: LotsLibConfig = {
  whatsappRegexPattern:
    process.env.LOTS_WHATSAPP_REGEX || defaultLotsLibConfig.whatsappRegexPattern,
  preDDI: process.env.LOTS_PRE_DDI || defaultLotsLibConfig.preDDI,
  maxCsvRows: Number(process.env.LOTS_MAX_CSV_ROWS) || defaultLotsLibConfig.maxCsvRows,
};
