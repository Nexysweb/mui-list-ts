import Main from "./main.js";
import NPerPage from "./nperpage.js";
import Pagination from "./pagination.js";
import NoPagination from "./no-pagination.js";
import Filters from "./filters.js";
import FiltersFromProps from "./filters-props.js";
import FilterInterdependencies from "./filter-interdependencies.js";
import Sorting from "./sorting.js";
import SortingProps from "./sorting-props.js";
import Alert from "./alert.js";
import Small from "./small.js";
import Async from "./async.js";
import Checkbox from "./checkbox.js";
import StickyHeader from "./sticky-header.js";
import RecordInfo from "./record-info.js";
import CustomRows from "./custom-rows.js";
import CustomRowsCustomContainer from "./custom-rows-custom-container.js";
export const list = [
  {label: "Main", path: "/table", Component: Main},
  {label: "Sticky Header", path: "/sticky-header", Component: StickyHeader},
  {label: "N Per Page in Config", path: "/nperpage", Component: NPerPage},
  {label: "Pagination", path: "/pagination", Component: Pagination},
  {label: "No Pagination", path: "/no-pagination", Component: NoPagination},
  {label: "Filtering", path: "/filters", Component: Filters},
  {
    label: "Filtering from props",
    path: "/filters-from-props",
    Component: FiltersFromProps
  },
  {
    label: "Filter interdependencies",
    path: "/filter-interdepencies",
    Component: FilterInterdependencies
  },
  {label: "Sorting", path: "/sorting", Component: Sorting},
  {
    label: "Sorting from props",
    path: "/sorting-from-props",
    Component: SortingProps
  },
  {label: "Checks", path: "/checks", Component: Checkbox},
  {label: "Small", path: "/small", Component: Small},
  {
    label: "Hiding record info",
    path: "/hiding-record-info",
    Component: RecordInfo
  },
  {label: "Async", path: "/async", Component: Async},
  {label: "Custom Rows", path: "/custom-rows", Component: CustomRows},
  {
    label: "Custom Rows&Container",
    path: "/custom-rows-custom-container",
    Component: CustomRowsCustomContainer
  },
  {label: "Alert", path: "/alert", Component: Alert}
];
