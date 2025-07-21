import colors from "colors";

export const logger = (msg: string) =>
  console.log(`[LOG]: ${colors.white.bold(msg)}`);
export const InfoLogger = (msg: string) =>
  console.log(`[INFO]: ${colors.blue.bold(msg)}`);
export const ErrorLogger = (msg: string) =>
  console.error(`[ERROR]: ${colors.red.bold(msg)}`);
export const WarningLogger = (msg: string) =>
  console.warn(`[WARNING]: ${colors.yellow.bold(msg)}`);
export const DebugLogger = (msg: string) =>
  console.debug(`[DEBUG]: ${colors.magenta.bold(msg)}`);
export const SuccessLogger = (msg: string) =>
  console.log(`[SUCCESS]: ${colors.green.bold(msg)}`);
