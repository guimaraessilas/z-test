import React from "react";
import renderer from "react-test-renderer";
import { useDispatch, useSelector } from "react-redux";
import ProductListScreen, {
  GET_PRODUCTS,
} from "../../../src/scenes/ProductsListScreen";
import { useQuery } from "react-apollo";

jest.mock("react-redux");
jest.mock("react-apollo");

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      storeData: [{ id: 0 }],
    },
  },
  ...props,
});

const mocks = {
  requests: {
    query: GET_PRODUCTS,
    variables: { id: 0, search: "", categoryId: null },
  },
  result: {
    data: {
      poc: {
        id: "532",
        products: [
          {
            id: "8868",
            title: "Skol 269ml - Unidade",
            images: [
              {
                url:
                  "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg",
              },
            ],
            productVariants: [
              {
                price: 2.09,
              },
            ],
          },
        ],
      },
    },
  },
};

describe("Should test ProductListScreen ", () => {
  beforeAll(() => {
    useDispatch.mockImplementation(() => jest.fn());
    useSelector.mockImplementation(() => jest.fn());
    useQuery.mockImplementation(() => mocks.result);
    useSelector.mockImplementation(() => 0);
  });

  describe("snapshot", () => {
    it("render correctly", () => {
      props = createTestProps({});
      const tree = renderer.create(<ProductListScreen {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
