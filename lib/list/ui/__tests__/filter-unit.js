import React from "../../../../_snowpack/pkg/react.js";
import {render, fireEvent, screen} from "../../../test/test-utils.js";
import FilterUnit from "../filter-unit.js";
describe("FilterUnit", () => {
  describe("filter.options is an object", () => {
    it("should render passed options on click", () => {
      const filter = {
        type: "category",
        func: () => true,
        options: [
          {key: 1, value: "First"},
          {key: 2, value: "Second"}
        ]
      };
      const filters = {};
      const name = "name";
      const {container} = render(/* @__PURE__ */ React.createElement(FilterUnit, {
        filters,
        name,
        onChange: () => {
        },
        onReset: () => {
        },
        filter
      }));
      expect(screen.queryByText("First")).not.toBeInTheDocument();
      expect(screen.queryByText("Second")).not.toBeInTheDocument();
      const filterBtn = container.querySelector('[type="button"]');
      fireEvent.click(filterBtn);
      expect(screen.queryByText("First")).toBeInTheDocument();
      expect(screen.queryByText("Second")).toBeInTheDocument();
    });
  });
  describe("filter.options is a function", () => {
    it("should call the passed function with filters argument", () => {
      const optionsFunc = jest.fn();
      const filter = {
        type: "category",
        func: () => true,
        options: optionsFunc
      };
      const filters = {
        id: 2
      };
      const name = "name";
      render(/* @__PURE__ */ React.createElement(FilterUnit, {
        filters,
        name,
        onChange: () => {
        },
        onReset: () => {
        },
        filter
      }));
      expect(optionsFunc).toBeCalledTimes(1);
      expect(optionsFunc).toBeCalledWith({id: 2});
    });
    it("should render correct options", () => {
      const filter = {
        type: "category",
        func: () => true,
        options: [
          {key: 1, value: "First"},
          {key: 2, value: "Second"}
        ].filter((o) => o.key === 1)
      };
      const filters = {};
      const name = "name";
      const {container} = render(/* @__PURE__ */ React.createElement(FilterUnit, {
        filters,
        name,
        onChange: () => {
        },
        onReset: () => {
        },
        filter
      }));
      expect(screen.queryByText("First")).not.toBeInTheDocument();
      expect(screen.queryByText("Second")).not.toBeInTheDocument();
      const filterBtn = container.querySelector('[type="button"]');
      fireEvent.click(filterBtn);
      expect(screen.queryByText("First")).toBeInTheDocument();
      expect(screen.queryByText("Second")).not.toBeInTheDocument();
    });
  });
});
