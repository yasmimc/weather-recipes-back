import supertest from "supertest";
import httpStatus from "http-status";

import app from "@/app";
import randomCoord from "../factory/coord";

import * as edamamService from "@/services/edamamAPI";

const recipeRoute = "/recipe";

describe("tests for /recipe route", () => {
  const coord = randomCoord();

  it("test route with no lat and lon query params", async() => {
    const response = await supertest(app).get(recipeRoute);
    expect(response.status).toEqual(httpStatus.BAD_REQUEST);
  });

  it("test route with correct lat and lon query param using external APIs", async() => {
    const response = await supertest(app).get(`${recipeRoute}?lat=${coord.lat}&lon=${coord.lon}`);
    expect(response.status).toEqual(httpStatus.OK);
  });

  it("test route with correct lat and lon query params independently of the external API", async() => {
    jest.spyOn(edamamService, "getRecipesByDishType").mockImplementationOnce(async() => {
      return {};
    });
    const response = await supertest(app).get(`${recipeRoute}?lat=${coord.lat}&lon=${coord.lon}`);
    expect(response.status).toEqual(httpStatus.OK);
  });
});

