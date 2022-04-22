
export const toggleColorTheme = () => {
  const theme = localStorage.getItem('theme');
  const lightThemeName = 'light';
  const darkThemeName = 'dark';
  const body = document.body;
  const browserTheme: HTMLMetaElement | null = document.querySelector('meta[name="theme-color"]');
  const rootVariables: HTMLElement | null = document.querySelector(':root');

  function getVariableColor(color: string) {
    if(rootVariables) {
      return getComputedStyle(rootVariables).getPropertyValue(color);
    }
  }

  switch (theme) {
    case lightThemeName: {
      body.classList.replace(lightThemeName, darkThemeName);
      localStorage.setItem('theme', darkThemeName);

      if(!!browserTheme && !!rootVariables) {
        browserTheme.content = String(getVariableColor('--themeDark'))
      }
      break;
    }
    case darkThemeName: {
      body.classList.replace(darkThemeName, lightThemeName);
      localStorage.setItem('theme', lightThemeName);

      if(!!browserTheme && !!rootVariables) {
        browserTheme.content = String(getVariableColor('--themeLight'))
      }
      break;
    }
    default: break;
  }

}