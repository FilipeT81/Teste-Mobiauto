import 'styled-components';
import index from '@styles/Theme';

declare module 'styled-components' {
  type ThemeType = typeof index;
  export interface DefaultTheme extends ThemeType {}
}
