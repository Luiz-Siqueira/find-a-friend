import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findOrgByPet } from "./findOrgByPet";

export async function orgRoutes(app: FastifyInstance) {
  app.post("/org", create);
  app.get("/org/pet/:petId", findOrgByPet);
}
