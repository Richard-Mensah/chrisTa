/**
 * "verified-cv"        – stated in Christabel's CV; safe to publish.
 * "needs-confirmation" – from the CV but wording, dates or permission still need her sign-off.
 * Items with `published: false` never render. See CONFIRM-BEFORE-LAUNCH.md.
 */
export type Status = "verified-cv" | "needs-confirmation";

export type PhotoKey =
  | "portrait"
  | "factoryFloor"
  | "corridor"
  | "trainingSession"
  | "relayPanel"
  | "siteDrone"
  | "factoryShowroom"
  | "fatMeeting";

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Other people are visible in the photo – keep consent on file. */
  showsOthers: boolean;
}
