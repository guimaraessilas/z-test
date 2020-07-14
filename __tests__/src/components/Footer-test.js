import React from "react";
import Footer from "../../../src/components/Footer";
import renderer from "react-test-renderer";
import { useSelector } from "react-redux";

jest.mock("react-redux");

describe("Should test Footer Component ", () => {
  beforeAll(() => {
    useSelector.mockImplementation(() => 0);
  });

  describe("snapshot", () => {
    it("render correctly", () => {
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
