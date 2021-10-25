import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      backgroundMinus: string;
      background: string;
      backgroundPlus: string;
      primaryMinus: string;
      primary: string;
      primaryPlus: string;
      textMinus: string;
      text: string;
      textPlus: string;
      danger: string;
      dangerPlus: string;
      success: string;
      successPlus: string;
    };

    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
    };
  }
}
