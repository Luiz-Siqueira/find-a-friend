import { FastifyRequest, FastifyReply } from "fastify";
import { makeCreatePetUserCase } from "../../../user-cases/factories/make-create-pet";
import z from "zod";
import { makeCreateOrgUserCase } from "@/user-cases/factories/make-create-orgs";
import { makeFindOrgByPetUserCase } from "@/user-cases/factories/make-find-org-by-pet";

export async function findOrgByPet(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createOrgParamsSchema = z.object({
    petId: z.string(),
  });

  const { petId } = createOrgParamsSchema.parse(request.params);

  const orgUserCase = makeFindOrgByPetUserCase();

  const { org } = await orgUserCase.execute({
    petId,
  });

  return reply.status(200).send({ org });
}
