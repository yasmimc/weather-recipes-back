import supertest from "supertest";
import httpStatus from "http-status";

import app from "@/app";
import randomCity from "../factory/city";

import * as openWeatherService from "@/services/openWeatherAPI";

describe("tests for /city/find route", () => {
  const findCityRoute = "/city/find";

  it("tests the route independently of the external API", async() => {
    jest.spyOn(openWeatherService, "getCitiesByName").mockImplementationOnce(async() => {
      return [];
    });
    const response = await supertest(app).get(`${findCityRoute}?name=${randomCity()}`);
    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("test route using external API", async() => {
    const response = await supertest(app).get(`${findCityRoute}?name=${randomCity()}`);
    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toBeInstanceOf(Array);
  });
});
