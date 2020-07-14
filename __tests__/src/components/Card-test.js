import "react-native";
import React from "react";
import { create, act } from "react-test-renderer";
import { useDispatch } from "react-redux";
import Card from "../../../src/components/Card";
import { TouchableOpacity } from "react-native";

jest.mock("react-redux");
const mockProps = {
  product: {
    images: [
      {
        url: "mock-image",
      },
    ],
    title: "Título",
    productVariants: [{ price: 10.5 }],
  },
};

const setup = () => create(<Card product={mockProps.product} />);

describe("Should test Card Component ", () => {
  beforeAll(() => {
    useDispatch.mockImplementation(() => jest.fn());
  });

  describe("snapshot", () => {
    it("render correctly", () => {
      const tree = setup().toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  it("Click", () => {
    const wrapper = setup();
    act(() => {
      let arr = wrapper.root.findAllByType(TouchableOpacity);
      arr.map((button) => button.props.onPress());
    });

    expect(useDispatch).toHaveBeenCalled();
  });
});
