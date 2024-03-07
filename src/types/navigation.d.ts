declare module 'Navigation' {
  export type NavigationParams = Record<string, string> | Record<boolean>;

  export interface NavigationProps {
    navigate: (navigateTo: string, navigationParams?: NavigationParams) => void;
    goBack: () => void;
  }
}
