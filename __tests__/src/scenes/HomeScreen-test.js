import React from "react";
import { act, create } from "react-test-renderer";
import { useDispatch } from "react-redux";
import HomeScreen from "../../../src/scenes/HomeScreen";

jest.mock("react-redux");

const setup = () => create(<HomeScreen />);

describe("Should test HomeScreen ", () => {
  beforeAll(() => {
    useDispatch.mockImplementation(() => jest.fn());
  });

  describe("snapshot", () => {
    it("render correctly", () => {
      expect(setup().toJSON()).toMatchSnapshot();
    });
  });
});
