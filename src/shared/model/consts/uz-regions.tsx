import type { IBaseOption } from "../types";
import { uzRegionsDistricts } from "./uz-regions-districts";

export const uzRegions: IBaseOption[] = uzRegionsDistricts.map((region) => ({
  value: region.id.toString(),
  label: region.region,
}));
