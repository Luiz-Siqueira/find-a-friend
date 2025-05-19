import { FastifyRequest, FastifyReply } from "fastify";
import { makeCreatePetUserCase } from "../../../user-cases/factories/make-create-pet";
import z from "zod";
import { makeCreateOrgUserCase } from "@/user-cases/factories/make-create-orgs";
import { hash } from "bcryptjs";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createOrgBodySchema = z.object({
    adress: z.string(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    WhatsApp: z.string(),
    role: z.enum(["ADMIN"]),
  });

  const { adress, email, name, password, WhatsApp, role } =
    createOrgBodySchema.parse(request.body);

  const petUserCase = makeCreateOrgUserCase();
  const password_hash = await hash(password, 6);

  const { org } = await petUserCase.execute({
    adress,
    email,
    name,
    password: password_hash,
    WhatsApp,
    role,
  });

  return reply.status(200).send({ org });
}
