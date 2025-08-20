const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("debe responder con Hola Mundo DevOps 🚀", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola Mundo DevOps 🚀");
  });
});
