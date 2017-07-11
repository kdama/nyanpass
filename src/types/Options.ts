import { Presets } from "../constants/Presets";

export interface Options {
  includes: (string | Presets)[];
  maxLength: number;
  minLength: number;
}
