import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { InvalidCredentialsErrors } from "@/user-cases/errors/invalid-credentials-errors";
import { makeCreateAuthUserCase } from "@/user-cases/factories/make-auth";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authenticatebodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticatebodySchema.parse(request.body);

  try {
    const authenticateUserCase = makeCreateAuthUserCase();
    const { org } = await authenticateUserCase.execute({ email, password });

    const token = await reply.jwtSign({}, { sign: { sub: org.id } });

    return reply.status(200).send({ token });
  } catch (error) {
    if (error instanceof InvalidCredentialsErrors)
      return reply.status(400).send({ message: error.message });
  }

  return reply.status(200).send();
}
