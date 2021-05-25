import { r as react } from './index-8732a38f.js';

var ThemeContext = react.createContext(null);

function useTheme() {
  var theme = react.useContext(ThemeContext);

  return theme;
}

export { ThemeContext as T, useTheme as u };
