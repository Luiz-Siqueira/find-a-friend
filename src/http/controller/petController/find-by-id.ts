import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { makeFindByIdPetUserCase } from "@/user-cases/factories/make-findby-id.pet";

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const findByCityPetParamsSchema = z.object({
    petId: z.string(),
  });

  const { petId } = findByCityPetParamsSchema.parse(request.params);

  const petUserCase = makeFindByIdPetUserCase();

  const { pet } = await petUserCase.execute({
    petId,
  });

  return reply.status(200).send({ pet });
}
