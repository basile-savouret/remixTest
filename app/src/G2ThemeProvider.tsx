import { Theme, ThemeContext } from '@komune-io/g2'

export const defaultTheme: Theme = {
    name: 'default',
    borderRadius: 8,
    spacing: 8,
    drawerWidth: 234,
    colors: {
      primary: '#EDBA27',
      secondary: '#353945',
      tertiary: '#e0e0e0',
      background: '#EEEEEE',
      error: '#E44258',
      success: '#159D50',
      warning: '#FF9900',
      info: '#3C78D8'
    },
    fontSize: {
      table: '0.875rem',
      label: '0.875rem',
      button: '0.875rem'
    },
    shadows: [
      'none',
      '0px 4px 8px rgba(0, 0, 0, 0.2)',
      '0px 5px 12px rgba(0, 0, 0, 0.21)',
      '0px 6px 16px rgba(0, 0, 0, 0.22)',
      '0px 7px 20px rgba(0, 0, 0, 0.23)',
      '0px 8px 24px rgba(0, 0, 0, 0.24)',
      '0px 9px 28px rgba(0, 0, 0, 0.25)',
      '0px 10px 32px rgba(0, 0, 0, 0.26)',
      '0px 11px 36px rgba(0, 0, 0, 0.27)',
      '0px 12px 40px rgba(0, 0, 0, 0.28)',
      '0px 13px 44px rgba(0, 0, 0, 0.29)',
      '0px 14px 48px rgba(0, 0, 0, 0.3)',
      '0px 15px 52px rgba(0, 0, 0, 0.31)'
    ],
    drawerAbsolutePositionBreakpoint: 'md'
  } 

export const G2ThemeProvider = ({ children }: { children: React.ReactNode }) => {


    return (
        //@ts-ignore
        <ThemeContext.Provider
            value={{
                theme: defaultTheme,
                changeTheme: () => {},
                openDrawer: false,
                toggleOpenDrawer: () => {}
            }
            }
        >
            {/* @ts-ignore */}
            {children}
        </ThemeContext.Provider>
    )
}