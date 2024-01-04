import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any;
  }
}

export {};
