import React from "../../_snowpack/pkg/react.js";
import {render} from "../../_snowpack/pkg/@testing-library/react.js";
import ThemeProvider from "../../_snowpack/pkg/@material-ui/styles/ThemeProvider.js";
import createMuiTheme from "../../_snowpack/pkg/@material-ui/core/styles/createMuiTheme.js";
import "../../_snowpack/pkg/@testing-library/jest-dom.js";
const theme = createMuiTheme({});
const customRender = (ui) => {
  const Wrapper = ({children}) => /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, children);
  const utils = render(ui, {
    wrapper: Wrapper
  });
  return utils;
};
export * from "../../_snowpack/pkg/@testing-library/react.js";
export {customRender as render};
