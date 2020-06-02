import Main from './main';
import Pagination from './pagination';
import NoPagination from './no-pagination';
import Filters from './filters';
import Sorting from './sorting';
import Alert from './alert';
import Small from './small';
import Async from './async';
import Checkbox from './checkbox';

export const list = [
  { label: 'Main', path: '/table', Component: Main },
  { label: 'Pagination', path: '/pagination', Component: Pagination },
  { label: 'No Pagination', path: '/no-pagination', Component: NoPagination },
  { label: 'Filtering', path: '/filters', Component: Filters },
  { label: 'Sorting', path: '/sorting', Component: Sorting },
  { label: 'Checks', path: '/checks', Component: Checkbox },
  { label: 'Small', path: '/small', Component: Small },
  { label: 'Async', path: '/async', Component: Async },
  { label: 'Alert', path: '/alert', Component: Alert }
];
