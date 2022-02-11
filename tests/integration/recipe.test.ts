import supertest from "supertest";
import httpStatus from "http-status";

import app from "@/app";

const recipeRoute = "/recipe";

describe("tests for /recipe route", () => {
  it("should return status code 200", async() => {
    const response = await supertest(app).get(recipeRoute);
    expect(response.status).toEqual(httpStatus.OK);
  });
});

