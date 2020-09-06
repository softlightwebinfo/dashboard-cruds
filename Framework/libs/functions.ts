import { brandsDir, flagsDir } from "@config/images";

/**
 * returns from the flags directory, the corresponding image that is passed as an argument
 * @param flag
 */
export const getFlagImage = (flag: string) => `${flagsDir}${flag}.png`;
export const getBrandImage = (brand: string) => `${brandsDir}${brand}.png`;