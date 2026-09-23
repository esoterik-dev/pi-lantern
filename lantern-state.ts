export type StatusMap = ReadonlyMap<string, string>;

export interface HarnessProviders {
  getStatusMap: (() => StatusMap) | null;
  getQuotaText: (() => string) | null;
  getCostText: (() => string) | null;
}

export const providers: HarnessProviders = {
  getStatusMap: null,
  getQuotaText: null,
  getCostText: null,
};

export let sidebarActive = false;

export function setSidebarActive(active: boolean): void {
  sidebarActive = active;
}

export function statusEntry(key: string): string | undefined {
  return providers.getStatusMap?.()?.get(key);
}