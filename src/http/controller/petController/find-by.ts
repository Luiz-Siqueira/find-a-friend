import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { makeFindByPetUserCase } from "@/user-cases/factories/make-findby-pet";

export async function findBy(request: FastifyRequest, reply: FastifyReply) {
  const findByPetParamsSchema = z.object({
    city: z.string(),
  });

  const findByPetQuerySchema = z.object({
    isCompanionship: z.coerce.boolean(),
    isPlayful: z.coerce.boolean(),
  });

  const { city } = findByPetParamsSchema.parse(request.params);
  const { isCompanionship, isPlayful } = findByPetQuerySchema.parse(
    request.query
  );

  const petUserCase = makeFindByPetUserCase();

  const { pet } = await petUserCase.execute({
    city,
    isCompanionship,
    isPlayful,
  });

  return reply.status(200).send({ pet });
}
