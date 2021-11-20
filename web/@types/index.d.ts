/**
 * 素材model
 */
interface SrcConfig {
  pathname?: string;
  mainTitle?: string;
  desc?: string;
  image?: string;
  smallImg?: string;
  bgColor?: string;
}

interface HistoryLocation {
  pathname?: string;
  query: Record<string, any>;
  search: string;
}

interface History {
  listen: any;
  readonly length: number;
  scrollRestoration: ScrollRestoration;
  readonly state: any;
  back(): void;
  forward(): void;
  go(delta?: number): void;
  pushState(data: any, title: string, url?: string | null): void;
  replaceState(data: any, title: string, url?: string | null): void;
  location: HistoryLocation;
  push?: any;
}
