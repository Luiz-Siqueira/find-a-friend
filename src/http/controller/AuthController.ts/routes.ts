import { FastifyInstance } from "fastify";
import { authenticate } from "./auth";

export async function authRoutes(app: FastifyInstance) {
  app.post("/auth", authenticate);
}
