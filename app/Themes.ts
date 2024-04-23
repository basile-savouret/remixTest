import { Theme as AruiTheme} from "@komune-io/g2-themes";
import { DeepPartial } from "@komune-io/g2-utils";
import { ThemeOptions } from "@mui/material";

export const theme: DeepPartial<AruiTheme> = {// to complete and to use
  colors: {
    primary: "#4C9878",
    secondary: "#353945",
    background: "#FAF8F3"
  },
};

export const muiTheme: Partial<ThemeOptions> = {
  typography: {
    fontFamily: '"Lexend", sans-serif',
    allVariants: {
      fontWeight: 400,
      color: "#353945"
    },
  }
}
