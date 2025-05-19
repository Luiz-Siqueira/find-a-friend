import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findById } from "./find-by-id";
import { findBy } from "./find-by";
import { verifyJWT } from "@/middlewares/verify-jwt";

export async function petRoutes(app: FastifyInstance) {
  app.post("/pet", { onRequest: [verifyJWT] }, create);
  app.get("/pet/:city", findBy);
  app.get("/pet/information/:petId", findById);
}
