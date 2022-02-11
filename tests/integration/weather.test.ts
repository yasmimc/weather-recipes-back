import supertest from "supertest";
import httpStatus from "http-status";

import app from "@/app";

import * as openWeatherService from "@/services/openWeatherAPI";
import randomCoord from "../factory/coord";
import ExternalApiError from "@/errors/ExternalApiError";

describe("tests for /weather route", () => {
  const weatherRoute = "/weather";
  const coord = randomCoord();

  it("tests the route independently of the external API", async() => {
    jest.spyOn(openWeatherService, "getWeatherByCoords").mockImplementationOnce(async() => {
      return {
        lat: null,
        lon: null,
        timezone: null,
        timezone_offset: null,
        daily: [],
        hourly: [],
        minutely: [],
        current: { weather: [] }      
      };
    });

    const response = await supertest(app).get(`${weatherRoute}?lat=${coord.lat}&lon=${coord.lon}`);

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toHaveProperty("lat");
    expect(response.body).toHaveProperty("lon");
    expect(response.body).toHaveProperty("timezone");
    expect(response.body).toHaveProperty("timezone_offset");
    expect(response.body).toHaveProperty("current");
    expect(response.body).not.toHaveProperty("daily");
    expect(response.body).not.toHaveProperty("hourly");
    expect(response.body).not.toHaveProperty("minutely");
  });

  it("test route using external API", async() => {
    const response = await supertest(app).get(`${weatherRoute}?lat=${coord.lat}&lon=${coord.lon}`);
    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toBeInstanceOf(Object);
  });

  it("test external API error", async() => {
    jest.spyOn(openWeatherService, "getWeatherByCoords").mockImplementation(async() => {
      throw new ExternalApiError("");
    });

    const response = await supertest(app).get(`${weatherRoute}?lat=${coord.lat}&lon=${coord.lon}`);
    expect(response.status).toEqual(httpStatus.SERVICE_UNAVAILABLE);
  });
});
