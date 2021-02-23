import React from "../../_snowpack/pkg/react.js";
import {makeStyles, createStyles} from "../../_snowpack/pkg/@material-ui/core/styles.js";
import PaginationMaterial from "../../_snowpack/pkg/@material-ui/lab/Pagination.js";
import {getPagination} from "./utils/pagination-utils.js";
const useStyles = makeStyles((theme) => createStyles({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));
const Pagination = (props) => {
  const {n, nPerPage, idx, onClick} = props;
  const classes = useStyles();
  if (n === 0) {
    return null;
  }
  const {nPage} = getPagination(n, nPerPage);
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ React.createElement(PaginationMaterial, {
    page: idx,
    onChange: (_a, b) => onClick(b),
    count: nPage
  }));
};
export default Pagination;
