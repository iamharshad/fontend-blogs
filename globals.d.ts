// globals.d.ts (create this file if you don't have one)
export {}; // needed to convert this file into a module

declare global {
  interface Window {
    dataLayer: any[];
  }
}
