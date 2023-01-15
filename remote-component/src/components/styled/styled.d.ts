import 'styled-components';

interface IRegularColors {
  AzulBlue: string;
  GrapePurple: string;
  BlushPink: string;
  MangoOrange: string;
  PacificBlue: string;
  JadeGreen: string;
  DynamicsGreen: string;
  AtlanticBlue: string;
  ScarletRed: string;
  DynamicsRed: string;
  CandyPink: string;
  SaharaYellow: string;
  Red: string;
  Red10: string;
  TeamsPurple: string;
  TeamsGreen: string;
  TeamsPink: string;
  Excel: string;
  AliceBlue: string;
  SearchMatch: string;
  PBITint30: string;
  Positive: string;
  Neutral: string;
  Negative: string;
  Error: string;
  Warning: string;
}

interface IColors {
  DYNPrimary: string;
  DYNTint50: string;
  DYNTint40: string;
  DYNTint30: string;
  DYNTint20: string;
  DYNTint10: string;
  DYNShade10: string;
  DYNShade20: string;
  DYNShade30: string;
  Gray10: string;
  Gray20: string;
  Gray26: string;
  Gray30: string;
  Gray40: string;
  Gray50: string;
  Gray60: string;
  Gray70: string;
  Gray90: string;
  Gray100: string;
  Gray110: string;
  Gray130: string;
  Gray140: string;
  Gray150: string;
  Gray160: string;
  Gray190: string;
  Gray200: string;
  Gray300: string;
  Black: string;
  White: string;
  Error: string;
  BGError: string;
  backgroundColor: string;
}

interface ISizes {
  maxWidthCallPage: string;
  paddingMainCallPage: string;
}

export interface ITheme {
  name: string;
  colors: IColors & IRegularColors;
  sizes: ISizes;
  dir: 'ltr' | 'rtl';
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
