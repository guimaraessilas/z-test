import React from "react";
import Header from "../../../src/components/Header";
import renderer from "react-test-renderer";

describe("Should test Header Component ", () => {
  describe("snapshot", () => {
    it("render correctly", () => {
      const tree = renderer.create(<Header />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
