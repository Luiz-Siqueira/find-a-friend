import { FastifyRequest, FastifyReply } from "fastify";
import { makeCreatePetUserCase } from "../../../user-cases/factories/make-create-pet";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createPetBodySchema = z.object({
    name: z.string(),
    dta_nascimento: z.string(),
    isPossibleAdopt: z.boolean(),
    isCompanionship: z.boolean(),
    isPlayful: z.boolean(),
    city: z.string(),
  });

  const {
    name,
    dta_nascimento,
    isPossibleAdopt,
    isCompanionship,
    isPlayful,
    city,
  } = createPetBodySchema.parse(request.body);

  const petUserCase = makeCreatePetUserCase();

  const { pet } = await petUserCase.execute({
    name,
    dta_nascimento,
    isPossibleAdopt,
    isCompanionship,
    isPlayful,
    city,
    orgId: request.user.sub,
  });

  return reply.status(200).send({ pet });
}
