const STORAGE_KEY = "arrivalGuideCompleted";

export function getArrivalCompleted(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function markArrivalItemDone(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const current = getArrivalCompleted();
    if (current.includes(slug)) return;
    const next = [...current, slug];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
}
