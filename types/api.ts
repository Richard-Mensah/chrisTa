import type { FieldErrors } from "./index";

export type ContactResponse =
  | { ok: true; stored: boolean; relay: boolean }
  | { ok: false; error: string; fields?: FieldErrors };

export type ProgressGetResponse = { persisted: boolean; signals: string[] };

export type ProgressPostResponse =
  | { ok: true; persisted: boolean; achievements?: string[] }
  | { ok: false; error: string };

export type StatsResponse = { gridOnline: number | null };
