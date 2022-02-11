import faker from "@faker-js/faker";

export default function randomCoord() {
  return {
    lat: faker.address.latitude(),
    lon: faker.address.longitude()
  };
}
