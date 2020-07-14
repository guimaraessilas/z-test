import { getLocation } from "../../../src/utils/maps-service";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            geometry: {
              location: {
                lat: -23.6326915,
                lng: -46.6998379,
              },
            },
          },
        ],
      }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("Should test maps-service", () => {
  it("fetch have to be called", async () => {
    await getLocation("Rua Américo Brasiliense, São Paulo");
    expect(fetch).toHaveBeenCalled();
  });
  it("should run when address is null", async () => {
    const location = await getLocation(null);
    expect(location).toMatchObject({});
  });
});
