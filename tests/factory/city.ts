import faker from "@faker-js/faker";

export default function randomCity() {
  return faker.address.cityName();
}
