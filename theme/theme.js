import { createTheme, ThemeProvider } from "@mui/material";
import { createContext } from "react";

export const ThemeContext = createContext(null)

const ThemeContextProvider = ({ children }) => {

  const theme = createTheme({
    palette: {
      // palette values for light mode
      primary: {
        main: '#BA2025'
      },
      divider: '#BA2025',
      background: {
        default: '#F8F9FA',
        secondary: "#fff"
      },
      text: {
        primary: '#BA2025',
        secondary: '#BA2025',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1480
      }
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '0.75rem',
            padding: '7px 15px',
            backgroundColor: "rgba(0, 0, 0, 0.9)"
          }
        }
      },
    },
    typography: {
      fontFamily: "Cairo, sans-serif"
    }
  })

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;