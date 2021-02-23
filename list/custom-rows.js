import React from "../_snowpack/pkg/react.js";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  IconButton
} from "../_snowpack/pkg/@material-ui/core.js";
import {Print as PdfIcon, Delete as DeleteIcon} from "../_snowpack/pkg/@material-ui/icons.js";
import List from "../lib/list/index.js";
const af = {id: 1, name: "Africa"};
const eu = {id: 2, name: "Europe"};
const as = {id: 3, name: "Asia"};
const am = {id: 4, name: "America"};
const data = [
  {
    id: 2,
    check: true,
    name: "Sheep",
    location: eu,
    country: {name: "United Kingdom"},
    amount: 23.3,
    int: 23,
    date: "2019-09-05"
  },
  {
    id: 3,
    name: "Tiger",
    location: as,
    country: {name: "India"},
    amount: 24.1,
    int: 43,
    date: "2019-09-05"
  },
  {
    id: 4,
    name: "Elephant",
    location: af,
    country: {name: "Tanzania"},
    amount: 23,
    int: 3,
    date: "2019-09-05"
  },
  {
    id: 5,
    name: "Lion",
    location: af,
    country: {name: "South Africa"},
    amount: 0.3,
    int: 2,
    date: "2019-09-05"
  },
  {
    id: 6,
    name: "Cat",
    location: eu,
    country: {name: "Germany"},
    amount: 2.31,
    int: 7,
    date: "2019-09-05"
  },
  {
    id: 7,
    name: "Grizzly",
    location: am,
    country: {name: "Canada"},
    amount: 3.35,
    int: 43,
    date: "2019-09-05"
  },
  {
    id: 8,
    name: "Antelope",
    location: af,
    country: {name: "Namibia"},
    amount: 2.3,
    int: 87,
    date: "2019-09-05"
  }
];
const options = [af, eu, as, am].map((v) => ({key: v.id, value: v.name}));
const def = [
  {name: "name", filter: true, sort: true},
  {
    name: "location",
    filter: {
      type: "category",
      func: (a, b) => b.includes(a.location.id),
      options
    },
    render: (x) => x.location.name
  },
  {
    name: "country",
    label: "Country",
    filter: {
      type: "string",
      func: (a, b) => a.country.name.toLocaleLowerCase().includes(b.toLocaleLowerCase())
    },
    render: (x) => x.country.name
  },
  {name: "amount", label: "A long label", filter: true},
  {name: "int", label: "d", filter: true},
  {name: "date", label: "a date", filter: true},
  {
    name: "location",
    label: "custom",
    render: (x) => "custom " + x.location.name
  }
];
const ListItem = (data2) => {
  return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, {
    avatar: /* @__PURE__ */ React.createElement(Avatar, null, data2.name.substr(0, 2)),
    title: data2.name,
    subheader: `${data2.location.name} - ${data2.date}`
  }), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("p", null, JSON.stringify(data2))), /* @__PURE__ */ React.createElement(CardActions, {
    disableSpacing: true
  }, /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "Print"
  }, /* @__PURE__ */ React.createElement(PdfIcon, null)), /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "Delete",
    onClick: () => alert(`You wanted to delete: ${data2.name} (ID: ${data2.id})`)
  }, /* @__PURE__ */ React.createElement(DeleteIcon, null))));
};
const CustomRows = () => /* @__PURE__ */ React.createElement(List, {
  data,
  def,
  config: {},
  CustomListItem: ListItem
});
export default CustomRows;
