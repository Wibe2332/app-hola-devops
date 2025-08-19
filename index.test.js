const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hola Mundo desde DevOps 🚀"));

test("Debe responder con Hola Mundo", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hola Mundo desde DevOps 🚀");
});
