import Main from './main';
import NPerPage from './nperpage';
import Pagination from './pagination';
import NoPagination from './no-pagination';
import Filters from './filters';
import FiltersFromProps from './filters-props';
import FilterInterdependencies from './filter-interdependencies';
import Sorting from './sorting';
import SortingProps from './sorting-props';
import Alert from './alert';
import Small from './small';
import Async from './async';
import Checkbox from './checkbox';
import StickyHeader from './sticky-header';
import RecordInfo from './record-info';
import CustomRows from './custom-rows';
import CustomRowsCustomContainer from './custom-rows-custom-container';

export const list = [
  { label: 'Main', path: '/table', Component: Main },
  { label: 'Sticky Header', path: '/sticky-header', Component: StickyHeader },
  { label: 'N Per Page in Config', path: '/nperpage', Component: NPerPage },
  { label: 'Pagination', path: '/pagination', Component: Pagination },
  { label: 'No Pagination', path: '/no-pagination', Component: NoPagination },
  { label: 'Filtering', path: '/filters', Component: Filters },
  {
    label: 'Filtering from props',
    path: '/filters-from-props',
    Component: FiltersFromProps
  },
  {
    label: 'Filter interdependencies',
    path: '/filter-interdepencies',
    Component: FilterInterdependencies
  },
  { label: 'Sorting', path: '/sorting', Component: Sorting },
  {
    label: 'Sorting from props',
    path: '/sorting-from-props',
    Component: SortingProps
  },
  { label: 'Checks', path: '/checks', Component: Checkbox },
  { label: 'Small', path: '/small', Component: Small },
  {
    label: 'Hiding record info',
    path: '/hiding-record-info',
    Component: RecordInfo
  },
  { label: 'Async', path: '/async', Component: Async },
  { label: 'Custom Rows', path: '/custom-rows', Component: CustomRows },
  {
    label: 'Custom Rows&Container',
    path: '/custom-rows-custom-container',
    Component: CustomRowsCustomContainer
  },
  { label: 'Alert', path: '/alert', Component: Alert }
];
