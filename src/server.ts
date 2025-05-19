import fastify from "fastify";
import { petRoutes } from "./http/controller/petController/routes";
import { orgRoutes } from "./http/controller/orgController/routes";
import fastifyJwt from "@fastify/jwt";
import { authRoutes } from "./http/controller/AuthController.ts/routes";

const app = fastify();

app.register(fastifyJwt, {
  secret: "ignitenode03",
  sign: {
    expiresIn: "10m",
  },
});

app.register(petRoutes);
app.register(orgRoutes);
app.register(authRoutes);

app.listen({ host: "0.0.0.0", port: 3000 }).then(() => {
  console.log("Server running");
});
