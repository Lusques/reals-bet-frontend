export enum AppBreakpoints {
  XSM = '(min-width: 360px)',
  SM = '(min-width: 576px)',
  MD = '(min-width: 768px)',
  LG = '(min-width: 1024px)',
  XL = '(min-width: 1200px)',
  XXL = '(min-width: 1500px)',

  MOBILE_VIEW = '(max-width: 767px)',
  DESKTOP_VIEW = '(min-width: 768px)',
}

export const APP_MOBILE_MEDIA_QUERIES: string[] = [AppBreakpoints.MOBILE_VIEW];

export const APP_DESKTOP_MEDIA_QUERIES: string[] = [
  AppBreakpoints.DESKTOP_VIEW,
];
