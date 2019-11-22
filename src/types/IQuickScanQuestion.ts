import Target from '../data/Target';

declare global {
  type IQuickScanQuestion = {
    target: Target
  }
}

export {};